Set-Alias g git
Set-Alias k kubectl

Set-PSReadLineOption -PredictionSource History
Set-PSReadLineOption -EditMode Windows

Invoke-Expression (&starship init powershell)
