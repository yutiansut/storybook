const React = require('react');

const currentYear = new Date().getFullYear();

const Footer = ({ config, language }) => (
  <footer className="nav-footer" id="footer">
    <section className="sitemap">
      <a href={config.baseUrl} className="nav-home">
        <img src={config.baseUrl + config.footerIcon} alt={config.title} width="66" height="58" />
      </a>
      <div>
        <h5>Docs</h5>
        <a href={`${config.baseUrl}docs/${language}/doc1.html`}>
          Getting Started (or other categories)
        </a>
        <a href={`${config.baseUrl}docs/${language}/doc2.html`}>Guides (or other categories)</a>
        <a href={`${config.baseUrl}docs/${language}/doc3.html`}>
          API Reference (or other categories)
        </a>
      </div>
      <div>
        <h5>Community</h5>
        <a href={`${config.baseUrl + language}/users.html`}>User Showcase</a>
        <a href="http://stackoverflow.com/questions/tagged/" target="_blank">
          Stack Overflow
        </a>
        <a href="https://discordapp.com/">Project Chat</a>
        <a href="https://twitter.com/" target="_blank">
          Twitter
        </a>
      </div>
      <div>
        <h5>More</h5>
        <a href={`${config.baseUrl}blog`}>Blog</a>
        <a href="https://github.com/">GitHub</a>
        <a
          className="github-button"
          href={config.repoUrl}
          data-icon="octicon-star"
          data-count-href="/facebook/docusaurus/stargazers"
          data-show-count
          data-count-aria-label="# stargazers on GitHub"
          aria-label="Star this project on GitHub"
        >
          Star
        </a>
      </div>
    </section>

    <a href="https://code.facebook.com/projects/" target="_blank" className="fbOpenSource">
      <img
        src={`${config.baseUrl}img/oss_logo.png`}
        alt="Facebook Open Source"
        width="170"
        height="45"
      />
    </a>
    <section className="copyright">Copyright &copy; {currentYear} Facebook Inc.</section>
  </footer>
);

module.exports = Footer;
