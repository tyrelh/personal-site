import React from "react";
import "./themeToggle.scss";
import { Tooltip } from "antd";
import Icon from "@ant-design/icons";

export default class ThemeToggle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lightMode: false
    };
  }
  
  componentDidMount() {
    const userPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (!userPrefersDarkMode && !this.state.lightMode) {
      this.toggleTheme();
    }
  }

  toggleTheme = async () => {
    await this.setState({
      lightMode: !this.state.lightMode
    });
    document.body.classList.toggle("light-mode");
  };

  MoonSvg = () => {
    return (
      <svg className="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <path className="moon-icon" d="M 15 3 C 12.103409 3 9.4362295 4.030139 7.3613281 5.7441406 A 1.0001 1.0001 0 0 0 6.9980469 6.5097656 C 6.9931929 7.2791189 6.427489 7.8845592 5.6835938 7.9765625 A 1.0001 1.0001 0 0 0 4.9707031 8.4199219 C 3.7293794 10.308608 3 12.572419 3 15 C 3 19.229296 5.2001691 22.953031 8.5136719 25.087891 A 1.0001 1.0001 0 0 0 9.53125 25.126953 C 9.6892974 25.041507 9.8397017 25 10 25 C 10.486495 25 10.872737 25.335112 10.972656 25.78125 A 1.0001 1.0001 0 0 0 11.669922 26.523438 C 12.723435 26.827544 13.840629 27 15 27 C 21.615466 27 27 21.615466 27 15 C 27 8.3845336 21.615466 3 15 3 z M 15 5 C 15.095054 5 15.186844 5.0110547 15.28125 5.0136719 C 16.034133 5.6428729 16.722336 6.3473206 17.320312 7.1269531 C 17.533313 7.0489531 17.76 7 18 7 C 19.105 7 20 7.895 20 9 C 20 9.65 19.684078 10.220937 19.205078 10.585938 C 19.615078 11.714937 19.865312 12.916969 19.945312 14.167969 C 21.135313 14.565969 22 15.676 22 17 C 22 18.657 20.657 20 19 20 C 18.997 20 18.995188 19.998047 18.992188 19.998047 C 18.175641 21.948067 16.895074 23.653623 15.292969 24.986328 C 15.194667 24.989167 15.099005 25 15 25 C 14.129936 25 13.296189 24.8509 12.486328 24.638672 C 11.973454 23.715933 11.122303 23 10 23 C 9.7483559 23 9.5495392 23.116525 9.3203125 23.175781 C 6.7246019 21.368644 5 18.40667 5 15 C 5 13.008368 5.5971642 11.170627 6.5996094 9.6113281 C 7.6881703 9.2148214 8.4407644 8.3760963 8.71875 7.2382812 C 10.438474 5.845211 12.611501 5 15 5 z M 13 8 C 11.895 8 11 8.895 11 10 C 11 11.105 11.895 12 13 12 C 13.366 12 13.705 11.893656 14 11.722656 C 13.405 11.375656 13 10.738 13 10 C 13 9.262 13.405 8.6243438 14 8.2773438 C 13.705 8.1063438 13.366 8 13 8 z M 10 14 C 8.895 14 8 14.895 8 16 C 8 17.105 8.895 18 10 18 C 10.366 18 10.705 17.893656 11 17.722656 C 10.405 17.375656 10 16.738 10 16 C 10 15.262 10.405 14.624344 11 14.277344 C 10.705 14.106344 10.366 14 10 14 z"/>
      </svg>
    )
  };

  SunSvg = () => {
    return (
      <svg className="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path className="sun-icon" d="M 4 1 C 3.225 1 2.4503906 1.3003906 1.9003906 1.9003906 C 0.70039063 3.1003906 0.70039063 4.9996094 1.9003906 6.0996094 L 11.199219 15.5 C 11.799219 16.1 12.600781 16.400391 13.300781 16.400391 C 14.000781 16.400391 14.800391 16.1 15.400391 15.5 C 16.600391 14.3 16.600391 12.400781 15.400391 11.300781 L 6.0996094 1.9003906 C 5.5496094 1.3003906 4.775 1 4 1 z M 24 1 A 3 3 0 0 0 24 7 A 3 3 0 0 0 24 1 z M 124 1 C 123.225 1 122.45039 1.3003906 121.90039 1.9003906 L 113.90039 9.9003906 C 112.70039 11.100391 112.70039 12.999609 113.90039 14.099609 C 114.50039 14.699609 115.3 15 116 15 C 116.7 15 117.49961 14.699609 118.09961 14.099609 L 126.09961 6.0996094 C 127.29961 4.8996094 127.29961 3.0003906 126.09961 1.9003906 C 125.54961 1.3003906 124.775 1 124 1 z M 48.009766 4.5644531 C 46.992578 4.5550781 45.975 4.7 45 5 C 42.4 5.9 40.199609 7.8003906 39.099609 10.400391 C 38.399609 11.900391 39.099219 13.700781 40.699219 14.300781 C 41.999219 15.000781 43.700391 14.299219 44.400391 12.699219 C 44.800391 11.699219 45.599219 10.999609 46.699219 10.599609 C 47.699219 10.299609 48.799219 10.400391 49.699219 10.900391 L 59 16.400391 C 62 18.200391 65.800391 18.200391 68.900391 16.400391 L 78.199219 10.900391 C 79.099219 10.400391 80.199219 10.199609 81.199219 10.599609 C 82.199219 10.899609 83 11.699219 83.5 12.699219 L 87.800781 22.599609 C 88.300781 23.699609 89.399609 24.400391 90.599609 24.400391 C 90.999609 24.400391 91.400781 24.299609 91.800781 24.099609 C 93.300781 23.399609 94.000391 21.699219 93.400391 20.199219 L 89.099609 10.300781 C 87.999609 7.8007813 85.799219 5.8 83.199219 5 C 80.599219 4.2 77.700781 4.5003906 75.300781 5.9003906 L 66 11.400391 C 64.8 12.100391 63.399219 12.100391 62.199219 11.400391 L 52.900391 5.9003906 C 51.400391 5.0253906 49.705078 4.5800781 48.009766 4.5644531 z M 26.421875 22.992188 C 26.220508 22.972656 26.013281 22.975 25.800781 23 L 20.800781 23.5 C 18.000781 23.8 15.400781 25.3 13.800781 27.5 C 12.200781 29.8 11.599219 32.600781 12.199219 35.300781 C 12.499219 36.700781 13.699609 37.699219 15.099609 37.699219 C 15.299609 37.699219 15.500781 37.699609 15.800781 37.599609 C 17.400781 37.199609 18.399609 35.6 18.099609 34 C 17.899609 32.9 18.099219 31.9 18.699219 31 C 19.299219 30.1 20.300391 29.6 21.400391 29.5 L 26.400391 29 C 28.000391 28.8 29.299609 27.399219 29.099609 25.699219 C 28.924609 24.299219 27.831445 23.128906 26.421875 22.992188 z M 106.67773 23.488281 C 105.26816 23.607227 104.175 24.711719 104 26.199219 C 103.8 27.799219 104.99922 29.3 106.69922 29.5 C 107.79922 29.6 108.70039 30.1 109.40039 31 C 110.00039 31.9 110.3 32.9 110 34 L 107.69922 44.599609 C 106.89922 47.999609 108.09922 51.6 110.69922 54 L 118.80078 61.199219 C 119.60078 61.899219 120.09961 62.9 120.09961 64 C 120.09961 65.1 119.70078 66.100781 118.80078 66.800781 L 110.69922 74 C 108.09922 76.3 106.89922 79.900391 107.69922 83.400391 L 110 94 C 110.2 95.1 110.00039 96.1 109.40039 97 C 108.70039 97.8 107.79922 98.4 106.69922 98.5 C 105.09922 98.7 103.8 100.10078 104 101.80078 C 104.1 103.40078 105.5 104.5 107 104.5 L 107.30078 104.5 C 110.10078 104.2 112.59922 102.8 114.19922 100.5 C 115.79922 98.2 116.40078 95.399219 115.80078 92.699219 L 113.5 82.099609 C 113.2 80.799609 113.69922 79.4 114.69922 78.5 L 122.80078 71.300781 C 124.90078 69.500781 126.09961 66.8 126.09961 64 C 126.09961 61.2 124.90078 58.599219 122.80078 56.699219 L 114.69922 49.5 C 113.69922 48.6 113.2 47.200391 113.5 45.900391 L 115.80078 35.300781 C 116.40078 32.600781 115.79922 29.7 114.19922 27.5 C 112.59922 25.2 110.00078 23.8 107.30078 23.5 C 107.08828 23.475 106.8791 23.471289 106.67773 23.488281 z M 64 30 C 45.2 30 30 45.2 30 64 C 30 82.8 45.2 98 64 98 C 82.8 98 98 82.8 98 64 C 98 45.2 82.8 30 64 30 z M 64 37 C 65.7 37 67 38.3 67 40 C 67 41.7 65.7 43 64 43 C 62.7 43 61.3 43.100391 60 43.400391 C 59.8 43.400391 59.600391 43.5 59.400391 43.5 C 58.000391 43.5 56.7 42.499609 56.5 41.099609 C 56.2 39.399609 57.200781 37.8 58.800781 37.5 C 60.500781 37.2 62.2 37 64 37 z M 17.296875 42.246094 C 17.099219 42.244336 16.899219 42.263281 16.699219 42.300781 C 15.099219 42.700781 14.100391 44.300391 14.400391 45.900391 C 14.700391 47.200391 14.199219 48.6 13.199219 49.5 L 5.0996094 56.699219 C 3.0996094 58.599219 1.9003906 61.2 1.9003906 64 C 1.9003906 66.8 3.0992187 69.400781 5.1992188 71.300781 L 13.300781 78.5 C 14.300781 79.4 14.8 80.799609 14.5 82.099609 L 12.199219 92.699219 C 11.599219 95.399219 12.200781 98.3 13.800781 100.5 C 15.400781 102.8 17.999219 104.2 20.699219 104.5 L 31.5 105.5 C 32.8 105.6 33.999609 106.49922 34.599609 107.69922 L 38.900391 117.59961 C 39.400391 118.69961 40.499219 119.40039 41.699219 119.40039 C 42.099219 119.40039 42.500391 119.29961 42.900391 119.09961 C 44.400391 118.39961 45.1 116.69922 44.5 115.19922 L 40.199219 105.30078 C 38.799219 102.10078 35.699219 99.8 32.199219 99.5 L 21.400391 98.5 C 20.300391 98.4 19.399219 97.9 18.699219 97 C 17.999219 96.1 17.8 95 18 94 L 20.300781 83.400391 C 21.100781 80.000391 19.900781 76.4 17.300781 74 L 9.1992188 66.800781 C 8.3992187 66.100781 7.9003906 65.1 7.9003906 64 C 7.9003906 62.9 8.2992188 61.899219 9.1992188 61.199219 L 17.300781 54 C 19.900781 51.7 21.100781 48.099609 20.300781 44.599609 C 19.950781 43.199609 18.680469 42.258398 17.296875 42.246094 z M 43.992188 47.744141 C 44.578711 47.746484 45.174219 47.925781 45.699219 48.300781 C 47.099219 49.200781 47.5 51.1 46.5 52.5 C 44.2 55.9 43 59.9 43 64 C 43 69.6 45.199219 74.900781 49.199219 78.800781 C 50.399219 80.000781 50.399219 81.9 49.199219 83 C 48.599219 83.7 47.8 84 47 84 C 46.2 84 45.500391 83.699609 44.900391 83.099609 C 39.800391 77.999609 37 71.2 37 64 C 37 58.7 38.5 53.499609 41.5 49.099609 C 42.0625 48.224609 43.014648 47.740234 43.992188 47.744141 z M 90.613281 103.52734 C 89.511719 103.49922 88.425391 104.17578 87.900391 105.30078 L 83.599609 115.19922 C 83.199609 116.19922 82.400781 116.90078 81.300781 117.30078 C 80.300781 117.60078 79.200781 117.5 78.300781 117 L 69 111.5 C 66 109.7 62.199609 109.7 59.099609 111.5 L 49.800781 117 C 48.400781 117.8 47.899219 119.69961 48.699219 121.09961 C 49.499219 122.49961 51.400781 122.99922 52.800781 122.19922 L 62.099609 116.69922 C 63.299609 115.99922 64.700391 115.99922 65.900391 116.69922 L 75.199219 122.19922 C 76.699219 123.09922 78.399609 123.5 80.099609 123.5 C 81.099609 123.5 82.099609 123.3 83.099609 123 C 85.699609 122.1 87.9 120.19961 89 117.59961 L 93.300781 107.69922 C 94.000781 106.19922 93.299219 104.40078 91.699219 103.80078 C 91.349219 103.62578 90.980469 103.53672 90.613281 103.52734 z M 113.36328 110.5 C 112.60078 110.5 111.85078 110.80039 111.30078 111.40039 C 110.10078 112.60039 110.10078 114.49961 111.30078 115.59961 L 121.90039 126.09961 C 122.50039 126.69961 123.2 127 124 127 C 124.8 127 125.49961 126.69961 126.09961 126.09961 C 127.29961 124.89961 127.29961 123.00039 126.09961 121.90039 L 115.5 111.40039 C 114.9 110.80039 114.12578 110.5 113.36328 110.5 z"/>
      </svg>
    )
  };

  render() {
    return (
      <Tooltip
        title={`Toggle ${!this.state.lightMode ? "Light" : "Dark"} Mode`}
        placement="bottomRight"
        arrowPointAtCenter
        mouseEnterDelay={0.2}
      >
        <div className="toggle-container">
        {
          (this.state.lightMode) ?
            <Icon component={this.MoonSvg} onClick={this.toggleTheme} />
            :
            <Icon component={this.SunSvg} onClick={this.toggleTheme} />
        }
        </div>
      </Tooltip>
    );
  }
}