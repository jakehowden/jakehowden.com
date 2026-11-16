// Dev setup data, ported from the canvas board's dev_logic.js.
// File previews are read from public/dev/<dir>/ at build time (app/dev/page.tsx).
// shortcut: zips built by hand; rebuild when a dotfile changes
// (from apps/web/public/dev/<dir>: tar.exe -a -cf ../<dir>.zip <files>)

export type OsId = "mac" | "win" | "linux"

export type DevFile = {
  name: string
  desc: string
  /** Path under /dev/<dir>/ when it differs from `name`. */
  path?: string
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
  { label: "Editor", tags: ["Neovim", "Cursor", "VS Code"] },
  { label: "Languages", tags: ["TypeScript", "C#", ".NET", "Go", "Rust"] },
  { label: "Infra", tags: ["Docker", "kubectl"] },
  { label: "CLI", tags: ["git", "gh", "ripgrep"] },
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
      { n: "2", what: "Clone the dotfiles", cmd: "git clone https://github.com/jakehowden/dotfiles ~/dotfiles" },
      { n: "3", what: "Install every app and tool", cmd: "brew bundle --file ~/dotfiles/macos/Brewfile" },
      { n: "4", what: "Link the config files", cmd: "~/dotfiles/macos/install.sh" },
    ],
    files: [
      { name: ".zshrc", desc: "Aliases, path, prompt" },
      { name: "Brewfile", desc: "Every app and CLI tool" },
      { name: "ghostty/config", desc: "Theme, font, keybinds" },
      { name: "starship.toml", desc: "Prompt (shared)" },
      { name: "yabairc", desc: "yabai tiling window manager" },
    ],
    dir: "macos",
    zip: "macos.zip",
    previewName: ".zshrc",
    only: "mac only",
    extras: ["yabai", "Raycast", "Rectangle", "OrbStack"],
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
      { k: "Font", v: "CaskaydiaCove Nerd Font" },
      { k: "Packages", v: "winget" },
    ],
    steps: [
      { n: "1", what: "Install PowerShell 7, git and Starship", cmd: "winget install Microsoft.PowerShell Git.Git Starship.Starship" },
      { n: "2", what: "Clone the dotfiles", cmd: "git clone https://github.com/jakehowden/dotfiles $HOME\\dotfiles" },
      { n: "3", what: "Install every app and tool", cmd: "winget import -i $HOME\\dotfiles\\windows\\packages.json" },
      { n: "4", what: "Copy the config files into place", cmd: "& $HOME\\dotfiles\\windows\\install.ps1" },
    ],
    files: [
      { name: "starship.toml", desc: "Prompt, everforest palette" },
      { name: "terminal/settings.json", desc: "PowerShell 7 default, font, keybinds" },
      { name: "komorebi.json", desc: "Tiling window manager: workspaces, layouts, borders" },
      { name: "komorebi.bar.json", desc: "komorebi status bar widgets" },
      { name: "whkdrc", desc: "Hotkeys that drive komorebi" },
      { name: "packages.json", desc: "winget export of every app" },
    ],
    dir: "windows",
    zip: "windows.zip",
    previewName: "starship.toml",
    only: "windows only",
    extras: ["komorebi", "whkd", "PowerToys", "WSL", "Steam"],
  },
  linux: {
    label: "Linux",
    tag: "home",
    term: "kitty — zsh",
    host: "jake@arch",
    demo: "./linux/install.sh",
    demoOut: "linked 9 configs into ~/.config",
    facts: [
      { k: "Distro", v: "Arch" },
      { k: "Terminal", v: "kitty" },
      { k: "Shell", v: "zsh" },
      { k: "Prompt", v: "Starship" },
      { k: "Packages", v: "pacman + yay" },
    ],
    steps: [
      {
        n: "1",
        what: "Install git and yay",
        cmd: "sudo pacman -S --needed git base-devel && git clone https://aur.archlinux.org/yay.git /tmp/yay && cd /tmp/yay && makepkg -si",
      },
      { n: "2", what: "Clone the dotfiles", cmd: "git clone https://github.com/jakehowden/dotfiles ~/dotfiles" },
      { n: "3", what: "Install every package", cmd: "yay -S --needed - < ~/dotfiles/linux/packages.txt" },
      { n: "4", what: "Link the configs into ~/.config", cmd: "~/dotfiles/linux/install.sh" },
    ],
    files: [
      { name: "hyprland.conf", desc: "Hyprland: monitors, binds, autostart", path: "hypr/hyprland.conf" },
      { name: "waybar/config.jsonc", desc: "Bar modules" },
      { name: "waybar/style.css", desc: "Bar styling" },
      { name: "wofi/style.css", desc: "App launcher styling" },
      { name: "nwg-bar/bar.json", desc: "Power menu" },
      { name: "nvim/lua/config/lazy.lua", desc: "LazyVim setup (whole nvim/ in the zip)" },
      { name: "kitty.conf", desc: "Font; theme lives in kitty/current-theme.conf", path: "kitty/kitty.conf" },
      { name: "starship.toml", desc: "Prompt, everforest palette" },
      { name: ".zshrc", desc: "Aliases, path, prompt" },
      { name: "packages.txt", desc: "Package list (yay -Qqe)" },
    ],
    dir: "linux",
    zip: "linux.zip",
    previewName: "hyprland.conf",
    only: "linux only",
    extras: ["Hyprland", "waybar", "wofi", "nwg-bar", "Neovim"],
  },
}
