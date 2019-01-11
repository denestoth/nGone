var nemkell = document.evaluate(
    "//div[@class='torrent_txt']/a[contains(@title, '.german.')] | //div[@class='torrent_txt']/a[contains(@title, '.German.')] | //div[@class='torrent_txt']/a[contains(@title, '.GERMAN.')]", 
    document, 
    null, 
    XPathResult.ANY_TYPE, 
    null
);

var current = nemkell.iterateNext();

while(current != null) {
    current.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    nemkell = document.evaluate(
        "//div[@class='torrent_txt']/a[contains(@title, '.german.')] | //div[@class='torrent_txt']/a[contains(@title, '.German.')] | //div[@class='torrent_txt']/a[contains(@title, '.GERMAN.')]", 
        document, 
        null, 
        XPathResult.ANY_TYPE, 
        null
        );
    current = nemkell.iterateNext();
}