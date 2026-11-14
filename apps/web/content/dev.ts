// Dev setup data, ported from the canvas board's dev_logic.js.
// shortcut: zips built by hand; rebuild when a dotfile changes
// (from apps/web/public/dev/<dir>: tar.exe -a -cf ../<dir>.zip <files>)

export type OsId = "mac" | "win" | "linux"

export type DevFile = {
  name: string
  desc: string
  /** Path under /dev/<dir>/ when it differs from `name`. */
  path?: string
  preview: string
}

export type DevOs = {
  label: string
  tag: string
  term: string
  host: string
  demo: string
  demoOut: string
  facts: { k: string; v: string }[]
  steps: { n: string; what: string; cmd: string }[]
  files: DevFile[]
  /** Folder under public/dev/ holding the files. */
  dir: string
  zip: string
  /** Label shown for files[0] in the preview pane. */
  previewName: string
  only: string
  extras: string[]
}

export const OS_IDS: OsId[] = ["mac", "win", "linux"]

export const tools = [
  { label: "Editor", tags: ["VS Code"] },
  { label: "Languages", tags: ["TypeScript", "C#", ".NET"] },
  { label: "Infra", tags: ["Docker", "kubectl", "Terraform"] },
  { label: "CLI", tags: ["git", "gh", "ripgrep", "fzf"] },
]

export const dev: Record<OsId, DevOs> = {
  mac: {
    label: "macOS",
    tag: "work",
    term: "Ghostty — zsh",
    host: "jake@mac",
    demo: "brew bundle check",
    demoOut: "The Brewfile’s dependencies are satisfied.",
    facts: [
      { k: "Terminal", v: "Ghostty" },
      { k: "Shell", v: "zsh" },
      { k: "Prompt", v: "Starship" },
      { k: "Font", v: "JetBrains Mono Nerd Font" },
      { k: "Packages", v: "Homebrew" },
    ],
    steps: [
      { n: "1", what: "Install Homebrew", cmd: '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"' },
      { n: "2", what: "Clone the dotfiles", cmd: "git clone [dotfiles repo] ~/dotfiles" },
      { n: "3", what: "Install every app and tool", cmd: "brew bundle --file ~/dotfiles/macos/Brewfile" },
      { n: "4", what: "Link the config files", cmd: "~/dotfiles/macos/install.sh" },
    ],
    files: [
      {
        name: ".zshrc",
        desc: "Aliases, path, prompt",
        preview: 'export EDITOR="code --wait"\n\nalias g="git"\nalias ll="ls -lah"\nalias k="kubectl"\n\neval "$(starship init zsh)"\nsource <(fzf --zsh)',
      },
      { name: "Brewfile", desc: "Every app and CLI tool", preview: "[Brewfile contents]" },
      { name: "ghostty/config", desc: "Theme, font, keybinds", preview: "[ghostty/config contents]" },
      { name: "starship.toml", desc: "Prompt (shared)", preview: "[starship.toml contents]" },
    ],
    dir: "macos",
    zip: "macos.zip",
    previewName: ".zshrc",
    only: "mac only",
    extras: ["Raycast", "Rectangle", "OrbStack"],
  },
  win: {
    label: "Windows",
    tag: "home",
    term: "Windows Terminal — pwsh",
    host: "jake@win",
    demo: "winget upgrade --all",
    demoOut: "No installed package found matching input criteria.",
    facts: [
      { k: "Terminal", v: "Windows Terminal" },
      { k: "Shell", v: "PowerShell 7" },
      { k: "Prompt", v: "Starship" },
      { k: "Font", v: "JetBrains Mono Nerd Font" },
      { k: "Packages", v: "winget" },
    ],
    steps: [
      { n: "1", what: "Install PowerShell 7 and git", cmd: "winget install Microsoft.PowerShell Git.Git" },
      { n: "2", what: "Clone the dotfiles", cmd: "git clone [dotfiles repo] $HOME\\dotfiles" },
      { n: "3", what: "Install every app and tool", cmd: "winget import -i $HOME\\dotfiles\\windows\\packages.json" },
      { n: "4", what: "Link the config files", cmd: "& $HOME\\dotfiles\\windows\\install.ps1" },
    ],
    files: [
      {
        name: "Microsoft.PowerShell_profile.ps1",
        desc: "Aliases, modules, prompt",
        preview: "Set-Alias g git\nSet-Alias k kubectl\n\nSet-PSReadLineOption -PredictionSource History\nSet-PSReadLineOption -EditMode Windows\n\nInvoke-Expression (&starship init powershell)",
      },
      { name: "packages.json", desc: "winget export of every app", preview: "[packages.json contents]" },
      { name: "terminal/settings.json", desc: "Theme, font, profiles", preview: "[terminal/settings.json contents]" },
      { name: "starship.toml", desc: "Prompt (shared)", preview: "[starship.toml contents]" },
    ],
    dir: "windows",
    zip: "windows.zip",
    previewName: "profile.ps1",
    only: "windows only",
    extras: ["PowerToys", "WSL", "Steam"],
  },
  linux: {
    label: "Linux",
    tag: "home",
    term: "[terminal] — zsh",
    host: "jake@linux",
    demo: "./install.sh --dry-run",
    demoOut: "would link 4 files into ~",
    facts: [
      { k: "Distro", v: "[distro]" },
      { k: "Terminal", v: "[terminal]" },
      { k: "Shell", v: "zsh" },
      { k: "Prompt", v: "Starship" },
      { k: "Packages", v: "[apt / pacman]" },
    ],
    steps: [
      { n: "1", what: "Install git and zsh", cmd: "sudo apt install -y git zsh" },
      { n: "2", what: "Clone the dotfiles", cmd: "git clone [dotfiles repo] ~/dotfiles" },
      { n: "3", what: "Install every package", cmd: "xargs -a ~/dotfiles/linux/packages.txt sudo apt install -y" },
      { n: "4", what: "Link the config files", cmd: "~/dotfiles/linux/install.sh" },
    ],
    files: [
      {
        name: ".zshrc",
        desc: "Aliases, path, prompt",
        preview: 'export EDITOR="code --wait"\n\nalias g="git"\nalias ll="ls -lah"\nalias update="sudo apt update && sudo apt upgrade"\n\neval "$(starship init zsh)"',
      },
      { name: "packages.txt", desc: "Package list", preview: "[packages.txt contents]" },
      { name: "[terminal config]", desc: "Theme, font, keybinds", path: "terminal-config", preview: "[terminal config contents]" },
      { name: "starship.toml", desc: "Prompt (shared)", preview: "[starship.toml contents]" },
    ],
    dir: "linux",
    zip: "linux.zip",
    previewName: ".zshrc",
    only: "linux only",
    extras: ["[tool]", "[tool]"],
  },
}
