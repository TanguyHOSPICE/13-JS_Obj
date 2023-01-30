const workers = [
	{
		name: 'Benjamin',
		age: 25,
		nbHour: 35,
		alert: function () {
			return `employé:${this.name}, heures:${this.nbHour}`;
		},
	},
	{
		name: 'Luc',
		age: 45,
		nbHour: 36,
		alert: function () {
			return `employé: ${this.name}, heures: ${this.nbHour}`;
		},
	},
	{
		name: 'Marie',
		age: 23,
		nbHour: 35,
		alert: function () {
			return `employé: ${this.name}, heures: ${this.nbHour}`;
		},
	},
	{
		name: 'Jeanne',
		age: 36,
		nbHour: 30,
		alert: function () {
			return `employé: ${this.name}, heures: ${this.nbHour}`;
		},
	},
	{
		name: 'Jean',
		age: 37,
		nbHour: 35,
		alert: function () {
			return `employé: ${this.name}, heures: ${this.nbHour}`;
		},
	},
];

let alerte = '';
//ce qui n'ont pas fait les 35h on les ajoutes
workers.forEach((worker) => {
	//Si worker.nbHour est diff de 35 alors
	if (worker.nbHour != 35) {
		alerte += worker.alert(); //si on ne met pas les () on appel pas la méthod on utilise la définition de la méthod
		alerte += '\n'; //retour à la ligne
	}
});
alert(alerte);
console.log(alerte);

//OU
/* 
for (let i = 0; i < workers.length; i++) {
    if( workers[i].nbHour !== 35){
        //On ajoute le mess d'alerte
        alerte += `${workers[i].alert()} \n`;
    };
    
} */
