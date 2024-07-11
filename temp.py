import requests
import json

def download_file_from_github(repo_owner, repo_name, file_path, output_path, token=None):
    url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/contents/{file_path}"
    headers = {}
    if token:
        headers["Authorization"] = f"token {token}"

    response = requests.get(url, headers=headers)
    response.raise_for_status()

    content = json.loads(response.content)
    download_url = content["download_url"]

    download_response = requests.get(download_url, stream=True)
    with open(output_path, "wb") as file:
        for chunk in download_response.iter_content(chunk_size=8192):
            file.write(chunk)

# Replace these variables with your repository details and file path
repo_owner = "icode100"
repo_name = "Image_Captioning_ViT_Roberta"
file_path = "ViT_Roberta_Image_Captioning/model.safetensors"
output_path = "model.safetensors"
token = "YOUR_GITHUB_TOKEN"  # Optional: Your GitHub token if the repository is private

download_file_from_github(repo_owner, repo_name, file_path, output_path)
