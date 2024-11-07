$(document).ready(function() {
    
    const websites = [
        { name: "Tic Tac Toe", url: "https://lmoats11.github.io/Dev-David-TicTac/", author: "Luke Moats" },
        
    ];

    $('#fetchButton').click(function() {
        let content = '';

        
        websites.forEach(site => {
            content += `<p>${site.name} - <a href="${site.url}" target="_blank">${site.url}</a> - ${site.author}</p>`;
        });

        
        $('#dataDisplay').html(content);
    });
});
