import React from "react";
import ScrollToId from "../ScrollToId";
import Header from "../Header";
import SectionHeader from "../elements/SectionHeader";
import {Code, CodeBlock} from "../elements/Code";
import darkModeToggleImage from "../../assets/img/darkModeToggle/darkModeToggle.svg";
import SectionImage from "../elements/SectionImage";

export default class DarkModeToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTitle: "Dark Mode React Toggle",
      headerLink: "/"
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header headerTitle={this.state.headerTitle} headerLink={this.state.headerLink}/>

        <div className="article">

          <section className="fadeIn">
            <SectionHeader>
              TL;DR
            </SectionHeader>
            <ol>
              <li><ScrollToId id="introduction">Introduction</ScrollToId> - I am dark mode obsessed. Every app I use I attempt to make it dark themed. 😎</li>
              <li><ScrollToId id="theme-switch">Theme Switch</ScrollToId> - I built a switch to allow a visitor to toggle between light and dark theme.</li>
              <li><ScrollToId id="styles">Styles</ScrollToId> - I nested the styles for both light and dark theme together. You may want to separate them so that you can selectively download.</li>
              <li><ScrollToId id="media-query">Media Query</ScrollToId> - You can set the theme based on the visitor's operating system choice!</li>
              <li><ScrollToId id="react-component">React Component</ScrollToId> - Bundling everything up into a nice component.</li>
              <li><ScrollToId id="github-repo">Github Repo</ScrollToId> - You can roll your own dark theme using my toggle.</li>
            </ol>
            <SectionImage imgSrc={darkModeToggleImage} imgAlt="Sun and moon icons" />
          </section>

          <section>
            <SectionHeader>
              Introduction
            </SectionHeader>
            <p>
              I've been obsessed with dark themes for a while now. To the point were I will essentially boycott an app or service if I cannot find a way to theme it dark. Just the thought of staring into a blinding white screen is giving me a headache right now.
            </p>
            <p>
              Ever since a very early iteration I have had my personal website styled with a dark theme. But as I get further into my career as a software developer the thought that anyone but myself might actually look at my website is a looming fear. Is it ready for that? Perhaps in software development this may be skewed just a bit but I think in general people prefer the more expected light colours of the internet. Google is light, Amazon is light, nothing popular is dark.
            </p>
          </section>

          <section>
            <SectionHeader>
              Theme Switch
            </SectionHeader>
            <p>
              I decided to implement a theme switch. After reading a bit into how others accomplished this it turned out to be quite simple. The hard part is actually designing a light theme for my site.
            </p>
            <p>
              Essentially all you need to do is create a toggle, checkbox, or button that will apply or remove a class from the HTML <Code>body</Code>. Depending on how your site (or app) is designed you could apply this class to some other parent component, but since I was using the body background I decided to just use the body.
            </p>
            <p>
              I built a button based toggle switch. The onClick method will do
            </p>
            <CodeBlock
              code={
                'document.body.classList.toggle("dark-mode");'
              }
              language="javascript"
            />
          </section>

          <section>
            <SectionHeader>
              Styles
            </SectionHeader>
            <p>
              Now, in your CSS, whatever styles you want overridden when this theme is toggled just add the <Code>dark-mode</Code> class selector.
            </p>
            <p>For example</p>
            <CodeBlock
              code={
                "h1 {\n" +
                "  color: #222;\n" +
                "}\n" +
                "\n" +
                ".dark-mode {\n" +
                "  h1 {\n" +
                "    color: #eee;\n" +
                "  }\n" +
                "}"
              }
              language="scss"
            />
            <p>
              I prefer having the dark and light styles right next to each other in the file, but some might notice that you are always downloading both styles even if only one is being used. Maybe if I ever decide to separate them I'll write another article about how that worked.
            </p>
          </section>

          <section>
            <SectionHeader>
              Media Query
            </SectionHeader>
            <p>
              A piece of functionality I really wanted was rather than choosing light or dark as the default for everyone and forcing them to press the switch I wanted to default to their OS theme choice. MacOS, Windows 10, iOS, and Android all have dark-mode support so wouldn't it be nice if you could just set the theme based on that? You can!
            </p>
            <CodeBlock
              code={
                "@media (prefers-color-scheme: dark) {\n" +
                "  // styles\n" +
                "}"
              }
              language="css"
            />
            <p>
              You can query for either <Code>dark</Code> or <Code>light</Code>. You can use this media query directly in your styles to make your site completely reactive to the user OS choice. The issue with that is that it greatly complicates being able to switch between the themes.
            </p>
            <p>
              I opted to just write my styles around the theme class I created for <Code>body</Code>. Then in my javascript I use the media query to set the initial mode of my switch component.
            </p>
            <CodeBlock
              code={
                "componentDidMount() {\n" +
                '  const userPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;\n' +
                "  if (!userPrefersDarkMode && !this.state.darkMode) {\n" +
                "    this.themeToggleOnClick()\n" +
                "  }\n" +
                "}"
              }
              language="javascript"
            />
            <p>
              If your default theme is light, this <Code>componentDidMount</Code> will automatically switch it to dark on page load if the user has their OS set to dark.
            </p>
          </section>

          <section>
            <SectionHeader>
              React Component
            </SectionHeader>
            <p>
              Since I a working in React I bundled the logic and layout for the switch into a <Code>ThemeToggle</Code> component. I personally used the Icon and Tooltip components from the <a href="https://ant.design">Ant Design</a> library to simplify a few things and provide a nice tooltip if someone doesnt understand what the icon represents.
            </p>
            <CodeBlock
              code={
                'import React from "react";\n' +
                'import "./themeToggle.scss";\n' +
                'import { Tooltip, Icon } from "antd";\n' +
                '\n' +
                'export default class ThemeToggle extends React.Component {\n' +
                '\n' +
                '  constructor(props) {\n' +
                '    super(props);\n' +
                '    this.state = {\n' +
                '      lightMode: false\n' +
                '    };\n' +
                '  }\n' +
                '\n' +
                '  componentDidMount() {\n' +
                '    const userPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;\n' +
                '    if (!userPrefersDarkMode && !this.state.lightMode) {\n' +
                '      this.toggleTheme()\n' +
                '    }\n' +
                '  }\n' +
                '\n' +
                '  toggleTheme = () => {\n' +
                '    this.setState({\n' +
                '      lightMode: !this.state.lightMode\n' +
                '    });\n' +
                '    document.body.classList.toggle("light-mode");\n' +
                '  };\n' +
                '\n' +
                '  MoonSvg = () => {\n' +
                '    return (\n' +
                '      <svg className="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">\n' +
                '        <path className="moon-icon"/> // EXCLUDED SVG PATH FOR BREVITY\n' +
                '      </svg>\n' +
                '    )\n' +
                '  };\n' +
                '\n' +
                '  SunSvg = () => {\n' +
                '    return (\n' +
                '      <svg className="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">\n' +
                '        <path className="sun-icon"/> // EXCLUDED SVG PATH FOR BREVITY\n' +
                '      </svg>\n' +
                '    )\n' +
                '  };\n' +
                '\n' +
                '  render() {\n' +
                '    return (\n' +
                '      <Tooltip\n' +
                '        title={`Toggle ${!this.state.lightMode ? "Light" : "Dark"} Mode`}\n' +
                '        placement="bottomRight"\n' +
                '        arrowPointAtCenter\n' +
                '        mouseEnterDelay={0.2}\n' +
                '      >\n' +
                '        <div className="toggle-container">\n' +
                '          {\n' +
                '            (this.state.lightMode) ?\n' +
                '              <Icon component={this.MoonSvg} onClick={this.toggleTheme} />\n' +
                '              :\n' +
                '              <Icon component={this.SunSvg} onClick={this.toggleTheme} />\n' +
                '          }\n' +
                '        </div>\n' +
                '      </Tooltip>\n' +
                '    );\n' +
                '  }\n' +
                '}'
              }
              language="jsx"
            />
            <p>
              And here are the styles I used for this button
            </p>
            <CodeBlock
              code={
                '@import "../../colors.scss";\n' +
                '\n' +
                '.toggle-container {\n' +
                '  width: 60px;\n' +
                '  height: 60px;\n' +
                '  font-size: 40px;\n' +
                '  line-height: 66px;\n' +
                '  top: 16px;\n' +
                '  right: 21px;\n' +
                '  position: fixed;\n' +
                '  z-index: 3;\n' +
                '  border-radius: 30px;\n' +
                '  background-color: rgba($color-main-bg, 0.9);\n' +
                '  text-align: center;\n' +
                '\n' +
                '  @media (min-width: 375px) and (max-width: 812px) {\n' +
                '    line-height: 64px;\n' +
                '  }\n' +
                '\n' +
                '  .toggle-icon {\n' +
                '    width: 1em;\n' +
                '    height: 1em;\n' +
                '\n' +
                '    .sun-icon {\n' +
                '      fill: $color-main-text;\n' +
                '    }\n' +
                '\n' +
                '    .moon-icon {\n' +
                '      fill: $color-main-text-light-theme;\n' +
                '    }\n' +
                '  }\n' +
                '}\n' +
                '\n' +
                '.light-mode {\n' +
                '  .toggle-container {\n' +
                '    background-color: rgba($color-main-bg-light-theme, 0.9);\n' +
                '  }\n' +
                '}\n'
              }
              language="scss"
            />
            <p>
              You can see I ended up also storing the toggle state in the component state. That way I can easily conditionally switch between the sun and moon icon.
            </p>
            <p>
              Also switched things around a bit. For my website I still treat the dark theme as default and the light theme as the exception. Therefore I am tracking the state as lightTheme = true/false rather than darkTheme. Same thing, just do whatever works best in your brain.
            </p>
          </section>

          <section>
            <SectionHeader>
              Github Repo
            </SectionHeader>
            <p>
              In addition to the source here which is specific to my implementation and also uses Ant Design I have posted a <a href="https://github.com/tyrelh/dark-mode-react-toggle">Github repository</a> with a more generic React component that lets you have theme switch.
            </p>
            <p>
              All you need to do is include the component and then create your own styles for a dark theme nested within a <Code>.dark-theme</Code> class on the <Code>body</Code>.
            </p>
            <p>
              Have a nice day! 😎
            </p>
          </section>
        </div>
      </React.Fragment>
    );
  }
}