
	'use strict';

	const Utils = require('./utils.js');
	const Sequelize = require('sequelize');
	const Config = require('./config.js');

	var connection = new Sequelize(Config.get("DB_URL"), {
		dialect: Config.get('DB_DIALECT'),

		pool: {
			max: Config.get('DB_POOL_MAX'),
			min: Config.get('DB_POOL_MIN'),
			idle: Config.get('DB_POOL_IDLE')
		},

		define: {
			// don't use camelcase for automatically added attributes but underscore style
			// so updatedAt will be updated_at
			underscored: true,

			// disable the modification of tablenames; By default, sequelize will automatically
			// transform all passed model names (first parameter of define) into plural.
			// if you don't want that, set the following
			freezeTableName: true
		}
	});
	connection.authenticate().complete(function(err) {
		if (err) {
			console.error('Unable to connect to the database:', err);
		} else {
			console.debug('Connection has been established successfully.');
		}
	});

	var mapping = {};
	mapping.Progetto = connection.define('progetto', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		codice: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		titolo: {
			type: Sequelize.STRING,
			allowNull: false
		},
		descrizioneBreve: {
			type: Sequelize.STRING,
			allowNull: false,
			field: "descrizione_breve"
		},
		descrizioneCompleta: {
			type: Sequelize.TEXT,
			allowNull: false,
			field: "descrizione_completa"
		},
		immagine: {
			type: Sequelize.BLOB('long'),
			allowNull: false
		}
	});

	mapping.ProgettoCategoria = connection.define('progetto_categoria', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		}
	});

	mapping.Categoria = connection.define('categoria', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		codice: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		titolo: {
			type: Sequelize.STRING,
			allowNull: false
		},
		descrizione: {
			type: Sequelize.STRING,
			allowNull: false
		},
		immagine: {
			type: Sequelize.BLOB('long'),
			allowNull: false
		}
	});

	mapping.Progetto.hasMany(mapping.ProgettoCategoria, {
		as: 'categorie',
		foreignKey: 'id_progetto'
	});

	mapping.ProgettoCategoria.belongsTo(mapping.Progetto, {
		as: 'progetto',
		foreignKey: 'id_progetto'
	});

	mapping.Categoria.hasMany(mapping.ProgettoCategoria, {
		as: 'prodotti',
		foreignKey: 'id_categoria'
	});

	mapping.ProgettoCategoria.belongsTo(mapping.Categoria, {
		as: 'categoria',
		foreignKey: 'id_categoria'
	});

	mapping.RuoloProgetto = connection.define('ruolo_progetto', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		codice: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		}
	});

	mapping.Utente = connection.define('utente', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: Sequelize.STRING,
			unique: true,
			allowNull: false
		},
		email: {
			type: Sequelize.STRING,
			unique: true,
			allowNull: false
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		}
	}, {
		setterMethods: {
			password: function (value) {
				this.setDataValue('password', Utils.passwordChipher(value));
			}
		}
	});

	mapping.Progetto.hasMany(mapping.RuoloProgetto, {
		as: 'persone',
		foreignKey: 'id_progetto'
	});

	mapping.RuoloProgetto.belongsTo(mapping.Progetto, {
		as: 'progetto',
		foreignKey: 'id_progetto'
	});

	mapping.Utente.hasMany(mapping.RuoloProgetto, {
		as: 'progetti',
		foreignKey: 'id_utente'
	});

	mapping.RuoloProgetto.belongsTo(mapping.Utente, {
		as: 'utente',
		foreignKey: 'id_utente'
	});

	connection.sync();

	exports.database = {
		"mapping": mapping,
		"connection": connection
	};
