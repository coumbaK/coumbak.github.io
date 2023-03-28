function filterProjects() {
    var category = document.querySelector('.chip.selected').getAttribute('data-category');
    var projects = document.querySelectorAll('.project');
    
    for (var i = 0; i < projects.length; i++) {
      var project = projects[i];
      if (category == 'all' || project.getAttribute('data-category') == category) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    }
  }
  
  var chips = document.querySelectorAll('.chip');
  for (var i = 0; i < chips.length; i++) {
    var chip = chips[i];
    chip.addEventListener('click', function() {
    console.log('click')
      var selectedChip = document.querySelector('.chip.selected');
      if (selectedChip) {
        selectedChip.classList.remove('selected');
      }
      this.classList.add('selected');
      filterProjects();
    });
  }
  