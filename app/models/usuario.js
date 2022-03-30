module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuarios', {
        id:{ type: DataTypes.INTEGER,
            primaryKey: true
        },
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        //public Loja Loja { get; set; }
        senhaprov: DataTypes.BOOLEAN,
        anonimo: DataTypes.BOOLEAN,
        tokenFCM: DataTypes.STRING,
        token: DataTypes.STRING

        // public bool Validated { get; set; }

        // public string CodeVerification{ get; set; }

        // public string TokenFCM { get; set; }

        // public string Token { get; set; }
        // public DateTime TokenCreate { get; set; }

        // public DateTime TokenExpiration { get; set; }
        // public DateTime DataUltimoLogin { get; set; }
        // public bool Anonimo { get; set; }

        // public long? Telefone { get; set; }

        // public long? CPF { get; set; }  
    },{
        timestamps: false
      });
  
    return Usuario;
  }

