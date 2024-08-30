document.addEventListener('DOMContentLoaded', function() {
            logo = 'Googol'
            logoNumber = 0
            Logos = ['Googol', 'Chromium', 'Sigma', 'Just_me', 'Hello', 'I\'m Coding']
            logos = document.getElementsByClassName('logo')
            for(let i = 0; i < logos.length; i++) {
                logos[i].innerHTML = logo
            }
        })
        function search() {
            specialSites = {'keyword':'URL to go on'}
            if(specialSites.keys().includes(document.getElementById('searchbar').value)) {
                        location.replace(specialSites.values()[specialSites.keys().findIndex(document.getElementById('searchbar').value)])
            } else {
                        if(!(document.getElementById('searchbar').value.includes('.')||document.getElementById('searchbar').value.includes(':'))) {
                                    location.replace('https://www.google.com/search?q='+document.getElementById('searchbar').value)
                        } else {
                                    location.replace(document.getElementById('searchbar').value)
                        }
            }
        }
        function updatelogos() {
            for(let i = 0; i < logos.length; i++) {
                logos[i].innerHTML = logo
            }
            document.getElementById('title').innerText = logo
        }
        function prevlogo() {
            logo = Logos[logoNumber-1]
            logoNumber -= 1
            updatelogos()
        }
        function nextlogo() {
            logo = Logos[logoNumber+1]
            logoNumber += 1
            updatelogos()
        }
