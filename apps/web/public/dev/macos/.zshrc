export EDITOR="code --wait"

alias g="git"
alias ll="ls -lah"
alias k="kubectl"

eval "$(starship init zsh)"
source <(fzf --zsh)
