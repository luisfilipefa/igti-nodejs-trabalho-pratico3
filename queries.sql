CREATE TABLE owners (
id SERIAL PRIMARY KEY,
name VARCHAR NOT NULL,
phone VARCHAR NOT NULL
)

CREATE TABLE pets (
id SERIAL PRIMARY KEY,
name VARCHAR NOT NULL,
type VARCHAR NOT NULL,
owner_id INT NOT NULL,
CONSTRAINT fk_owners FOREIGN KEY (owner_id) REFERENCES owners (id)
)

INSERT INTO owners (name, phone) VALUES ('Alda Valentim', '(39) 98566-1222')
INSERT INTO owners (name, phone) VALUES ('Nicolas Avelar', '(28) 97432-0379')
INSERT INTO owners (name, phone) VALUES ('Emilly Baptista', '(31) 99545-2457')
INSERT INTO owners (name, phone) VALUES ('Beatriz Bonilha', '(35) 98054-4724')
INSERT INTO owners (name, phone) VALUES ('Nataniel Faleiro', '(33) 99594-3315')
INSERT INTO owners (name, phone) VALUES ('Richard Santos', '(27) 99597-9170')

INSERT INTO pets (name, type, owner_id) VALUES ('Billy', 'Cachorro', 1)
INSERT INTO pets (name, type, owner_id) VALUES ('Nala', 'Cachorro', 2)
INSERT INTO pets (name, type, owner_id) VALUES ('Mimi', 'Gato', 2)
INSERT INTO pets (name, type, owner_id) VALUES ('Dory', 'Cachorro', 3)
INSERT INTO pets (name, type, owner_id) VALUES ('Lulu', 'Cachorro', 4)
INSERT INTO pets (name, type, owner_id) VALUES ('Bob', 'Cachorro', 5)
INSERT INTO pets (name, type, owner_id) VALUES ('Milu', 'Cachorro', 5)
INSERT INTO pets (name, type, owner_id) VALUES ('Emmy', 'Gato', 5)
INSERT INTO pets (name, type, owner_id) VALUES ('Amora', 'Cachorro', 6)