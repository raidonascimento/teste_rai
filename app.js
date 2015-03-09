Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'realPneus',
    requires: [
	'Ext.field.Search'
    ],
    controllers: [
	'main'
	
    ],
    views: [
	'menuIniciar',
	'clientesList',
	'servicoList',
	'pneusList',
	'coletasForm',
	'loginForm',
	'ipSincronizarForm'

    ],
    models: [
	'sincronizarClientesModel',
	'clientesModel',
	'sincronizarPneusModel',
	'pneusModel',
	'sincronizarServicosModel',
	'servicosModel',
	'coletasModel',
	'sincronizarFuncionariosModel',
	'funcionariosModel',
	'pneusColetaModel',
	'coletasCompletoModel',
	'codigoFuncionarioModel',
	'ipSincronizarModel'
    ],
    stores: [
	'sincronizarClientesStore',
	'clientesStore',
	'sincronizarPneusStore',
	'pneusStore',
	'sincronizarServicosStore',
	'servicosStore',
	'coletasStore',
	'sincronizarFuncionariosStore',
	'funcionariosStore',
	'pneusColetaStore',
	'codigoFuncionarioStore',
	'ipSincronizarStore'
    ],
    viewport: {
	layout: {
	    type: 'card',
	    animation: {
		type: 'slide',
		duration: 10
	    }
	}
    },
    launch: function () {
	Ext.Date.monthNames = [
	    'Janeiro',
	    'Fevereiro',
	    'Mar�o',
	    'Abril',
	    'Maio',
	    'Junho',
	    'Julho',
	    'Agosto',
	    'Setembro',
	    'Outubro',
	    'Novembro',
	    'Dezembro'
	];

    }
});
