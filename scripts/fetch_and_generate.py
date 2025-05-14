import requests
import json
import matplotlib.pyplot as plt
import numpy as np
import os 
from bs4 import BeautifulSoup  # ensure you have installed beautifulsoup4


def fetch_and_save_github_profile_picture(username, save_path):
    url = f'https://api.github.com/users/{username}'
    response = requests.get(url)
    data = response.json()

    if response.status_code == 200:
        profile_picture_url = data['avatar_url']
        img_data = requests.get(profile_picture_url).content
        with open(save_path, 'wb') as handler:
            handler.write(img_data)
        print(f"Profile picture saved to {save_path}.")
    else:
        print(f"Failed to fetch profile picture. Status code: {response.status_code}")

def get_leetcode_stats(username):
    url = 'https://leetcode.com/graphql'
    query = """
    query getUserProfile($username: String!) {
        allQuestionsCount {
            difficulty
            count
        }
        userContestRanking(username: $username) {
            attendedContestsCount
            rating
            globalRanking
            totalParticipants
            topPercentage
            badge {
                name
            }
        }
        matchedUser(username: $username) {
            username
            submitStats {
                acSubmissionNum {
                    difficulty
                    count
                    submissions
                }
            }
        }
    }
    """
    variables = {
        "username": username
    }
    payload = {
        "query": query,
        "variables": variables
    }
    headers = {
        "Content-Type": "application/json"
    }

    response = requests.post(url, json=payload, headers=headers)
    # print(response.json())
    return response.json()

def save_json_to_file(data, filename):
    with open(filename, 'w') as json_file:
        json.dump(data, json_file, indent=4)

def get_codechef_stats(username):
    url = f"https://www.codechef.com/users/{username}"
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to fetch CodeChef data. Status code: {response.status_code}")
        return {}
    
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Extract the rating
    rating_elem = soup.find("div", class_="rating-number")
    rating = rating_elem.text.strip() if rating_elem else "N/A"
    rating = int(rating) if rating != "N/A" else 0
    # Extract the stars (if available)
    star_elem = soup.find("span", class_="rating-star")
    stars = star_elem.text.strip() if star_elem else "N/A"
    
    # Extract global rank and country rank (if available)
    global_rank = "N/A"
    country_rank = "N/A"
    ranks_div = soup.find("div", class_="rating-ranks")
    if ranks_div:
        rank_links = ranks_div.find_all("a")
        if rank_links:
            # Assuming the first link represents the global rank
            global_rank = rank_links[0].text.strip()
            # And the second link (if exists) represents the country rank
            if len(rank_links) > 1:
                country_rank = rank_links[1].text.strip()
    global_rank = int(global_rank.replace(',', '')) if global_rank != "N/A" else 0
    country_rank = int(country_rank.replace(',', '')) if country_rank != "N/A" else 0
    if rating<1400: stars = 1
    elif rating<1600: stars = 2
    elif rating<1800: stars = 3
    elif rating<2000: stars = 4
    elif rating<2200: stars = 5
    elif rating<2500: stars = 6
    else: stars = 7
    
    codechef_stats = {
        "username": username,
        "rating": rating,
        "stars": stars,
        "global_rank": global_rank,
        "country_rank": country_rank
    }
    
    return codechef_stats

def save_codechef_stats(username):
    stats = get_codechef_stats(username)
    with open('data/codechef_stats.json', 'w') as json_file:
        json.dump(stats, json_file, indent=4)
    print(f"CodeChef stats saved to docs/codechef_stats.json")

# Call the function with your CodeChef id:
save_codechef_stats('icode100')

username = 'icode100'
stats = get_leetcode_stats(username)
save_json_to_file(stats, 'data/leetcode_stats.json')
save_path = 'media/profile_picture.png'
os.makedirs(os.path.dirname(save_path), exist_ok=True)
fetch_and_save_github_profile_picture(username, save_path)


