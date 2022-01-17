module.exports = {
    up: ( queryInterface, Sequelize ) =>
    {
        return queryInterface.createTable( 'admin_users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            first_name: {
                type: Sequelize.STRING( 20 )
            },
            last_name: {
                type: Sequelize.STRING( 20 )
            },

            phone: {
                type: Sequelize.STRING(15)
            },           
            email: {
                type: Sequelize.STRING( 40 )
            },
            username: {
                type: Sequelize.STRING( 50 )
            },
            user_photo: {
                type: Sequelize.TEXT
            },
            gender: {
                type: Sequelize.BOOLEAN,
                defaultValue: 1,
                comment: '1=>male,2=>female,3=>Other'
            },           
            is_phone_verify: {
                type: Sequelize.BOOLEAN,
                comment: '1=>verify'
            },
            is_email_verify: {
                type: Sequelize.BOOLEAN,
                comment: '1=>verify'
            },
            deviceType: {
                type: Sequelize.BOOLEAN,
                comment: '1=>IOS 2=>Android 3=>Web',
                defaultValue: 3,
            },
            fcm_token: {
                type: Sequelize.TEXT
            },
            last_login_at: {
                type: Sequelize.DATE
            },
           
            is_user_active: {
                type: Sequelize.BOOLEAN,
                defaultValue: 1,
                comment: '1=>active, 0=>deactive , 2=>deleted',
            },           
            password: {
                type: Sequelize.TEXT
            },
            device_Id: {
                type: Sequelize.TEXT
            },
            role: {
                type: Sequelize.BOOLEAN,
                defaultValue: 1,
                comment: '1=>Admin, 2=>User , 3=>Store, 4=>Driver',
            },
          
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        } );
    },
    down: ( queryInterface, Sequelize ) =>
    {
        return queryInterface.dropTable( 'admin_users' );
    }
}
