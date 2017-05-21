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
connection.authenticate().complete(function (err) {
	if (err) {
		console.error('Unable to connect to the database:', err);
	} else {
		console.debug('Connection has been established successfully.');
	}
});

var mapping = {};
mapping.Project = connection.define('project', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	code: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	shortDescription: {
		type: Sequelize.STRING,
		allowNull: false,
		field: "shortDescription"
	},
	fullDescription: {
		type: Sequelize.TEXT,
		allowNull: false,
		field: "fullDescription"
	},
	image: {
		type: Sequelize.BLOB('long'),
		allowNull: false
	}
});

mapping.Tag = connection.define('tag' {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	code: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

mapping.ProjectTags = connection.define('project_tags' {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	}
});

mapping.Project.hasMany(mapping.ProjectTags, {
	as: 'tags',
	foreignKey: 'id_project_tag'
});

mapping.ProjectTags.belongsTo(mapping.Project, {
	as: 'project',
	foreignKey: 'id'
});

mapping.Tag.hasMany(mapping.ProjectTags, {
	as: 'projects',
	foreignKey: 'id_project_tag'
});

mapping.ProjectTags.belongsTo(mapping.Tag, {
	as: 'tag',
	foreignKey: 'id'
});

mapping.Technology = connection.define('technology', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	code: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	shortDescription: {
		type: Sequelize.STRING,
		allowNull: false,
		field: "shortDescription"
	}
});

mapping.TechnologyUsage = connection.define('technology_usage', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	usageDescription: {
		type: Sequelize.STRING,
		allowNull: false,
		field: "usageDescription"
	}
});

mapping.Project.hasMany(mapping.TechnologyUsage, {
	as: 'technologies',
	foreignKey: 'id_technology_usage'
});

mapping.TechnologyUsage.belongsTo(mapping.Project, {
	as: 'project',
	foreignKey: 'id'
});

mapping.Technology.hasMany(mapping.TechnologyUsage, {
	as: 'projects',
	foreignKey: 'id_technology_usage'
});

mapping.TechnologyUsage.belongsTo(mapping.Technology, {
	as: 'technology',
	foreignKey: 'id'
});

mapping.ProjectCategory = connection.define('project_category', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	}
});

mapping.Category = connection.define('category', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	code: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	description: {
		type: Sequelize.STRING,
		allowNull: false
	},
	image: {
		type: Sequelize.BLOB('long'),
		allowNull: false
	}
});

mapping.Project.hasMany(mapping.ProjectCategory, {
	as: 'categories',
	foreignKey: 'id_project_category'
});

mapping.ProjectCategory.belongsTo(mapping.Project, {
	as: 'project',
	foreignKey: 'id'
});

mapping.Category.hasMany(mapping.ProjectCategory, {
	as: 'projects',
	foreignKey: 'id_category'
});

mapping.ProjectCategory.belongsTo(mapping.Category, {
	as: 'category',
	foreignKey: 'id'
});

mapping.RoleProject = connection.define('role_project', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	code: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	}
});

mapping.User = connection.define('user', {
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

mapping.Project.hasMany(mapping.RoleProject, {
	as: 'users',
	foreignKey: 'id_project'
});

mapping.RoleProject.belongsTo(mapping.Project, {
	as: 'project',
	foreignKey: 'id'
});

mapping.User.hasMany(mapping.RoleProject, {
	as: 'projects',
	foreignKey: 'id_user'
});

mapping.RoleProject.belongsTo(mapping.User, {
	as: 'user',
	foreignKey: 'id'
});

connection.sync();

exports.database = {
	"mapping": mapping,
	"connection": connection
};
