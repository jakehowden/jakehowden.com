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
      { k: "Shell", v: "Windows PowerShell" },
      { k: "Prompt", v: "Starship" },
      { k: "Font", v: "CaskaydiaCove Nerd Font" },
      { k: "Packages", v: "winget" },
    ],
    steps: [
      { n: "1", what: "Install PowerShell 7 and git", cmd: "winget install Microsoft.PowerShell Git.Git" },
      { n: "2", what: "Clone the dotfiles", cmd: "git clone https://github.com/jakehowden/dotfiles $HOME\\dotfiles" },
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
      { name: "terminal/settings.json", desc: "Theme, font, profiles", preview: "{\n    \"$help\": \"https://aka.ms/terminal-documentation\",\n    \"$schema\": \"https://aka.ms/terminal-profiles-schema\",\n    \"actions\": \n    [\n        {\n            \"command\": \"paste\",\n            \"id\": \"User.paste\"\n        },\n        {\n            \"command\": \n            {\n                \"action\": \"copy\",\n                \"singleLine\": false\n            },\n            \"id\": \"User.copy.644BA8F2\"\n        },\n        {\n            \"command\": \"find\",\n            \"id\": \"User.find\"\n        },\n        {\n            \"command\": \n            {\n                \"action\": \"splitPane\",\n                \"split\": \"auto\",\n                \"splitMode\": \"duplicate\"\n            },\n            \"id\": \"User.splitPane.A6751878\"\n        }\n    ],\n    \"copyFormatting\": \"none\",\n    \"copyOnSelect\": false,\n    \"defaultProfile\": \"{61c54bbd-c2c6-5271-96e7-009a87ff44bf}\",\n    \"keybindings\": \n    [\n        {\n            \"id\": \"User.find\",\n            \"keys\": \"ctrl+shift+f\"\n        },\n        {\n            \"id\": \"User.paste\",\n            \"keys\": \"ctrl+v\"\n        },\n        {\n            \"id\": \"User.copy.644BA8F2\",\n            \"keys\": \"ctrl+c\"\n        },\n        {\n            \"id\": \"User.splitPane.A6751878\",\n            \"keys\": \"alt+shift+d\"\n        }\n    ],\n    \"newTabMenu\": \n    [\n        {\n            \"type\": \"remainingProfiles\"\n        }\n    ],\n    \"profiles\": \n    {\n        \"defaults\": {},\n        \"list\": \n        [\n            {\n                \"commandline\": \"%SystemRoot%\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe\",\n                \"font\": \n                {\n                    \"face\": \"CaskaydiaCove Nerd Font\"\n                },\n                \"guid\": \"{61c54bbd-c2c6-5271-96e7-009a87ff44bf}\",\n                \"hidden\": false,\n                \"name\": \"Windows PowerShell\"\n            },\n            {\n                \"commandline\": \"%SystemRoot%\\\\System32\\\\cmd.exe\",\n                \"guid\": \"{0caa0dad-35be-5f56-a8ff-afceeeaa6101}\",\n                \"hidden\": false,\n                \"name\": \"Command Prompt\"\n            },\n            {\n                \"guid\": \"{b453ae62-4e3d-5e58-b989-0a998ec441b8}\",\n                \"hidden\": false,\n                \"name\": \"Azure Cloud Shell\",\n                \"source\": \"Windows.Terminal.Azure\"\n            },\n            {\n                \"guid\": \"{9b9b28c9-e691-52db-a9cf-7f2f85fcf56f}\",\n                \"hidden\": false,\n                \"name\": \"Developer Command Prompt for VS 2022\",\n                \"source\": \"Windows.Terminal.VisualStudio\"\n            },\n            {\n                \"guid\": \"{f7761177-5d76-58f4-8ac6-a59d74e5a9ea}\",\n                \"hidden\": false,\n                \"name\": \"Developer PowerShell for VS 2022\",\n                \"source\": \"Windows.Terminal.VisualStudio\"\n            },\n            {\n                \"guid\": \"{16208362-94fc-5b1f-a491-5b2624d5ab56}\",\n                \"hidden\": true,\n                \"name\": \"Visual Studio Debug Console\",\n                \"source\": \"VSDebugConsole\"\n            },\n            {\n                \"guid\": \"{72f2a31d-0638-59d7-8f3e-54902ee9b1a3}\",\n                \"hidden\": false,\n                \"name\": \"archlinux\",\n                \"source\": \"Microsoft.WSL\"\n            },\n            {\n                \"guid\": \"{7b9eff4a-fc2c-53e8-aaea-5d3d7d8e8524}\",\n                \"hidden\": false,\n                \"name\": \"Developer Command Prompt for VS 2022\",\n                \"source\": \"Windows.Terminal.VisualStudio\"\n            },\n            {\n                \"guid\": \"{f88d9a0a-63f0-533e-86da-7b288d8eddf9}\",\n                \"hidden\": false,\n                \"name\": \"Developer PowerShell for VS 2022\",\n                \"source\": \"Windows.Terminal.VisualStudio\"\n            },\n            {\n                \"guid\": \"{e1d29410-f955-58bb-ac33-cd24d015501d}\",\n                \"hidden\": false,\n                \"name\": \"Developer Command Prompt for VS 2022 (2)\",\n                \"source\": \"Windows.Terminal.VisualStudio\"\n            },\n            {\n                \"guid\": \"{66d7ad3d-d490-5edd-ae68-a04fca6609b7}\",\n                \"hidden\": false,\n                \"name\": \"Developer PowerShell for VS 2022 (2)\",\n                \"source\": \"Windows.Terminal.VisualStudio\"\n            },\n            {\n                \"guid\": \"{31003bf9-4435-5e43-bf4e-bddf10114763}\",\n                \"hidden\": false,\n                \"name\": \"Debian\",\n                \"source\": \"Microsoft.WSL\"\n            }\n        ]\n    },\n    \"schemes\": [],\n    \"themes\": []\n}" },
      { name: "starship.toml", desc: "Prompt (shared)", preview: "[starship.toml contents]" },
    ],
    dir: "windows",
    zip: "windows.zip",
    previewName: "profile.ps1",
    only: "windows only",
    extras: ["komorebi", "whkd", "PowerToys", "WSL", "Steam"],
  },
  linux: {
    label: "Linux",
    tag: "home",
    term: "kitty — zsh",
    host: "jake@linux",
    demo: "./install.sh --dry-run",
    demoOut: "would link 4 files into ~",
    facts: [
      { k: "Distro", v: "[distro]" },
      { k: "Terminal", v: "kitty" },
      { k: "Shell", v: "zsh" },
      { k: "Prompt", v: "Starship" },
      { k: "Packages", v: "[apt / pacman]" },
    ],
    steps: [
      { n: "1", what: "Install git and zsh", cmd: "sudo apt install -y git zsh" },
      { n: "2", what: "Clone the dotfiles", cmd: "git clone https://github.com/jakehowden/dotfiles ~/dotfiles" },
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
      { name: "kitty.conf", desc: "Font; theme lives in kitty/current-theme.conf", path: "kitty/kitty.conf", preview: "# BEGIN_KITTY_THEME\ninclude current-theme.conf\n# END_KITTY_THEME\n#\n\nfont_family CaskaydiaCove Nerd Font Mono\nbold_font        auto\nitalic_font      auto\nbold_italic_font auto\n\nfont_size 14" },
      { name: "starship.toml", desc: "Prompt, everforest palette", preview: "format = \"\"\"\n$os\\\n$username\\\n$hostname\\\n$directory\\\n$git_branch\\\n$git_state\\\n$git_status\\\n$character\"\"\"\n\nright_format = \"\"\"\n$git_branch\\\n\"\"\"\n\nadd_newline = false\npalette = \"everforest\"\n\n[os]\ndisabled = false\nformat = '[$symbol ]($style)'\nstyle = 'fg:grey2'\n\n[os.symbols]\nWindows = \"󰍲\"\nUbuntu = \"󰕈\"\nSUSE = \"\"\nRaspbian = \"󰐿\"\nMint = \"󰣭\"\nMacos = \"󰀵\"\nManjaro = \"\"\nLinux = \"󰌽\"\nGentoo = \"󰣨\"\nFedora = \"󰣛\"\nAlpine = \"\"\nAmazon = \"\"\nAndroid = \"\"\nArch = \"󰣇\"\nArtix = \"󰣇\"\nCentOS = \"\"\nDebian = \"󰣚\"\nRedhat = \"󱄛\"\nRedHatEnterprise = \"󱄛\"\n\n[username]\nshow_always = true\nstyle_root = 'fg:red'\nstyle_user = 'fg:blue'\nformat = '[$user]($style) '\n\n[directory]\nstyle = \"fg:orange\"\nread_only_style = \"fg:orange\"\ntruncation_length = 3\ntruncation_symbol = \"…/\"\nformat = \"[ $path]($style)[$read_only]($read_only_style) \"\n\n[git_branch]\nstyle = \"fg:green\"\nsymbol = \" \"\nformat = \"[$symbol$branch(:$remote_branch)]($style) \"\n\n[character]\nsuccess_symbol = '[](bold green)'\nerror_symbol = '[](bold red)'\n\n[palettes.everforest]\nbg_dim = \"#232a2e\"\nbg0 = \"#2d353b\"\nbg1 = \"#343f44\"\nbg2 = \"#3d484d\"\nbg3 = \"#475258\"\nbg4 = \"#4f585e\"\nbg5 = \"#56635f\"\nbg_visual = \"#543a48\"\nbg_red = \"#514045\"\nbg_green = \"#425047\"\nbg_blue = \"#3a515d\"\nbg_yellow = \"#4d4c43\"\n\nfg = \"#d3c6aa\"\nred = \"#e67e80\"\n\norange = \"#e69875\"\nyellow = \"#dbbc7f\"\ngreen = \"#a7c080\"\naqua = \"#83c092\"\nblue = \"#7fbbb3\"\npurple = \"#d699b6\"\ngrey0 = \"#7a8478\"\ngrey1 = \"#859289\"\ngrey2 = \"#9da9a0\"\nstatusline1 = \"#a7c080\"\nstatusline2 = \"#d3c6aa\"\nstatusline3 = \"#e67e80\"" },
    ],
    dir: "linux",
    zip: "linux.zip",
    previewName: ".zshrc",
    only: "linux only",
    extras: ["Hyprland", "waybar", "wofi", "Neovim"],
  },
}
