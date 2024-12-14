# Disable progress bar to speed up download
$ProgressPreference = 'SilentlyContinue'

$flags = @{
    "morocco_tamazight" = "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Amazigh.svg"
    "arabic" = "https://flagcdn.com/w320/ma.png"
    "english" = "https://flagcdn.com/w320/gb.png"
    "french" = "https://flagcdn.com/w320/fr.png"
    "spanish" = "https://flagcdn.com/w320/es.png"
}

$outputDir = "c:/Projects/portfolio Abdellah Ifrah/portfolio_abdellah/public/images/flags"

# Ensure output directory exists
if (!(Test-Path -Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir
}

foreach ($flagName in $flags.Keys) {
    $url = $flags[$flagName]
    $outputPath = Join-Path $outputDir "$flagName.png"
    
    try {
        # Use System.Net.WebClient for more reliable downloads
        $webClient = New-Object System.Net.WebClient
        $webClient.DownloadFile($url, $outputPath)
        Write-Host "Downloaded $flagName successfully"
    }
    catch {
        Write-Host "Failed to download $flagName"
        Write-Host $_.Exception.Message
    }
}
