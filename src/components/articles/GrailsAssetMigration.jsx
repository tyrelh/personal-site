import React from "react";
import ScrollToId from "../ScrollToId";
import Header from "../Header";
import SectionHeader from "../elements/SectionHeader";
import { Code, CodeBlock } from "../elements/Code";
import grailsLogo from "../../assets/img/grailsAssetMigration/grailsLogo.svg";
import SectionImage from "../elements/SectionImage";

export default class GrailsAssetMigration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTitle: "Migrating Frontend Assets During Grails 2 → 3 Upgrade",
      headerLink: "/"
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header
          headerTitle={this.state.headerTitle}
          headerLink={this.state.headerLink}
        />

        <div className="article">
          <section className="fadeIn">
            <SectionImage imgSrc={grailsLogo} imgAlt="Battlesnake logo from 2018" />
            <p>
              Upgrading our application from Grails 2 to Grails 3 has been a long process. This is just one piece of that
              process.
            </p>
            <SectionHeader id="tldr">
              TL;DR
            </SectionHeader>
            <ul>
              <li><ScrollToId id="asset-pipeline-plugin" alt="go to asset pipeline plugin section of article">Asset-Pipeline Plugin</ScrollToId> - Grails 3 uses a new plugin by default to render static assets within GSPs</li>
              <li><ScrollToId id="frontend-modules" alt="go to frontend modules section of article">Frontend Modules</ScrollToId> - Frontend module structure has changed between the old Resources plugin and the new Asset-Pipeline plugin</li>
              <li><ScrollToId id="including-modules" alt="go to including modules section of article">Including Modules</ScrollToId> - The new tags to use with Asset-Pipeline</li>
              <li><ScrollToId id="images-section" alt="go to images section of article">Images</ScrollToId> - Asset-Pipeline can really handle any kind of static asset like images</li>
              <li><ScrollToId id="serving-assets" alt="go to serving assets from external source section of article">Serving Assets from an External Source</ScrollToId> - You can easily serve static assets from any URL without changing any asset references</li>
            </ul>
          </section>

          <section className="fadeIn">
            <SectionHeader id="asset-pipeline-plugin">
              Asset-Pipeline Plugin
            </SectionHeader>
            <p>
              The main change when dealing with non-GSP frontend assets like stylesheets, javascript, and images is the plugin you use to insert those assets into your GSPs. The new plugin Asset-Pipeline replaces the old Resources plugin standard in Grails 2.
            </p>
            <p>
              The first difference is the Tag-lib has changed. All <Code>&lt;r:require modules=&quot;module1&quot;/&gt;</Code> tags must be converted into corresponding <Code>&lt;asset:javascript src=&quot;module1.js&quot;/&gt;</Code> and <Code>&lt;asset:stylesheet src=&quot;module1.css&quot;/&gt;</Code> tags.
            </p>
            <p>
              The second change is you will need to remove any <Code>&lt;r:layoutResources/&gt;</Code> from within <Code>&lt;head&gt; &lt;/head&gt;</Code> and also replace any <Code>&lt;r:layoutResources/&gt;</Code> at the bottom of pages with the new <Code>&lt;asset:deferredScripts/&gt;</Code> tag.
            </p>
          </section>

          <section className="fadeIn">
            <SectionHeader id="frontend-modules">
              Frontend Modules
            </SectionHeader>
            <p>
              As you may have noticed in the previous section, the original <Code>module1</Code> turned from one <Code>r:require</Code> tag to two <Code>asset</Code> tags, one for javascript and one for css. 🤯 This turned out to be a big pain.
            </p>
            <p>
              Previously, the Resources plugin relied on a <em>Resources.groovy</em> file where modules were defined. Since this was a groovy file these modules could be defined in any manner of ways. We built modules containing javascript and css, and that had dependencies that contained javascript or css or both.
            </p>
            <p>
              This allowed us to do something like <Code>&lt;r:require modules=&quot;auth-layout&quot;/&gt;</Code> which had auth-specific styles, but also depended on our &quot;modular-layout&quot; module, which had certain base styles. This depended on our &quot;global-styles&quot; module which depended on our &quot;core-js&quot; module and &quot;fonts&quot; module. Somewhere in this tree something depended on jQuery and also a slimmed down Bootstrap stylesheet. So really there could be a dozen or more imports that were compiled from that single tag-lib.
            </p>
            <p>
              With the new Asset-Pipeline plugin, all assets are expected to be in the <em>grails-app/assets</em> directory with subdirectories for <em>javascripts</em>, <em>stylesheets</em>, and <em>images</em>. This means separating modules into javascript and css modules. In the root of the <em>javascripts</em> and <em>stylesheets</em> directories exist css and javascript files that act as &quot;modules&quot;. These files can <Code>require</Code> other files to form modules. During a production build the required files will get flattened into these module files.
            </p>
            <p>
              I structured these directories as such: each of the <em>javascripts</em> and <em>stylesheets</em> directories has a <em>js</em> and <em>css</em> subdirectory respectively. These subdirectories contain our transpiled javascript and css. In the root of the <em>javascripts</em> and <em>stylesheets</em> directories are the module files that <Code>require</Code> files contained in the subdirectory. I used the naming convention <Code>&lt;name of module&gt;[Layout][React]Module.&lt;js|css&gt;</Code>. For example: <Code>quickLinksReactModule.js</Code> or <Code>appLayoutModule.css</Code>. This naming scheme is just something I created and is not Grails or Asset-Pipeline specific. The Module keyword tells the developer this is not a source file, the React keyword differentiates this module from our legacy assets, and the Layout keyword tells the developer this is the styles for a Grails layout.
            </p>
            <p>
              I was able to group a reasonable amount of our global assets into what I called our <Code>coreModule</Code> and <Code>coreReactModule</Code>. These modules are essentially included in every layout module.
            </p>
          </section>

          <section className="fadeIn">
            <SectionHeader id="including-modules">
              Including Modules
            </SectionHeader>
            <p>
              With all of the module created the way we liked, we can now just add the appropriate <Code>&lt;asset:javascript src=&quot;nameOfModule.js&quot;/&gt;</Code> and <Code>&lt;asset:stylesheet src=&quot;nameOfModule.css&quot;/&gt;</Code> tags into our layouts and pages.
            </p>
            <p>
              Ensure you are including files in the appropriate dependency order. If you have a layout module that includes jQuery and then a later module that relies on jQuery ensure you are midnful of this! You can also include the <Code>asset-defer=&quot;true&quot;</Code> flag on the asset tag to defer the loading of assets to where you include the <Code>&lt;asset:deferredScripts/&gt;</Code> tag.
            </p>
            <CodeBlock
              code={
                '<asset:javascript src="contactsReactModule.js" asset-defer="true"/>'
              }
              language="gsp"
            />
          </section>

          <section className="fadeIn">
            <SectionHeader id="images-section">
              Images
            </SectionHeader>
            <p>
              The Asset-Pipeline plugin also has default support for images. The true benefit of this I will describe in the next section, but I'll describe how it works here.
            </p>
            <p>
              Alongside the <em>javascripts</em> and <em>stylesheets</em> directories within the <em>assets</em> directory you can create an <em>images</em> directory. Create any organizational subdirectories in here that make sense for your project and place your static images within.
            </p>
            <p>
              In your GSP you can include an image using the Asset-Pipeline tag <Code>&lt;asset:image src=&quot;brand/logo.svg&quot; alt=&quot;Company X wordmark&quot;/&gt;</Code> This tag essentially just compiles into the html tag <Code>&lt;img src=&quot;assets/brand/logo.svg&quot; alt=&quot;Company X wordmark&quot;/&gt;</Code>, so why not just type that? Also is it a good idea anyway to be referencing static assets within your Grails application?
            </p>
          </section>

          <section className="fadeIn">
            <SectionHeader id="serving-assets">
              Serving Assets from an External Source
            </SectionHeader>
            <p>
              I haven't tried this as of writing this article as we haven't quite got to the stage of deployment for our Grails 2 -&gt; 3 upgrade, but we are very exited about it.
            </p>
            <p>
              Within your <em>application.groovy</em> (or I believe your <em>application.yml</em> as well but the syntax will differ) you can add a config option to direct the Asset-Pipeline plugin to where your <em>assets</em> folder is stored.
            </p>
            <CodeBlock
              code={
                'environments {\n' +
                ' production {\n' +
                '   grails.assets.url = "https://s3.amazonaws.com/some-bucket/assets"\n' +
                ' }\n' +
                '}'
              }
              language="groovy"
            />
            <p>
              This location could be a different directory within your application, or what we are interested in is using S3 to completely separate our static assets from our application.
            </p>
            <p>
              This will cause any <Code>&lt;asset:image src=”brand/logo.svg” alt=”Company Wordmark”/&gt;</Code> asset tag to render as a <Code>&lt;img src=”http://s3.amazonaws.com/asset-pipe/assets/brand/logo.svg” alt=”Company Wordmark”/&gt;</Code> html tag. This way if you have used the asset tags for all of your js, css, and images you can change the location of these without updating your source!
            </p>
            <p>
              This lets you remove requests for static assets off of your application and onto some other CDN, reducing load on your application.
            </p>
            <p>
              In the future we are interested in the ability to push frontend static asset changes separate from an application deploy, but by default I am not sure this is possible using the standard Asset-Pipeline plugin. Production compiled assets have unique hashes in their filenames to bust caches which renders a redeploy of our application necessary to update the server side with those unique filenames.
            </p>
            <p>
              Stay dialed in for more Grails 2 → 3 posts.
            </p>
          </section>

        </div>
      </React.Fragment>
    )
  }
}