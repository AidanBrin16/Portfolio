    fetch('Text/about-me.txt')
      .then(response => response.text())
      .then(text => {
        document.getElementById('about-text').innerHTML = text.replace(/\n/g, '<br>');
      })
      .catch(error => {
        document.getElementById('about-text').innerText = 'Failed to load content.';
        console.error('Error:', error);
      });

    fetch('Text/How-I-Work.txt')
      .then(response => response.text())
      .then(text => {
        document.getElementById('work-text').innerHTML = text.replace(/\n/g, '<br>');
      })
      .catch(error => {
        document.getElementById('work-text').innerText = 'Failed to load content.';
        console.error('Error:', error);
      });