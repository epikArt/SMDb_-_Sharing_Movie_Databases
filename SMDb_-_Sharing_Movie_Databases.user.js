// ==UserScript==
// @name           SMDb - Sharing Movie Databases
// @namespace      www.surrealmoviez.info 
// @description    Cross-site searching for IMDb, cinema communities and open trackers
// @include        https://*.imdb.com/title/tt*
// @include        https://*.imdb.de/title/tt*
// @include        https://*.imdb.es/title/tt*
// @include        https://*.imdb.fr/title/tt*
// @include        https://*.imdb.it/title/tt*
// @include        https://*.imdb.pt/title/tt*
// @include        http://*.imdb.com/title/tt*
// @include        http://*.imdb.de/title/tt*
// @include        http://*.imdb.es/title/tt*
// @include        http://*.imdb.fr/title/tt*
// @include        http://*.imdb.it/title/tt*
// @include        http://*.imdb.pt/title/tt*
// @connect        http://www.opensubtitles.org
// @connect        http://www.subtitleseeker.com
// @connect        http://www.rottentomatoes.com
// @connect        http://www.themoviedb.org
// @connect        http://www.cinemagia.ro
// @connect        http://www.cinemarx.ro
// @connect        http://www.filmaffinity.com
// @connect        https://www.filmaffinity.com
// @connect        http://www.movieposterdb.com
// @connect        http://www.allmovie.com
// @connect        http://letterboxd.com
// @connect        http://www.titrari.ro
// @connect        http://subs.ro
// @connect        https://subtitrari.regielive.ro
// @connect        http://*.regielive.ro
// @connect        http://www.subtitrari-noi.ro
// @connect        http://www.surrealmoviez.info
// @connect        https://karagarga.in
// @connect        https://karagarga.in
// @connect        http://cinemageddon.net
// @connect        http://cinematik.net
// @connect        https://passthepopcorn.me
// @connect        https://*.passthepopcorn.me
// @connect        http://www.iloveclassics.com
// @connect        https://secret-cinema.pw
// @connect        http://www.gormogon.com
// @connect        https://cinemaz.to
// @connect        http://filelist.ro
// @connect        https://filelist.ro
// @connect        http://flro.org
// @connect        http://www.icetorrent.org
// @connect        http://www.myxz.org
// @connect        http://www.u-torrents.ro
// @connect        https://www.torrentsmd.com
// @connect        http://www.elitezones.ro
// @connect        http://goldies.in
// @connect        http://retroflix.net
// @connect        http://oldtcity.xyz
// @connect        https://avistaz.to
// @connect        https://privatehd.to
// @connect        https://hdbits.org
// @connect        https://scenehd.org
// @connect        https://hdts-announce.ru
// @connect        https://hd-torrents.org
// @connect        https://hdclub.org
// @connect        http://elitehd.org
// @connect        https://elitehd.org/
// @connect        https://revolutiontt.me
// @connect        https://iptorrents.com
// @connect        https://www.iptorrents.ru
// @connect        https://www.iptorrents.eu
// @connect        https://www.iptorrents.me
// @connect        https://www.iptorrents.us
// @connect        https://*.iptorrents.com
// @connect        https://ipt.rocks
// @connect        https://tp.m-team.cc
// @connect        https://totheglory.im
// @connect        https://hdsky.me
// @connect        http://hdhome.org
// @connect        https://hdtime.org
// @connect        https://chdbits.co
// @connect        http://ourbits.club
// @connect        http://et8.org
// @connect        https://hdchina.org
// @connect        http://uhdbits.org
// @connect        https://www.acid-lounge.org.uk
// @connect        http://hdme.eu
// @connect        https://bluebird-hd.org
// @connect        https://www.funfile.org
// @connect        https://pretome.info
// @connect        https://danishbits.org
// @connect        https://www.torrentbytes.net
// @connect        https://www.bit-hdtv.com
// @connect        http://www.td.af
// @connect        https://www.td.af
// @connect        https://www.torrentday.com
// @connect        http://kinozal.tv
// @connect        http://www.rutor.info
// @connect        https://nnm-club.name
// @connect        http://rutracker.org
// @connect        http://zamunda.net
// @connect        http://zelka.org
// @connect        https://rarbg.to
// @connect        https://ncore.cc
// @connect        http://torrentvault.org
// @connect        https://torrentvault.org
// @connect        https://hd-space.org
// @connect        http://rodvd.net
// @connect        http://newinsane.info
// @connect        http://www.alluc.ee
// @connect        https://beyond-hd.me
// @connect        https://www.hd-bits.com
// @connect        http://www.mkvcage.com
// @connect        http://datascene.net
// @connect        https://thepiratebay.org
// @connect        https://thepiratebay.se
// @connect        https://zooqle.com
// @connect        http://www.myduckisdead.org
// @connect        http://rarelust.com
// @connect        https://www.morethan.tv
// @connect        https://www.xspeeds.eu
// @connect        https://layer13.net
// @connect        https://btdig.com
// @connect        https://btdb.to
// @connect        https://hd4free.xyz
// @connect        https://*.githubusercontent.com
// @connect        http://*.googleusercontent.com
// @connect        http://img.n-e-s.info
// @connect        http://*.imgur.com
// @connect        https://*.imgur.com
// @connect        http://*.zamunda.se
// @connect        https://youtube.com
// @connect        https://*.youtube.com
// @connect        https://www.upload.ee
// @connect        http://www.zippyshare.com
// @connect        http://localhost
// @connect        *
// @require        http://code.jquery.com/jquery-1.11.1.min.js
// @grant          GM_xmlhttpRequest
// @grant          GM_addStyle
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_setClipboard
// @grant          unsafeWindow
// @grant          window.close
// @grant          window.focus
// @grant          GM_listValues
// @grant          GM_addStyle
// @grant          GM_getResourceText
// @grant          GM_getResourceURL
// @license        GNU GPL v3.0 http://www.gnu.org/licenses/gpl-3.0.txt
// @version        0.7.5
// ==/UserScript==

/**
 * CREDITS
 * 
 * Silk icon set 1.3 by Mark James
 * http://www.famfamfam.com/lab/icons/silk/
 * Creative Commons Attribution 2.5 License http://creativecommons.org/licenses/by/2.5/
 * (+ custom icons gimpped from the collection)
 */

// Add "special" styles (for hover, hidding table-rows, etc)
GM_addStyle('.aux-button { opacity: 0.4; }' +
  '.aux-button:hover { opacity: 1; }' +
  '.smdb-table-row { display: table-row; }' +
  '.smdb-hidden-row { display: none; }' +
  '.smdb-search-icon { opacity: 0.4; }' +
  '.smdb-search-icon:hover { opacity: 1; }'
);

// IMDb parameters
var imdb = {
  id: null,
  idNum: null,
  name: null,
  tName: null,
  year: null,
  extractId: function() {
    var IMDbID = document.documentURI.match(/tt\d{4,}/i)[0];
    if (typeof IMDbID === 'string') {
      this.id = IMDbID;
      this.idNum = IMDbID.replace('tt', '');
    } else {
      alert('Critical error, no IMDb ID found. Please report this issue.');
      throw new Error('No regex match in URI');
    }
  },
  extractTitle: function() {
    var tempTitle = '';
    if (this.isOldDisplay()) {
      tempTitle = $('#tn15title > h1').clone().children().remove().end().text()
        .replace(/"/g, '').trim();
      var tempYear = $('#tn15title > h1 > span > a').text().trim();
      this.name = tempTitle;
      this.year = tempYear;
    } else if (this.isTestingDisplay()) {
      this.year = $('#titleYear > a').text().trim();
      this.name = $('#titleYear').parent().clone().children().remove().end()
        .text().trim();
      if ($('.originalTitle').length > 0) {
        this.tName = this.name;
        this.name = $('.originalTitle').clone().children().remove().end()
          .text().trim();
      }
    } else {
      tempTitle = $('#overview-top > .header > .itemprop');
      var tempOriginalTitle = $('#overview-top > .header > .title-extra');
      this.year = $('#overview-top > .header > .nobr').text()
        .replace('(', '').replace(')', '').trim();
      if (tempOriginalTitle.length > 0) {
        this.name = tempOriginalTitle.clone().children().remove().end()
          .text().replace(/"/g, '').trim();
        this.tName = tempTitle.text().replace('"', '').trim();
      } else {
        this.name = tempTitle.text().trim();
      }
    }
  },
  getTitle: function(withYear, preferOriginal) {
    var tempName = this.name;
    if (!preferOriginal && this.tName !== null) {
      tempName = this.tName;
    }
    var tempYear = ' ' + this.year;
    if (!withYear) {
      tempYear = '';
    }
    return tempName + tempYear;
  },
  isOldDisplay: function() {
    if (document.documentURI.indexOf('/reference') !== -1 ||
        document.documentURI.indexOf('/combined') !== -1) {
      return true;
    }
    return false;
  },
  isTestingDisplay: function() {
    if ($('.plot_summary_wrapper > .plot_summary').length === 1) {
      return true;
    }
    return false;
  },
  getContainerPosition: function() {
    if (this.isOldDisplay()) {
      return '#tn15content';
    }
    if (this.isTestingDisplay()) {
      return '.plot_summary';
    }
    return '.star-box';
  }
};

imdb.extractId();
imdb.extractTitle();

// Images for the possible search result statuses
var status = {
  none: {
    img: 'https://i.imgur.com/GgihS4N.png',
    description: 'Not searched yet'
  },
  found: {
    img: 'https://i.imgur.com/UxeDitk.png',
    description: 'Something found'
  },
  notFound: {
    img: 'https://i.imgur.com/0maAqlP.png',
    description: 'Nothing found'
  },
  notLoggedIn: {
    img: 'https://i.imgur.com/NrVyO87.png',
    description: 'Not logged in'
  },
  error: {
    img: 'https://i.imgur.com/wiLL9wP.png',
    description: 'Site error (down, moved, etc)'
  },
  bug: {
    img: 'https://i.imgur.com/QiB7i7S.png',
    description: 'Bug in the script code (report <a href="https://github.com/surrealcode/smz-userscripts/issues" target="reportIssues">here</a>)'
  },
  timeout: {
    img: 'https://i.imgur.com/KdVN6uC.png',
    description: 'Timeout (no response after 15 seconds)'
  }
};

// Settings switch
var switchy = {
  on: 'https://i.imgur.com/MJzV1rs.png',
  off: 'https://i.imgur.com/I8fSoEw.png',
  getImg: function(bool) {
    if (bool) {
      return switchy.on;
    }
    return switchy.off;
  },
  getOpositeImg: function(src) {
    if (src === switchy.on) {
      return switchy.off;
    }
    return switchy.on;
  }
};

// GM values getter/setter
var gm = {
  setBool: function(valueName, bool) {
    if (typeof bool === 'boolean') {
      GM_setValue(valueName, bool);
      return true;
    }
    return false;
  },
  getBool: function(valueName) {
    return GM_getValue(valueName, true);
  }
};

/**
* Creates a linkeable site.
*
* @constructor
* @this {MiniSite}
* @param {string} name - Complete name of the site.
* @param {string} icon - Site icon (favicon if available), 20x20 px.
* @param {string} query - String to perform a search using the IMDb parameter.
* @param {string} imdbInput - Parameter extracted from IMDb to use as search string.
*/
function MiniSite(name, icon, query, imdbInput) {
  this.name = name;
  this.icon = icon;
  this.query = query;
  this.imdbInput = imdbInput;
  this.getSearchUrl = function() {
    return query.replace('%q', imdbInput);
  };
}

/**
* Creates a searcheable site.
*
* @constructor
* @this {Site}
* @param {string} name - Complete name of the site.
* @param {string} abbreviation - Abbreviation of the site.
* @param {string} icon - Site icon (favicon if available), 20x20 px.
* @param {string} query - String to perform a search using the IMDb parameter.
* @param {string} resultsPath - CSS path indicating matches in the site.
* @param {string} noResultsPath - CSS path indicating no matches in the site.
* @param {string} loginPath - CSS path to identify the site's login page.
* @param {string} imdbInput - Parameter extracted from IMDb to use as search string.
*/
function Site(name, abbreviation, icon, query, resultsPath, noResultsPath, loginPath, imdbInput) {
  this.name = name;
  this.abbreviation = abbreviation;
  this.icon = icon;
  this.query = query;
  this.resultsPath = resultsPath;
  this.noResultsPath = noResultsPath;
  this.loginPath = loginPath;
  this.imdbInput = imdbInput;
  this.searchMe = true; // After a successful search (with or without results), will be false to prevent re-searching if the user hits the pirate button again
  this.isEnabled = function() {
    return gm.getBool(this.getGMValueName());
  };
  this.getImageId = function() {
    return 'platypus-icon-' + abbreviation.toLowerCase();
  };
  this.getSearchUrl = function() {
    return query.replace('%q', imdbInput);
  };
  this.getGMValueName = function() {
    return 'smdb-' + this.abbreviation.toLowerCase() + '-enabled';
  };
  this.performSearch = function() {
    if (!this.searchMe || !this.isEnabled()) {
      return false;
    }
    var targetImage = $('#' + this.getImageId());
    var thisSite = this;
    targetImage.attr('src', status.none.img);
    GM_xmlhttpRequest({
      method: 'GET',
      timeout: 35000,
      url: this.getSearchUrl(),
      onload: function(response) {
        var responseDom = $(response.responseText);
        if ($(thisSite.resultsPath, responseDom).length > 0) {
          targetImage.attr('src', status.found.img);
          thisSite.searchMe = false;
        } else if ($(thisSite.noResultsPath, responseDom).length > 0) {
          targetImage.attr('src', status.notFound.img);
          thisSite.searchMe = false;
        } else if (thisSite.loginPath !== null && $(thisSite.loginPath, responseDom).length > 0) {
          targetImage.attr('src', status.notLoggedIn.img)
            .attr('title', thisSite.name + ' - not logged in');
        } else {
          targetImage.attr('src', status.bug.img);
        }
      },
      onerror: function(response) {
        var errorStatus = response.statusText;
        if (errorStatus === null) {
          errorStatus = 'Site unreachable';
        }
        console.log(name + ' - error\n\n*****Status*****\n\n' + response.status +
          ' ' + response.statusText + '\n\n*****Content*****\n\n' + response.responseText);
        targetImage.attr('src', status.error.img).attr('title', thisSite.name +
          ' - error: ' + errorStatus);
      },
      ontimeout: function(response) {
        targetImage.attr('src', status.timeout.img)
          .attr('title', thisSite.name + ' - timeout');
      }
    });
  };
}

var miniSites = [
    new MiniSite(
            'Youtube',
            'https://i.imgur.com/9oZFpi3.png',
            'https://www.youtube.com/results?search_query=%q',
            imdb.getTitle(true, true)
            ),
    new MiniSite(
            'OpenSubtitles',
            'https://i.imgur.com/HIvJW8U.png',
            'http://www.opensubtitles.org/en/search/imdbid-%q',
            imdb.idNum
            ),
    new MiniSite(
            'SubtitleSeeker',
            'https://i.imgur.com/2yoLMbR.png',
            'http://www.subtitleseeker.com/search/TITLES/%q',
            imdb.getTitle(false, true)
            ),
    new MiniSite(
            'SUBTITLE-INDEX',
            'https://i.imgur.com/HSAST35.png',
            'https://subtitle-index.org/subtitles/Movie?query=%q',
            imdb.getTitle(false, true)
			),
    new MiniSite(
            'Rotten Tomatoes',
            'https://i.imgur.com/UcrFFwA.png',
            'https://www.rottentomatoes.com/search/?search=%q',
            imdb.getTitle(false, true)
            ),
    new MiniSite(
            'TMDb',
            'https://i.imgur.com/75s3CmA.png',
            'http://www.themoviedb.org/search?query=%q',
            imdb.getTitle(false, true)
            ),
    new MiniSite(
            'Cinemagia',
            'https://i.imgur.com/9an8X29.png',
            'http://www.cinemagia.ro/movie.php?imdb_id=%q',
            imdb.id
            ),
    new MiniSite(
            'Cinemarx',
            'http://s2.googleusercontent.com/s2/favicons?domain_url=www.cinemarx.ro',
            'http://www.cinemarx.ro/cauta/%q',
            imdb.getTitle(true, true)
            ),
    new MiniSite(
            'Filmaffinity',
            'https://i.imgur.com/pcZ9csv.png',
            'https://www.filmaffinity.com/en/search.php?stext=%q&stype=title',
            imdb.getTitle(true, true)
            ),
    new MiniSite(
            'MoviePosterDB',
            'https://i.imgur.com/r5wSBig.png',
            'http://www.movieposterdb.com/movie/%q',
            imdb.idNum
            ),
    new MiniSite(
            'AllMovie',
            'https://i.imgur.com/VoVn6fw.png',
            'http://www.allmovie.com/search/all/%q',
            imdb.getTitle(true, true)
            ),
    new MiniSite(
            'Letterboxd',
            'https://i.imgur.com/iHWlHc0.png',
            'http://letterboxd.com/search/%q/',
            imdb.id
            )
];

var sites = [
    new Site(
            'OpenSubtitles',
            'OSub',
            'https://i.imgur.com/HIvJW8U.png',
            'http://www.opensubtitles.org/ro/search/sublanguageid-rum/imdbid-%q',
            'th.head:nth-child(4)',
            'div.msg:nth-child(15)',
            'div.msg:nth-child(6)',
            imdb.idNum
            ),
    new Site(
            'TitrariRO',
            'TTR',
            'https://i.imgur.com/7hzMLcQ.png',
            'http://www.titrari.ro/index.php?page=cautareavansata&z7=&z2=&z5=%q&z3=-1&z4=-1&z8=1&z9=All&z11=0&z6=0',
            'table.forumline:nth-child(4) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > b:nth-child(1)',
            'td.row1:nth-child(3)',
            '.error > li:nth-child(1)',
            imdb.idNum
            ),
    new Site(
            'SubsRO',
            'SRO',
            'https://i.imgur.com/vBakcPi.png',
            'http://subs.ro/subtitrari/imdbid/%q',
            '.btn-download',
            '.error-message-title',
            '.ajax-error > p:nth-child(1)',
            imdb.idNum
            ),
    new Site(
            'Regie',
            'SBTRG',
            'https://i.imgur.com/2gicJlX.png',
            'https://subtitrari.regielive.ro/cauta.html?s=%q',
            '.fa-star-o',
            '.alert',
            null,
            imdb.getTitle(true, true)
            ),
    new Site(
            'Subtitrari-Noi',
            'SNOI',
            'https://i.imgur.com/cu9V8Ck.png',
            'http://www.subtitrari-noi.ro/index.php?action=caut&titlu=%q&tip=imdbid&Cautare=Cautare',
            'table.sub:nth-child(8) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(3) > strong:nth-child(8) > a:nth-child(1) > font:nth-child(1)',
            '.Nu exista inregistrari!',
            null,
            imdb.idNum
            ),			
    new Site(
            'Surrealmoviez',
            'SMz',
            'https://i.imgur.com/lRPJSbf.png',
            'http://www.surrealmoviez.info/search.php?stext=%q&search=Search',
            '.main-bg .main-body > a',
            '.main-body > center:contains(0 Movies found matching search criteria.)',
            '.side-body [name=loginform]',
            imdb.id
            ),
    new Site(
            'Karagarga',
            'KG',
            'https://i.imgur.com/8oxqlvo.png',
            'https://karagarga.in/browse.php?search=%q&search_type=imdb',
            '#browse .oddrow',
            '.outer center > h2:contains(No torrents found)',
            '.outer > h1:contains(Not logged in!)',
            imdb.id
            ),
    new Site(
            'Cinemageddon',
            'CG',
            'https://i.imgur.com/hw7lH77.png',
            'http://cinemageddon.net/browse.php?search=%q&proj=0&descr=1',
            '.torrenttable .prim, .torrenttable .torrenttable_usersnatched',
            '.outer form h2:contains(Nothing found!)',
            'input[value="Log in!"]',
            imdb.id
            ),
    new Site(
            'Cinematik',
            'Tik',
            'https://i.imgur.com/rhM2cxE.png',
            'https://www.cinematik.net/browse.php?search=%q&cat=0&incldead=1&sort=1&type=asc&srchdtls=0',
            '.outer table .brolin',
            '.outer h2:contains(Nothing found!)',
            '#usrlogin',
            imdb.getTitle(true, true)
            ),
	new Site(
            'Goldies',
            'Gold',
            'https://i.imgur.com/7CcuyPW.png',
            'http://goldies.in/index.php?action=search2&advanced=1&brd%5B10%5D=10&brd%5B11%5D=11&brd%5B23%5D=23&brd%5B26%5D=26&brd%5B27%5D=27&brd%5B28%5D=28&brd%5B45%5D=45&brd%5B51%5D=51&brd%5B54%5D=54&brd%5B56%5D=56&brd%5B57%5D=57&brd%5B58%5D=58&brd%5B65%5D=65&brd%5B66%5D=66&brd%5B68%5D=68&brd%5B71%5D=71&brd%5B74%5D=74&brd%5B75%5D=75&brd%5B76%5D=76&brd%5B7%5D=7&brd%5B81%5D=81&brd%5B8%5D=8&brd%5B9%5D=9&maxage=9999&minage=0&search=%q&searchtype=1&sort=relevance%7Cdesc&submit=C%C4%83utare&userspec=',
            '.counter',
            '.button_submit',
            'dt:contains(Parola:)',
            imdb.id
            ),
    new Site(
            'CINEMAZ',
            'euT',
            'http://s2.googleusercontent.com/s2/favicons?domain_url=cinemaz.to',
            'https://cinemaz.to/movies?search=%q&genres=&countries=&languages=&casts=',
            '.image-box',
            '.lead',
            'ul.nav:nth-child(2) > li:nth-child(2) > a:nth-child(1)',
            imdb.id
            ),
    new Site(
            'Secret-Cinema',
            'SC',
            'https://i.imgur.com/Ob5Y12B.png',
            'https://secret-cinema.pw/torrents.php?order_by=relevance&searchstr=%q',
            'td.sign:nth-child(8) > a:nth-child(1) > img:nth-child(1)',
            'h2:contains(Your search did not match anything.)',
            '#loginform > table > tbody > tr:nth-child(3) > td:nth-child(3) > input',
            imdb.getTitle(true, true)
            ),
	new Site(
            'I Love Classics',
            'ILC',
            'https://i.imgur.com/fofv0RS.png',
            'http://www.iloveclassics.com/browse.php?cat=0&incldead=1&search=%q&searchin=2',
            '.NB_fmmain > #hover-over',
            '.table_col1 > td:contains(Try again with a refined search string.)',
            '#topdrag:contains(Log On To I Love Classics)',
            imdb.id
            ),
    new Site(
            'Gormogon',
            'GG',
            'https://i.imgur.com/bMh5utj.png',
            'http://www.gormogon.com/index.php?page=torrents&search=%q&category=0&options=1&active=0',
            '.lista > a > img[alt=torrent]',
            '.lista .header > a:contains(AddDate)', // No real way to know, using a selector to determine that we are at least in a search result page
            '.b-content td:contains(not authorized to view the Torrents!)',
            imdb.id
            ),

    new Site(
            'Filelist',
            'FL',
            'https://i.imgur.com/GcaBG7l.png',
            'http://filelist.ro/browse.php?search=%q&descr=1&btnSubmit=Search!',
            '.torrenttable .small',
            'h2:contains(Nu s-a găsit nimic!)',
            '.main > div:nth-child(2) > div:nth-child(7) > div:nth-child(3) > a:nth-child(1)',
            imdb.id
            ),
    new Site(
            'ICETorrent',
            'ICE',
            'https://i.imgur.com/gkM2U8J.png',
            'http://www.icetorrent.org/browse.php?search=%q&cat=0&search_by=imdb&incldead=1',
            '.torrenttable .tabrow',
            'h2:contains(Nothing here!)',
            '.login > input:nth-child(1)',
            imdb.id
            ),
    new Site(
            'XtremeZone',
            'myxz',
            'https://i.imgur.com/lo5ipZI.png',
            'https://www.myxz.eu/browse.php?search=%q&genre=1&incldead=0&descr=1&btnSubmit=Search!',
            'td.middle:nth-child(9) > a:nth-child(1) > img:nth-child(1)',
            'h2:contains(Nothing found!)',
            '#password',
            imdb.id
            ),
    new Site(
            'DataScene',
            'DST',
            'https://i.imgur.com/gTdEp3e.png',
            'https://datascene.net/browse.php?search=%q&blah=0&cat=0&incldead=1&submit=Search!',
            '.browse > td:nth-child(4) > a:nth-child(1) > img:nth-child(1)',
            'h2:contains(Nothing found!)',
            '#signup > a > font',
            imdb.getTitle(true, true)
            ),			
    new Site(
            'SceneFZ',
            'SFZ',
            'https://www.scenefz.me/favicon-16x16.png',
            'https://scenefz.me/torrents?q=%q&searchin=0&cat=0&dead=1',
            '.icon-cloud-upload',
            'h2:contains(Nothing found!)',
            '.submit',
            imdb.getTitle(true, true)
            ),
    new Site(
            'TorrentsMD',
            'TMD',
            'http://s2.googleusercontent.com/s2/favicons?domain_url=www.torrentsmd.com',
            'https://www.torrentsmd.com/browse.php?imdb=%q',
            '.tableTorrents',
            'h2.center',
            'h1:contains(Nu sunteţi autentificat!)',
            imdb.id
            ),
    new Site(
            'EliteZones',
            'EZ',
            'https://i.imgur.com/18E5iFd.png',
            'http://www.elitezones.ro/browse.php?search=%q&blah=2&incldead=1&btnSubmit=Search!',
            '.index',
            'h2:contains(Nothing found!)',
            'input.btn:nth-child(1)',
            imdb.id
            ),
	new Site(
            'Zamunda',
            'ZMD',
            'https://i.imgur.com/P29TJLL.png',
            'http://zamunda.net/bananas?search=%q&incldead=&field=name',
            'a.buttonPro:nth-child(6)',
            'h2:contains(Sorry, nothing found)',
            '.test > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > input:nth-child(1)',
            imdb.getTitle(true, true)
            ),
    new Site(
            'Zelka',
            'ZLK',
            'https://i.imgur.com/yUKgbAQ.png',
            'http://zelka.org/browse.php?lang=en&search=%q&cat=0&incldead=1',
            'td.colhead:nth-child(8) > a:nth-child(1) > u:nth-child(1)',
            'h2:contains(Нищо не е намерено!)',
            '.test > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > input:nth-child(1)',
            imdb.getTitle(true, true)
            ),
    new Site(
            'RetroFlix',
            'RF',
            'http://s2.googleusercontent.com/s2/favicons?domain_url=retroflix.net',
            'http://retroflix.net/torrents.php?incldead=1&spstate=0&inclbookmarked=0&search=%q&search_area=4&search_mode=0',
            '.seeders',
            'table.main:nth-child(3) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1)',
            '#nav_block > form:nth-child(6) > table > tbody > tr:nth-child(9) > td > input:nth-child(1)',
            imdb.idNum
            ),			
    new Site(
            'TorrentsCity',
            'TCity',
            'https://i.imgur.com/Q9ATfat.png',
            'http://oldtcity.xyz/browse.php?search=%q&blah=1&cat=0&incldead=1&submit=Search!',
            '.browse > td:nth-child(1)',
            'h2:contains(Nothing found!)',
            '#form-container > div > a:nth-child(3)',
            imdb.id
            ),
    new Site(
            'Asia Torrents',
            'AT',
            'http://s2.googleusercontent.com/s2/favicons?domain_url=avistaz.to',
            'https://avistaz.to/movies?search=%q&genres=&countries=&languages=&casts=',
            '.image-box',
            '.lead',
            '#password',
            imdb.name
            ),
    new Site(
            'PrivateHD',
            'PRHD',
            'https://i.imgur.com/hLZueeX.png',
            'https://privatehd.to/movies?search=%q&genres=&countries=&languages=&casts=',
            '.image-box',
            '.lead',
            '#password',
            imdb.name
            ),
    new Site(
            'SceneHD',
            'SHD',
            'https://i.imgur.com/mZXgLvd.png',
            'https://scenehd.org/browse.php?options&categories%5B10%5D=0&categories%5B11%5D=0&categories%5B13%5D=0&categories%5B16%5D=0&categories%5B1%5D=0&categories%5B22%5D=0&categories%5B2%5D=0&categories%5B4%5D=0&categories%5B5%5D=0&categories%5B6%5D=0&categories%5B7%5D=0&categories%5B8%5D=0&categories%5B9%5D=0&genres%5B-10%5D=0&genres%5B-11%5D=0&genres%5B-12%5D=0&genres%5B-13%5D=0&genres%5B-14%5D=0&genres%5B-15%5D=0&genres%5B-16%5D=0&genres%5B-17%5D=0&genres%5B-18%5D=0&genres%5B-19%5D=0&genres%5B-1%5D=0&genres%5B-20%5D=0&genres%5B-21%5D=0&genres%5B-22%5D=0&genres%5B-23%5D=0&genres%5B-24%5D=0&genres%5B-25%5D=0&genres%5B-26%5D=0&genres%5B-27%5D=0&genres%5B-2%5D=0&genres%5B-3%5D=0&genres%5B-4%5D=0&genres%5B-5%5D=0&genres%5B-6%5D=0&genres%5B-7%5D=0&genres%5B-8%5D=0&genres%5B-9%5D=0&genres%5B10%5D=0&genres%5B11%5D=0&genres%5B12%5D=0&genres%5B13%5D=0&genres%5B14%5D=0&genres%5B15%5D=0&genres%5B16%5D=0&genres%5B17%5D=0&genres%5B18%5D=0&genres%5B19%5D=0&genres%5B1%5D=0&genres%5B20%5D=0&genres%5B21%5D=0&genres%5B22%5D=0&genres%5B23%5D=0&genres%5B24%5D=0&genres%5B25%5D=0&genres%5B26%5D=0&genres%5B27%5D=0&genres%5B2%5D=0&genres%5B3%5D=0&genres%5B4%5D=0&genres%5B5%5D=0&genres%5B6%5D=0&genres%5B7%5D=0&genres%5B8%5D=0&genres%5B9%5D=0&search=%q',
            '#th_peers',
            'h2:contains(No torrents found!)',
            '#loginsubmit',
            imdb.id
            ),
	new Site(
            'HDBits',
            'HDBits',
            'https://i.imgur.com/px603GA.png',
            'https://hdbits.org/browse.php?descriptions=0&season_packs=0&from=&to=&imdbgt=0&imdblt=10&uppedby=&imdb=%q&primary_language=&yeargt=&yearlt=&search=',
            'th.center:nth-child(1)',
            'h3:contains(Nothing here!)',
            '.bottom > div:nth-child(1) > form:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > input:nth-child(1)',
            imdb.id
            ),
    new Site(
            'HD-Torrents',
            'HDTS',
            'https://i.imgur.com/o09WTjl.png',
            'https://hdts-announce.ru/torrents.php?search=%q&active=0&options=2',
            '.listas',
            '.lista',
            '.btns > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > form:nth-child(1)',
            imdb.id
            ),
    new Site(
            'M-TeamTP',
            'MTEAM',
            'https://i.imgur.com/e6kyWzC.png',
            'https://tp.m-team.cc/torrents.php?incldead=1&spstate=0&inclbookmarked=0&search=%q&search_area=1&search_mode=2&btn=Go!',
            '.torrents > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > a:nth-child(1) > img:nth-child(1)',
            'h2:contains(Search results for)',
            '.box > form:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > input:nth-child(1)',
            imdb.id
            ),
	new Site(
            'CHDBits',
            'CHD',
            'https://i.imgur.com/oEQt4EQ.png',
            'https://chdbits.co/torrents.php?incldead=1&spstate=0&inclbookmarked=0&search=%q&search_area=4&search_mode=0&btn=Go!',
            '.torrents > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > a:nth-child(1) > img:nth-child(1)',
            'h2:contains(Search results for)',
            'h1:contains(Not logged in!)',
            imdb.id
            ),
    new Site(
            'HDPter',
            'HDP',
            'http://s2.googleusercontent.com/s2/favicons?domain_url=ourbits.club',
            'http://ourbits.club/torrents.php?incldead=1&spstate=0&inclbookmarked=0&search=%q&search_area=4&search_mode=0&btn=Go!',
            '.seeders',
            'h2:contains(Search results for)',
            'h1:contains(Not logged in!)',
            imdb.id
            ),
	new Site(
            'HDTime',
            'HDTM',
            'https://i.imgur.com/EZmHukD.png',
            'https://hdtime.org/torrents.php?incldead=1&spstate=0&inclbookmarked=0&search=%q&search_area=1&search_mode=1&btn=Go!',
            '.download',
            'h2:contains(Search results for)',
            'input.btn:nth-child(1)',
            imdb.id
            ),
	new Site(
            'TorrentCCF',
            'TCCF',
            'http://et8.org/favicon.ico',
            'http://et8.org/torrents.php?incldead=0&spstate=0&inclbookmarked=2&search=%q&search_area=4&search_mode=1&btn=Go!',
            '.download',
            'h2:contains(Search results for)',
            'input.btn:nth-child(1)',
            imdb.id
            ),
    new Site(
            'ToTheGlory',
            'TTG',
            'https://i.imgur.com/Ktpy2Fw.png',
            'https://totheglory.im/browse.php?search_field=%q+%2Bincdead&c=M',
            'td.colhead:nth-child(1)',
            'h2:contains(Didn\'t match any titles!)',
            'div.login-screen:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(3) > label:nth-child(2)',
            imdb.getTitle(true, true)
            ),			
    new Site(
            'HDSky',
            'HDS',
            'https://i.imgur.com/FCM49YW.png',
            'https://hdsky.me/torrents.php?incldead=1&spstate=0&inclbookmarked=0&search=%q&search_area=1&search_mode=0&btn=Go!',
            '.download',
            'h2:contains(Search results for)',
            'input.btn:nth-child(1)',
            imdb.id
            ),
    new Site(
            'HDHome',
            'HDH',
            'https://i.imgur.com/5mq8DBv.png',
            'http://hdhome.org/torrents.php?incldead=1&spstate=0&inclbookmarked=0&search=%q&search_area=1&search_mode=1&btn=Go!',
            '.rowfollow .torrentname',
            'table.main:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1)',
            'input.btn:nth-child(1)',
            imdb.id
            ),
    new Site(
            'HDChina',
            'HDC',
            'https://i.imgur.com/uMvwEO2.png',
            'https://hdchina.org/torrents.php?incldead=1&spstate=0&inclbookmarked=0&boardid=0&seeders=&search=%q&search_area=4&search_mode=0&btns=Go!',
            '.t_name .tbname',
            'p:contains(Nothing found! Try again with a refined search string.)',
            'input.btnl:nth-child(1)',
            imdb.id
            ),			
    new Site(
            'UHDBits',
            'UHD',
            'https://i.imgur.com/4VWOAZn.png',
            'http://uhdbits.org/torrents.php?action=advanced&groupname=%q',
            '.group_torrent',
            'h2:contains(Your search did not match anything.)',
            '.submit',
            imdb.id
            ),
	new Site(
            'Bj Share',
            'BjS',
            'https://bj-share.info/favicon.ico',
            'https://bj-share.info/torrents.php?searchstr=%q',
            '.group_torrent',
            'h2:contains(Your search did not match anything.)',
            '.submit',
            imdb.getTitle(true, true)
            ),
    new Site(
            'Acid-Lounge',
            'ACID',
            'https://i.imgur.com/kRjpw2O.png',
            'https://www.acid-lounge.org.uk/browse.php?search=%q&search_type=desc&searchcat=0&submit=Search!',
            '.torrent_table_actions',
            'h2:contains(Nothing found!)',
            'span.menuItem:nth-child(2) > a:nth-child(1)',
            imdb.id
            ),
    new Site(
            'HDme',
            'HDME',
            'https://i.imgur.com/XaWASaN.png',
            'http://hdme.eu/browse.php?search=%q&blah=1&cat=0&incldead=1',
            '.outer > table:nth-child(14) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(11) > a:nth-child(1) > img:nth-child(1)',
            'h2:contains(Nothing found!)',
            'p:contains(Note: You need cookies enabled to log in.)',
            imdb.id
            ),
    new Site(
            'BlueBird',
            'BLUEBIRD',
            'https://i.imgur.com/GbrNvEi.png',
            'https://bluebird-hd.org/browse.php?search=&incldead=0&cat=0&dsearch=%q&stype=or',
            'table.main:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > b:nth-child(1)',
            '.index',
            '.error',
            imdb.id
            ),
	new Site(
            'Bit-HDTV',
            'BHDTV',
            'http://s2.googleusercontent.com/s2/favicons?domain_url=www.bit-hdtv.com',
            'https://www.bit-hdtv.com/torrents.php?search=%q&options=4&cat=0&subcat=0&resolution=0&free=0',
            '.colhead>a',
            'h2:contains(No match!)',
            'h2:contains(BHD Recruitment HERE)',
            imdb.id
            ),
	new Site(
            'Beyond-HD',
            'BndHD',
            'http://s2.googleusercontent.com/s2/favicons?domain_url=beyond-hd.me',
            'https://beyond-hd.me/browse.php?c50=1&c41=1&c40=1&c83=1&c77=1&c44=1&c75=1&c71=1&c48=1&c49=1&c94=1&c89=1&c78=1&c46=1&c37=1&c45=1&c54=1&c17=1&search=%q&searchin=title&incldead=1',
            '.fa.fa-download',
            '.article>h2',
            '.verify',
            imdb.id
            ),
	new Site(
            'HD-Space',
            'HSP',
            'https://i.imgur.com/Y2o9gJZ.png',
            'https://hd-space.org/index.php?page=torrents&search=%q&active=0&options=0',
            '#bodyarea > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1) > p:nth-child(1) > b:nth-child(4)',
            null,
            '#want_password1',
            imdb.getTitle(true, true)
            ),
    new Site(
            'Hd-BitsCom',
            'HDBc',
            'https://i.imgur.com/j3qAy2E.png',
            'https://www.hd-bits.com/torrents.php?searchstr=%q&order_by=time&order_way=desc&group_results=1&filter_cat%5B2%5D=1&action=basic&searchsubmit=1',
            'tr.torrent:nth-child(2)',
            'h2:contains(Your search did not match anything.)',
            '.submit',
            imdb.getTitle(true, true)
            ),
	new Site(
            'PassThePopcorn',
            'PtP',
            'https://i.imgur.com/Q0AqC1B.png',
            'https://passthepopcorn.me/torrents.php?order_by=relevance&searchstr=%q',
            '.basic-movie-list__torrent-row, .page__title',
            'h2:contains(Your search did not match anything)',
            '#loginfields',
            imdb.id
            ),
	new Site(
            'Tehconnection',
            'TC',
            'https://i.imgur.com/U0q5xGR.png',
            'https://tehconnection.me/torrents.php?order_by=relevance&searchstr=%q',
            '.group_torrent',
            'h2:contains(Your search did not match anything.)',
            '.submit',
            imdb.getTitle(true, true)
            ),
    new Site(
            'FunFile',
            'FF',
            'https://i.imgur.com/NQlNidn.png',
            'https://www.funfile.org/browse.php?search=%q&cat=0&incldead=1&s_desc=1&showspam=0',
            'td.row3:nth-child(3) > a:nth-child(1) > img:nth-child(1)',
            'h2:contains(Nothing found!)',
            'table.mainframe:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > form:nth-child(2) > div:nth-child(4) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1) > a:nth-child(1)',
            imdb.id
            ),
    new Site(
            'PreToMe',
            'PTM',
            'https://i.imgur.com/iIceEBw.png',
            'https://pretome.info/browse.php?search=%q&tags=&st=1&sd=1&tf=any&cat[]=19&cat[]=7',
            'table.mainframe:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > div:nth-child(2) > b:nth-child(2)',
            'h2:contains(No .torrents fit this filter criteria)',
            '#txtContent > h2:nth-child(1) > a:nth-child(1)',
            imdb.id
            ),
    new Site(
            'DanishBits',
            'DBTS',
            'http://s2.googleusercontent.com/s2/favicons?domain_url=danishbits.org',
            'https://danishbits.org/torrents.php?action=newbrowse&search=%q&pre_type=s_imdb&type=',
            'tr.torrent:nth-child(3) > td:nth-child(2) > span:nth-child(1) > div:nth-child(2) > a:nth-child(2) > span:nth-child(1)',
            '.alertbar > a:nth-child(1) > font:nth-child(1)',
            '#loginform',
            imdb.id
            ),
	new Site(
            'RevolutionTT',
            'RevTT',
            'https://i.imgur.com/NQxkWJs.png',
            'https://revolutiontt.me/browse.php?search=%q&cat=0&incldead=1&btn=Search',
            '.br_right',
            'h2:contains(Nothing found!)',
            '#username',
            imdb.id
            ),
    new Site(
            'TorrentBytes',
            'TBYS',
            'https://i.imgur.com/7U14RQ5.png',
            'https://www.torrentbytes.net/browse.php?search=%q&cat=0&sc=2',
            'td.colhead:nth-child(9) > a:nth-child(1)',
            'h2:contains(Nothing found!)',
            '#content > div:nth-child(1) > form:nth-child(3)',
            imdb.id
            ),
	new Site(
            'nCore',
            'NCR',
            'https://i.imgur.com/Hwd3o6L.png',
            'https://ncore.cc/torrents.php?kivalasztott_tipus%5B%5D=xvid&kivalasztott_tipus%5B%5D=dvd&kivalasztott_tipus%5B%5D=dvd9&kivalasztott_tipus%5B%5D=hd&miben=name&mire=%q&nyit_filmek_resz=true&submit.x=36&submit.y=19&tags=&tipus=kivalasztottak_kozott',
            'div.box_torrent:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)',
            '.lista_mini_error',
            '#login > form:nth-child(1) > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > input:nth-child(1)',
            imdb.getTitle(true, true)
            ),
	new Site(
            'IPTorrents',
            'IPT',
            'https://i.imgur.com/j3aUH7h.png',
            'https://www.iptorrents.com/t?q=%q&qf=all#torrents&btn=Search',
            '#torrents > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(4) > a:nth-child(1) > i:nth-child(1)',
            'h3:contains(Suggestions)',
            '.password',
            imdb.id
            ),
    new Site(
            'TorrentDay',
            'TD',
            'http://s2.googleusercontent.com/s2/favicons?domain_url=www.torrentday.com',
            'https://www.torrentday.com/t?q=%q&qf=adv',
            '#torrentTable > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(3) > a:nth-child(1) > img:nth-child(1)',
            '#torrentTable > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > h1:nth-child(1)',
            '.password',
            imdb.id
            ),
	new Site(
            'MoreThanTV',
            'MTV',
            'http://s2.googleusercontent.com/s2/favicons?domain_url=www.morethan.tv',
            'https://www.morethan.tv/torrents.php?groupname=%q&tags_type=1&order_by=time&order_way=desc&group_results=1&filter_cat[1]=1&action=advanced&searchsubmit=1',
            'td.sign:nth-child(8) > a:nth-child(1) > img:nth-child(1)',
            'h2:contains(Your search did not match anything.)',
            '#password',
            imdb.getTitle(true, true)
            ),
	new Site(
            'Nebulance',
            'NBL',
            'https://i.imgur.com/UUrvHJC.png',
            'https://nebulance.io/torrents.php?searchtext=%q',
            'td.sign:nth-child(8) > a:nth-child(1) > img:nth-child(1)',
            'h2:contains(Your search did not match anything.)',
            '#password',
            imdb.getTitle(true, true)
            ),
	new Site(
            'Tv Vault',
            'tvv',
            'https://i.imgur.com/b9FsFZk.png',
            'https://tv-vault.me/torrents.php?searchstr=%q',
            'td.sign:nth-child(8) > a:nth-child(1) > img:nth-child(1)',
            'h2:contains(Your search did not match anything.)',
            '#password',
            imdb.getTitle(true, true)
            ),
    new Site(
            'XSpeeds',
            'XS',
            'https://i.imgur.com/lKFNxOC.png',
            'https://www.xspeeds.eu/browse.php?category=0&do=search&include_dead_torrents=yes&keywords=%q&search_type=t_description',
            '.unsortable2',
            'b:contains(Nothing Found)',
            '.left_side > form:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2) > input:nth-child(1)',
            imdb.id
            ),
    new Site(
            'Immortal Seed',
            'IS',
            'https://i.imgur.com/6jgVzW9.png',
            'https://immortalseed.me/browse.php?do=search&keywords=%q&search_type=t_genre&category=0&include_dead_torrents=yes',
            '.unsortable2',
            'b:contains(Nothing Found)',
            '.left_side > form:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2) > input:nth-child(1)',
            imdb.id
            ),
	new Site(
            'BitvaulTtorrent',
            'bV',
            'https://i.imgur.com/MAiMgV0.png',
            'https://www.bitvaulttorrent.com/browse.php?search=%q&cat=0&incldead=1&blah=0',
            'h1:contains(tt)',
            'h1:contains(Nothing Found)',
            null,
            imdb.getTitle(true, true)
            ),		
    new Site(
            'CCFBits',
            'CCFB',
            'https://i.imgur.com/w46tc1p.png',
            'https://ccfbits.org/browse.php?search=%q&cat=0&incldead=1',
            'h1:contains(tt)',
            'h1:contains(Nothing Found)',
            null,
            imdb.getTitle(true, true)
            ),	
	new Site(
            'Blutopia',
            'B',
            'https://i.imgur.com/41qsOtz.png',
            'https://blutopia.xyz/torrents?search=%q',
            '.vertTh',
            'h2:contains( *No hits. Try adding an asterisk in you search phrase.)',
            null,
            imdb.getTitle(true, true)
            ),		
    new Site(
            'HD-Forever',
            'HD-F',
            'https://hdf.world/favicon.ico',
            'https://hdf.world/torrents.php?order_by=relevance&searchstr=%q',
            'td.sign:nth-child(8) > a:nth-child(1) > img:nth-child(1)',
            'h2:contains(Your search did not match anything.)',
            '#loginform > table > tbody > tr:nth-child(3) > td:nth-child(3) > input',
            imdb.getTitle(true, true)
            ),	
    new Site(
            'x264',
            'x264',
            'https://i.imgur.com/b3Dt56A.png',
            'https://x264.me/browse.php?search=%q&incldead=1&xtype=0&stype=0',
            'td.sign:nth-child(8) > a:nth-child(1) > img:nth-child(1)',
            'h2:contains(Your search did not match anything.)',
            '#loginform > table > tbody > tr:nth-child(3) > td:nth-child(3) > input',
            imdb.getTitle(true, true)
            ),
	new Site(
            'RoDVD-Net',
            'RODVD',
            'https://i.imgur.com/EPx2G4a.png',
            'http://rodvd.net/browse.php?key=9&search=%q',
            'td.middletabelheadmain:nth-child(2) > font:nth-child(1) > b:nth-child(1)',
            'h2:contains(Nothing found!)',
            '#password',
            imdb.id
            ),
    new Site(
            'Insane Tracker',
            'iNSANE',
            'https://i.imgur.com/DxpsEga.png',
            'https://dev.newinsane.info/browse.php?search=%q&torart=tor&cat=25&subcats%5B%5D=1&subcats%5B%5D=3&subcats%5B%5D=4&subcats%5B%5D=5&subcats%5B%5D=6&subcats%5B%5D=11&subcats%5B%5D=17&subcats%5B%5D=19&subcats%5B%5D=26&subcats%5B%5D=32&subcats%5B%5D=40&subcatcon=or&incldead=1&searchsort=&searchtype=desc&gen=0&ggen=0&sty=0&bookcat=0&insfav=0&seedneeded=0&mytorrents=0&xmas=0',
            'td.colhead:nth-child(1)',
            'h1:contains(Nem található semmi!)',
            '#login_submit > input[type="image"]',
            imdb.id
            ),
    new Site(
            'Wigornot',
            'WON',
            'https://i.imgur.com/AhImVmD.png',
            'https://wigornot.com/f/imdbsearch.php?title=%q&limit=1',
            'td.colhead:nth-child(1)',
            'h1:contains(Nem található semmi!)',
            '#login_submit > input[type="image"]',
            imdb.getTitle(true, true)
            ),
	new Site(
            'Internet Archive',
            'IA',
            'https://i.imgur.com/HNM42H1.png',
            'https://archive.org/search.php?query=%q&and[]=mediatype%3A%22movies%22',
            '.entry-content',
            '.entry-header > .entry-title:contains(Nothing Found)',
            null,
            imdb.getTitle(true, true)
            ),
    new Site(
            'My Duck is Dead',
            'MDiD',
            'https://i.imgur.com/3YKZRq7.png',
            'http://www.myduckisdead.org/search?q=%q',
            '.postwrap',
            '.status-msg-body:contains(No posts matching)',
            null,
            imdb.id
            ),
    new Site(
            'Rarelust',
            'RL',
            'https://i.imgur.com/R7QYpEI.png',
            'http://rarelust.com/?s=%q',
            '.entry-content',
            '.entry-header > .entry-title:contains(Nothing Found)',
            null,
            imdb.id
            ),
    new Site(
            'Retrovision Classic Movies',
            'RCM',
            'https://i.imgur.com/xufhFh7.png',
            'http://retrovision.tv/?s=%q',
            '.entry-content',
            '.entry-header > .entry-title:contains(Nothing Found)',
            null,
            imdb.getTitle(true, true)
            ),
	new Site(
            'BtDig',
            'BtDIG',
            'https://i.imgur.com/iqwXx2z.png',
            'https://btdig.com/search?order=0&q=%q',
            null,
            null,
            null,
            imdb.getTitle(true, true)
            ),
    new Site(
            'BtDb',
            'BtDB',
            'http://s2.googleusercontent.com/s2/favicons?domain_url=btdb.to',
            'https://btdb.to/q/%q/',
            null,
            null,
            null,
            imdb.getTitle(true, true)
            ),
	new Site(
            'ETTV',
            'ETTV',
            'https://i.imgur.com/7fUyWN5.png',
            'https://www.ettv.tv/torrents-search.php?search=%q&cat=0&incldead=1&lang=0',
            '#resultitems .resblock > .clickable',
            '#noresultextrasadvice',
            null,
            imdb.getTitle(true, true)
            ),
	new Site(
            'GloTorrents',
            'GT',
            'https://i.imgur.com/pivRHeS.png',
            'http://glodls.to/search_results.php?search=%q&incldead=Search',
            'h1:contains(tt)',
            'h1:contains(Nothing Found)',
            null,
            imdb.getTitle(true, true)
            ),	
			    new Site(
            'KinozalTV',
            'KTB',
            'https://i.imgur.com/mWULhXL.png',
            'http://kinozal.tv/browse.php?s=%q',
            '.t_peer',
            '.pad10x10',
            null,
            imdb.getTitle(true, true)
            ),
    new Site(
            'Rutor',
            'RTR',
            'http://s2.googleusercontent.com/s2/favicons?domain_url=www.rutor.info',
            'http://www.rutor.info/search/%q',
            'tr.gai:nth-child(2) > td:nth-child(2) > a:nth-child(1) > img:nth-child(1)',
            'Результатов поиска 0',
            null,
            imdb.getTitle(true, true)
            ),
    new Site(
            'NNMClub',
            'NNM',
            'http://s2.googleusercontent.com/s2/favicons?domain_url=nnm-club.me',
            'http://nnm-club.me/forum/tracker.php?f=-1&nm=%q&search_submit=',
            'tr.prow1:nth-child(1) > td:nth-child(5) > a:nth-child(1) > b:nth-child(1)',
            'table.forumline:nth-child(15) > tbody:nth-child(3) > tr:nth-child(1) > td:nth-child(1) > span:nth-child(1)',
            null,
            imdb.getTitle(true, true)
            ),
    new Site(
            'ruTracker',
            'RT',
            'https://i.imgur.com/5m2AOF7.png',
            'http://rutracker.org/forum/tracker.php?nm=%q',
            '#search-results .f-name',
            '#search-results .row1:contains(Не найдено)',
            'input[name=login_username]',
            imdb.getTitle(true, true)
            ),
    new Site(
            'Rarbg',
            'RBG',
            'https://i.imgur.com/0HTNoyT.png',
            'https://rarbg.to/torrents.php?search=%q',
            'td.header6:nth-child(4) > a:nth-child(1)',
			null,
            null,
            imdb.id
            ),
	new Site(
            'MkvCage',
            'mkvc',
            'https://i.imgur.com/TBBxxEL.png',
            'http://www.mkvcage.com/?s=%q',
            'h1:contains(tt)',
            'h1:contains(Nothing Found)',
            null,
            imdb.id
            ),
    new Site(
            'Layer13',
            'L13',
            'https://i.imgur.com/ZwXqoTU.png',
            'https://layer13.net/browse?q=%q+@section+X264',
            '.table.table-hover>tbody>tr>td>b>a',
            '.text-danger',
            null,
            imdb.getTitle(true, true)
            ),
	new Site(
            'The Pirate Bay',
            'TPB',
            'https://i.imgur.com/If0wj1z.png',
            'https://thepiratebay.org/search/%q/0/7/0',
            '.vertTh',
            'h2:contains( *No hits. Try adding an asterisk in you search phrase.)',
            null,
            imdb.id
            ),
    new Site(
            'Zooqle',
            'ZQ',
            'http://s2.googleusercontent.com/s2/favicons?domain_url=zooqle.com',
            'https://zooqle.com/search?q=%q+category%3AMovies',
            '.table > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(3) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1) > i:nth-child(1)',
            'p.margin-top-10',
            null,
            imdb.getTitle(true, true)
            ),	
    new Site(
            'Niigu',
            'Niigu',
            'https://i.imgur.com/lOVwjXc.png',
            'http://www.niigu.com/search?k=%q',
            'h1:contains(tt)',
            'h1:contains(Nothing Found)',
            null,
            imdb.getTitle(true, true)
            ),	
    new Site(
            'Magnets Search Engine',
            'MSE',
            'https://magnets.dissidence.ovh/favicon.ico',
            'https://magnets.dissidence.ovh/?q=%q',
            'h1:contains(tt)',
            'h1:contains(Nothing Found)',
            null,
            imdb.getTitle(true, true)
            ),			
    new Site(
            'Torrents',
            'T',
            'https://torrents.me/wp-content/themes/toto/assets/img/favicon.png',
            'https://torrents.me/s/%q',
            'h1:contains(tt)',
            'h1:contains(Nothing Found)',
            null,
            imdb.getTitle(true, true)
            ),	
    new Site(
            'Torrent Project',
            'TP',
            'https://torrentprojects.top/favicon.ico',
            'https://torrentprojects.top/search.php?q=%q',
            'h1:contains(tt)',
            'h1:contains(Nothing Found)',
            null,
            imdb.getTitle(true, true)
            ),		
    new Site(
            'idope',
            'idope',
            'https://i.imgur.com/2ChJ12o.png',
            'https://www.idope.cc/torrent-list/%q',
            'h1:contains(tt)',
            'h1:contains(Nothing Found)',
            null,
            imdb.getTitle(true, true)
            ),	
    new Site(
            'Torrentz2',
            'T2',
            'https://i.imgur.com/jrYKeaM.png',
            'https://torrentz2.eu/search?f=%q',
            'h1:contains(tt)',
            'h1:contains(Nothing Found)',
            null,
            imdb.getTitle(true, true)
            ),		
			
];

var container = '<div style="display: table; width: 100%; max-width: 665px; border-top: 1px solid #e8e8e8, padding-top: 1em, padding-bottom: 1em; border-collapse: collapse;">' +

 '<div style="display: table-row;">' +
 '<div id="mini-container" style="display: table-cell; vertical-align: middle; text-align: center;"></div>' +
 '</div>' +

 '<div style="display: table-row;">' +
 '<div id="platypus-container" style="display: table-cell; vertical-align: middle; text-align: center;"></div>' +
 '<div style="display: table-cell; width: 40px; vertical-align: middle;">' +
 '<img id="platypus-button" src="https://i.imgur.com/hDPke2e.png" alt="Search!" title="Search!" style="margin-left: 0px; cursor: pointer;">' +
 '</div>' +
 '</div>' +

 '<div style="display: table-row; height: 20px;">' +
 '<div style="display: table-cell;">' +
 '</div>' +
 '<div style="display: table-cell; vertical-align: bottom; text-align: center;">' +
 '<img id="smdb-settings-button" class="aux-button row-displayer" target-row="smdb-settings-row" src="http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/24/Actions-configure-toolbars-icon.png" alt="Settings" title="Settings" style="cursor: pointer;">' +
 '<img id="smdb-help-button" class="aux-button row-displayer" target-row="smdb-help-row" src="https://i.imgur.com/bPzlLeG.png" alt="Help" title="Help" style="cursor: pointer;">' +
 '</div>' +
 '</div>' +

 '<div id="smdb-settings-row" class="smdb-hidden-row" style="border: 1px dashed silver;">' +
 '<div id="smdb-settings" style="display: table-cell;"></div>' +
 '<div style="display: table-cell; vertical-align: middle; text-align: center;"><img id="smdb-reload" src="https://raw.githubusercontent.com/surrealcode/smz-userscripts/master/smdb/img/reload.png" alt="Reload" title="Reload" style="cursor: pointer; display: none;"></div>' +
 '</div>' +

 '<div id="smdb-help-row" class="smdb-hidden-row" style="border: 1px dashed silver;">' +
 '<div id="smdb-help" style="display: table-cell; padding: 5px;">' +
 '<h4>Usage:</h4>See the complete usage instructions <a href="https://github.com/surrealcode/smz-userscripts/tree/master/smdb#usage" target="smdbHelp">here</a>.<br>' +
 '<h4>Statuses:</h4><ul id="smdb-statuses-list" style="list-style-type: none;"></ul><br>' +
 '<h4>Accuracy:</h4>The results are only a reference. Sites can have missing info or misspelled names. Do some manual searches if you want to be 100% sure.<br><br>' +
 '<h4>Why is site X not listed?</h4>Some sites don\'t support straightforward searches (listed <a href="https://github.com/surrealcode/smz-userscripts/tree/master/smdb#list-of-unsupported-sites" target="smdbHelp">here</a>). Others are currently out of my reach, I don\'t know them or are not in the focus of the script.<br><br>' +
 '</div>' +
 '</div>' +

 '</div>';


$(document).ready(function() {
  $(container).insertBefore(imdb.getContainerPosition());

  // Insert the list of mini sites to be clicked only
  for (var i = 0; i < miniSites.length; i++) {
    var miniSite = miniSites[i];
    $('#mini-container').append('<a href="' + miniSite.getSearchUrl() +
      '" target="miniTab"><img src="' + miniSite.icon + '" style="width: 16px; height: 16px; margin: 3px;" alt="' + miniSite.name + '" title="' + miniSite.name + '"></a>');
  }

  // Insert the list of sites to be searched
  for (var i = 0; i < sites.length; i++) {
    var site = sites[i];
    // Add it to the fetch list
    if (site.isEnabled()) {
      $('#platypus-container').append('<a href="' + site.getSearchUrl() + '" target="platypusTab"><img id="' + site.getImageId() + '" class="smdb-search-icon" src="' + status.none.img + '" style="width: 18px; height: 18px; background: url(' + site.icon + '); background-repeat: no-repeat; margin: 3px;" alt="' + site.abbreviation + '" title="' + site.name + '"></a>');
    }
    // Add it to the settings list
    $('#smdb-settings').append('<div style="display: inline-block; width: 33px; margin: 11px;"><img class="smdb-settings-switch" target-gm-value="' + site.getGMValueName() + '" src="' + switchy.getImg(site.isEnabled()) + '" style="margin-right: 3px; cursor: pointer;"><img src="' + site.icon + '" alt="' + site.abbreviation + '" title="' + site.name + '"></div>');
  }

  // Insert the list of possible statuses in the help area
  for (var stat in status) {
    $('#smdb-statuses-list').append('<li style="padding: 0; margin: 0;"><img src="' + status[stat].img + '"> = ' + status[stat].description + '</li>');
  }

  // Add action to the search button
  $('#platypus-button').click(function() {
    $('.smdb-search-icon').css('opacity', '1');
    $('#platypus-button').attr('alt', 'Retry!').attr('title', 'Retry!');
    for (var i = 0; i < sites.length; i++) {
      var site = sites[i];
      site.performSearch();
    }
  });

  // Add action to the auxiliary buttons (config, help, etc)
  $('.row-displayer').click(function() {
    $(this).toggleClass('aux-button');
    $('#' + $(this).attr('target-row')).toggleClass('smdb-hidden-row smdb-table-row');
  });

  // Add action to the site switches in the config area
  $('.smdb-settings-switch').click(function() {
    var targetGMValue = $(this).attr('target-gm-value');
    if (gm.setBool(targetGMValue, !gm.getBool(targetGMValue))) {
      $(this).attr('src', switchy.getOpositeImg($(this).attr('src')));
      $('#smdb-reload').show();
    } else {
      alert('Error saving settings!');
    }
  });

  // Add action to the reload button in the search area
  $('#smdb-reload').click(function() {
    window.location.reload();
  });
});
