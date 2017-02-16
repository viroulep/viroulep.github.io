//Assumes jQuery is already loaded
function load_from_hal(id) {
    var baseUrl = "https://api.archives-ouvertes.fr/search?q=contributorId_i:" + id;
    baseUrl += "&fl=docid,title_s,authFullName_s,conferenceTitle_s,journalTitle_s,fileMain_s,halId_s,producedDateY_i";
    console.log(baseUrl);
    $.getJSON(baseUrl, function(data) {
        var html = "";
        var curYear = 0;
        var publications_per_year = {};
        $.each(data.response.docs, function(key, val) {
            if (!(val.producedDateY_i in publications_per_year))
                publications_per_year[val.producedDateY_i] = [];
            publications_per_year[val.producedDateY_i].push(val);
        });
        var years = Object.keys(publications_per_year).sort().reverse();
        for (var i = 0; i < years.length; i++) {
            var year = years[i];
            var publis = publications_per_year[year];
            html += "<h2>" + year + "</h2>";
            html += "<ul>";
            $.each(publis, function(key, val) {
                var author = "";
                var title = "";
                var confTitle = val.conferenceTitle_s || val.journalTitle_s;
                $.each(val.authFullName_s, function(key, val) {
                    if (author != "")
                        author += ", ";
                    author += val;
                });
                $.each(val.title_s, function(key, val) {
                    title = val;
                });
                html += '<li>';
                html += '<p><a href="https://hal.inria.fr/' + val.halId_s + '" target="_blank">';
                html += title + '</a></p>';
                html += '<p>' + author + '<br/><em>' + confTitle + '</em><br/>';
                html += '<a href="' + val.fileMain_s + '" target="_blank">';
                html += '<img src="/resources/pdf.png" alt="pdf" /></a>\n';
                html += '<a href="https://hal.inria.fr/' + val.halId_s + '/bibtex" target="_blank">';
                html += '<img src="/resources/bibtex.png" alt="Bibtex" /></a>\n</p>';
                html += '</li>';
            });
            html += "</ul>";
        }
        $("#publications-hal").html(html);
    });
}
