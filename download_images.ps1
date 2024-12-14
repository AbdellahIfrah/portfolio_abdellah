$images = @{
    "thousand-sunny" = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1c7a5c9-a0a3-4c1d-a003-9a8e33347b8d/defx2oy-4c2b8b9a-a8b1-4c3b-9b1c-9b1c9b1c9b1c.png"
    "Chopper" = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1c7a5c9-a0a3-4c1d-a003-9a8e33347b8d/defx2oy-4c2b8b9a-a8b1-4c3b-9b1c-9b1c9b1c9b1c.png"
    "Shanks" = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1c7a5c9-a0a3-4c1d-a003-9a8e33347b8d/defx2oy-4c2b8b9a-a8b1-4c3b-9b1c-9b1c9b1c9b1c.png"
    "Usopp" = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1c7a5c9-a0a3-4c1d-a003-9a8e33347b8d/defx2oy-4c2b8b9a-a8b1-4c3b-9b1c-9b1c9b1c9b1c.png"
    "brook" = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1c7a5c9-a0a3-4c1d-a003-9a8e33347b8d/defx2oy-4c2b8b9a-a8b1-4c3b-9b1c-9b1c9b1c9b1c.png"
    "sanje" = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1c7a5c9-a0a3-4c1d-a003-9a8e33347b8d/defx2oy-4c2b8b9a-a8b1-4c3b-9b1c-9b1c9b1c9b1c.png"
}

$outputDir = "c:/Projects/portfolio Abdellah Ifrah/portfolio_abdellah/public/images/one-piece"

foreach ($imageName in $images.Keys) {
    $url = $images[$imageName]
    $outputPath = Join-Path $outputDir "$imageName.png"
    
    try {
        Invoke-WebRequest -Uri $url -OutFile $outputPath
        Write-Host "Downloaded $imageName successfully"
    }
    catch {
        Write-Host "Failed to download $imageName"
    }
}
