
        let character = {
            level: 1,
            health: 100,
            maxHealth: 100,
            mana: 50,
            maxMana: 100,
            experience: 800,
            maxExperience: 1000,
            playerName: "Player Name",
            strength: 1,
            agility: 1,
            sense: 10,
            vitality: 10,
            iq: 30,
            attributePoints: 5
        };

        // Function to update the status window
        function updateStatusWindow() {
            document.getElementById('player-name').innerText = character.playerName;
            document.getElementById('level').innerText = character.level;
            document.getElementById('health').innerText = character.health + '/' + character.maxHealth;
            document.getElementById('mana').innerText = character.mana + '/' + character.maxMana;
            document.getElementById('experience').innerText = character.experience + '/' + character.maxExperience;
            document.getElementById('strength').innerText = character.strength;
            document.getElementById('agility').innerText = character.agility;
            document.getElementById('sense').innerText = character.sense;
            document.getElementById('vitality').innerText = character.vitality;
            document.getElementById('iq').innerText = character.iq;
            document.getElementById('attribute-points').innerText = character.attributePoints;
        }

        updateStatusWindow();

        // button click event that increases the character's level
        document.getElementById('level-up-btn').addEventListener('click', function () {
            character.level += 1;
            character.maxHealth += 100;
            character.maxMana += 50;
            character.attributePoints += 5;

            // Increase current health and mana
            if (character.health < character.maxHealth) {
                character.health = character.maxHealth;
            }
            if (character.mana < character.maxMana) {
                character.mana = character.maxMana;
            }

            character.maxExperience += 10000;
            updateStatusWindow();
        });
        document.getElementById('change-avatar-btn').addEventListener('click', function () {
            document.getElementById('avatar-input').click();
        });

        document.getElementById('avatar-input').addEventListener('change', function (event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function () {
                    const avatarImage = document.getElementById('avatar-image');
                    avatarImage.src = reader.result;
                };
                reader.readAsDataURL(file);
            }
        });

        // Button click event to update the player name
        document.getElementById('update-name-btn').addEventListener('click', function () {
            const newName = document.getElementById('player-name-input').value;
            if (newName.trim() !== "") {
                character.playerName = newName;
                updateStatusWindow();

                // Hide the update name 
                document.getElementById('update-name-section').style.display = 'none';
            }
        });

        // Function to increase an attribute
        function increaseAttribute(attribute) {
            if (character.attributePoints > 0) {
                character[attribute] += 1;
                character.attributePoints -= 1;
                updateStatusWindow();
            }
        }

        // buttons for increasing attributes
        const increaseAttributeButtons = document.getElementsByClassName('increase-attribute-btn');
        for (const button of increaseAttributeButtons) {
            const attribute = button.getAttribute('data-attribute');
            button.addEventListener('click', function () {
                increaseAttribute(attribute);
            });
        }
