CREATE TABLE players( 
player_id INT PRIMARY KEY,
first_name NVARCHAR(255) NOT NULL,
last_name NVARCHAR(255) NOT NULL,
ign NVARCHAR(255) NOT NULL,
age INT NOT NULL CHECK (age > 0 AND age < 100), 
picture VARCHAR(255),
country NVARCHAR(100) NOT NULL, 
socials JSON,
current_team NVARCHAR(255),
past_team ARRAY,
team_id INT,
CONSTRAINT fk_team_id_player_id FOREIGN KEY(team_id) REFERENCES teams(team_id)
);
 
CREATE TABLE teams(
team_id INT PRIMARY KEY,
team_name NVARCHAR(255) NOT NULL,
socials JSON,
current_ranking INT,
team_logo NVARCHAR(255)
);


CREATE TABLE tournaments (
    tournament_id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(255) NOT NULL,
    country CHAR(2),
    prize_pool DECIMAL(18,2),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    logo NVARCHAR(255),
    link NVARCHAR(255)
);

CREATE TABLE player_team(
player_id INT PRIMARY KEY,
team_id INT PRIMARY KEY,
start_date DATE PRIMARY KEY,
end_date DATE
PRIMARY KEY (player_id, team_id, start_date), 
CONSTRAINT fk_player FOREIGN KEY (player_id) REFERENCES players(player_id), 
CONSTRAINT fk_team FOREIGN KEY (team_id) REFERENCES teams(team_id)
);
