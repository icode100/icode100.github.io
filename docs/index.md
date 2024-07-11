<!-- <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding-left: 200px; /* Space for the sidebar */
        }
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 200px;
            background-color: #333;
            overflow-x: hidden;
            padding-top: 20px;
            z-index: 1000;
        }
        .contents a {
            padding: 10px 15px;
            text-decoration: none;
            font-size: 18px;
            color: #f2f2f2;
            display: block;
        }
        .contents a:hover {
            background-color: #ddd;
            color: black;
        }
        .markdown-content {
            padding: 20px;
            padding-top: 60px; /* Adjusted for the fixed navbar height */
        }
        .links{
            position:relative;
            display:flex;
            align-items:center;
            justify-content:center;
        }
        .links a{
            padding:10px;
        }
    </style>
</head>
<body>
    <div class="navbar">
        <p align='center'>
            <img src='profile_picture.png' style="border-radius:10000px; border:4px solid white; width:150px">
            <div class='links'>
                <a href="https://github.com/icode100"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABy0lEQVR4nN1VO0sDQRAedzyITWInlnY+QET8CUIQEUULsdLSX+EroGhpaeOzCoK52TNBUsQfoCAERcXCRhHR2GmlI3vR5O52c3fa6cESuP3me0x25wD+9cNZQHZwmCVuMokzJnxmwgpLPK++wwmF+R25xDQTXrFEDl2EN8pEfGKGJpa4yIQfkeR1EYVdU7VxnGdiE0ttZcLJq/32OLP6mXCESZQNrq/d/4CgM/B+yExegma3n17wCVjuXhZa2LH63F+1bKuXi5D62sOA+OV3nV+AcExzaUNHZEttaDOkGzEJ7GotKEEiUqAECe20EW7pwOrZroMcHI8ir6fAUb+AKJsSPPpAeUjGFshDMpCgYkrw9GuBIqQCAm8GAXEaiDkZW8AWUwGBWx1EuBE4DXfsQFckeQ66mfDeXyv2TQJDhuP2xoTLikR3bfWwxBUXo91oMa0LzIOo3VgSc0zi0CO0ruEl7jQYFw/qMprjOjjIEt9Z4isXoJ2lOHILCtDeIIEuYIuZ8J5KXPhyvRqKU4n1lm6HkteKCZfcEUx4wVIch5jxku8ZZ1BIcdodXBLfQ4yo78ALk5iN9S3QCLKAnGseaLivxvsBtP6Y+E89nwKuTGc90+tAAAAAAElFTkSuQmCC"></a>
                <a href="https://www.linkedin.com/in/ipsit-das/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABIklEQVR4nO2Wu0rEQBiF/50z6bwUNna+gI2VVloJLupb2PsItlY+h2whu/8MNlsIitjoG1hFEUuxEBH1iEMczTZBmGS95MApcuaEb26BiLT6d6LHOhXXdGASK66o6FaD34upoJ/Oq8HpocHybbDijs6c0OGhSfA9vcyFvJ8t0OG5IbA5GxnLmwErHuntYsgVm1S8NnfGDi9U3Izjcu0GO+wV2W3M1HgqLunMNgfYoJotqjlNA6Z0Qt6TieLcL2J3YJc4lOnS+ztiqGZYK/hDPJCZ+BAmhNV6V0zpUM1x0d2PuZfZesEum/9yF554JDbk55LVC/Z2udTty2QcG/n0JClY7UqpeyhTLZi/b6tdGsvPBeu4fn0U3cTwnB5rleBWf05vQzRdJYmLQq0AAAAASUVORK5CYII="style="height:24px"></a>
                <a href="https://x.com/icode100"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADpElEQVR4nO2ZSWgUQRRAv/VnMMYFNUZxiUgEd1Q8CAoqeBAEEQlxuZiDHiJCIOJJLzHGmwY9edOAHsRBM5lf7bhCQJCoxLggBBQ3NBdxyeKeZL5UdTnpDEm6J2amOzoF/1LT9fu//kv9mgLIjdzIjWEPvgzTWeIxJvGQCb+wRM6qkHqnaGGJNcqW4UFYuJ0ldmbdeDmoKFtK04cgTATAeE7xUMIzjAmnIHmCU2A6OA6F7iAqJ/w2VrrCHHUHIfHId0Olm4gWLx7p8t9QdJNOLyA8GgRyILJfjFa6eLXO89cl/MhXYIFeZ4mK7HqE8AfHwssH1RGBCUz4zIOeXxzDjXoN4WYm7PYhtMRTboQ8ZhjDUsT7jBM77a8bWssSe4aASLAUZfrZWHgpE7b7mSPH9ZoGmMUSP5i5z0ww1+iqcdsL+CrMZIlv/E72XkdobHN45SZXgeBGCDGJuwNARLQnIzCOSdxLF4IzUrUI3/E1mGrWnnXAHNBzcZjff28S95kgX4NKER0OBGeu/IpLeu11GJ9MclUQZHiF7S2xzzz76k87zhJrhwvBGd1HSOy2jQ6tSVYfEk9UQTB6z7EFiw1Y+d9AcGZBsJ2jMM/oOOKYP9lPP+GmdMosZx3E9sBtjgDqJJeiyYAklPFadxwmpVtm2RcQO18OaT0WFDvONW1cDwXGI6dHBwipsAmt1rpiYq8DMGqDQD5LbA0+iNTSqgw2+i46YPbYMOFVLPFn8EEIXyfLLME0HVr2b11qX7HfIw4HG4Swg2V4mcmTKY5KZf7MEE26GKiioIpDQEF6OIZbbIjQeiZ8yzGYYWBO9cGKKj0XhSIm/BQ8EBL7TTgt6jNQxHVfFYexLMVj47VutXGaECsLGkitXl8PBSzxeQpguaNd/25gXnADTDTeuhAMEBKW2QjzmMSdAZ75yg2w0HjgoCOfzpgQm5xuKw8jDyIe6GZRhQ/h+SFgm7kZwqbrvZWcj4kdyZyS2OsXSBvHYY7rISr1MCVhdvIgpnIpCkUmxE74AdLFVnilCZddHv8r7mUKbbA9gCUOr95IFgTy9gfhSIGos/hW+/nQOvvs4fkDvFTN46Dvb4AlLPFbdkAsUWF/VShmwvfp5xXWDW2DqMx2jvgm8D+BdPptJLsJYYc7iLov9NtQOTLXCu77gf9S/S9cvbWrM44riPFKaWAvQy0s8QSRAtMRKE9YaUIkYeJQqPoj3Rj6cyXXZd5d7TmcciM3cgMGGr8BHYAdgYoCLBIAAAAASUVORK5CYII=" style="height:24px"></a>
            </div>
        </p>
        <div class='contents'>
            <a href="#home"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABwklEQVR4nO2YMUvDUBSFr+82RRAEBwcXXRx0Ef0F3d0UFyed/AuOrv4FwcFN6KJ5L7RUhQ6uDtLFRZyKm4IgtFXqkaQkFUMkSZO+FN+BuwRy853cc5O0REZGRrkIslSB4ievZKlCkyQ44gCSP6AYXkn+hCMOAZqiIgtNmobkswD8d0k+R4NmqIiCTcuQohUJP6wHOLRKRRIUb0Lyawx4fxJvULylm5vcTHvZVtyPDT808QXJxzgioQe+RrNQ4iIxeKhEDQ7NjRde0oqX5ZHh2Z/GI2xrbTzwttiF5PfM4FVgogNb7OcH3qSSl9mswVXIyAnuyMoWvkbzUOImd3gV7MUt6rSQDfyltQHJ7fHBsz+Jtnvt0eAdaz3R8z17Ey+pl3uQeXGvDV75JkQr1U64TwTt8CrYib3kBpRo6Adnfwr15AYkPxfHALdTTCDF901+1U9jAEUqMgaUmQBMhJJId2Rgllilful0oPjU++3wswbHusWfgMPbf/TcKb6BKpUje1apXHgDpKlvSMZAhMwE4spEKEImQv8pQr3EF5Lc1dU3JEhxnfxOiStdfUOCQ0vuiTHvWM/7G0bSoq6+RkZGNJn6Bg9gWkanahgaAAAAAElFTkSuQmCC"style="height:20px"> Home </a>
            <a href="#about"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABI0lEQVR4nO2WX0rEQAyHQ4J6BtcbuXgR/11Bz+OTJKIn0N1CVzzDrheQin38ySj6UFE7Ip0J5INA3/r7kkw7REEQBNWCa9rBFZ9AeQmVZ5hgktL0Ll7A+BgXtP238EZ7UH6YLLR9V3yPS5rld76K8PIhscqaBJRPy4eWwVrxUY5AUzywfZnCYryASVc+sAyryxFAjUWTCjQHQP8I9BugmTsU6Df45GUdAph+hebvU0jdX+47nIB5P8QWAig7gSHuVmhICEhMALFCFod4HPEVsviMIn5kqODyhriNWvmuo9hl7r9L5cm3gPGdbwHlQ78Cyi1a2vIpoNzihnZHh69EoIPybVqbrM7/KKB8Rl6A5/AJ1+ETrsMnXIdPwOT87SEI6DdeAUHi++OHVS9/AAAAAElFTkSuQmCC"style="height:20px"> About</a>
            <a href="#projects"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAzklEQVR4nO2U3w3CIBDGL550BGfwoS7gEG7iDr5ZB9Ahmvhy1JGq0SWuyUEbNQUMhZfGL7mEP8f3Ay4AMAtxDQUTnpjwzhq5j3QAwurdOD1AYyumzXJr+xwT4AF8JMwcQFiNrR1bH3uCJ19hlRZAeBFjCVVKjoWkAJzNmCoHc2kL8DAdQPjim9oMcwRrJnz4iuwEiJnr3rU5gd05xwFCxdVu8xDAvOSJAR7AMS+ghsJC2iyAbwUTAvoZ0P+uOQC7lDUZFTeLvetBJQH8BVYd10Xtaecw1eIAAAAASUVORK5CYII="> Projects</a>
            <a href="#skills"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABT0lEQVR4nO2UPU7DQBCFRzMyAgkOgAQt6UDKGWhxQ/rAJWi4ABW3SBELyfYOPw0SZ6DhCImQAEEQSvmQ11bsJXgD2HQZaRrv2/ftzsyaaBltBGLahvIFVCZ5coyEOu2ZG3mGCpw08pKtNQeoPblrXkKiFgAy8QDe/hvw2gKA41qAyrA5IKGObei8+ROuaasxoDJJUVZzmyrD1syXURuISHAp+zByBuVbGHmAyjtUPqBy7mhN0C1HN+jWu2biO1qF8gmMjGpG8xEJbVitSogr2oFyUq5zYr8ZOZg3v6FNKN975h4wfFqY97y6PHsuQFkXbkqD3QIwqLzoEZT7No2MK/qBCzAyXQiIaL3o0Uqp5/7MI+WjAjrNNF9usPDKQERrXoDh42YADfa+KdHYnjwz95XoN4GfNNnI4Z8BBSTMf4acVqYszUdXwkbmDsjz0D4B5ToEIJdDtqUAAAAASUVORK5CYII="> Skills</a>
            <a href="#leetcode"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB30lEQVR4nK2VS2sUQRSFr3VmjMa1K83KXxCX2UjEF6I/QHchiBs3/gJFXSiIiE/QbBWZTdL3djpKkEDW7gSXLtyI+ELF9+NId8fpqpl2pibpgtp03fud07duVYmMOHhGHA03aPjIxM2Omh8Dn6OB5XSPm4NTNlFxpwtXfGWK6ebghpuVc3yn4mhzcMUtD06qO94c3IoNreBleT7QcJ4r0tqo82t98PBPFpnJ2HrhV0OgUxrO0nCPhl/B945sHk3AcMWD/+7tdybYT8NnT2SeHUEcXHHZq/UfqjtZH9faQ8Mnz8jhGOcXAri5UwPj09YUDW9oeMVMdg6Gl7/tb+DpoY7yvEzG+ETawwPzjqjcn5OmBxVv1wRe9/Y3U0zT8H5gy1Yz77C5foH8+JeleVojfjES3j2IdQLP1xa/0WRHsDYvEzTcp7rliLnExB2rK9F1b4NX+Ui2rb/gNaNwqXjn3/VUGR+al+AIUxyKEykPT3VC1S2zI1v/G59feP9i09ZUnEiCvT0iD7kiW/rN4FJwnSy0J6MEiuQU+2j44oksMZPtJVjGabgdwNXNRMM9hweKZ9F/IhXPisc+vE5OjAzvihgOBsCw139sCN4VyWQXDXdpeEHFType0vCA2t4dA/gLhZogiZHAeZcAAAAASUVORK5CYII=" style="height:20px"> Leetcode</a>
            <a href="#achievements"><img src="data:image/png;base64,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" style="height:20px"> Achievements</a>
            <a href="#resume"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5UlEQVR4nO2WTQrCMBCFQya5gyvPUBA3UnVr8U4u/TlEV73BZHYinkQX1XuM0IVRUiHQJIXagVnNPL4k8xIixBhCCCbYMsKTDXCnRHgwQuF9qI2gK9Rm7Q8OB22yGxjljklMGMWUUZ4TgeXFHYe8xgcjnFwwHFOAyxZwmQJctYCrrx5SC1tTeThzkc7eddKZuziVW71ahnQ12R1JSnidYP9RP8QHI9yY1MrpQbVmA/d4MyY9+9mHah5/xqavJ9P8DZisabz1QcyF1jT++tFcnjHOmId/j7Gv7y1CEQheM8HGGzzoeAGdIHQS1Z8+JgAAAABJRU5ErkJggg==" style="height:20px"> Resume</a>
            <a href="#contact"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABiUlEQVR4nO2ZzUrDQBDHh0wUpK+g0uLBB1Cwb+BVEA++jlZTBe9evHmQXpLMFKFP4Is0OfUBPKgjSURo2NJYs81uun+Yy7K7s7/5YBcWwMnJycmpCckItoXwTghTYZSaLRHCYeZDPwjhUANA2YJ1gKTaQQhT/SCsPRu5tQZE9Fjy24MGHKYOC9oBQpi2A4RRHIgYkAXZ9Ix8COO1xNCTEexI5B8Le282gjwsuIfu7QIZ+ydKkFc4sAskgsMFILt2gTCeKkHGW0eVHNUk+TdI7F2qQfDCMhC/r9w49vuWlZYXqSPkRXaBEH5JCN05iBC6+bhVIJzDPJXq9bGyI2N6hHN7mduU8Nk+EMJ3ITwvgZzl45aU1ix/hsTQU0Yo65PimTIzFeRTGAcygU6llE+gI4Q3P+sMAiG8WrGGB0pHNUn+DBLC3kqOCPbNAmG7DJo+gANhlxFsvHzE9Qg3H2nZxIwkSydVvJRqO1RJS9cQTrNJQQtAbovP0AImsQ6EcJpBrOWz1cnJCYzQNyj+mKTl5qt1AAAAAElFTkSuQmCC"style="height:20px"> Contact</a>
        </div>
    </div>
</body>
</html>

 -->

<!-- markdown -->

<h1 style="color:#ffcc00; position:relative; display:flex; justify-content:center; font-size:46px">Welcome to my portfolio</h1>


## Home
<p align='center' style="font-size:40px;font-family: monospace;font-weight:bolder;color:#FFB303">Ipsit Das</p>
<p align="center">
    <img src="https://readme-typing-svg.herokuapp.com?color=ffcc00&size=50&center=true&vCenter=true&width=550&height=70&lines=I'm+Ipsit+Das;An+AI+Enthusiast;A+Problem+Solve">
</p>

## About
<img src='profile_picture.png' style="border-radius:10000px; border:4px solid white; width:150px">
Hello! I'm Ipsit Das, an undergraduate student pursuing a B.Tech. degree in Computer Science and Engineering at the National Institute of Technology, Andhra Pradesh. With a passion for machine learning and artificial intelligence, I am committed to continuously learning and contributing to impactful AI-driven projects.

As a dedicated and responsible student, I have developed a strong foundation in various domains of computer science. My expertise includes working with frameworks like PyTorch, Express and React, which I have applied in numerous projects.

I enjoy coding and am particularly passionate about exploring the latest advancements in AI and machine learning. So welcome to my world!! 😊

## Projects
Here !! Let me show you some work I did ...
Want to see right???🥹🥹

Here's just the recent ones for more apps and code checkout my [github account](https://www.github.com/icode100) 😊
<div style="display: flex; justify-content: space-between; padding: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <div style="display: flex; flex-direction: column; align-items: center; width: 45%; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px; padding: 10px;border:2px solid #ffcc00">
        <h2> POS Tagger using HMM</h2>
        <a href="https://englishpostagger.streamlit.app/"><img src="pos_tagger.png" height="200px" style="border-radius: 24px;"></a>
        <p style="text-align: center;">This is a pos tagger that I made using Hidden Markov Model and I used Viterbi decoding for it. Click on the image to check out the app.</p>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; width: 45%; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px; padding: 10px;border:2px solid #ffcc00">
        <h2> Real Image to Anime Image using neural style transfer</h2>
        <a href="https://anicygan.streamlit.app/"><img src="anicygan.png" height="200px" style="border-radius: 24px;"></a>
        <p style="text-align: center;">This is an interesting one you know!!! So what it does is it will take an image and then convert it into anime styled images and not just that, It does that in two styles one of Hayao Miyazaki and other being Makoto Shinkai. I have used here cycleGAN to make it. Check out the github page for code and more info on it </p>
    </div>
</div>
<div style="display: flex; justify-content: space-between; padding: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <div style="display: flex; flex-direction: column; align-items: center; width: 45%; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px; padding: 10px;border:2px solid #ffcc00">
        <h2> Image Captioning using ViT and RoBERTa</h2>
        <a href="https://huggingface.co/spaces/icode100/Image_captioning"><img src="image_captioning.png" height="200px" style="border-radius: 24px;"></a>
        <p style="text-align: center;">This is an image captioning app that I made using Vision Transformer and RoBERTa.Then I fine-tuned the model on flickr10k dataset. I used huggingface and pytorch for it. I hope you will have fun generating captions with it 😌. Sorry Forgot to say... Click on the image to open the application 😁</p>
    </div>
</div>

## Skills
So let me speak something about my skills. 
<div style="width: 100%; background-color: #ddd;">
  <div style="width: 80%; height: 24px; background-color: #ffcc00; text-align: center; line-height: 24px; color: black;">
    Python 
  </div>
</div>
<hr>
<div style="width: 100%; background-color: #ddd;">
  <div style="width: 60%; height: 24px; background-color: #ffcc00; text-align: center; line-height: 24px; color: black;">
    C++
  </div>
</div>
<hr>
<div style="width: 100%; background-color: #ddd;">
  <div style="width: 50%; height: 24px; background-color: #ffcc00; text-align: center; line-height: 24px; color: black;">
    Java Script
  </div>
</div>
<hr>
<div style="width: 100%; background-color: #ddd;">
  <div style="width: 40%; height: 24px; background-color:#ffcc00; text-align: center; line-height: 24px; color: black;">
    Java
  </div>
</div>
<hr>
<div style="width: 100%; background-color: #ddd;">
  <div style="width: 70%; height: 24px; background-color:#ffcc00; text-align: center; line-height: 24px; color: black;">
    SQL
  </div>
</div>
<hr>
<div style="width: 100%; background-color: #ddd;">
  <div style="width: 70%; height: 24px; background-color: #ffcc00; text-align: center; line-height: 24px; color: black;">
    pyTorch
  </div>
</div>
<hr>
<div style="width: 100%; background-color: #ddd;">
  <div style="width: 65%; height: 24px; background-color: #ffcc00; text-align: center; line-height: 24px; color: black;">
    React
  </div>
</div>
<hr>
<div style="width: 100%; background-color: #ddd;">
  <div style="width: 65%; height: 24px; background-color: #ffcc00; text-align: center; line-height: 24px; color: black;">
    Express
  </div>
</div>
<hr>
<div style="width: 100%; background-color: #ddd;">
  <div style="width: 65%; height: 24px; background-color:#ffcc00; text-align: center; line-height: 24px; color: black;">
    Machine learning 
  </div>
</div>
<hr>
<div style="width: 100%; background-color: #ddd;">
  <div style="width: 75%; height: 24px; background-color:#ffcc00; text-align: center; line-height: 24px; color: black;">
    Natural Language Processing
  </div>
</div>
<hr>
<div style="width: 100%; background-color: #ddd;">
  <div style="width: 60%; height: 24px; background-color:#ffcc00; text-align: center; line-height: 24px; color: black;">
    Computer Vision
  </div>
</div>
<hr>

## Leetcode
These are my leetcode stats. Check me out on [icode100](https://leetcode.com/icode100) 😊

<img alt="LeetCode Stat Card" style="border-radius:24px;box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.2);" src="leetcode_stats.png" />

## Achievements
Here, there are few of my achievements😅
- Over 450 problems on [leetcode](https://www.leetcode.com/icode100)
- I have been in the top 26% of the leetcoders in the weekly contest with highest rating of 1582
- I also secured position in the top 1% among 16686 students in [NPTEL Online Certification Examination for Cloud Computing](https://drive.google.com/file/d/11kcgGLjRE6sQyTxL6D0mjccPphTeCCGf/view) (Click on the link to view the certificate 😌)
- I dont know if it is an achievement, but I recently scored a semeter grade point of 9.08 in my 6th semester of college😁
## Resume
<iframe src="https://docs.google.com/document/d/1TKUn1fPk_7bBKlIKeMY09giTOC13oHWY6x8WtDp-WCE/edit?usp=sharing"  style="width:1200px;height:1200px"></iframe>

## Contact
Reach Me out on:
<p align="left">
  <a href="https://www.linkedin.com/in/ipsit-das/"><img src="https://img.shields.io/badge/LinkedIn-ffcc00?style=for-the-badge&logo=linkedin&logoColor=black"></a>
  <a href="https://www.github.com/icode100"><img src="https://img.shields.io/badge/-GitHub-ffcc00?style=for-the-badge&logo=GitHub&logoColor=black"></a>
  <a href="https://www.x.com/icode100"><img src="https://img.shields.io/badge/-X-ffcc00?style=for-the-badge&logo=X&logoColor=black"></a>
</p>
