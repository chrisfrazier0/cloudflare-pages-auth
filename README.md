<a name="readme-top"></a>

# Cloudflare Pages Auth

<!-- BADGES -->

[![Unlicense][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- ABOUT THE PROJECT -->

## About The Project

This project contains an example Cloudflare worker that enforces a cookie based authentication scheme for
access to any of the hosted content. To see a live demo, visit <https://cloudflare-pages-auth-d1a.pages.dev/>.
The password for the demo site is `password`.

[![Cloudflare][cloudflare-shield]][cloudflare-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

cloudflare-pages-auth uses a Worker middleware to intercept all requests. The authentication cookie stores
a sha256 hash of the password. The cookie expires in one hour by default. To adjust the cookie expiration time,
edit `./functions/auth.js`.

### Installation

1. Copy the `functions` and `lib` directory into your Cloudflare Pages project
2. Create an encrypted secret named `PASSWORD` with your desired auth password
3. Re-deploy your site

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the Unlicense. See `UNLICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[license-shield]: https://img.shields.io/github/license/chrisfrazier0/cloudflare-pages-auth.svg?style=for-the-badge
[license-url]: https://github.com/chrisfrazier0/cloudflare-pages-auth/blob/master/UNLICENSE.txt
[cloudflare-shield]: https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white
[cloudflare-url]: https://pages.cloudflare.com/
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/chrisfrazier0
