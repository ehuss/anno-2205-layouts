'use strict';

angular.module('anno2205Layouts', [
    'ngRoute',
    'ngStorage',
    'anno2205Layouts.my-layouts',
    'anno2205Layouts.editor',
    'anno2205Layouts.templates'
])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    Anno2205Layouts.initBuildings();
    $routeProvider.otherwise({redirectTo: '/my-layouts'});
    // $locationProvider.html5Mode(true);
}])

.run(['$rootScope', '$localStorage', function($rootScope, $localStorage) {
    $rootScope.layouts = new Anno2205Layouts.Layouts($localStorage);
}]);
;'use strict';

var Anno2205Layouts = Anno2205Layouts || {};
(function(Anno2205Layouts) {

    Anno2205Layouts.gridSize = 20;

    Anno2205Layouts.items = {
        credits: {
            name: 'Credits',
            icon: 'credits',
        },
        workforce: {
            name: 'Workforce',
            icon: 'workforce',
        },
        energy: {
            name: 'Energy',
            icon: 'energy',
        },
        logistics: {
            name: 'Logistics',
            icon: 'logistics',
        },
        biopolymers: {
            name: 'Biopolymers',
            icon: 'biocomposites',
        },
        bioresins: {
            name: 'Bioresin',
            icon: 'bioresigns',
        },
        organicFood: {
            name: 'Organic Food',
            icon: 'rice_dish',
        },
        water: {
            name: 'Water',
            icon: 'water',
        },
        ceramics: {
            name: 'Nano Ceramics',
            icon: 'ceramics',
        },
        cobalt: {
            name: 'Cobalt',
            icon: 'cobalt',
        },
        'construct-o-bots': {
            name: 'Construct-o-Bots',
            icon: 'robots',
        },
        fruits: {
            name: 'Fruits',
            icon: 'fruit',
        },
        vitaminDrinks: {
            name: 'Vitamin Drinks',
            icon: 'fruit_drink',
        },
        algae: {
            name: 'Algae',
            icon: 'algae',
        },
        synthcells: {
            name: 'Synthcells',
            icon: 'synth_cells',
        },
        rejuvenators: {
            name: 'Rejuvenators',
            icon: 'rejuvenators',
        },
        superalloys: {
            name: 'Superalloys',
            icon: 'super_alloys',
        },
        soyBeans: {
            name: 'Soy Beans',
            icon: 'soy_beans',
        },
        beef: {
            name: 'Beef',
            icon: 'beef',
        },
        wine: {
            name: 'Wine',
            icon: 'wine',
        },
        luxuryFood: {
            name: 'Luxury Food',
            icon: 'luxury_food',
        },
        flaxFibers: {
            name: 'Flax Fibers',
            icon: 'plant_fibres',
        },
        silicon: {
            name: 'Silicon',
            icon: 'silica',
        },
        microchips: {
            name: 'Microchips',
            icon: 'microchips',
        },
        intelliwear: {
            name: 'IntelliWear',
            icon: 'intelli_clothes',
        },
        diamonds: {
            name: 'Diamonds',
            icon: 'diamant',
        },
        prisms: {
            name: 'Multispec Prisms',
            icon: 'multispectral_prisms',
        },
        rareEarthElements: {
            name: 'Rare Earth Elements',
            icon: 'rare_earth_elements',
        },
        replicators: {
            name: 'Replicators',
            icon: 'replicators',
        },
        synapticCircuits: {
            name: 'Synaptic Circuits',
            icon: 'synaptic_circuits',
        },
        androids: {
            name: 'Androids',
            icon: 'androids',
        },
        aluminum: {
            name: 'Aluminum',
            icon: 'aluminium',
        },
        metalFoam: {
            name: 'Metal Foam',
            icon: 'metal_foam',
        },
        fish: {
            name: 'Fish',
            icon: 'fish',
        },
        cannedFood: {
            name: 'Canned Food',
            icon: 'canned_food',
        },
        molybdenum: {
            name: 'Molybdenum',
            icon: 'molybdenum',
        },
        neuroImplants: {
            name: 'Neuro Implants',
            icon: 'neuro_implants_2',
        },
        corals: {
            name: 'Depp-water Corals',
            icon: 'deep_water_corals',
        },
        stimulants: {
            name: 'Stimulants',
            icon: 'stimulants',
        },
        methaneIce: {
            name: 'Methane Ice',
            icon: 'methan_clathrate',
        },
        deuterium: {
            name: 'Deuterium',
            icon: 'deuterium',
        },
        coolants: {
            name: 'Super Coolants',
            icon: 'super_coolants',
        },
        processors: {
            name: 'Qubit Processors',
            icon: 'qubit_processors',
        },
        computers: {
            name: 'Quantum Computers',
            icon: 'quantum_computers',
        },
        titanium: {
            name: 'Titanium',
            icon: 'titanium',
        },
        titaniumPlating: {
            name: 'Titanium Plating',
            icon: 'titan_plating',
        },
        moonIce: {
            name: 'Moon Ice',
            icon: 'moon_ice',
        },
        oxygen: {
            name: 'Oxygen',
            icon: 'oxygen',
        },
        bioenhancers: {
            name: 'BioEnhancers',
            icon: 'bio_enhancers',
        },
        moonCrops: {
            name: 'Moon Crops',
            icon: 'moon_crops',
        },
        lunarLunch: {
            name: 'Lunar Lunch',
            icon: 'natural_space_food',
        },
        helium3: {
            name: 'Helium-3',
            icon: 'helium_3',
        },
        fusionPowerCells: {
            name: 'Fusion Power Cells',
            icon: 'fusion_accumulators',
        },
        antiGravCompensators: {
            name: 'Anti-Grav Compensators',
            icon: 'gravity_generators',
        },
        graphene: {
            name: 'Graphene',
            icon: 'graphene',
        },
        magnetite: {
            name: 'Magnetite',
            icon: 'magnetite',
        },
        petrochemicals: {
            name: 'Petrochemicals',
            icon: 'petrochemicals',
        },
        iridium: {
            name: 'Iridium',
            icon: 'iridium',
        },
    };

    Anno2205Layouts.maintenanceModules = {
        credits: {
            icon: 'credits_module',
            name: 'Finance Calculator',
            unitSize: [2, 2],
            effects: {credits: '-10%'},
            constructionCost: {
                earth: {credits: 500, iridium: 10},
                arctic: {credits: 1500, iridium: 15},
                moon: {credits: 4000, iridium: 30},
            },
        },

        logistics: {
            icon: 'logistics_module',
            name: 'Storage Depot',
            unitSize: [2, 2],
            effects: {logistics: -2},
            constructionCost: {
                earth: {credits: 500, iridium: 10},
                arctic: {credits: 1500, iridium: 15},
                moon: {credits: 4000, iridium: 30},
            },
        },

        workforce: {
            icon: 'workforce_module',
            name: 'Drone Hive',
            unitSize: [2, 2],
            effects: {workforce: '-20%'},
            constructionCost: {
                earth: {credits: 500, iridium: 10},
                arctic: {credits: 1500, iridium: 15},
                moon: {credits: 4000, iridium: 30},
            },
        },

        energy: {
            icon: 'energy_module',
            name: 'Accumulator Unit',
            unitSize: [2, 2],
            effects: {energy: '-10%'},
            constructionCost: {
                earth: {credits: 500, iridium: 10},
                arctic: {credits: 1500, iridium: 15},
                moon: {credits: 4000, iridium: 30},
            },
        },

        headquarter1: {
            icon: 'headquarter_module_1',
            name: 'Corporation HQ Wing',
            unitSize: [4, 4],
            effects: {maintenance: '10%'},
            constructionCost: {earth: {credits: 500000, superalloys: 50, biopolymers: 100, 'construct-o-bots': 100}},
        },

        headquarter2: {
            icon: 'headquarter_module_2',
            name: 'Corporation HQ Wing',
            unitSize: [4, 4],
            effects: {maintenance: '10%'},
            constructionCost: {earth: {credits: 500000, superalloys: 50, biopolymers: 100, 'construct-o-bots': 100}},
        },

        headquarter3: {
            icon: 'headquarter_module_3',
            name: 'Corporation HQ Intersection',
            unitSize: [4, 4],
            effects: {maintenance: '10%'},
            constructionCost: {earth: {credits: 500000, superalloys: 50, biopolymers: 100, 'construct-o-bots': 100}},
        },

        headquarter4: {
            icon: 'headquarter_module_4',
            name: 'Corporation HQ Terminal',
            unitSize: [4, 4],
            effects: {maintenance: '10%'},
            constructionCost: {earth: {credits: 500000, superalloys: 50, biopolymers: 100, 'construct-o-bots': 100}},
        },

        headquarter5: {
            icon: 'headquarter_module_5',
            name: 'Corporation HQ Terminal',
            unitSize: [4, 4],
            effects: {maintenance: '10%'},
            constructionCost: {earth: {credits: 500000, superalloys: 50, biopolymers: 100, 'construct-o-bots': 100}},
        },
    };

    Anno2205Layouts.buildingLevels = {
        earth: [
            {
                id: 'workers',
                levelButtonX: 0,
                buildings: [
                    {
                        id: 'sunflower-farm',
                        name: 'Sunflower Farm',
                        icon: 'bioresigns',
                        color: '#efc42f',
                        placementType: 'ground',
                        unitSize: [4, 8],
                        constructionCost: {
                            credits: 1000,
                        },
                        production: {
                            bioresins: 10,
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 100,
                            workforce: 35,
                            energy: 10,
                        },
                        productionUnit: {
                            name: 'Sunflower Cropland',
                            id: 'sunflower-cropland',
                            unitSize: [5, 8],
                            effects: {
                                productivity: 1.5,
                                maintenance: 0.75,
                            },
                            constructionCost: {
                                credits: 400,
                                graphene: 4,
                            }
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],

                    },
                    {
                        id: 'biopolymer-factory',
                        name: 'Biopolymer Factory',
                        icon: 'biocomposites',
                        color: '#9ca38a',
                        placementType: 'ground',
                        unitSize: [5, 7],
                        constructionCost: {
                            credits: 1500,
                        },
                        production: {
                            biopolymers: 10
                        },
                        consumption: {
                            bioresins: 10
                        },
                        maintenance: {
                            credits: 100,
                            workforce: 30,
                            energy: 10,
                        },
                        productionUnit: {
                            name: 'Biopolymer Basins',
                            id: 'biopolymer-basins',
                            unitSize: [3, 5],
                            effects: {
                                productivity: 0.5,
                                maintenance: 0.25,
                            },
                            constructionCost: {
                                credits: 200,
                                graphene: 1,
                            }
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'rice-farm',
                        name: 'Rice Farm',
                        icon: 'rice_dish',
                        color: '#f9e493',
                        placementType: 'ground',
                        unitSize: [5, 7],
                        constructionCost: {
                            credits: 500,
                            biopolymers: 1
                        },
                        production: {
                            organicFood: 5
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 20,
                            workforce: 15,
                            energy: 5,
                        },
                        productionUnit: {
                            name: 'Rice Field',
                            id: 'rice-field',
                            unitSize: [7, 7],
                            effects: {
                                productivity: 1.8,
                                maintenance: 0.9,
                            },
                            constructionCost: {
                                credits: 200,
                                graphene: 2,
                            }
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'desalinization-plant',
                        name: 'Desalinization Plant',
                        icon: 'water',
                        color: '#2aa2c5',
                        placementType: 'coast',
                        constructionCost: {
                            credits: 500,
                            biopolymers: 5
                        },
                        production: {
                            water: 5
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 100,
                            workforce: 35,
                            energy: 10,
                        },
                        productionUnit: {
                            name: 'Filter Unit',
                            id: 'filter-unit',
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 100,
                                graphene: 1
                            }
                        },
                        productionLimit: 2,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'infodrome',
                        name: 'Infodrome',
                        icon: 'information',
                        color: '#127083',
                        placementType: 'ground',
                        unitSize: [7, 7],
                        constructionCost: {
                            credits: 1000,
                            biopolymers: 10
                        },
                        production: {
                            //information: 10
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 250,
                            workforce: 20,
                            energy: 25,
                        },
                    },
                ]
            },
            {
                id: 'operators',
                levelButtonX: 417,
                buildings: [
                    {
                        id: 'feldspar-quarry',
                        name: 'Feldspar Quarry',
                        icon: 'ceramics',
                        color: '#89b8db',
                        placementType: 'mountain',
                        constructionCost: {
                            credits: 1000,
                            biopolymers: 1
                        },
                        production: {
                            ceramics: 5
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 100,
                            workforce: 55,
                            energy: 30,
                        },
                        productionUnit: {
                            name: 'Feldspar Crusher',
                            id: 'feldspar-crusher',
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 300,
                                graphene: 2
                            }
                        },
                        productionLimit: 2,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'cobalt-mine',
                        name: 'Cobalt Mine',
                        icon: 'cobalt',
                        color: '#6dbcd7',
                        placementType: 'mountain',
                        constructionCost: {
                            credits: 1000,
                            biopolymers: 1
                        },
                        production: {
                            cobalt: 5
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 100,
                            workforce: 55,
                            energy: 30,
                        },
                        productionUnit: {
                            name: 'Cobalt Shearer',
                            id: 'cobalt-shearer',
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 300,
                                graphene: 5
                            }
                        },
                        productionLimit: 2,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'robot-assembly-hall',
                        name: 'Robot Assembly Hall',
                        icon: 'robots',
                        color: '#ca6408',
                        placementType: 'ground',
                        unitSize: [4, 13],
                        constructionCost: {
                            credits: 3000,
                            biopolymers: 3
                        },
                        production: {
                            'construct-o-bots': 10
                        },
                        consumption: {
                            ceramics: 5,
                            cobalt: 5
                        },
                        maintenance: {
                            credits: 200,
                            workforce: 110,
                            energy: 50,
                        },
                        productionUnit: {
                            name: 'Robot Conveyor Belt',
                            id: 'robot-conveyor-belt',
                            unitSize: [4, 10],
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 800,
                                graphene: 2,
                            }
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                        maintenanceConstructionCost: {credits: 4000, iridium: 30},
                    },
                    {
                        id: 'fruit-plantation',
                        name: 'Fruit Plantation',
                        icon: 'fruit',
                        color: '#efab17',
                        placementType: 'ground',
                        unitSize: [4, 7],
                        constructionCost: {
                            credits: 1000,
                            biopolymers: 1,
                            'construct-o-bots': 1
                        },
                        production: {
                            fruits: 8
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 30,
                            workforce: 35,
                            energy: 15,
                        },
                        productionUnit: {
                            name: 'Fruit Orchard',
                            id: 'fruit-orchard',
                            unitSize: [4, 9],
                            effects: {
                                productivity: 1.5,
                                maintenance: 0.75,
                            },
                            constructionCost: {
                                credits: 400,
                                graphene: 3,
                            }
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'vitamin-condenser',
                        name: 'Vitamin Condenser',
                        icon: 'fruit_drink',
                        color: '#fff2a3',
                        placementType: 'ground',
                        unitSize: [3, 4],
                        constructionCost: {
                            credits: 2000,
                            biopolymers: 1,
                            'construct-o-bots': 3
                        },
                        production: {
                            vitaminDrinks: 12
                        },
                        consumption: {
                            fruits: 16
                        },
                        maintenance: {
                            credits: 150,
                            workforce: 30,
                            energy: 30,
                        },
                        productionUnit: {
                            name: 'Fruit Press',
                            id: 'fruit-press',
                            unitSize: [2, 2],
                            effects: {
                                productivity: 0.5,
                                maintenance: 0.25,
                            },
                            constructionCost: {
                                credits: 300,
                                graphene: 1,
                            }
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'algae-farm',
                        name: 'Algae Farm',
                        icon: 'algae',
                        color: '#6ed330',
                        placementType: 'coast',
                        constructionCost: {
                            credits: 2000,
                            biopolymers: 5
                        },
                        production: {
                            algae: 16
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 200,
                            workforce: 35,
                            energy: 20,
                        },
                        productionUnit: {
                            name: 'Algae Bed',
                            id: 'algae-bed',
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 500,
                                graphene: 2,
                            }
                        },
                        productionLimit: 3,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'synthcell-incubator',
                        name: 'Synthcell Incubator',
                        icon: 'synth_cells',
                        color: '#b0fb57',
                        placementType: 'ground',
                        unitSize: [5, 5],
                        constructionCost: {
                            credits: 4000,
                            biopolymers: 2,
                            'construct-o-bots': 5
                        },
                        production: {
                            synthcells: 8
                        },
                        consumption: {
                            algae: 8
                        },
                        maintenance: {
                            credits: 200,
                            workforce: 85,
                            energy: 20,
                        },
                        productionUnit: {
                            name: 'Synthcell Chambers',
                            id: 'synthcell-chambers',
                            unitSize: [3, 5],
                            effects: {
                                productivity: 0.75,
                                maintenance: 0.40,
                            },
                            constructionCost: {
                                credits: 800,
                                graphene: 2,
                            }
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'biomedical-laboratory',
                        name: 'Biomedical Laboratory',
                        icon: 'rejuvenators',
                        color: '#b2de89',
                        placementType: 'ground',
                        unitSize: [6, 9],
                        unitShape: [
                            [1, 1, 1, 1, 1, 0],
                            [1, 1, 1, 1, 1, 0],
                            [1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 0],
                            [1, 1, 1, 1, 1, 0],
                        ],
                        constructionCost: {
                            credits: 6000,
                            biopolymers: 2,
                            'construct-o-bots': 5
                        },
                        production: {
                            rejuvenators: 16
                        },
                        consumption: {
                            synthcells: 16
                        },
                        maintenance: {
                            credits: 200,
                            workforce: 85,
                            energy: 20,
                        },
                        productionUnit: {
                            name: 'Reaction Pods',
                            id: 'reaction-pods',
                            unitSize: [5, 5],
                            effects: {
                                productivity: 0.5,
                                maintenance: 0.25,
                            },
                            constructionCost: {
                                credits: 800,
                                graphene: 1,
                            }
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'security-department',
                        name: 'Security Department',
                        icon: 'security',
                        color: '#898e89',
                        placementType: 'ground',
                        unitSize: [8, 9],
                        constructionCost: {
                            credits: 4000,
                            biopolymers: 5,
                            'construct-o-bots': 10
                        },
                        production: {
                            //security: 10
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 1000,
                            workforce: 50,
                            energy: 100,
                        },
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                ]
            },
            {
                id: 'executives',
                levelButtonX: 834,
                buildings: [
                    {
                        id: 'soy-farm',
                        name: 'Soy Farm',
                        icon: 'soy_beans',
                        color: '#408a34',
                        placementType: 'ground',
                        unitSize: [4, 7],
                        constructionCost: {
                            credits: 22500,
                            superalloys: 1,
                            biopolymers: 5,
                            'construct-o-bots': 10
                        },
                        production: {
                            soyBeans: 4
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 300,
                            workforce: 50,
                            energy: 50,
                        },
                        productionUnit: {
                            name: 'Soy Field',
                            id: 'soy-field',
                            unitSize: [4, 4],
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 5600,
                                graphene: 10,
                            }
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'cattle-ranch',
                        name: 'Cattle Ranch',
                        icon: 'beef',
                        color: '#c77365',
                        placementType: 'ground',
                        unitSize: [7, 9],
                        unitShape: [
                            [1, 1, 1, 1, 1, 0, 0],
                            [1, 1, 1, 1, 1, 0, 0],
                            [1, 1, 1, 1, 1, 0, 0],
                            [1, 1, 1, 1, 1, 0, 0],
                            [1, 1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1, 1],
                        ],
                        constructionCost: {
                            credits: 22500,
                            superalloys: 3,
                            biopolymers: 12,
                            'construct-o-bots': 15
                        },
                        production: {
                            beef: 4
                        },
                        consumption: {
                            soyBeans: 4
                        },
                        maintenance: {
                            credits: 450,
                            workforce: 50,
                            energy: 150,
                        },
                        productionUnit: {
                            name: 'Cattle Pen',
                            id: 'cattle-pen',
                            unitSize: [7, 9],
                            effects: {
                                productivity: 1.5,
                                maintenance: 0.75,
                            },
                            constructionCost: {
                                credits: 8400,
                                graphene: 10,
                            }
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'vineyard',
                        name: 'Vineyard',
                        icon: 'wine',
                        color: '#821303',
                        placementType: 'ground',
                        unitSize: [7, 8],
                        constructionCost: {
                            credits: 15000,
                            superalloys: 5,
                            biopolymers: 10,
                            'construct-o-bots': 20
                        },
                        production: {
                            wine: 4
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 300,
                            workforce: 50,
                            energy: 40,
                        },
                        productionUnit: {
                            name: 'Vineyard Terrace',
                            id: 'vineyard-terrace',
                            unitSize: [5, 5],
                            effects: {
                                productivity: 0.5,
                                maintenance: 0.25,
                            },
                            constructionCost: {
                                credits: 1900,
                                graphene: 5,
                            }
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'food-design-workshop',
                        name: 'Food Design Workshop',
                        icon: 'luxury_food',
                        color: '#c73f20',
                        placementType: 'ground',
                        unitSize: [4, 9],
                        constructionCost: {
                            credits: 45000,
                            superalloys: 10,
                            biopolymers: 5,
                            'construct-o-bots': 15
                        },
                        production: {
                            luxuryFood: 16
                        },
                        consumption: {
                            beef: 8,
                            wine: 8
                        },
                        maintenance: {
                            credits: 600,
                            workforce: 320,
                            energy: 200,
                        },
                        productionUnit: {
                            name: 'Molecular Kitchens',
                            id: 'molecular-kitchens',
                            unitSize: [3, 6],
                            effects: {
                                productivity: 0.5,
                                maintenance: 0.25,
                            },
                            constructionCost: {
                                credits: 5600,
                                graphene: 5,
                            }
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'flax-plantation',
                        name: 'Flax Plantation',
                        icon: 'plant_fibres',
                        color: '#a0ad64',
                        placementType: 'ground',
                        unitSize: [3, 7],
                        constructionCost: {
                            credits: 1500,
                            biopolymers: 1,
                            'construct-o-bots': 1
                        },
                        production: {
                            flaxFibers: 5
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 600,
                            workforce: 35,
                            energy: 50,
                        },
                        productionUnit: {
                            name: 'Flax Planters',
                            id: 'flax-planters',
                            unitSize: [2, 3],
                            effects: {
                                productivity: 0.4,
                                maintenance: 0.2,
                            },
                            constructionCost: {
                                credits: 200,
                                graphene: 3,
                            }
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'silicon-mine',
                        name: 'Silicon Mine',
                        icon: 'silica',
                        color: '#d5d7d5',
                        placementType: 'mountain',
                        constructionCost: {
                            credits: 22500,
                            superalloys: 3,
                            biopolymers: 3,
                            'construct-o-bots': 2
                        },
                        production: {
                            silicon: 5
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 1500,
                            workforce: 160,
                            energy: 100,
                        },
                        productionUnit: {
                            name: 'Highwall Miner',
                            id: 'highwall-miner',
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 5600,
                                graphene: 10,
                            }
                        },
                        productionLimit: 3,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'microfabrication-hall',
                        name: 'Microfabrication Hall',
                        icon: 'microchips',
                        color: '#c8cbcf',
                        placementType: 'ground',
                        unitSize: [3, 6],
                        constructionCost: {
                            credits: 15000,
                            superalloys: 3,
                            biopolymers: 5,
                            'construct-o-bots': 10
                        },
                        production: {
                            microchips: 5
                        },
                        consumption: {
                            silicon: 5
                        },
                        maintenance: {
                            credits: 600,
                            workforce: 260,
                            energy: 50,
                        },
                        productionUnit: {
                            name: 'Sterile Chambers',
                            id: 'sterile-chambers',
                            unitSize: [3, 6],
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 3800,
                                graphene: 5,
                            }
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'nano-textile-mill',
                        name: 'Nano Textile Mill',
                        icon: 'intelli_clothes',
                        color: '#cbe9ec',
                        placementType: 'ground',
                        unitSize: [4, 11],
                        constructionCost: {
                            credits: 30000,
                            superalloys: 5,
                            biopolymers: 8,
                            'construct-o-bots': 12
                        },
                        production: {
                            intelliwear: 6
                        },
                        consumption: {
                            microchips: 2,
                            flaxFibers: 4
                        },
                        maintenance: {
                            credits: 720,
                            workforce: 110,
                            energy: 60,
                        },
                        productionUnit: {
                            name: 'Nano-Loom',
                            id: 'nano-loom',
                            unitSize: [5, 5],
                            effects: {
                                productivity: 0.5,
                                maintenance: 0.25,
                            },
                            constructionCost: {
                                credits: 3800,
                                graphene: 4,
                            }
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'metro-station',
                        name: 'Metro Station',
                        icon: 'mobility',
                        color: '#c38076',
                        placementType: 'ground',
                        unitSize: [10, 19],
                        constructionCost: {
                            credits: 35000,
                            biopolymers: 5,
                            'construct-o-bots': 20
                        },
                        production: {
                            // mobility: 10
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 3000,
                            workforce: 12,
                            energy: 250,
                        },
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                ]
            },
            {
                id: 'investors',
                levelButtonX: 1251,
                buildings: [
                    {
                        id: 'diamond-mine',
                        name: 'Diamond Mine',
                        icon: 'diamant',
                        color: '#889bb2',
                        placementType: 'mountain',
                        constructionCost: {
                            credits: 30000,
                            superalloys: 1,
                            biopolymers: 4,
                            'construct-o-bots': 2
                        },
                        production: {
                            diamonds: 10
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 4000,
                            workforce: 160,
                            energy: 200,
                        },
                        productionUnit: {
                            name: 'Disk Saw',
                            id: 'disk-saw',
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 7500,
                                graphene: 10,
                            }
                        },
                        productionLimit: 2,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'nano-cutting-unit',
                        name: 'Nano Cutting Unit',
                        icon: 'multispectral_prisms',
                        color: '#7996d4',
                        placementType: 'ground',
                        unitSize: [5, 8],
                        constructionCost: {
                            credits: 48000,
                            superalloys: 5,
                            biopolymers: 8,
                            'construct-o-bots': 10
                        },
                        production: {
                            prisms: 6
                        },
                        consumption: {
                            diamonds: 5,
                            rareEarthElements: 1
                        },
                        maintenance: {
                            credits: 3500,
                            workforce: 320,
                            energy: 400,
                        },
                        productionUnit: {
                            name: 'Polishing Unit',
                            id: 'polishing-unit',
                            unitSize: [5, 5],
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 12000,
                                graphene: 10,
                            }
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'neutronium-lab',
                        name: 'Neutronium Lab',
                        icon: 'replicators',
                        color: '#ab484b',
                        placementType: 'ground',
                        unitSize: [5, 9],
                        unitShape: [
                            [1, 1, 1, 1, 0],
                            [1, 1, 1, 1, 0],
                            [1, 1, 1, 1, 0],
                            [1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1],
                        ],
                        constructionCost: {
                            credits: 60000,
                            superalloys: 8,
                            biopolymers: 12,
                            'construct-o-bots': 15
                        },
                        production: {
                            replicators: 8
                        },
                        consumption: {
                            microchips: 2,
                            prisms: 6
                        },
                        maintenance: {
                            credits: 3500,
                            workforce: 420,
                            energy: 400,
                        },
                        productionUnit: {
                            name: 'Neutronium Generator',
                            id: 'neutronium-generator',
                            unitSize: [4, 5],
                            effects: {
                                productivity: 0.5,
                                maintenance: 0.25,
                            },
                            constructionCost: {
                                credits: 7500,
                                graphene: 5,
                            }
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'ai-composition-plant',
                        name: 'AI Composition Plant',
                        icon: 'synaptic_circuits',
                        color: '#b2a162',
                        placementType: 'ground',
                        unitSize: [6, 7],
                        constructionCost: {
                            credits: 80000,
                            superalloys: 5,
                            biopolymers: 10,
                            'construct-o-bots': 15
                        },
                        production: {
                            synapticCircuits: 8
                        },
                        consumption: {
                            bioresins: 4,
                            silicon: 4
                        },
                        maintenance: {
                            credits: 4000,
                            workforce: 370,
                            energy: 200,
                        },
                        productionUnit: {
                            name: 'AI Incubator',
                            id: 'ai-incubator',
                            unitSize: [3, 7],
                            effects: {
                                productivity: 0.5,
                                maintenance: 0.25,
                            },
                            constructionCost: {
                                credits: 10000,
                                graphene: 5,
                            }
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'android-factory',
                        name: 'Android Factory',
                        icon: 'androids',
                        color: '#afc8cd',
                        placementType: 'ground',
                        unitSize: [5, 11],
                        constructionCost: {
                            credits: 80000,
                            superalloys: 15,
                            biopolymers: 15,
                            'construct-o-bots': 20
                        },
                        production: {
                            androids: 6
                        },
                        consumption: {
                            synthcells: 2,
                            synapticCircuits: 4
                        },
                        maintenance: {
                            credits: 6000,
                            workforce: 320,
                            energy: 400,
                        },
                        productionUnit: {
                            name: 'Android Assembly Line',
                            id: 'android-assembly-line',
                            unitSize: [4, 5],
                            effects: {
                                productivity: 0.5,
                                maintenance: 0.25,
                            },
                            constructionCost: {
                                credits: 10000,
                                graphene: 5,
                            }
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'stadium',
                        name: 'Stadium',
                        icon: 'recreation',
                        color: '#4787cd',
                        placementType: 'ground',
                        unitSize: [17, 17],
                        constructionCost: {
                            credits: 400000,
                            biopolymers: 15,
                            'construct-o-bots': 40
                        },
                        production: {
                            //entertainment: 10
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 8000,
                            workforce: 25,
                            energy: 500,
                        },
                    },
                ]
            },
            {
                id: 'ornaments',
                levelButtonX: 1668,
                buildings: [
                    {
                        id: 'small-park',
                        name: 'Small Park',
                        icon: 'ornamental_park_small',
                        color: '#b4bc47',
                        placementType: 'ground',
                        unitSize: [1, 1],
                        constructionCost: {
                            credits: 500,
                        },
                        production: {
                        },
                        consumption: {
                        },
                        maintenance: {
                        },
                    },
                    {
                        id: 'medium-park',
                        name: 'Medium Park',
                        icon: 'ornamental_park_medium',
                        color: '#b4bc47',
                        placementType: 'ground',
                        unitSize: [2, 2],
                        constructionCost: {
                            credits: 2000,
                        },
                        production: {
                        },
                        consumption: {
                        },
                        maintenance: {
                        },
                    },
                    {
                        id: 'big-park',
                        name: 'Big Park',
                        icon: 'ornamental_park_large',
                        color: '#b4bc47',
                        placementType: 'ground',
                        unitSize: [3, 3],
                        constructionCost: {
                            credits: 4500,
                        },
                        production: {
                        },
                        consumption: {
                        },
                        maintenance: {
                        },
                    },
                    {
                        id: 'small-parking-lot',
                        name: 'Small Parking Lot',
                        icon: 'ornamental_car_park_small',
                        color: '#676b7f',
                        placementType: 'ground',
                        unitSize: [1, 1],
                        constructionCost: {
                            credits: 500,
                        },
                        production: {
                        },
                        consumption: {
                        },
                        maintenance: {
                        },
                    },
                    {
                        id: 'medium-parking-lot',
                        name: 'Medium Parking Lot',
                        icon: 'ornamental_car_park_medium',
                        color: '#676b7f',
                        placementType: 'ground',
                        unitSize: [2, 2],
                        constructionCost: {
                            credits: 2000,
                        },
                        production: {
                        },
                        consumption: {
                        },
                        maintenance: {
                        },
                    },
                    {
                        id: 'big-parking-lot',
                        name: 'Big Parking Lot',
                        icon: 'ornamental_car_park_large',
                        color: '#676b7f',
                        placementType: 'ground',
                        unitSize: [3, 3],
                        constructionCost: {
                            credits: 4500,
                        },
                        production: {
                        },
                        consumption: {
                        },
                        maintenance: {
                        },
                    },
                    {
                        id: 'regular-firework-fountain',
                        name: 'Regular Firework Fountain',
                        icon: 'single_firework_fountain',
                        color: '#724e9c',
                        placementType: 'ground',
                        unitSize: [3, 2],
                        constructionCost: {
                            credits: 500,
                        },
                        production: {
                        },
                        consumption: {
                        },
                        maintenance: {
                        },
                    },
                    {
                        id: 'helix-firework-fountain',
                        name: 'Helix Firework Fountain',
                        icon: 'coupled_firework_fountain',
                        color: '#eacba7',
                        placementType: 'ground',
                        unitSize: [3, 2],
                        constructionCost: {
                            credits: 1000,
                        },
                        production: {
                        },
                        consumption: {
                        },
                        maintenance: {
                        },
                    },
                    {
                        id: 'shape-firework-fountain',
                        name: 'Shape Firework Fountain',
                        icon: 'shaped_firework_fountain',
                        color: '#323b72',
                        placementType: 'ground',
                        unitSize: [3, 2],
                        constructionCost: {
                            credits: 1500,
                        },
                        production: {
                        },
                        consumption: {
                        },
                        maintenance: {
                        },
                    },
                ]
            }
        ],
        arctic: [
            {
                id: 'protectors',
                levelButtonX: 2085,
                buildings: [
                    {
                        id: 'aluminum-mine',
                        name: 'Aluminum Mine',
                        icon: 'aluminium',
                        color: '#bebfc2',
                        constructionCost: {
                            credits: 3000,
                        },
                        production: {
                            aluminum: 6
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 300,
                            workforce: 50,
                            energy: 20,
                        },
                        productionUnit: {
                            name: 'Spider Cutter',
                            id: 'spider-cutter',
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 800,
                                petrochemicals: 5,
                            }
                        },
                        productionLimit: 2,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'compression-chamber',
                        name: 'Compression Chamber',
                        icon: 'metal_foam',
                        color: '#4c4b50',
                        placementType: 'ground',
                        unitSize: [4, 7],
                        constructionCost: {
                            credits: 3000,
                        },
                        production: {
                            metalFoam: 3
                        },
                        consumption: {
                            aluminum: 3
                        },
                        maintenance: {
                            credits: 200,
                            workforce: 20,
                            energy: 40,
                        },
                        productionUnit: {
                            name: 'Compression Smelters',
                            id: 'compression-smelters',
                            unitSize: [7, 7],
                            effects: {
                                productivity: 2,
                                maintenance: 1,
                            },
                            constructionCost: {
                                credits: 1500,
                                petrochemicals: 10,
                            }
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'fishing-harbor',
                        name: 'Fishing Harbor',
                        icon: 'fish',
                        color: '#9ca5ae',
                        placementType: 'coast',
                        constructionCost: {
                            credits: 3000,  // TODO: Fix
                            metalFoam: 1    // TODO Fix
                        },
                        production: {
                            fish: 4
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 50,
                            workforce: 10,
                            energy: 15,
                        },
                        productionUnit: {
                            name: 'Landing Net',
                            id: 'landing-net',
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 800,
                                petrochemicals: 5,
                            }
                        },
                        productionLimit: 2,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'cannery',
                        name: 'Cannery',
                        icon: 'canned_food',
                        color: '#4f80ff',
                        placementType: 'ground',
                        unitSize: [4, 7],
                        constructionCost: {
                            credits: 4500,  // TODO: fix
                            metalFoam: 2
                        },
                        production: {
                            cannedFood: 2
                        },
                        consumption: {
                            fish: 2
                        },
                        maintenance: {
                            credits: 20,
                            workforce: 10,
                            energy: 10,
                        },
                        productionUnit: {
                            name: 'Canning Conveyor Belt',
                            id: 'canning-conveyor-belt',
                            unitSize: [4, 4],
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 1300,
                                petrochemicals: 5,
                            }
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'molybdenum-mine',
                        name: 'Molybdenum Mine',
                        icon: 'molybdenum',
                        color: '#97999b',
                        placementType: 'mountain',
                        constructionCost: {
                            credits: 6000,
                            metalFoam: 8
                        },
                        production: {
                            molybdenum: 10
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 300,
                            workforce: 50,
                            energy: 20,
                        },
                        productionUnit: {
                            name: 'Coated Drillhead',
                            id: 'coated-drillhead',
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 1500,
                                petrochemicals: 5,
                            }
                        },
                        productionLimit: 2,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'neuro-module-factory',
                        name: 'Neuro-Module Factory',
                        icon: 'neuro_implants_2',
                        color: '#85c0cd',
                        placementType: 'ground',
                        unitSize: [5, 7],
                        constructionCost: {
                            credits: 20000,
                            metalFoam: 8
                        },
                        production: {
                            neuroImplants: 4
                        },
                        consumption: {
                            molybdenum: 4
                        },
                        maintenance: {
                            credits: 200,
                            workforce: 40,
                            energy: 120,
                        },
                        productionUnit: {
                            name: 'Neuro-Module Complex',
                            id: 'neuro-module-complex',
                            unitSize: [5, 9],
                            effects: {
                                productivity: 1.5,
                                maintenance: 0.75,
                            },
                            constructionCost: {
                                credits: 7500,
                                petrochemicals: 10,
                            }
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'community-center',
                        name: 'Community Center',
                        icon: 'community_center',
                        color: '#cd610b',
                        placementType: 'ground',
                        unitSize: [5, 7],
                        constructionCost: {
                            credits: 6000,
                            metalFoam: 10
                        },
                        production: {
                            //community: 5
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 1000,
                            workforce: 20,
                            energy: 50,
                        },
                    },
                ]
            },
            {
                id: 'scientists',
                levelButtonX: 2502,
                buildings: [
                    {
                        id: 'plasma-smelter',
                        name: 'Plasma Smelter',
                        icon: 'super_alloys',
                        color: '#667483',
                        placementType: 'ground',
                        unitSize: [5, 9],
                        constructionCost: {
                            credits: 9000,
                            metalFoam: 5
                        },
                        production: {
                            superalloys: 6
                        },
                        consumption: {
                            molybdenum: 2,
                            aluminum: 4
                        },
                        maintenance: {
                            credits: 600,
                            workforce: 130,
                            energy: 60,
                        },
                        productionUnit: {
                            name: 'Melting Pots',
                            id: 'melting-pots',
                            unitSize: [4, 5],
                            effects: {
                                productivity: 0.5,
                                maintenance: 0.25,
                            },
                            constructionCost: {
                                credits: 1100,
                                petrochemicals: 5,
                            }
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                        maintenanceConstructionCost: {credits: 500, iridium: 10},
                    },
                    {
                        id: 'coral-farm',
                        name: 'Coral Farm',
                        icon: 'deep_water_corals',
                        color: '#81202e',
                        placementType: 'coast',
                        constructionCost: {
                            credits: 6000,
                            metalFoam: 6
                        },
                        production: {
                            corals: 2
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 60,
                            workforce: 10,
                            energy: 10,
                        },
                        productionUnit: {
                            name: 'Coral Colony',
                            id: 'coral-colony',
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 1500,
                                petrochemicals: 5,
                            }
                        },
                        productionLimit: 2,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'pharma-lab',
                        name: 'Pharma Lab',
                        icon: 'stimulants',
                        color: '#77373c',
                        placementType: 'ground',
                        unitSize: [3, 6],
                        constructionCost: {
                            credits: 7500,
                            metalFoam: 5
                        },
                        production: {
                            stimulants: 2
                        },
                        consumption: {
                            corals: 2
                        },
                        maintenance: {
                            credits: 120,
                            workforce: 20,
                            energy: 10,
                        },
                        productionUnit: {
                            name: 'Enrichment Containers',
                            id: 'enrichment-containers',
                            unitSize: [3, 3],
                            effects: {
                                productivity: 0.5,
                                maintenance: 0.25,
                            },
                            constructionCost: {
                                credits: 900,
                                petrochemicals: 3,
                            }
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'methane-extractor',
                        name: 'Methane Extractor',
                        icon: 'methan_clathrate',
                        color: '#ce6e14',
                        placementType: 'coast',
                        constructionCost: {
                            credits: 15000,
                            metalFoam: 20
                        },
                        production: {
                            methaneIce: 6
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 1200,
                            workforce: 30,
                            energy: 100,
                        },
                        productionUnit: {
                            name: 'Deep Crust Drill',
                            id: 'deep-crust-drill',
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 3800,
                                petrochemicals: 10,
                            }
                        },
                        productionLimit: 3,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'deuterium-strainer',
                        name: 'Deuterium Strainer',
                        icon: 'deuterium',
                        color: '#995aee',
                        placementType: 'coast',
                        constructionCost: {
                            credits: 15000,
                            metalFoam: 15
                        },
                        production: {
                            deuterium: 5
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 600,
                            workforce: 10,
                            energy: 100,
                        },
                        productionUnit: {
                            name: 'Strainer Arm',
                            id: 'strainer-arm',
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 3800,
                                petrochemicals: 10,
                            }
                        },
                        productionLimit: 3,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'cryogenics-lab',
                        name: 'Cryogenics Lab',
                        icon: 'super_coolants',
                        color: '#65a2ca',
                        placementType: 'ground',
                        unitSize: [4, 8],
                        constructionCost: {
                            credits: 9000,
                            metalFoam: 25
                        },
                        production: {
                            coolants: 2
                        },
                        consumption: {
                            methaneIce: 1,
                            deuterium: 1
                        },
                        maintenance: {
                            credits: 900,
                            workforce: 30,
                            energy: 100,
                        },
                        productionUnit: {
                            name: 'Cryochamber',
                            id: 'cryochamber',
                            unitSize: [4, 7],
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 2300,
                                petrochemicals: 10,
                            }
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'subzero-cleanroom',
                        name: 'Subzero Cleanroom',
                        icon: 'qubit_processors',
                        color: '#e6d9a2',
                        placementType: 'ground',
                        unitSize: [3, 8],
                        constructionCost: {
                            credits: 22500,
                            metalFoam: 20
                        },
                        production: {
                            processors: 2
                        },
                        consumption: {
                            molybdenum: 1,
                            diamonds: 1
                        },
                        maintenance: {
                            credits: 900,
                            workforce: 15,
                            energy: 40,
                        },
                        productionUnit: {
                            name: 'Chip Assembly',
                            id: 'chip-assembly',
                            unitSize: [2, 8],
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 5600,
                                petrochemicals: 10,
                            }
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'hardware-fabrication-plant',
                        name: 'Hardware Fabrication Plant',
                        icon: 'quantum_computers',
                        color: '#bff0ff',
                        placementType: 'ground',
                        unitSize: [7, 7],
                        constructionCost: {
                            credits: 22500,
                            metalFoam: 15
                        },
                        production: {
                            computers: 3
                        },
                        consumption: {
                            processors: 2,
                            coolants: 1
                        },
                        maintenance: {
                            credits: 1200,
                            workforce: 35,
                            energy: 100,
                        },
                        productionUnit: {
                            name: 'Air-Locked Labs',
                            id: 'air-locked-labs',
                            unitSize: [4, 7],
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 5600,
                                petrochemicals: 10,
                            }
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'high-security-laboratory',
                        name: 'High Security Laboratory',
                        icon: 'forbidden_science',
                        color: '#c79b3b',
                        placementType: 'ground',
                        //TODO: What is the size?
                        unitSize: [11, 7],
                        requirements: {
                            scientists: 3000
                        },
                        constructionCost: {
                            credits: 15000,
                            metalFoam: 50
                        },
                        production: {
                            //secrecy: 10
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 6000,
                            workforce: 25,
                            energy: 500,
                        },
                    },
                ]
            },
        ],
        moon: [
            {
                id: 'miners',
                levelButtonX: 2919,
                buildings: [
                    {
                        id: 'titanium-mine',
                        name: 'Titanium Mine',
                        icon: 'titanium',
                        color: '#d2d3d7',
                        placementType: 'mountain',
                        constructionCost: {
                            credits: 9000,
                        },
                        production: {
                            titanium: 10
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 2000,
                            workforce: 20,
                            energy: 100,
                        },
                        productionUnit: {
                            name: 'Laser Cutter',
                            id: 'laser-cutter',
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 2300,
                                magnetite: 5,
                            }
                        },
                        productionLimit: 2,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'ion-welder',
                        name: 'Ion Welder',
                        icon: 'titan_plating',
                        color: '#9698af',
                        placementType: 'ground',
                        unitSize: [6, 9],
                        unitShape: [
                            [1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1],
                            [1, 1, 1, 1, 1, 1],
                            [0, 1, 1, 1, 1, 0],
                            [0, 1, 1, 1, 1, 0],
                            [0, 1, 1, 1, 1, 0],
                            [0, 1, 1, 1, 1, 0],
                        ],
                        constructionCost: {
                            credits: 9000,
                        },
                        production: {
                            titaniumPlating: 10
                        },
                        consumption: {
                            titanium: 10
                        },
                        maintenance: {
                            credits: 600,
                            workforce: 10,
                            energy: 30,
                        },
                        productionUnit: {
                            name: 'Melting Chamber',
                            id: 'melting-chamber',
                            unitSize: [6, 9],
                            effects: {
                                productivity: 2,
                                maintenance: 1,
                            },
                            constructionCost: {
                                credits: 4500,
                                magnetite: 10,
                            }
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'core-ice-driller',
                        name: 'Core Ice Driller',
                        icon: 'moon_ice',
                        color: '#409adf',
                        placementType: 'mountain',
                        constructionCost: {
                            credits: 9000,
                            titaniumPlating: 3
                        },
                        production: {
                            moonIce: 20
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 3000,
                            workforce: 20,
                            energy: 100,
                        },
                        productionUnit: {
                            name: 'Rotary Drill',
                            id: 'rotary-drill',
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 2300,
                                magnetite: 5,
                            }
                        },
                        productionLimit: 2,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'oxygen-separator',
                        name: 'Oxygen Separator',
                        icon: 'oxygen',
                        color: '#47c1e0',
                        placementType: 'ground',
                        unitSize: [3, 6],
                        constructionCost: {
                            credits: 9000,
                            titaniumPlating: 3
                        },
                        production: {
                            oxygen: 1
                        },
                        consumption: {
                            moonIce: 2
                        },
                        maintenance: {
                            credits: 300,
                            workforce: 5,
                            energy: 20,
                        },
                        productionUnit: {
                            name: 'Splitting Unit',
                            id: 'splitting-unit',
                            unitSize: [3, 6],
                            effects: {
                                productivity: 2,
                                maintenance: 1,
                            },
                            constructionCost: {
                                credits: 4500,
                                magnetite: 10,
                            }
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'kreep-gatherer',
                        name: 'Kreep Gatherer',
                        icon: 'rare_earth_elements',
                        color: '#988775',
                        placementType: 'mountain',
                        constructionCost: {
                            credits: 9000,
                            titaniumPlating: 15
                        },
                        production: {
                            rareEarthElements: 10
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 3000,
                            workforce: 30,
                            energy: 200,
                        },
                        productionUnit: {
                            name: 'Kreep Extractor',
                            id: 'kreep-extractor',
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 2300,
                                magnetite: 5,
                            }
                        },
                        productionLimit: 2,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'cybernetics-factory',
                        name: 'Cybernetics Factory',
                        icon: 'bio_enhancers',
                        color: '#b69f6a',
                        placementType: 'ground',
                        unitSize: [6, 8],
                        constructionCost: {
                            credits: 9000,
                            titaniumPlating: 3
                        },
                        production: {
                            bioenhancers: 1
                        },
                        consumption: {
                            rareEarthElements: 1
                        },
                        maintenance: {
                            credits: 900,
                            workforce: 30,
                            energy: 100,
                        },
                        productionUnit: {
                            name: 'Cybernetics Manufacture',
                            id: 'cybernetics-manufacture',
                            unitSize: [4, 8],
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 2300,
                                magnetite: 5,
                            }
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'maintenance-station',
                        name: 'Maintenance Station',
                        icon: 'colony_safety',
                        color: '#37434d',
                        placementType: 'ground',
                        unitSize: [7, 7],
                        constructionCost: {
                            credits: 35000,
                            titaniumPlating: 50
                        },
                        production: {
                            //repairs: 10
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 3000,
                            workforce: 12,
                            energy: 100,
                        },
                    },
                ]
            },
            {
                id: 'officers',
                levelButtonX: 3336,
                buildings: [
                    {
                        id: 'aeroponic-farm',
                        name: 'Aeroponic Farm',
                        icon: 'moon_crops',
                        color: '#e7aa35',
                        placementType: 'ground',
                        unitSize: [4, 9],
                        constructionCost: {
                            credits: 36000,  //TODO: Fix
                            titaniumPlating: 18
                        },
                        production: {
                            moonCrops: 10
                        },
                        consumption: {
                            moonIce: 1
                        },
                        maintenance: {
                            credits: 100,
                            workforce: 10,
                            energy: 20,
                        },
                        productionUnit: {
                            name: 'Aeroponic Greenhouse',
                            id: 'aeroponic-greenhouse',
                            unitSize: [4, 5],
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 10000,
                                magnetite: 10,
                            }
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'space-galley',
                        name: 'Space Galley',
                        icon: 'natural_space_food',
                        color: '#a85b2c',
                        placementType: 'ground',
                        unitSize: [5, 12],
                        constructionCost: {
                            credits: 43200,  //TODO: fix
                            titaniumPlating: 18
                        },
                        production: {
                            lunarLunch: 5
                        },
                        consumption: {
                            moonCrops: 5
                        },
                        maintenance: {
                            credits: 200,
                            workforce: 30,
                            energy: 60,
                        },
                        productionUnit: {
                            name: 'Kitchen Hall',
                            id: 'kitchen-hall',
                            unitSize: [8, 12],
                            effects: {
                                productivity: 2,
                                maintenance: 1,
                            },
                            constructionCost: {
                                credits: 24000,
                                magnetite: 25,
                            }
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'regolith-collector',
                        name: 'Regolith Collector',
                        icon: 'helium_3',
                        color: '#f5c419',
                        placementType: 'mountain',
                        constructionCost: {
                            credits: 16000,
                            titaniumPlating: 30
                        },
                        production: {
                            helium3: 10
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 4000,
                            workforce: 55,
                            energy: 200,
                        },
                        productionUnit: {
                            name: 'Extraction Tube',
                            id: 'extraction-tube',
                            effects: {
                                productivity: 1,
                                maintenance: 0.5,
                            },
                            constructionCost: {
                                credits: 4000,
                                magnetite: 10,
                            }
                        },
                        productionLimit: 2,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'fusion-preparation-plant',
                        name: 'Fusion Preparation Plant',
                        icon: 'fusion_accumulators',
                        color: '#e5b8fd',
                        placementType: 'ground',
                        unitSize: [3, 10],
                        constructionCost: {
                            credits: 80000,
                            titaniumPlating: 50
                        },
                        production: {
                            fusionPowerCells: 4
                        },
                        consumption: {
                            helium3: 3,
                            deuterium: 1
                        },
                        maintenance: {
                            credits: 2000,
                            workforce: 55,
                            energy: 100,
                        },
                        productionUnit: {
                            name: 'Preparation Complex',
                            id: 'preparation-complex',
                            unitSize: [6, 10],
                            effects: {
                                productivity: 2,
                                maintenance: 1,
                            },
                            constructionCost: {
                                credits: 40000,
                                magnetite: 25,
                            }
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'anti-g-workshop',
                        name: 'Anti-G Workshop',
                        icon: 'gravity_generators',
                        color: '#375fa7',
                        placementType: 'ground',
                        unitSize: [5, 10],
                        constructionCost: {
                            credits: 20000,
                            titaniumPlating: 17
                        },
                        production: {
                            antiGravCompensators: 3
                        },
                        consumption: {
                            fusionPowerCells: 2,
                            rareEarthElements: 1
                        },
                        maintenance: {
                            credits: 6000,
                            workforce: 85,
                            energy: 400,
                        },
                        productionUnit: {
                            name: 'Gravity Modifiers',
                            id: 'gravity-modifiers',
                            unitSize: [10, 10],
                            effects: {
                                productivity: 2,
                                maintenance: 1,
                            },
                            constructionCost: {
                                credits: 10000,
                                magnetite: 25,
                            }
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'health-center',
                        name: 'Health Center',
                        icon: 'health_care',
                        color: '#b8851f',
                        placementType: 'ground',
                        unitSize: [10, 9],
                        constructionCost: {
                            credits: 400000,
                            titaniumPlating: 80
                        },
                        production: {
                            // healthcare: 10
                        },
                        consumption: {
                        },
                        maintenance: {
                            credits: 8000,
                            workforce: 25,
                            energy: 200,
                        },
                        requirements: {
                            officers: 3000
                        }
                    },
                ]
            },
            {
                id: 'ornaments',
                levelButtonX: 1668,
                buildings: [
                    {
                        id: 'observation-deck',
                        name: 'Observation Deck',
                        icon: 'moon_attraction_donut',
                        color: '#a4531a',
                        placementType: 'ground',
                        unitSize: [4, 4],
                        constructionCost: {
                            credits: 500,
                        },
                        production: {
                        },
                        consumption: {
                        },
                        maintenance: {
                        },
                    },
                    {
                        id: 'combot-arena',
                        name: 'Combot Arena',
                        icon: 'moon_attraction_robot_fight',
                        color: '#76d8dd',
                        placementType: 'ground',
                        unitSize: [4, 4],
                        constructionCost: {
                            credits: 500,
                        },
                        production: {
                        },
                        consumption: {
                        },
                        maintenance: {
                        },
                    },
                    {
                        id: 'bungie-launcher',
                        name: 'Bungie Launcher',
                        icon: 'moon_attraction_astronaut',
                        color: '#467291',
                        placementType: 'ground',
                        unitSize: [4, 4],
                        constructionCost: {
                            credits: 500,
                        },
                        production: {
                        },
                        consumption: {
                        },
                        maintenance: {
                        },
                    },
                ]
            },
        ]
    };

    Anno2205Layouts.commonBuildings = {
        earth: [
            {
                id: 'street',
                name: 'Street',
                icon: 'earth_road',
                color: '#7a828b',
                showIcon: false,
                placementType: 'ground',
                unitSize: [1, 1],
                constructionCost: {
                    credits: 25
                },
                production: {
                },
                consumption: {
                },
                maintenance: {
                },
            },
            {
                id: 'residence',
                name: 'Residence',
                icon: 'residence_earth',
                color: '#d29073',
                placementType: 'ground',
                unitSize: [3, 3],
                constructionCost: {
                    biopolymers: 1
                },
                production: {
                },
                consumption: {
                },
                maintenance: {
                },
            },
            {
                id: 'residential-complex',
                name: 'Residential Complex',
                icon: 'residence_estate',
                color: '#b66e4c',
                placementType: 'ground',
                unitSize: [6, 6],
                constructionCost: {
                    biopolymers: 2,
                    'construct-o-bots': 1
                },
                production: {
                },
                consumption: {
                },
                maintenance: {
                },
            },
            {
                id: 'earth-transportation-center',
                name: 'Transportation Center',
                icon: 'transportation_center_earth',
                color: '#175a87',
                placementType: 'ground',
                unitSize: [4, 6],
                constructionCost: {
                    credits: 2500,
                    biopolymers: 5,
                },
                production: {
                    //logistics: 25
                },
                consumption: {
                },
                maintenance: {
                    credits: 250,
                    workforce: 25,
                    energy: 50,
                },
            },
            {
                id: 'windpark',
                name: 'Windpark',
                icon: 'windpark',
                color: '#447290',
                placementType: 'ground',
                unitSize: [4, 8],
                constructionCost: {
                    credits: 500,
                    biopolymers: 3
                },
                production: {
                    energy: 50
                },
                consumption: {
                },
                maintenance: {
                    credits: 60,
                    workforce: 10,
                },
                productionUnit: {
                    name: 'Wind Turbine',
                    id: 'wind-turbine',
                    unitSize: [4, 5],
                    effects: {
                        productivity: 0.5,
                        maintenance: 0.25,
                    },
                    constructionCost: {
                        credits: 100,
                        graphene: 1,
                    }
                },
                productionLimit: 4,
                maintenanceModules: ['credits', 'workforce'],
            },
            {
                id: 'tidal-power-station',
                name: 'Tidal Power Station',
                icon: 'tidal_power_station',
                color: '#3d5fe5',
                placementType: 'coast',
                constructionCost: {
                    credits: 6000,
                    biopolymers: 3,
                    'construct-o-bots': 5
                },
                production: {
                    energy: 300
                },
                consumption: {
                },
                maintenance: {
                    credits: 480,
                    workforce: 25,
                },
                productionUnit: {
                    name: 'Water Turbine',
                    id: 'water-turbine',
                    effects: {
                        productivity: 1,
                        maintenance: 0.5,
                    },
                    constructionCost: {
                        credits: 1500,
                        graphene: 5,
                    }
                },
                productionLimit: 4,
                maintenanceModules: ['credits', 'workforce'],
            },
            {
                id: 'corporation-hq',
                name: 'Corporation HQ',
                icon: 'headquarter_base',
                color: '#3a7dbd',
                placementType: 'ground',
                unitSize: [6, 12],
                constructionCost: {
                    credits: 1000000,
                    superalloys: 100,
                    biopolymers: 100,
                    'construct-o-bots': 100
                },
                production: {
                },
                consumption: {
                },
                maintenance: {
                    credits: 10000,
                    workforce: 10000,
                    energy: 2000,
                },
                // productionUnit: {
                //     unitSize: [4, 4],
                // },
                // productionLimit: 30,
                // TODO
                maintenanceModules: ['headquarter_module_1', 'headquarter_module_2', 'headquarter_module_3', 'headquarter_module_4', 'headquarter_module_5'],
                maintenanceLimit: 30
            },
        ],
        arctic: [
            {
                id: 'polar-road',
                name: 'Polar Road',
                icon: 'arctic_road',
                showIcon: false,
                color: '#b8becc',
                placementType: 'ground',
                unitSize: [1, 1],
                constructionCost: {
                    credits: 25,
                },
                production: {
                },
                consumption: {
                },
                maintenance: {
                },
            },
            {
                id: 'arctic-dwelling',
                name: 'Arctic Dwelling',
                icon: 'residence_arctic',
                color: '#c3e7ef',
                placementType: 'ground',
                unitSize: [5, 5],
                constructionCost: {
                    metalFoam: 2
                },
                production: {
                },
                consumption: {
                },
                maintenance: {
                },
            },
            {
                id: 'arctic-transportation-center',
                name: 'Transportation Center',
                icon: 'transportation_center_arctic',
                color: '#303e5d',
                placementType: 'ground',
                unitSize: [4, 6],
                constructionCost: {
                    credits: 5000,
                    metalFoam: 5
                },
                production: {
                    //logistics: 25
                },
                consumption: {
                },
                maintenance: {
                    credits: 300,
                    workforce: 5,
                    energy: 100,
                },
            },
            {
                id: 'geothermal-turbines',
                name: 'Geothermal Turbines',
                icon: 'geothermal_turbinnes',
                color: '#68afdd',
                placementType: 'coast',
                constructionCost: {
                    credits: 2000,
                    metalFoam: 5
                },
                production: {
                    energy: 300
                },
                consumption: {
                },
                maintenance: {
                    credits: 600,
                    workforce: 50,
                },
                maintenanceModules: ['credits', 'workforce'],
            },
            {
                id: 'gas-power-station',
                name: 'Gas Power Station',
                icon: 'gas_power_plant',
                color: '#40a1d1',
                placementType: 'ground',
                unitSize: [8, 11],
                constructionCost: {
                    credits: 15000,
                    metalFoam: 25
                },
                production: {
                    energy: 400
                },
                consumption: {
                    methaneIce: 6
                },
                maintenance: {
                    credits: 1000,
                    workforce: 25,
                },
                productionUnit: {
                    name: 'Generator Domes',
                    id: 'generator-domes',
                    unitSize: [4, 8],
                    effects: {
                        productivity: 0.5,
                        maintenance: 0.25,
                    },
                    constructionCost: {
                        credits: 1900,
                        petrochemicals: 5,
                    }
                },
                productionLimit: 6,
                maintenanceModules: ['credits', 'workforce', 'logistics'],
            },
        ],
        moon: [
            {
                id: 'moon-tracks',
                name: 'Moon Tracks',
                icon: 'moon_road',
                showIcon: false,
                color: '#5e6160',
                placementType: 'ground',
                unitSize: [1, 1],
                constructionCost: {
                    credits: 25,
                },
                production: {
                },
                consumption: {
                },
                maintenance: {
                },
            },
            {
                id: 'living-unit',
                name: 'Living Unit',
                icon: 'residence_moon',
                color: '#c67e5e',
                placementType: 'ground',
                unitSize: [5, 5],
                constructionCost: {
                    credits: 7500,
                    titaniumPlating: 3
                },
                production: {
                },
                consumption: {
                },
                maintenance: {
                },
                //officer capacity:
                // inhabitants: 50
                // workforce: 50
                // revenue: 164
            },
            {
                id: 'small-shield-generator',
                name: 'Small Shield Generator',
                icon: 'energy_shielding_small_2',
                color: '#4dbaae',
                placementType: 'ground',
                unitSize: [2, 2],
                constructionCost: {
                    credits: 15000,
                },
                production: {
                },
                consumption: {
                },
                maintenance: {
                    credits: 50,
                    workforce: 5,
                    energy: 50,
                },
            },
            {
                id: 'large-shield-generator',
                name: 'Large Shield Generator',
                icon: 'energy_shielding_big_2',
                color: '#99c06b',
                placementType: 'ground',
                unitSize: [4, 4],
                constructionCost: {
                    credits: 50000,
                    titaniumPlating: 10
                },
                production: {
                },
                consumption: {
                },
                maintenance: {
                    credits: 100,
                    workforce: 10,
                    energy: 100,
                },
            },
            {
                id: 'lunar-transportation-center',
                name: 'Lunar Transportation Center',
                icon: 'transportation_center_moon',
                color: '#49bfdb',
                placementType: 'ground',
                unitSize: [4, 6],
                constructionCost: {
                    credits: 10000,
                    titaniumPlating: 5
                },
                production: {
                    //logistics: 20
                },
                consumption: {
                },
                maintenance: {
                    credits: 500,
                    workforce: 5,
                    energy: 100,
                },
            },
            {
                id: 'solar-array',
                name: 'Solar Array',
                icon: 'solar_array',
                color: '#8ecfec',
                placementType: 'mountain',
                constructionCost: {
                    credits: 9000,
                    titaniumPlating: 20
                },
                production: {
                    energy: 500
                },
                consumption: {
                },
                maintenance: {
                    credits: 1000,
                    workforce: 20,
                },
                productionUnit: {
                    name: 'Solar Panels',
                    id: 'solar-panels',
                    effects: {
                        productivity: 1,
                        maintenance: 0.5,
                    },
                    constructionCost: {
                        credits: 2300,
                        magnetite: 5,
                    }
                },
                productionLimit: 2,
                maintenanceModules: ['credits', 'workforce'],
            },
            {
                id: 'fusion-reactor',
                name: 'Fusion Reactor',
                icon: 'fusion_power_plant',
                color: '#a07dc8',
                placementType: 'ground',
                unitSize: [12, 12],
                constructionCost: {
                    credits: 800000,
                    titaniumPlating: 100
                },
                production: {
                    energy: 4000
                },
                consumption: {
                    fusionPowerCells: 2
                },
                maintenance: {
                    credits: 7500,
                    workforce: 110,
                },
                productionUnit: {
                    name: 'Reactor Coolers',
                    id: 'reactor-coolers',
                    unitSize: [6, 11],
                    effects: {
                        productivity: 0.5,
                        maintenance: 0.25,
                    },
                    constructionCost: {
                        credits: 100000,
                        magnetite: 30,
                    }
                },
                productionLimit: 6,
                maintenanceModules: ['credits', 'workforce', 'logistics'],
            },
        ]
    };

    // Maps building id to its description object.
    Anno2205Layouts.unitIdMap = {};

    Anno2205Layouts.initBuildings = function() {
        // Add "id" attribute to maintenance modules.
        _.each(Anno2205Layouts.maintenanceModules, function(module, key) {
            module.id = key;
        });


        // Build the unitIdMap, and do some initialization.
        _.each(Anno2205Layouts.regions, function(region) {
            _.each(Anno2205Layouts.buildingLevels[region], function(level) {
                _.each(level.buildings, function(building) {
                    Anno2205Layouts.unitIdMap[building.id] = building;
                    if (building.productionUnit !== undefined) {
                        Anno2205Layouts.unitIdMap[building.productionUnit.id] = building.productionUnit;
                    }
                    // For convenience, add the region.
                    building.region = region;
                });
            });
            _.each(Anno2205Layouts.commonBuildings[region], function(building) {
                Anno2205Layouts.unitIdMap[building.id] = building;
            });
        });
        _.each(Anno2205Layouts.maintenanceModules, function(module) {
            Anno2205Layouts.unitIdMap[module.id] = module;
        });

        // Do some initialization for each unit.
        _.each(Anno2205Layouts.unitIdMap, function(unit) {
            // Place the maintenance module definitions directly into the
            // building definitions.
            if (unit.maintenanceModules !== undefined) {
                unit.maintenanceModules = _.map(unit.maintenanceModules, function(module) {
                    return Anno2205Layouts.maintenanceModules[module];
                });
            }
            // Add icon information to the production info objects (for
            // convenience).
            if (unit.productionUnit !== undefined) {
                unit.productionUnit.icon = unit.icon;
                unit.productionUnit.color = unit.color;
                unit.productionUnit.iconScale = 0.6;
            }
        });

        // Populate the background image information for the tab buttons.
        var index = 0;
        var width = 139;
        _.each(Anno2205Layouts.regions, function(region) {
            _.each(Anno2205Layouts.buildingLevels[region], function(level) {
                level.backgroundBase = 'url("images/buttons/button-construction-levels-sheet.png") -'+level.levelButtonX+'px 0';
                level.backgroundHover = 'url("images/buttons/button-construction-levels-sheet.png") -'+level.levelButtonX+width+'px 0';
                level.backgroundActive = 'url("images/buttons/button-construction-levels-sheet.png") -'+level.levelButtonX+width*2+'px 0';
                level.background = level.backgroundBase;
                index += 1;
            });
        });
    };

    Anno2205Layouts.rotateShape = function(shape, orientation) {
        var result = [];
        if (orientation === 0) {
            return shape;
        } else if (orientation == 2) {
            // flip.
            for (var rowNum=shape.length-1; rowNum >=0; rowNum--) {
                result.push(shape[rowNum].slice().reverse());
            }
        } else {
            var width = shape[0].length;
            var height = shape.length;
            for (var i=0; i<width; i++) {
                result.push([]);
            }
            _.each(shape, function(row, rowNum) {
                _.each(row, function(el, colNum) {
                    if (orientation == 1) {
                        // clockwise once.
                        result[colNum][height-rowNum-1] = el;
                    } else if (orientation == 3) {
                        // counterclockwise once
                        // result[width-colNum-1][rowNum] = el;
                        result[width-colNum-1][rowNum] = el;
                    }
                });
            });
        }
        return result;
    };

}(Anno2205Layouts));
;'use strict';

var Anno2205Layouts = Anno2205Layouts || {};
(function(Anno2205Layouts) {

    Anno2205Layouts.buildingAlpha = 0.8;
    Anno2205Layouts.productionAlpha = 0.6;
    Anno2205Layouts.maintenanceAlpha = 0.7;

    /**
     * The EditorUnit represents a unit on the grid (a building, a production
     * module, or a maintenance module).
     * @class EditorUnit
     *
     * @var {object} type - The BuildingType object.
     * @var {Array} position - The position in the grid [x, y].  undefined if
     *     not placed.
     * @var {boolean} orientation - Number of clockwise rotations.
     * @var {CanvasRenderingContext2D} ctx - The context for rendering the unit.
     * @var {jQuery} unitCanvas - The <canvas> element for the unit.
     */
    var EditorUnit = function() {
        this.unitInfo = undefined;
        this.position = undefined;
        this.orientation = 0;
        this.ctx = undefined;
        this.state = undefined;
        this.color = undefined;
        this.colorAlpha = undefined;
    };

    EditorUnit.createFromStorage = function(unitStorage, color, colorAlpha) {
        var eu = new EditorUnit();
        eu.unitInfo = Anno2205Layouts.unitIdMap[unitStorage.unitInfoId];
        eu.position = unitStorage.position.slice();
        eu.orientation = unitStorage.orientation;
        eu.state = 'onGrid';
        eu.setColor(color, colorAlpha);
        return eu;
    };

    EditorUnit.createNew = function(unitInfo, color, colorAlpha, grid) {
        var eu = new EditorUnit();
        eu.unitInfo = unitInfo;
        eu.createElement(grid);
        eu.state = 'positioning';
        eu.setColor(color, colorAlpha);
        return eu;
    };

    EditorUnit.prototype.setColor = function(color, colorAlpha) {
        this.colorAlpha = colorAlpha;
        this.color = [
            parseInt(color.substr(1, 2), 16),
            parseInt(color.substr(3, 2), 16),
            parseInt(color.substr(5, 2), 16),
            colorAlpha
        ];
    };

    EditorUnit.prototype.export = function() {
        return {
            unitInfoId: this.unitInfo.id,
            position: this.position.slice(),
            orientation: this.orientation,
        };
    };

    EditorUnit.prototype.clone = function(grid) {
        var eu = new EditorUnit();
        eu.unitInfo = this.unitInfo;
        eu.position = this.position.slice();
        eu.orientation = this.orientation;
        eu.state = this.state;
        eu.color = this.color;
        eu.colorAlpha = this.colorAlpha;
        eu.createElement(grid);
        return eu;
    };

    EditorUnit.prototype.move = function(x, y) {
        this.position[0] += x;
        this.position[1] += y;
        // TODO: Move canvas?
    };

    /** Determine the bounding box of the unit.  */
    EditorUnit.prototype.bbox = function() {
        var normal = this.orientation === 0 || this.orientation === 2;
        var gridWidth = this.unitInfo.unitSize[+!normal];
        var gridHeight = this.unitInfo.unitSize[+normal];
        var width = gridWidth*Anno2205Layouts.gridSize + 1;
        var height = gridHeight*Anno2205Layouts.gridSize + 1;
        return {
            gridWidth: gridWidth,
            gridHeight: gridHeight,
            width: width,
            height: height,
            size: Math.max(width, height),
        };
    };

    EditorUnit.prototype.inGrid = function(grid) {
        var bbox = this.bbox();
        return ((this.position[0] + bbox.gridWidth <= grid.gridWidth) &&
                (this.position[1] + bbox.gridHeight <= grid.gridHeight));
    };

    /** Create the <canvas> element and add it to the document. */
    EditorUnit.prototype.createElement = function(grid) {
        var bbox = this.bbox();
        var canvasOffset = $("#anno-canvas").offset();

        var left = 0;
        var top = 0;
        if (this.position) {
            left = this.position[0]*Anno2205Layouts.gridSize + canvasOffset.left + grid.gridOffsetX;
            top = this.position[1]*Anno2205Layouts.gridSize + canvasOffset.top + grid.gridOffsetY;
        }
        this.unitCanvas = $('<canvas></canvas>').css({
            position: 'absolute',
            left: left,
            top: top,
        }).prop({
            width: bbox.size,
            height: bbox.size,
        });
        this.ctx = this.unitCanvas.get(0).getContext('2d');
        $("#construction-area").append(this.unitCanvas);
    };

    EditorUnit.prototype.demolish = function() {
        if (this.unitCanvas) {
            this.unitCanvas.remove();
        }
    };

    EditorUnit.prototype.hitTest = function(pageX, pageY) {
        var offset = this.unitCanvas.offset();
        var bbox = this.bbox();
        var relativeX = pageX - offset.left;
        var relativeY = pageY - offset.top;
        if (relativeX > 0 && relativeY > 0 &&
            relativeX < bbox.width && relativeY < bbox.height) {
            var pixel = this.ctx.getImageData(relativeX, relativeY, 1, 1).data;
            // Hit if not transparent.
            return pixel[3] > 0;
        }
    };

    EditorUnit.prototype.eachUnitGrid = function(cb) {
        var bbox = this.bbox();
        var shape = this.rotatedShape();
        for (var x=0; x<bbox.gridWidth; x++) {
            for (var y=0; y<bbox.gridHeight; y++) {
                if (!shape || shape[y][x]) {
                    cb(x+this.position[0], y+this.position[1]);
                }
            }
        }
    };

    // TODO: Make this a property of the unit.
    EditorUnit.prototype.rotatedShape = function() {
        if (this.unitInfo.unitShape) {
            return Anno2205Layouts.rotateShape(this.unitInfo.unitShape, this.orientation);
        } else {
            return undefined;
        }
    };

    /** Draw the unit on its canvas. */
    EditorUnit.prototype.draw = function() {
        var bbox = this.bbox();
        var ctx = this.ctx;
        ctx.clearRect(0, 0, bbox.size, bbox.size);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000000';
        ctx.fillStyle = 'rgba('+this.color.join(',')+')';
        ctx.beginPath();
        if (this.unitInfo.unitShape) {
            var shape = this.rotatedShape();

            var moves = [];
            _.each(shape, function(row) {
                var zeroes = _.indexOf(row, 1);
                var ones = _.reduce(row, function(memo, x) { return memo+x;}, 0);
                moves.push([zeroes, ones]);
            });

            // Move horizontal, then down 1 grid along the top/right side.
            var x = 0;
            var y = 0.5;
            ctx.moveTo(moves[0][0]*Anno2205Layouts.gridSize+0.5, 0.5);
            _.each(moves, function(row) {
                x = (row[0]+row[1]) * Anno2205Layouts.gridSize + 0.5;
                ctx.lineTo(x, y);
                y += Anno2205Layouts.gridSize;
                ctx.lineTo(x, y);
            });

            // Move horizontal, then up 1 grid along the bottom/left side.
            // Array of [numOfZeroes, numOfOnes]
            _.each(moves.reverse(), function(row) {
                x = row[0] * Anno2205Layouts.gridSize + 0.5;
                ctx.lineTo(x, y);
                y -= Anno2205Layouts.gridSize;
                ctx.lineTo(x, y);
            });

            ctx.stroke();
            ctx.fill();
        } else {
            // Simple square.
            ctx.rect(0.5, 0.5, bbox.width-1, bbox.height-1);
            ctx.stroke();
            ctx.fill();
        }
        // Draw the icon in the middle.
        if (this.unitInfo.showIcon === undefined || this.unitInfo.showIcon) {
            var iconSheet = $('#construction-icons')[0];
            var icon = Anno2205Layouts.iconSpriteMap.coordinates[this.unitInfo.icon];
            var iconScale = this.unitInfo.iconScale || 1.0;
            if (icon.width * iconScale > bbox.width ||
                icon.height * iconScale > bbox.height) {
                // Icon is larger than the unit.
                var widthScale = bbox.width/icon.width;
                var heightScale = bbox.height/icon.height;
                iconScale = Math.min(widthScale, heightScale) * 0.9;
            }
            var targetIconWidth = icon.width * iconScale;
            var targetIconHeight = icon.height * iconScale;
            ctx.drawImage(iconSheet, icon.x, icon.y,
                icon.width, icon.height,
                bbox.width/2 - targetIconWidth/2, bbox.height/2 - targetIconHeight/2,
                targetIconWidth, targetIconHeight);
        }
    };

    Anno2205Layouts.EditorUnit = EditorUnit;

    /***************************************************************************/

    /**
     * The EditorBuilding represents a building, its production modules, and its
     * maintenance modules.
     * @class EditorBuilding
     *
     */
    var EditorBuilding = function() {
        this.type = undefined;
        this.buildingUnit = undefined;
        this.productionModules = [];
        this.maintenanceModules = [];
        this.maintenance = {};
        this._color = '#ff0000';
    };

    EditorBuilding.prototype._setStatus = function() {
        this.productionEnabled = this.type.productionUnit && this.productionModules.length < this.type.productionLimit;
        this.maintenanceEnabled = this.type.maintenanceModules && this.maintenanceModules.length < 5;
        console.log(this.productionEnabled);
    };

    EditorBuilding.prototype.color = function(newColor) {
        if (arguments.length) {
            this._color = newColor;
            this.eachUnit(function(unit) {
                unit.setColor(newColor, unit.colorAlpha);
                unit.draw();
            });
        } else {
            return this._color;
        }
    };

    EditorBuilding.createFromStorage = function(buildingStorage) {
        var eb = new EditorBuilding();
        eb.type = Anno2205Layouts.unitIdMap[buildingStorage.buildingId];
        eb._color = buildingStorage.color ? buildingStorage.color : eb.type.color;
        eb.buildingUnit = EditorUnit.createFromStorage(buildingStorage.building,
            eb._color, Anno2205Layouts.buildingAlpha);
        eb.productionModules = _.map(buildingStorage.productionModules,
            function(modInfo) {
                return EditorUnit.createFromStorage(modInfo,
                    eb._color, Anno2205Layouts.productionAlpha);
            });
        eb.maintenanceModules = _.map(buildingStorage.maintenanceModules,
            function(modInfo) {
                return EditorUnit.createFromStorage(modInfo,
                    eb._color, Anno2205Layouts.maintenanceAlpha);
            });
        eb._computeMaintenance();
        eb._setStatus();
        return eb;
    };

    EditorBuilding.createNew = function(buildingType, buildingUnit, grid) {
        var eb = new EditorBuilding();
        eb.type = buildingType;
        eb._color = buildingType.color;
        if (buildingUnit) {
            eb.buildingUnit = buildingUnit;
        } else {
            eb.buildingUnit = EditorUnit.createNew(buildingType,
                buildingType.color, Anno2205Layouts.buildingAlpha, grid);
        }
        eb._computeMaintenance();
        eb._setStatus();
        return eb;
    };

    EditorBuilding.prototype.export = function() {
        return {
            buildingId: this.type.id,
            building: this.buildingUnit.export(),
            color: this._color,
            productionModules: _.map(this.productionModules, function(module) {
                return module.export();
            }),
            maintenanceModules: _.map(this.maintenanceModules, function(module) {
                return module.export();
            }),
        };
    };

    EditorBuilding.prototype._computeMaintenance = function() {
        var R = Anno2205Layouts.Resource;
        this.constructionCost = _.clone(this.type.constructionCost);
        this.production = _.clone(this.type.production);
        this.consumption = _.clone(this.type.consumption);
        this.maintenance = _.clone(this.type.maintenance);
        this.output = _.clone(this.type.production);
        R.subi(this.output, this.type.consumption);

        if (this.productionModules.length) {
            var prod = R.mul(this.type.production,
              this.type.productionUnit.effects.productivity * this.productionModules.length);
            R.addi(this.production, prod);
            R.addi(this.output, prod);
            // TODO: assume consumption is the same??
            var cons = R.mul(this.type.consumption,
              this.type.productionUnit.effects.productivity * this.productionModules.length);
            R.addi(this.consumption, cons);
            R.subi(this.output, cons);
            var maint = R.mul(this.type.maintenance,
              this.type.productionUnit.effects.maintenance * this.productionModules.length);
            R.addi(this.maintenance, maint);
        }

        var maintAdjust = {};
        var self = this;
        _.each(this.maintenanceModules, function(module) {
            R.addi(self.constructionCost, module.unitInfo.constructionCost[self.type.region]);
            _.each(module.unitInfo.effects, function(value, key) {
                if (_.isString(value)) {
                    // Percentage.
                    var amount = parseInt(value, 10) / 100;
                    R.addikey(maintAdjust, key, self.maintenance[key] * amount);
                } else {
                    // Logistics aren't computed, so value will be empty.
                    R.addikey(maintAdjust, key, value);
                }
            });
        });
        R.addi(this.maintenance, maintAdjust);
        R.roundi(this.constructionCost);
        R.roundi(this.production);
        R.roundi(this.consumption);
        R.roundi(this.maintenance);
        R.roundi(this.output);
    };

    EditorBuilding.prototype.eachUnit = function(cb) {
        cb(this.buildingUnit);
        _.each(this.productionModules, function(unit) {
            cb(unit);
        });
        _.each(this.maintenanceModules, function(unit) {
            cb(unit);
        });
    };

    EditorBuilding.prototype.createElements = function(grid) {
        this.eachUnit(function(unit) {unit.createElement(grid);});
    };

    EditorBuilding.prototype.draw = function() {
        this.eachUnit(function(unit) {unit.draw();});
    };

    EditorBuilding.prototype.demolish = function() {
        this.eachUnit(function(unit) {unit.demolish();});
    };

    EditorBuilding.prototype.move = function(x, y) {
        this.eachUnit(function(unit) {
            unit.move(x, y);
        });
    };

    EditorBuilding.prototype.addProdMod = function(unit) {
        this.productionModules.push(unit);
        this._setStatus();
    };

    EditorBuilding.prototype.addMaintMod = function(unit) {
        this.maintenanceModules.push(unit);
        this._setStatus();
    };

    EditorBuilding.prototype._removeModule = function(modules, unit) {
        var i = modules.indexOf(unit);
        modules.splice(i, 1);
        unit.demolish();
        this._setStatus();
    };

    EditorBuilding.prototype.removeProdMod = function(unit) {
        this._removeModule(this.productionModules, unit);
    };

    EditorBuilding.prototype.removeMaintMod = function(unit) {
        this._removeModule(this.maintenanceModules, unit);
    };

    Anno2205Layouts.EditorBuilding = EditorBuilding;

}(Anno2205Layouts));
;'use strict';

angular.module('anno2205Layouts.editor', ['ngRoute', 'ngStorage', 'colorpicker.module'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editor/:layoutId', {
    templateUrl: 'app/editor/editor.html',
    controller: 'EditorCtrl'
  });
}])

.controller('EditorCtrl', ['$rootScope', '$scope', '$location', '$routeParams', '$localStorage', 'ensureImgs',
    function($rootScope, $scope, $location, $routeParams, $localStorage, ensureImgs) {

    var layout = $rootScope.layouts.layoutFromId($routeParams.layoutId);
    // Make a deep copy to edit locally.
    $scope.layout = layout.copy();
    $scope.grids = Anno2205Layouts.grids;
    $scope.Anno2205Layouts = Anno2205Layouts;

    $scope.levels = Anno2205Layouts.buildingLevels;
    $scope.commonBuildings = Anno2205Layouts.commonBuildings;

    $scope.deleteLayout = function() {
        $rootScope.layouts.deleteLayout($routeParams.layoutId);
        $('#delete-layout-modal').modal('hide');
        $location.path('/my-layouts');
    };

    $scope.discardLayout = function() {
        $('#cancel-layout-modal').modal('hide');
        $location.path('/my-layouts');
    };

    $scope.saveLayout = function() {
        $rootScope.layouts.updateLayout($scope.layout);
        $rootScope.layouts.export();
        $location.path('/my-layouts');
    };

    $scope.setActiveLevel = function(level, event) {
        _.each(Anno2205Layouts.buildingLevels[$scope.layout.region], function(level) {
            level.background = level.backgroundBase;
        });
        $scope.activeLevel = level.id;
        level.background = level.backgroundActive;
    };

    $scope.isEmpty = _.isEmpty;

    $scope.buildingConstHoverEnter = function(building, event) {
        var target = $(event.currentTarget);
        var offset = target.offset();
        $scope.hoverInfo = {
            show: true,
            left: offset.left + target.width(),
            top: offset.top,
            info: building,
        };
    };

    $scope.buildingConstHoverLeave = function() {
        $scope.hoverInfo.show = false;
    };

    var createNewUnitHandlers = function(unit, placeCallback) {
        var grid = $scope.layout.grid;
        var canvas = $('#anno-canvas');
        var canvasOffset = canvas.offset();

        // Disable while placing.
        buildingClickHandler =
            prodModuleClickHandler =
            maintModuleClickHandler = undefined;

        // While mouse is down, this is true.
        var creating = false;

        // Drag the unit with the mouse. Ensure it stays aligned to the
        // construction grid when hovering over the grid.
        var freeMoveFunction = function(event) {
            var gridPos  = grid.gridFromMouse(canvasOffset, event.pageX, event.pageY);
            if (gridPos === undefined) {
                // Mouse is off the grid.
                unit.unitCanvas.css({
                    left: event.pageX,
                    top: event.pageY,
                });
            } else {
                unit.unitCanvas.css({
                    left: gridPos[0]*Anno2205Layouts.gridSize + canvasOffset.left + grid.gridOffsetX,
                    top: gridPos[1]*Anno2205Layouts.gridSize + canvasOffset.top + grid.gridOffsetY,
                });
                if (creating) {
                    createUnit(event.pageX, event.pageY);
                }
            }
        };
        $("html").mousemove(freeMoveFunction);

        // Creates a new unit.
        var createUnit = function(pageX, pageY) {
            var gridPos  = grid.gridFromMouse(canvasOffset, pageX, pageY);
            if (gridPos === undefined) {
                positionCleanup();
            } else {
                unit.position = gridPos;
                if ($scope.layout.checkValid(unit)) {
                    creating = true;
                    if (!placeCallback(unit)) {
                        // Stop placing.
                        positionCleanup();
                    }
                }
            }
        };

        var positionDown = function(event) {
            $scope.$apply(function() {
                if (event.which == 1) {  // Left mouse
                    createUnit(event.pageX, event.pageY);
                } else if (event.which == 2) { // Middle mouse.
                    // TODO: What does Anno do?
                    rotateCounterClockwise();
                    unit.draw();
                }
            });
        };

        var positionUp = function(event) {
            $scope.$apply(function() {
                if (event.which == 1) {
                    if (creating) {
                        creating = false;
                        positionCleanup();
                    }
                }
            });
        };
        var exitCreate = function() {
            creating = false;
            positionCleanup();
            return false;  // Prevent context menu.
        };

        $("#construction-area").on('mousedown', positionDown);
        $("#construction-area").on('mouseup', positionUp);
        $(document).on('contextmenu', exitCreate);

        var rotateCounterClockwise = function() {
            unit.orientation -= 1;
            if (unit.orientation < 0) {
                unit.orientation = 3;
            }
        };
        var rotateClockwise = function() {
            unit.orientation += 1;
            if (unit.orientation > 3) {
                unit.orientation = 0;
            }
        };


        var positionUnitKey = function(event) {
            $scope.$apply(function() {
                if (event.which == 188) { // ,
                    rotateCounterClockwise();
                    unit.draw();
                } else if (event.which == 190) { // .
                    rotateClockwise();
                    unit.draw();
                } else if (event.which == 27) {
                    positionCleanup();
                }
            });
        };
        $(document).on('keydown', positionUnitKey);

        var positionCleanup = function() {
            unit.demolish();
            $(document).off('keydown', positionUnitKey);
            $('html').off('mousemove', freeMoveFunction);
            $("#construction-area")
                .off('mousedown', positionDown)
                .off('mousedown', positionUp);
            $(document).off('contextmenu', exitCreate);
            buildingClickHandler = buildingDefaultClickHandler;
        };
    };

    $scope.createNewBuilding = function(buildingType) {
        if (buildingType.placementType != 'ground') {
            // TODO: Handle other types.
            return;
        }
        var buildingUnit = Anno2205Layouts.EditorUnit.createNew(buildingType,
            buildingType.color, Anno2205Layouts.buildingAlpha, $scope.layout.grid);
        buildingUnit.draw();
        createNewUnitHandlers(buildingUnit, function(unit) {
            var building = new Anno2205Layouts.EditorBuilding.createNew(
                buildingType, buildingUnit.clone($scope.layout.grid),
                $scope.layout.grid);
            building.buildingUnit.state = 'onGrid';
            building.buildingUnit.draw();
            $scope.layout.addBuilding(building);
            return true;
        });
    };

    $scope.setActiveLevel(Anno2205Layouts.buildingLevels[$scope.layout.region][0]);


    // When you click on a building, it creates a popup, and marks the building
    // selected.
    var buildingDefaultClickHandler = function(building) {
        $scope.selectedBuilding = building;
        $scope.buildingPopup.show = true;
        var buildingOffset = building.buildingUnit.unitCanvas.offset();
        var buildingBBox = building.buildingUnit.bbox();
        $scope.buildingPopup.left = buildingOffset.left + buildingBBox.width/2 + 50;
        $scope.buildingPopup.top = buildingOffset.top + buildingBBox.height/2 - 100;
    };

    var buildingClickHandler = buildingDefaultClickHandler;
    var prodModuleClickHandler, maintModuleClickHandler;

    $scope.constAreaClick = function(event) {
        // Determine which (if any) building was clicked on.
        var found = _.find($scope.layout.buildings, function(building) {
            if (building.buildingUnit.state != 'onGrid') {
                return false;
            }
            if (building.buildingUnit.hitTest(event.pageX, event.pageY)) {
                if (buildingClickHandler) {
                    buildingClickHandler(building);
                    return true;
                } else {
                    return false;
                }
            }
            if (prodModuleClickHandler) {
                if (_.find(building.productionModules, function(module) {
                    if (module.hitTest(event.pageX, event.pageY)) {
                        prodModuleClickHandler(building, module);
                        return true;
                    }
                })) {
                    return true;
                }
            }
            if (maintModuleClickHandler) {
                if (_.find(building.maintenanceModules, function(module) {
                    if (module.hitTest(event.pageX, event.pageY)) {
                        maintModuleClickHandler(building, module);
                        return true;
                    }
                })) {
                    return true;
                }
            }
            return false;
        });
        if (!found) {
            // TODO: Put this in a separate mis-click handler?
            $scope.buildingPopup.show = false;
        }
    };

    $scope.buildingPopup = {
        show: false,
        left: 0,
        top: 0
    };
    $scope.createProductionModule = function() {
        $scope.buildingPopup.show = false;
        var building = $scope.selectedBuilding;
        var buildingType = building.type;
        var newProdMod = Anno2205Layouts.EditorUnit.createNew(
            buildingType.productionUnit,
            building.color(), Anno2205Layouts.productionAlpha,
            $scope.layout.grid);
        newProdMod.draw();
        createNewUnitHandlers(newProdMod, function(unit) {
            var newUnit = unit.clone($scope.layout.grid);
            newUnit.state = 'onGrid';
            newUnit.draw();
            $scope.layout.addProdMod(building, newUnit);
            return building.productionEnabled;
        });
    };
    $scope.createMaintenanceModule = function(maintenance) {
        $scope.buildingPopup.show = false;
        var building = $scope.selectedBuilding;
        var buildingType = building.type;
        var newMaintMod = Anno2205Layouts.EditorUnit.createNew(
            maintenance,
            building.color(), Anno2205Layouts.maintenanceAlpha,
            $scope.layout.grid);
        newMaintMod.draw();
        createNewUnitHandlers(newMaintMod, function(unit) {
            var newUnit = unit.clone($scope.layout.grid);
            newUnit.state = 'onGrid';
            newUnit.draw();
            $scope.layout.addMaintMod(building, newUnit);
            return building.maintenanceEnabled;
        });
    };

    // While in demolition mode, if you click on a building, delete it.
    var demolitionClickHandler = function(building) {
        $scope.layout.removeBuilding(building);
    };
    var demoProdClickHandler = function(building, module) {
        $scope.layout.removeProdMod(building, module);
    };
    var demoMaintClickHandler = function(building, module) {
        $scope.layout.removeMaintMod(building, module);
    };
    var exitDemoHandler = function(event) {
        if (event.which == 3) { // Right click.
            exitDemoMode();
            return false;
        }
    };
    $scope.enterDemoMode = function() {
        buildingClickHandler = demolitionClickHandler;
        prodModuleClickHandler = demoProdClickHandler;
        maintModuleClickHandler = demoMaintClickHandler;
        $(document).on('contextmenu', exitDemoHandler);

        $('#construction-area').css('cursor',
         'url("images/demolish-cursor.png") 5 35,crosshair');
    };
    var exitDemoMode = function() {
        buildingClickHandler = buildingDefaultClickHandler;
        prodModuleClickHandler = undefined;
        maintModuleClickHandler = undefined;
        $(document).off('contextmenu', exitDemoHandler);
        $('#construction-area').css('cursor', 'auto');
    };

    var globalKeyboardShortcuts = function(event) {
        if (event.which == 68) { //d
            $scope.enterDemoMode();
        }
    };

    $(document).on('keydown', globalKeyboardShortcuts);
    $scope.$on('$destroy', function() {
        $(document).off('keydown', globalKeyboardShortcuts);
    });

    $scope.exportImage = function() {
        var layoutBBox = $scope.layout.bbox();
        var grid = new Anno2205Layouts.RectGrid(layoutBBox.width+2,
                                                layoutBBox.height+2);
        var offset = {
            x: layoutBBox.minX-1,
            y: layoutBBox.minY-1
        };
        var gridCanvas = $('<canvas></canvas>')
            .prop('width', grid.pixelWidth)
            .prop('height', grid.pixelHeight);
        var canvas = gridCanvas[0];
        var ctx = canvas.getContext('2d');
        var layout = $scope.layout.copy();
        layout.moveAllBuildings(layout.coverage.x === 0 ? 1 : -(layout.coverage.x-1),
                                layout.coverage.y === 0 ? 1 : -(layout.coverage.y-1));
        layout.grid = grid;

        // Grid.
        grid.draw(ctx, layout);
        // Buildings.
        var draw = function(unit) {
            ctx.drawImage(unit.unitCanvas[0],
                (unit.position[0] - offset.x) * Anno2205Layouts.gridSize + grid.gridOffsetX,
                (unit.position[1] - offset.y) * Anno2205Layouts.gridSize + grid.gridOffsetY);
        };
        _.each($scope.layout.buildings, function(building) {
            draw(building.buildingUnit);
            _.each(building.productionModules, function(unit) {
                draw(unit);
            });
            _.each(building.maintenanceModules, function(unit) {
                draw(unit);
            });
        });


        // Create a download link.
        // TODO: How to make this work in IE/Safari?
        var data = canvas.toDataURL('image/png');
        var name = $scope.layout.name.replace(/[ /]/g, '-')
            .replace(/[,?:@&=+$#*\\]/g, '');
        var link = $("<a></a>")
            .attr('download', 'layout-'+name+'.png')
            .attr('href', data);
        $("body").append(link);
        link[0].click();
        link.remove();
    };

    // Ensure icons are available before drawing on the canvas.
    ensureImgs('#construction-icons', function() {
        _.each($scope.layout.buildings, function(building) {
            building.createElements($scope.layout.grid);
            building.draw();
        });
    });
}])


.directive('annoHover', function() {
    return {
        scope: {
            hover: '=annoHover',
            hoverBase: '=annoHoverBase',
            hoverEnabled: '&annoHoverEnabled',
        },
        link: function(scope, element, attrs) {
            scope.$watch('hoverBase', function() {
                element.css('background', scope.hoverBase);
            });
            element.css('background', scope.hoverBase);
            element.hover(function() {
                var enabled = scope.$eval(scope.hoverEnabled);
                if (typeof enabled === 'undefined' || enabled) {
                    element.css('background', scope.hover);
                }
            }, function() {
                var enabled = scope.$eval(scope.hoverEnabled);
                if (typeof enabled === 'undefined' || enabled) {
                    element.css('background', scope.hoverBase);
                }
            });
        }
    };
})

.directive('annoGridDraw', ['ensureImgs', function(ensureImgs) {
    return {
        link: function(scope, element, attrs) {
            ensureImgs('#contruction-icons,#grid-icons', function() {
                var ctx = $("#anno-canvas")[0].getContext('2d');
                scope.$watch('layout.grid', function() {
                    scope.layout.grid.draw(ctx, scope.layout);
                });
                scope.$watchGroup(['layout.coverage.width',
                                   'layout.coverage.height'], function() {
                    scope.layout.grid.drawBounds(ctx, scope.layout);
                });
            });
        }
    };
}])

.factory('ensureImgs', ['$rootScope', function ensureImgFactory($rootScope) {
    return function(imgSel, cb) {
        var imgs = $(imgSel);
        var loadedImages = 0;
        // TODO: Handle errors.
        imgs = imgs.filter(function(i, el) {
            return !this.complete;
        });
        if (imgs.length) {
            imgs.one('load', function() {
                loadedImages += 1;
                if (loadedImages >= imgs.length) {
                    $rootScope.$apply(cb);
                }
            });
        } else {
            cb();
        }
    };
}])

.directive('annoSprite', [function () {
    return {
        link: function(scope, element, attrs) {
            var sprite = scope.$eval(attrs.annoSprite);
            var spriteSize = attrs.annoSpriteSize;
            scope.$watch(attrs.annoSpriteName, function(newName, oldName) {
                if (!newName) {
                    element.css({
                        'background-image': '',
                        'background-position': '',
                        'background-size': '',
                    });
                    return;
                }
                var coords = sprite.coordinates[newName];
                if (!coords) {
                    console.log('Could not find sprite name '+newName);
                    return;
                }
                var size = 'auto auto';
                var factor = 1;
                var x = coords.x;
                var y = coords.y;
                if (spriteSize) {
                    var percent = parseInt(spriteSize.substr(0, spriteSize.length-1), 10);
                    factor = percent/100;
                    x = x * factor;
                    y = y * factor;
                    size = sprite.properties.width*factor + 'px ' + sprite.properties.height*factor + 'px';
                }
                element.css({
                    'background-image': 'url('+sprite.properties.path+')',
                    'background-position': '-'+x+'px -'+y+'px',
                    'background-size': size,
                    'background-repeat': 'no-repeat',
                });
            });
        }
    };
}])
;
;'use strict';

var Anno2205Layouts = Anno2205Layouts || {};
(function(Anno2205Layouts) {

    /**
     * Base grid class.
     * @class Grid
     *
     * @var {String} name - Human-readable name of the grid.
     * @var {String} id - Unique id for the grid.
     * @var {Number} pixelWidth - Total width of the canvas in pixels.
     * @var {Number} pixelHeight - Total height of the canvas in pixels.
     */

    function Grid() {

    }

    /**
     * Draws the grid.
     */

    Grid.prototype.drawGrid = function() {
    };

    /************************************************************************/

    /**
     * Rectangular grid.
     * @class RectGrid
     *
     * @var {Number} gridWidth - Total width in grid units.
     * @var {Number} gridHeight - Total height in grid units.
     * @var {Number} gridOffsetX - Offset where the grid starts in pixels relative to canvas origin.
     * @var {Number} gridOffsetY - Offset where the grid starts in pixels relative to canvas origin.
     */

    function RectGrid(width, height) {
        // Grid.call(this);
        this.gridWidth = width;
        this.gridHeight = height;
        this.gridOffsetX = 30;
        this.gridOffsetY = 30;
        this.gridPixelWidth = width * Anno2205Layouts.gridSize + 1;
        this.gridPixelHeight = height * Anno2205Layouts.gridSize + 1;
        this.pixelWidth = this.gridPixelWidth + this.gridOffsetX;
        this.pixelHeight = this.gridPixelHeight + this.gridOffsetY;
        this.id = width+'x'+height;
        this.name = width + ' x ' + height;
    }
    RectGrid.prototype  = Object.create(Grid.prototype);
    RectGrid.prototype.constructor = RectGrid;

    /**
     * Creates a 2D array of objects, one for each cell of the grid, initialized
     * empty.
     */
    RectGrid.prototype.createBuildingMap = function() {
        var buildingMap = new Array(this.gridHeight);
        for (var rowi=0; rowi < this.gridHeight; rowi++) {
            var len = this.gridWidth;
            var row = new Array(len);
            buildingMap[rowi] = row;
            while (--len >= 0) { row[len] = {building: undefined, unit: undefined}; }
        }
        return buildingMap;
    };

    RectGrid.prototype.draw = function(ctx, layout) {
        this.drawGrid(ctx);
        this.drawBounds(ctx, layout);
    };

    RectGrid.prototype.drawGrid = function(ctx) {
        // create white background.
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, this.pixelWidth, this.pixelHeight);

        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000000';
        var x, y;
        // Horizontal lines.
        for (var row=0; row<=this.gridHeight; row++) {
            ctx.beginPath();
            x = this.gridWidth*Anno2205Layouts.gridSize + 0.5 + this.gridOffsetX;
            y = row*Anno2205Layouts.gridSize + 0.5 + this.gridOffsetY;
            ctx.moveTo(0.5+this.gridOffsetX, y);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        // Vertical lines.
        for (var col=0; col<=this.gridWidth; col++) {
            ctx.beginPath();
            x = col*Anno2205Layouts.gridSize + 0.5 + this.gridOffsetX;
            y = this.gridHeight*Anno2205Layouts.gridSize + 0.5 + this.gridOffsetY;
            ctx.moveTo(x, 0.5 + this.gridOffsetY);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    };

    RectGrid.prototype.drawBounds = function(ctx, layout) {
        var icons = $("#grid-icons")[0];
        var iconMap = Anno2205Layouts.gridSpriteMap.coordinates;
        var gridSize = Anno2205Layouts.gridSize;

        var drawIcon = function(icon, x, y) {
            ctx.drawImage(icons, icon.x, icon.y,
                icon.width, icon.height,
                x, y,
                icon.width, icon.height);
        };

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(this.gridOffsetX, 0,
            this.pixelWidth-this.gridOffsetX, this.gridOffsetY);
        ctx.fillRect(0, this.gridOffsetY,
            this.gridOffsetX, this.pixelHeight-this.gridOffsetY);
        if (layout.coverage.width) {
            var arrowLeft = iconMap['arrow-left'];
            var arrowRight = iconMap['arrow-right'];
            var arrowBarLeft = iconMap['arrow-bar-left'];
            var arrowBarRight = iconMap['arrow-bar-right'];
            // Numbers indicating the width.
            ctx.font = '25px Roboto';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#000000';
            var x = layout.coverage.x * gridSize +
                (layout.coverage.width * gridSize)/2 + this.gridOffsetX;
            var text = '' + layout.coverage.width;
            ctx.fillText(text, x, this.gridOffsetY/2);

            // Left/Right arrows at the extents.
            if (layout.coverage.width > 3) {
                x = layout.coverage.x * gridSize + this.gridOffsetX;
                drawIcon(arrowBarRight, x, (this.gridOffsetY-arrowBarRight.height)/2);

                x = ((layout.coverage.x + layout.coverage.width) * gridSize -
                    arrowBarLeft.width + this.gridOffsetX);
                drawIcon(arrowBarLeft, x, (this.gridOffsetY-arrowBarLeft.height)/2);
            }

            // Height.
            ctx.save();
            ctx.translate(this.gridOffsetX, 0);
            ctx.rotate(Math.PI/2);
            x = layout.coverage.y * gridSize +
                (layout.coverage.height * gridSize)/2 + this.gridOffsetY;
            text = '' + layout.coverage.height;
            ctx.fillText(text, x, this.gridOffsetX/2);

            //Left/Right arrows at the extents.
            if (layout.coverage.height > 3) {
                x = layout.coverage.y * gridSize + this.gridOffsetY;
                drawIcon(arrowBarRight, x, (this.gridOffsetX-arrowBarRight.height)/2);

                x = ((layout.coverage.y + layout.coverage.height) * gridSize -
                    arrowBarLeft.width + this.gridOffsetY);
                drawIcon(arrowBarLeft, x, (this.gridOffsetX-arrowBarLeft.height)/2);
            }
            ctx.restore();
        }
    };

    /**
     * Return the grid coordinates from the given mouse coordinates.
     */
    RectGrid.prototype.gridFromMouse = function(canvasOffset, x, y) {
        // Determine position of the grid.
        var gridOffsetX = canvasOffset.left + this.gridOffsetX;
        var gridOffsetY = canvasOffset.top + this.gridOffsetY;
        if (x > gridOffsetX && x < gridOffsetX + this.gridPixelWidth &&
            y > gridOffsetY && y < gridOffsetY + this.gridPixelHeight) {
            var gridX = Math.floor((x - gridOffsetX) / Anno2205Layouts.gridSize);
            var gridY = Math.floor((y - gridOffsetY) / Anno2205Layouts.gridSize);
            return [gridX, gridY];
        } else {
            return undefined;
        }
    };

    Anno2205Layouts.RectGrid = RectGrid;

    Anno2205Layouts.grids = [
        new RectGrid(20, 20),
        new RectGrid(40, 40),
        new RectGrid(100, 100),
    ];

    Anno2205Layouts.gridMap = _.indexBy(Anno2205Layouts.grids, 'id');

}(Anno2205Layouts));
;'use strict';

var Anno2205Layouts = Anno2205Layouts || {};
(function(Anno2205Layouts) {

    /**
     * Represents all of the user's layouts.
     * @class
     */
    function Layouts($storage) {
        this.$storage = $storage;
        // $storage.version = null;

        var version = $storage.version;
        if (version) {
            console.log("welcome back");
            if (version != 1) {
                console.log("Unexpected storage version." + version);
                // TODO: Error dialog.
                return;
            }
            this._load($storage);
        } else {
            console.log("first time here");
            this.initStorage();
            this.layouts = [];
            // this.createLayout("Test Layout", "earth");
            // this.createLayout("Earth Housing", "earth");
            // this.createLayout("Rice Fields", "earth");
            // this.createLayout("Large Production", "arctic");
            // this.export();
        }
    }

    Layouts.prototype.initStorage = function() {
        this.$storage.version = 1;
        this.$storage.nextId = 1;
        this.$storage.layouts = [];
    };

    Layouts.prototype._load = function($storage) {
        this.layouts = _.map($storage.layouts, function(layoutStorage) {
            return Anno2205Layouts.Layout.createFromStorage(layoutStorage);
        });
    };

    Layouts.prototype.export = function() {
        this.$storage.layouts = _.map(this.layouts, function(layout) {
            return layout.export();
        });
    };

    /*
    function createUniqueId(layout, layouts) {
        var idStart = layout.name.replace(/[ /]/g, '-').
            replace(/[,?:@&=+$#]/g, '');
        var id = idStart;
        var idIndex = 2;
        do {
            var updated = false;
            $.each(layouts, function(i, otherLayout) {
                if (layout.id !== otherLayout.id) {
                    if (id == otherLayout.id) {
                        id = idStart + '-' + idIndex;
                        idIndex += 1;
                        updated = true;
                    }
                }
            });
        } while (updated);
        console.log("id is " + id);
        return id;
    }
    */

    var getLayoutIndex = function(layouts, id) {
        return _.findIndex(layouts, function(l) {return l.id == id;});
    };

    Layouts.prototype.createUniqueId = function() {
        var id = this.$storage.nextId;
        this.$storage.nextId += 1;
        return id;
    };

    Layouts.prototype.createLayout = function(name, region) {
        var layout = Anno2205Layouts.Layout.createNew(name, region);
        layout.id = this.createUniqueId(layout);
        this.layouts.push(layout);
        return layout;
    };

    Layouts.prototype.deleteLayout = function(id) {
        var i = getLayoutIndex(this.layouts, id);
        if (i != -1) {
            this.layouts.splice(i, 1);
        }
    };

    Layouts.prototype.updateLayout = function(newLayout) {
        var i = getLayoutIndex(this.layouts, newLayout.id);
        if (i == -1) {
            throw new Error("Failed to find layout id "+newLayout.id);
        }
        this.layouts[i] = newLayout;
    };

    Layouts.prototype.layoutFromId = function(id) {
        return this.layouts[getLayoutIndex(this.layouts, id)];
    };

    Anno2205Layouts.Layouts = Layouts;

    /***********************************************************************/

    /**
     * An individual user layout.
     * @class
     *
     * @var {Number} id - A unique (for this user) identifier for this layout.
     * @var {String} name - The user's name for the layout.
     * @var {Date} createDate - Date when the layout was created.
     * @var {Date} lastModifiedDate - Date when this layout was last modified.
     * @var {String} region - "earth", "arctic", "moon".
     * @var {Array} buildings - Array of EditorBuilding objects.
     */

    // TODO: store the grid shape (20x20, island, etc.).
    var Layout = function() {
    };

    Layout.prototype.copy = function() {
        return Layout.createFromStorage(this.export());
    };

    Layout.createNew = function(name, region) {
        var layout = new Layout();
        var now = new Date();
        layout.name = name;
        layout.createDate = now;
        layout.lastModifiedDate = now;
        layout.region = region;
        layout.grid = Anno2205Layouts.gridMap['40x40'];
        layout.buildings = [];
        layout._createBuildingMap();
        layout.notes = '';
        return layout;
    };

    Layout.createFromStorage = function(layoutStorage) {
        var layout = new Layout();
        layout.id = layoutStorage.id;
        layout.name = layoutStorage.name;
        layout.notes = layoutStorage.notes;
        layout.createDate = new Date(layoutStorage.createDate);
        layout.lastModifiedDate = new Date(layoutStorage.lastModifiedDate);
        layout.region = layoutStorage.region;
        if (layoutStorage.grid) {
            layout.grid = Anno2205Layouts.gridMap[layoutStorage.grid];
        } else {
            layout.grid = Anno2205Layouts.gridMap['20x20'];
        }
        layout.buildings = _.map(layoutStorage.buildings, function(buildingStorage) {
            return Anno2205Layouts.EditorBuilding.createFromStorage(buildingStorage);
        });
        layout._createBuildingMap();
        return layout;
    };

    Layout.prototype.export = function() {
        var result = {
            id: this.id,
            name: this.name,
            notes: this.notes,
            createDate: this.createDate,
            lastModifiedDate: this.lastModifiedDate,
            region: this.region,
            grid: this.grid.id,
        };
        result.buildings = _.map(this.buildings, function (building) {
            return building.export();
        });
        return result;
    };

    Layout.prototype._createBuildingMap = function() {
        this.buildingMap = this.grid.createBuildingMap();
        var layout = this;
        _.each(this.buildings, function(building) {
            building.eachUnit(function(unit) {
                unit.eachUnitGrid(function(x, y) {
                    layout.buildingMap[x][y].building = building;
                    layout.buildingMap[x][y].unit = unit;
                });
            });
        });
        this.setCoverage();
    };

    Layout.prototype._computeResources = function() {
        this.constructionCost = {};
        this.production = {};
        this.consumption = {};
        this.maintenance = {};
        this.output = {};

        var layout = this;
        var R = Anno2205Layouts.Resource;
        _.each(this.buildings, function(building) {
            building._computeMaintenance();
            R.addi(layout.constructionCost, building.constructionCost);
            R.addi(layout.production, building.production);
            R.addi(layout.consumption, building.consumption);
            R.addi(layout.maintenance, building.maintenance);
            R.addi(layout.output, building.output);
        });
    };

    Layout.prototype.setCoverage = function() {
        console.log('setCoverage');
        this.coverage = {};
        var layout = this;
        this.coverage.x = this.buildings.length ? 10000 : 0;
        this.coverage.y = this.coverage.x;
        var maxX = -1;
        var maxY = -1;
        _.each(layout.buildingMap, function(row, x) {
            _.each(row, function(square, y) {
                if (square.building) {
                    layout.coverage.x = Math.min(layout.coverage.x, x);
                    layout.coverage.y = Math.min(layout.coverage.y, y);
                    maxX = Math.max(maxX, x);
                    maxY = Math.max(maxY, y);
                }
            });
        });
        this.coverage.width = maxX - this.coverage.x + 1;
        this.coverage.height = maxY - this.coverage.y + 1;
        this._computeResources();
    };

    Layout.prototype.gridChange = function(grid) {
        if (arguments.length) {
            this.grid = grid;
            // Remove any buildings that are outside the new grid.
            this.buildings = _.filter(this.buildings, function(building) {
                if (!building.buildingUnit.inGrid(grid)) {
                    building.demolish();
                    return false;
                } else {
                    return true;
                }
            });
            // Remove any modules outside the new grid.
            var filterUnit = function(unit) {
                if (!unit.inGrid(grid)) {
                    unit.demolish();
                    return false;
                } else {
                    return true;
                }
            };
            _.each(this.buildings, function(building) {
                building.productionModules = _.filter(building.productionModules, filterUnit);
                building.maintenanceModules = _.filter(building.maintenanceModules, filterUnit);
            });

            // Update the map.
            this._createBuildingMap();
        } else {
            return this.grid;
        }
    };

    Layout.prototype.bbox = function() {
        var minX = this.buildings.length ? 10000 : 0;
        var minY = minX;
        var maxX = 0;
        var maxY = 0;
        _.each(this.buildings, function(building) {
            building.eachUnit(function(unit) {
                var unitBBox = unit.bbox();
                minX = Math.min(minX, unit.position[0]);
                minY = Math.min(minY, unit.position[1]);
                maxX = Math.max(maxX, unit.position[0]+unitBBox.gridWidth);
                maxY = Math.max(maxY, unit.position[1]+unitBBox.gridHeight);
            });
        });
        return {
            minX: minX,
            minY: minY,
            maxX: maxX,
            maxY: maxY,
            width: maxX-minX,
            height: maxY-minY,
        };
    };

    // Checks if the unit can be placed at its current position
    // (checks for overlapping with other units, etc.).
    Layout.prototype.checkValid = function(unit) {
        if (!unit.inGrid(this.grid)) {
            return false;
        }
        var layout = this;
        var valid = true;
        unit.eachUnitGrid(function(x, y) {
            if (layout.buildingMap[x][y].building) {
                valid = false;
            }
        });
        return valid;
    };

    Layout.prototype._addUnit = function(building, unit) {
        var layout = this;
        unit.eachUnitGrid(function (x, y) {
            layout.buildingMap[x][y].building = building;
            layout.buildingMap[x][y].unit = unit;
        });
        this.setCoverage();
    };

    Layout.prototype._removeUnit = function(unit) {
        var layout = this;
        unit.eachUnitGrid(function (x, y) {
            layout.buildingMap[x][y].building = undefined;
            layout.buildingMap[x][y].unit = undefined;
        });
        this.setCoverage();
    };

    Layout.prototype.addBuilding = function(building) {
        this.buildings.push(building);
        var layout = this;
        building.eachUnit(function (unit) {
            layout._addUnit(building, unit);
        });
    };

    Layout.prototype.addProdMod = function(building, unit) {
        building.addProdMod(unit);
        this._addUnit(building, unit);
    };

    Layout.prototype.addMaintMod = function(building, unit) {
        building.addMaintMod(unit);
        this._addUnit(building, unit);
    };

    Layout.prototype.removeBuilding = function(building) {
        var i = this.buildings.indexOf(building);
        this.buildings.splice(i, 1);
        building.demolish();
        building.eachUnit(this._removeUnit.bind(this));
    };

    Layout.prototype.removeProdMod = function(building, unit) {
        building.removeProdMod(unit);
        this._removeUnit(unit);
    };

    Layout.prototype.removeMaintMod = function(building, unit) {
        building.removeMaintMod(unit);
        this._removeUnit(unit);
    };

    Layout.prototype.moveAllBuildings = function(x, y) {
        _.each(this.buildings, function(building) {
            building.move(x, y);
        });
        this._createBuildingMap();
    };

    Anno2205Layouts.Layout = Layout;

}(Anno2205Layouts));
;'use strict';

angular.module('anno2205Layouts.my-layouts', ['ngRoute', 'ngStorage'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/my-layouts', {
        templateUrl: 'app/my-layouts/my-layouts.html',
        controller: 'MyLayoutsCtrl'
    });
}])

.controller('MyLayoutsCtrl', ['$rootScope', '$scope', '$location', '$localStorage',
    function($rootScope, $scope, $location, $localStorage) {
    // TODO: keep this state sticky somehow?
    $scope.region = 'earth';
    $scope.$location = $location;

    $scope.createNewLayout = function(newLayoutName) {
        if (newLayoutName) {
            var newLayout = $scope.layouts.createLayout(newLayoutName, $scope.region);
            /* Handling a location change and dismissing the modal is
            frustratingly difficult.  Can't just immediately call
            $location.path() because that destroys the DOM preventing the
            modal's animation from finishing (leaving a dark-gray background).
            Can't just call $location.path() inside the event handler, because there
            is some insanity about it not being within the Angular context (must
            use $scope.$apply).

            See also: http://stackoverflow.com/questions/11519660/twitter-bootstrap-modal-backdrop-doesnt-disappear

            Solving most of this by removing the "fade" animation from the modal.
            */

            $("#new-layout-modal").modal("hide");
            $location.path("/editor/"+newLayout.id);

            /*
            $('#new-layout-modal').modal('hide').on('hidden.bs.modal', function() {
                $scope.$apply(function() {
                    $location.path('/editor/'+newLayout.id);
                });
            });
            */
            // $location.path('/editor/'+newLayout.id);
        }
    };
}]);

;'use strict';

var Anno2205Layouts = Anno2205Layouts || {};
(function(Anno2205Layouts) {

    Anno2205Layouts.regions = ['earth', 'arctic', 'moon'];


}(Anno2205Layouts));
;'use strict';

var Anno2205Layouts = Anno2205Layouts || {};
(function(Anno2205Layouts) {

    var Resource = {
        addi: function(dest, source) {
            _.each(source, function(value, key) {
                if (dest.hasOwnProperty(key)) {
                    dest[key] += value;
                } else {
                    dest[key] = value;
                }
            });
        },

        addikey: function(dest, key, value) {
            if (dest.hasOwnProperty(key)) {
                dest[key] += value;
            } else {
                dest[key] = value;
            }
        },

        subi: function(dest, source) {
            _.each(source, function(value, key) {
                if (dest.hasOwnProperty(key)) {
                    dest[key] -= value;
                } else {
                    dest[key] = -value;
                }
            });
        },

        mul: function(obj, amount) {
            var result = {};
            _.each(obj, function(value, key) {
                result[key] = value*amount;
            });
            return result;
        },

        roundi: function(obj) {
            _.each(obj, function(value, key) {
                obj[key] = Math.ceil(value);
            });
        }
    };

    Anno2205Layouts.Resource = Resource;

}(Anno2205Layouts));
;// This file is auto-generated.  DO NOT EDIT.
var Anno2205Layouts = Anno2205Layouts || {};
Anno2205Layouts.iconSpriteMap = {
    properties: {"width":550,"height":500,"path":"images/buttons/construction_icons.png"},
    coordinates: {
    "algae": {"x":50,"y":0,"width":50,"height":50},
    "aluminium": {"x":350,"y":250,"width":50,"height":50},
    "androids": {"x":0,"y":50,"width":50,"height":50},
    "arctic_road": {"x":50,"y":50,"width":50,"height":50},
    "beef": {"x":100,"y":0,"width":50,"height":50},
    "bio_enhancers": {"x":100,"y":50,"width":50,"height":50},
    "biocomposites": {"x":0,"y":100,"width":50,"height":50},
    "bioresigns": {"x":50,"y":100,"width":50,"height":50},
    "canned_food": {"x":100,"y":100,"width":50,"height":50},
    "ceramics": {"x":150,"y":0,"width":50,"height":50},
    "cobalt": {"x":150,"y":50,"width":50,"height":50},
    "colony_safety": {"x":150,"y":100,"width":50,"height":50},
    "community_center": {"x":0,"y":150,"width":50,"height":50},
    "coupled_firework_fountain": {"x":50,"y":150,"width":50,"height":50},
    "credits_module": {"x":100,"y":150,"width":50,"height":50},
    "credits": {"x":150,"y":150,"width":50,"height":50},
    "deep_water_corals": {"x":200,"y":0,"width":50,"height":50},
    "deuterium": {"x":200,"y":50,"width":50,"height":50},
    "diamant": {"x":200,"y":100,"width":50,"height":50},
    "earth_road": {"x":200,"y":150,"width":50,"height":50},
    "energy_module": {"x":0,"y":200,"width":50,"height":50},
    "energy_shielding_big_2": {"x":50,"y":200,"width":50,"height":50},
    "energy_shielding_small_2": {"x":100,"y":200,"width":50,"height":50},
    "energy": {"x":150,"y":200,"width":50,"height":50},
    "fish": {"x":200,"y":200,"width":50,"height":50},
    "forbidden_science": {"x":250,"y":0,"width":50,"height":50},
    "fruit_drink": {"x":250,"y":50,"width":50,"height":50},
    "fruit": {"x":250,"y":100,"width":50,"height":50},
    "fusion_accumulators": {"x":250,"y":150,"width":50,"height":50},
    "fusion_power_plant": {"x":250,"y":200,"width":50,"height":50},
    "gas_power_plant": {"x":0,"y":250,"width":50,"height":50},
    "geothermal_turbinnes": {"x":50,"y":250,"width":50,"height":50},
    "graphene_module": {"x":100,"y":250,"width":50,"height":50},
    "graphene": {"x":150,"y":250,"width":50,"height":50},
    "gravity_generators": {"x":200,"y":250,"width":50,"height":50},
    "headquarter_base": {"x":250,"y":250,"width":50,"height":50},
    "headquarter_module_1": {"x":300,"y":0,"width":50,"height":50},
    "headquarter_module_2": {"x":300,"y":50,"width":50,"height":50},
    "headquarter_module_3": {"x":300,"y":100,"width":50,"height":50},
    "headquarter_module_4": {"x":300,"y":150,"width":50,"height":50},
    "headquarter_module_5": {"x":300,"y":200,"width":50,"height":50},
    "health_care": {"x":300,"y":250,"width":50,"height":50},
    "helium_3": {"x":0,"y":300,"width":50,"height":50},
    "information": {"x":50,"y":300,"width":50,"height":50},
    "intelli_clothes": {"x":100,"y":300,"width":50,"height":50},
    "iridium": {"x":150,"y":300,"width":50,"height":50},
    "logistics_module": {"x":200,"y":300,"width":50,"height":50},
    "logistics": {"x":250,"y":300,"width":50,"height":50},
    "luxury_food": {"x":300,"y":300,"width":50,"height":50},
    "magnatite": {"x":350,"y":0,"width":50,"height":50},
    "maintenance": {"x":350,"y":50,"width":50,"height":50},
    "metal_foam": {"x":350,"y":100,"width":50,"height":50},
    "methan_clathrate": {"x":350,"y":150,"width":50,"height":50},
    "microchips": {"x":350,"y":200,"width":50,"height":50},
    "mobility": {"x":0,"y":0,"width":50,"height":50},
    "molybdenum": {"x":350,"y":300,"width":50,"height":50},
    "moon_attraction_astronaut": {"x":0,"y":350,"width":50,"height":50},
    "moon_attraction_donut": {"x":50,"y":350,"width":50,"height":50},
    "moon_attraction_robot_fight": {"x":100,"y":350,"width":50,"height":50},
    "moon_crops": {"x":150,"y":350,"width":50,"height":50},
    "moon_ice": {"x":200,"y":350,"width":50,"height":50},
    "moon_road": {"x":250,"y":350,"width":50,"height":50},
    "multispectral_prisms": {"x":300,"y":350,"width":50,"height":50},
    "natural_space_food": {"x":350,"y":350,"width":50,"height":50},
    "neuro_implants_2": {"x":400,"y":0,"width":50,"height":50},
    "ornamental_car_park_large": {"x":400,"y":50,"width":50,"height":50},
    "ornamental_car_park_medium": {"x":400,"y":100,"width":50,"height":50},
    "ornamental_car_park_small": {"x":400,"y":150,"width":50,"height":50},
    "ornamental_park_large": {"x":400,"y":200,"width":50,"height":50},
    "ornamental_park_medium": {"x":400,"y":250,"width":50,"height":50},
    "ornamental_park_small": {"x":400,"y":300,"width":50,"height":50},
    "oxygen": {"x":400,"y":350,"width":50,"height":50},
    "petrochemicals": {"x":0,"y":400,"width":50,"height":50},
    "plant_fibres": {"x":50,"y":400,"width":50,"height":50},
    "quantum_computers": {"x":100,"y":400,"width":50,"height":50},
    "qubit_processors": {"x":150,"y":400,"width":50,"height":50},
    "rare_earth_elements": {"x":200,"y":400,"width":50,"height":50},
    "recreation": {"x":250,"y":400,"width":50,"height":50},
    "rejuvenators": {"x":300,"y":400,"width":50,"height":50},
    "replicators": {"x":350,"y":400,"width":50,"height":50},
    "residence_arctic": {"x":400,"y":400,"width":50,"height":50},
    "residence_earth": {"x":450,"y":0,"width":50,"height":50},
    "residence_estate": {"x":450,"y":50,"width":50,"height":50},
    "residence_moon": {"x":450,"y":100,"width":50,"height":50},
    "rice_dish": {"x":450,"y":150,"width":50,"height":50},
    "robots": {"x":450,"y":200,"width":50,"height":50},
    "security": {"x":450,"y":250,"width":50,"height":50},
    "shaped_firework_fountain": {"x":450,"y":300,"width":50,"height":50},
    "silica": {"x":450,"y":350,"width":50,"height":50},
    "single_firework_fountain": {"x":450,"y":400,"width":50,"height":50},
    "solar_array": {"x":0,"y":450,"width":50,"height":50},
    "soy_beans": {"x":50,"y":450,"width":50,"height":50},
    "stimulants": {"x":100,"y":450,"width":50,"height":50},
    "super_alloys": {"x":150,"y":450,"width":50,"height":50},
    "super_coolants": {"x":200,"y":450,"width":50,"height":50},
    "synaptic_circuits": {"x":250,"y":450,"width":50,"height":50},
    "synth_cells": {"x":300,"y":450,"width":50,"height":50},
    "temp_module": {"x":350,"y":450,"width":50,"height":50},
    "tidal_power_station": {"x":400,"y":450,"width":50,"height":50},
    "titan_plating": {"x":450,"y":450,"width":50,"height":50},
    "titanium": {"x":500,"y":0,"width":50,"height":50},
    "transportation_center_arctic": {"x":500,"y":50,"width":50,"height":50},
    "transportation_center_earth": {"x":500,"y":100,"width":50,"height":50},
    "transportation_center_moon": {"x":500,"y":150,"width":50,"height":50},
    "water": {"x":500,"y":200,"width":50,"height":50},
    "windpark": {"x":500,"y":250,"width":50,"height":50},
    "wine": {"x":500,"y":300,"width":50,"height":50},
    "workforce_module": {"x":500,"y":350,"width":50,"height":50},
    "workforce": {"x":500,"y":400,"width":50,"height":50},
}};
Anno2205Layouts.gridSpriteMap = {
    properties: {"width":56,"height":47,"path":"images/grid/grid-sheet.png"},
    coordinates: {
    "arrow-bar-up": {"x":46,"y":0,"width":10,"height":23},
    "arrow-bar-down": {"x":0,"y":24,"width":10,"height":23},
    "arrow-bar-right": {"x":0,"y":0,"width":23,"height":24},
    "arrow-bar-left": {"x":23,"y":0,"width":23,"height":24},
    "arrow-up": {"x":10,"y":24,"width":10,"height":23},
    "arrow-down": {"x":20,"y":24,"width":10,"height":23},
    "arrow-right": {"x":30,"y":24,"width":23,"height":10},
    "arrow-left": {"x":30,"y":34,"width":23,"height":10},
}};
;'use strict';

// Define an empty module in dev mode.  This file is not included in dist mode.
angular.module('anno2205Layouts.templates', []);
;angular.module('anno2205Layouts.templates', ['app/editor/editor.html', 'app/my-layouts/my-layouts.html']);

angular.module("app/editor/editor.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/editor/editor.html",
    "<style>\n" +
    "    .construction-level-button {\n" +
    "        display: inline-block;\n" +
    "        width: 139px;\n" +
    "        height: 36px;\n" +
    "    }\n" +
    "    .construction-building-button {\n" +
    "        display: inline-block;\n" +
    "        background: url('images/buttons/construction-button-base.png');\n" +
    "        width: 87px;\n" +
    "        height: 58px;\n" +
    "    }\n" +
    "    .construction-building-button:hover {\n" +
    "        background: url('images/buttons/construction-button-hover.png');\n" +
    "    }\n" +
    "    .construction-building-button-icon {\n" +
    "        width: 50px;\n" +
    "        height: 50px;\n" +
    "        left: 18px;\n" +
    "        top: 4px;\n" +
    "        position: relative;\n" +
    "    }\n" +
    "\n" +
    "    #save-button {\n" +
    "        display: inline-block;\n" +
    "        background: url('images/buttons/save.png');\n" +
    "        width: 88px;\n" +
    "        height: 34px;\n" +
    "    }\n" +
    "    #save-button:hover {\n" +
    "        background: url('images/buttons/save-hover.png');\n" +
    "    }\n" +
    "\n" +
    "    #export-button {\n" +
    "        display: inline-block;\n" +
    "        background: url('images/buttons/export.png');\n" +
    "        width: 100px;\n" +
    "        height: 34px;\n" +
    "    }\n" +
    "    #export-button:hover {\n" +
    "        background: url('images/buttons/export-hover.png');\n" +
    "    }\n" +
    "\n" +
    "    #cancel-button {\n" +
    "        display: inline-block;\n" +
    "        background: url('images/buttons/cancel.png');\n" +
    "        width: 100px;\n" +
    "        height: 34px;\n" +
    "    }\n" +
    "    #cancel-button:hover {\n" +
    "        background: url('images/buttons/cancel-hover.png');\n" +
    "    }\n" +
    "\n" +
    "    #delete-button {\n" +
    "        display: inline-block;\n" +
    "        background: url('images/buttons/delete.png');\n" +
    "        width: 62px;\n" +
    "        height: 34px;\n" +
    "    }\n" +
    "    #delete-button:hover {\n" +
    "        background: url('images/buttons/delete-hover.png');\n" +
    "    }\n" +
    "\n" +
    "    #delete-button {\n" +
    "        display: inline-block;\n" +
    "        background: url('images/buttons/delete.png');\n" +
    "        width: 62px;\n" +
    "        height: 34px;\n" +
    "    }\n" +
    "    #delete-button:hover {\n" +
    "        background: url('images/buttons/delete-hover.png');\n" +
    "    }\n" +
    "\n" +
    "    .editor-mode-button {\n" +
    "        display: inline-block;\n" +
    "        background: url('images/buttons/editor-modes-button-base.png');\n" +
    "        width: 89px;\n" +
    "        height: 49px;\n" +
    "    }\n" +
    "    .editor-mode-button-icon {\n" +
    "        width: 40px;\n" +
    "        height: 40px;\n" +
    "        left: 24px;\n" +
    "        top: 4px;\n" +
    "        position: relative;\n" +
    "    }\n" +
    "    #editor-mode-icon-move {\n" +
    "        background: url('images/buttons/icon_move.png');\n" +
    "    }\n" +
    "    #editor-mode-icon-copy {\n" +
    "        background: url('images/buttons/icon_eyedrop.png');\n" +
    "    }\n" +
    "    #editor-mode-icon-demo {\n" +
    "        background: url('images/buttons/icon_demolish.png');\n" +
    "    }\n" +
    "    #construction-icons {\n" +
    "        display: none;\n" +
    "    }\n" +
    "    #grid-icons {\n" +
    "        display: none;\n" +
    "    }\n" +
    "\n" +
    "    .notes-label {\n" +
    "        font-size: 140%;\n" +
    "    }\n" +
    "\n" +
    "    #notes-container {\n" +
    "        float: left;\n" +
    "    }\n" +
    "\n" +
    "    .anno-summary {\n" +
    "        background-color: #0c2937;\n" +
    "        float: left;\n" +
    "    }\n" +
    "\n" +
    "    .anno-summary-section {\n" +
    "        color: #ffffff;\n" +
    "        background-color: rgba(44, 85, 116, 0.9);\n" +
    "        font-size: 150%;\n" +
    "        clear: both;\n" +
    "        padding-left: 10px;\n" +
    "        padding-right: 10px;\n" +
    "    }\n" +
    "    .anno-summary-item {\n" +
    "    }\n" +
    "    .anno-summary-item-icon {\n" +
    "        width: 25px;\n" +
    "        height: 25px;\n" +
    "        float: left;\n" +
    "        margin: 2px 4px 2px 10px;\n" +
    "    }\n" +
    "    .anno-summary-item-name {\n" +
    "        color: #ffffff;\n" +
    "        display: inline-block;\n" +
    "        clear: both;\n" +
    "        font-size: 150%;\n" +
    "        margin-right: 15px;\n" +
    "    }\n" +
    "    .anno-summary-item-amount {\n" +
    "        color: #ffffff;\n" +
    "        float: right;\n" +
    "        font-size: 150%;\n" +
    "        padding-right: 10px;\n" +
    "    }\n" +
    "</style>\n" +
    "\n" +
    "<input type=\"text\" name=\"layoutName\" ng-model=\"layout.name\">\n" +
    "\n" +
    "<div id=\"editor-top\">\n" +
    "    <div>\n" +
    "        Layout Size:\n" +
    "\n" +
    "        <select ng-model=\"layout.gridChange\"\n" +
    "                ng-model-options=\"{ getterSetter: true }\"\n" +
    "                ng-options=\"grid as grid.name for grid in grids\">\n" +
    "        </select>\n" +
    "\n" +
    "        <div id=\"save-button\" ng-click=\"saveLayout()\"></div>\n" +
    "        <div id=\"export-button\" ng-click=\"exportImage()\"></div>\n" +
    "        <div id=\"cancel-button\" data-toggle=\"modal\" data-target=\"#cancel-layout-modal\"></div>\n" +
    "        <div id=\"delete-button\" data-toggle=\"modal\" data-target=\"#delete-layout-modal\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"construction-area\" ng-click=\"constAreaClick($event)\">\n" +
    "    <canvas id=\"anno-canvas\"\n" +
    "            width=\"{{layout.grid.pixelWidth}}\"\n" +
    "            height=\"{{layout.grid.pixelHeight}}\"\n" +
    "            anno-grid-draw></canvas>\n" +
    "</div>\n" +
    "<br>\n" +
    "\n" +
    "<!-- Ensure that these are loaded and easily available. -->\n" +
    "<img id=\"construction-icons\" src=\"images/buttons/construction_icons.png\">\n" +
    "<img id=\"grid-icons\" src=\"images/grid/grid-sheet.png\">\n" +
    "\n" +
    "<div class=\"construction-level-button\" ng-repeat=\"level in levels[layout.region]\"\n" +
    "     ng-click=\"setActiveLevel(level)\"\n" +
    "     anno-hover=\"level.backgroundHover\"\n" +
    "     anno-hover-base=\"level.background\"\n" +
    "     anno-hover-enabled=\"activeLevel != level.id\">\n" +
    "</div>\n" +
    " <div>\n" +
    "    <div ng-repeat=\"level in levels[layout.region]\">\n" +
    "        <div class=\"construction-building-button\" ng-repeat=\"building in level.buildings\"\n" +
    "         ng-show=\"activeLevel == level.id\"\n" +
    "         ng-click=\"createNewBuilding(building)\"\n" +
    "         ng-mouseenter=\"buildingConstHoverEnter(building, $event)\"\n" +
    "         ng-mouseleave=\"buildingConstHoverLeave()\">\n" +
    "            <div class=\"construction-building-button-icon\"\n" +
    "            anno-sprite=\"Anno2205Layouts.iconSpriteMap\"\n" +
    "            anno-sprite-name=\"building.icon\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"construction-building-button\"\n" +
    "     ng-repeat=\"building in commonBuildings[layout.region]\"\n" +
    "     ng-click=\"createNewBuilding(building)\"\n" +
    "     ng-mouseenter=\"buildingConstHoverEnter(building, $event)\"\n" +
    "     ng-mouseleave=\"buildingConstHoverLeave()\">\n" +
    "    <div class=\"construction-building-button-icon\"\n" +
    "        anno-sprite=\"Anno2205Layouts.iconSpriteMap\"\n" +
    "        anno-sprite-name=\"building.icon\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div>\n" +
    "    <div class=\"editor-mode-button\" id=\"move-button\" ng-click=\"enterMoveMode()\">\n" +
    "        <div class=\"editor-mode-button-icon\" id=\"editor-mode-icon-move\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"editor-mode-button\" id=\"copy-button\" ng-click=\"enterCopyMode()\">\n" +
    "        <div class=\"editor-mode-button-icon\" id=\"editor-mode-icon-copy\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"editor-mode-button\" id=\"demolition-button\" ng-click=\"enterDemoMode()\">\n" +
    "        <div class=\"editor-mode-button-icon\" id=\"editor-mode-icon-demo\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<label class=\"notes-label\" for=\"notes\">Notes:</label>\n" +
    "<div>\n" +
    "    <div id=\"notes-container\">\n" +
    "        <textarea id=\"notes\" cols=\"80\" rows=\"12\" ng-model=\"layout.notes\"></textarea>\n" +
    "    </div>\n" +
    "    <div class=\"anno-summary\">\n" +
    "\n" +
    "        <div class=\"anno-summary-section\">Total Production</div>\n" +
    "\n" +
    "        <div class=\"anno-summary-item\" ng-repeat=\"(itemId, amount) in layout.output\">\n" +
    "            <div class=\"anno-summary-item-icon\"\n" +
    "             anno-sprite=\"Anno2205Layouts.iconSpriteMap\"\n" +
    "             anno-sprite-name=\"Anno2205Layouts.items[itemId].icon\"\n" +
    "             anno-sprite-size=\"50%\"></div>\n" +
    "            <div class=\"anno-summary-item-name\">{{Anno2205Layouts.items[itemId].name}}</div>\n" +
    "            <div class=\"anno-summary-item-amount\">{{amount | number}}</div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"anno-summary-section\">Total Maintenance</div>\n" +
    "        <div class=\"anno-summary-item\" ng-repeat=\"(itemId, amount) in layout.maintenance\">\n" +
    "            <div class=\"anno-summary-item-icon\"\n" +
    "             anno-sprite=\"Anno2205Layouts.iconSpriteMap\"\n" +
    "             anno-sprite-name=\"Anno2205Layouts.items[itemId].icon\"\n" +
    "             anno-sprite-size=\"50%\"></div>\n" +
    "            <div class=\"anno-summary-item-name\">{{Anno2205Layouts.items[itemId].name}}</div>\n" +
    "            <div class=\"anno-summary-item-amount\">{{amount | number}}</div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"anno-summary-section\">Total Construction Cost</div>\n" +
    "        <div class=\"anno-summary-item\" ng-repeat=\"(itemId, amount) in layout.constructionCost\">\n" +
    "            <div class=\"anno-summary-item-icon\"\n" +
    "             anno-sprite=\"Anno2205Layouts.iconSpriteMap\"\n" +
    "             anno-sprite-name=\"Anno2205Layouts.items[itemId].icon\"\n" +
    "             anno-sprite-size=\"50%\"></div>\n" +
    "            <div class=\"anno-summary-item-name\">{{Anno2205Layouts.items[itemId].name}}</div>\n" +
    "            <div class=\"anno-summary-item-amount\">{{amount | number}}</div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div id=\"delete-layout-modal\" class=\"modal\" role=\"dialog\">\n" +
    "    <div class=\"modal-dialog\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n" +
    "                <h4 class=\"modal-title\">Delete this layout?</h4>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                This cannot be undone.\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n" +
    "                <button type=\"button\" class=\"btn btn-danger\"  data-dismiss=\"modal\" ng-click=\"deleteLayout()\">Delete</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"cancel-layout-modal\" class=\"modal\" role=\"dialog\">\n" +
    "    <div class=\"modal-dialog\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n" +
    "                <h4 class=\"modal-title\">Discard any changes?</h4>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                This cannot be undone.\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n" +
    "                <button type=\"button\" class=\"btn btn-danger\"  data-dismiss=\"modal\" ng-click=\"discardLayout()\">Discard</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<style>\n" +
    "    #building-popup {\n" +
    "        width: 350px;\n" +
    "        background-color: #0c2937;\n" +
    "        position: absolute;\n" +
    "    }\n" +
    "\n" +
    "    .create-production-button {\n" +
    "        width: 61px;\n" +
    "        height: 34px;\n" +
    "        display: inline-block;\n" +
    "    }\n" +
    "    .create-production-button-enabled {\n" +
    "        background: url('images/buttons/module-button-base.png');\n" +
    "    }\n" +
    "    .create-production-button-enabled:hover {\n" +
    "        background: url('images/buttons/module-button-hover.png');\n" +
    "    }\n" +
    "    .create-production-button-disabled {\n" +
    "        background: url('images/buttons/module-button-disabled.png');\n" +
    "    }\n" +
    "    .create-production-icon {\n" +
    "        width: 25px;\n" +
    "        height: 25px;\n" +
    "        position: relative;\n" +
    "        left: 18px;\n" +
    "        top: 5px;\n" +
    "    }\n" +
    "    .building-popup-section {\n" +
    "        color: #667e88;\n" +
    "        font-size: 140%;\n" +
    "        margin-left: 10px;\n" +
    "    }\n" +
    "    .building-popup-name {\n" +
    "        color: #ffffff;\n" +
    "        background-color: #051218;\n" +
    "        font-size: 175%;\n" +
    "    }\n" +
    "    .building-popup-top {\n" +
    "        background-color: #d56d1c;\n" +
    "        height: 4px;\n" +
    "    }\n" +
    "    .building-popup-icon {\n" +
    "        display: inline-block;\n" +
    "        width: 35px;\n" +
    "        height: 35px;\n" +
    "        margin: 5px;\n" +
    "        vertical-align: middle;\n" +
    "    }\n" +
    "    .building-popup-close {\n" +
    "        cursor: pointer;\n" +
    "        float: right;\n" +
    "        color: #ffffff;\n" +
    "        opacity: 0.5;\n" +
    "        background-color: transparent;\n" +
    "        border: 0;\n" +
    "    }\n" +
    "    .building-popup-close:hover {\n" +
    "        opacity: 0.9;\n" +
    "    }\n" +
    "\n" +
    "    .color-button {\n" +
    "        margin: 5px;\n" +
    "    }\n" +
    "\n" +
    "    .building-popup-detail {\n" +
    "        display: inline-block;\n" +
    "    }\n" +
    "\n" +
    "    .building-popup-detail-icon {\n" +
    "        width: 25px;\n" +
    "        height: 25px;\n" +
    "        float: left;\n" +
    "        margin: 2px 2px 2px 10px;\n" +
    "    }\n" +
    "    .building-popup-detail-amount {\n" +
    "        color: #ffffff;\n" +
    "        float: left;\n" +
    "        font-size: 150%;\n" +
    "        padding-right: 10px;\n" +
    "    }\n" +
    "\n" +
    "</style>\n" +
    "\n" +
    "<div id=\"building-popup\" ng-show=\"buildingPopup.show\"\n" +
    "     ng-style=\"{left: buildingPopup.left, top: buildingPopup.top}\">\n" +
    "    <div class=\"building-popup-top\"></div>\n" +
    "    <div class=\"building-popup-name\">\n" +
    "        <div class=\"building-popup-icon\"\n" +
    "        anno-sprite=\"Anno2205Layouts.iconSpriteMap\"\n" +
    "        anno-sprite-name=\"selectedBuilding.type.icon\"\n" +
    "        anno-sprite-size=\"70%\"></div>\n" +
    "        {{ selectedBuilding.type.name }}\n" +
    "        <button type=\"button\" class=\"building-popup-close\" ng-click=\"buildingPopup.show=false\">&times;</button>\n" +
    "    </div>\n" +
    "    <div ng-show=\"selectedBuilding.type.productionUnit || selectedBuilding.type.maintenanceMoudles\">\n" +
    "        <div class=\"building-popup-section\">Modules</div>\n" +
    "        <div ng-show=\"selectedBuilding.type.productionUnit\"\n" +
    "               class=\"create-production-button\"\n" +
    "            ng-class=\"{'create-production-button-enabled': selectedBuilding.productionEnabled,\n" +
    "                       'create-production-button-disabled': !selectedBuilding.productionEnabled}\"\n" +
    "            ng-click=\"selectedBuilding.productionEnabled && createProductionModule()\">\n" +
    "            <div class=\"create-production-icon\"\n" +
    "             anno-sprite=\"Anno2205Layouts.iconSpriteMap\"\n" +
    "             anno-sprite-name=\"selectedBuilding.type.icon\"\n" +
    "             anno-sprite-size=\"50%\"></div>\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"maintenance in selectedBuilding.type.maintenanceModules\"\n" +
    "               class=\"create-production-button\"\n" +
    "            ng-class=\"{'create-production-button-enabled': selectedBuilding.maintenanceEnabled,\n" +
    "                       'create-production-button-disabled': !selectedBuilding.maintenanceEnabled}\"\n" +
    "            ng-click=\"selectedBuilding.maintenanceEnabled && createMaintenanceModule(maintenance)\">\n" +
    "            <div class=\"create-production-icon\"\n" +
    "             anno-sprite=\"Anno2205Layouts.iconSpriteMap\"\n" +
    "             anno-sprite-name=\"maintenance.icon\"\n" +
    "             anno-sprite-size=\"50%\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"building-popup-section\">Production</div>\n" +
    "    <div>\n" +
    "        <div class=\"building-popup-detail\"\n" +
    "             ng-repeat=\"(itemId, amount) in selectedBuilding.output\">\n" +
    "            <div class=\"building-popup-detail-icon\"\n" +
    "                 anno-sprite=\"Anno2205Layouts.iconSpriteMap\"\n" +
    "                 anno-sprite-name=\"Anno2205Layouts.items[itemId].icon\"\n" +
    "                 anno-sprite-size=\"50%\"></div>\n" +
    "            <div class=\"building-popup-detail-amount\">{{amount | number}}</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"building-popup-section\">Maintenance</div>\n" +
    "    <div>\n" +
    "        <div class=\"building-popup-detail\"\n" +
    "             ng-repeat=\"(itemId, amount) in selectedBuilding.maintenance\">\n" +
    "            <div class=\"building-popup-detail-icon\"\n" +
    "                 anno-sprite=\"Anno2205Layouts.iconSpriteMap\"\n" +
    "                 anno-sprite-name=\"Anno2205Layouts.items[itemId].icon\"\n" +
    "                 anno-sprite-size=\"50%\"></div>\n" +
    "            <div class=\"building-popup-detail-amount\">{{amount | number}}</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"building-popup-section\">Construction Cost</div>\n" +
    "    <div>\n" +
    "        <div class=\"building-popup-detail\"\n" +
    "             ng-repeat=\"(itemId, amount) in selectedBuilding.constructionCost\">\n" +
    "            <div class=\"building-popup-detail-icon\"\n" +
    "                 anno-sprite=\"Anno2205Layouts.iconSpriteMap\"\n" +
    "                 anno-sprite-name=\"Anno2205Layouts.items[itemId].icon\"\n" +
    "                 anno-sprite-size=\"50%\"></div>\n" +
    "            <div class=\"building-popup-detail-amount\">{{amount | number}}</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <img class=\"color-button\"\n" +
    "         src=\"images/buttons/color.png\"\n" +
    "         colorpicker\n" +
    "         ng-model=\"selectedBuilding.color\"\n" +
    "         ng-model-options='{getterSetter: true}'>\n" +
    "</div>\n" +
    "\n" +
    "<style>\n" +
    "    .hover-info {\n" +
    "        min-width: 350px;\n" +
    "        position: absolute;\n" +
    "    }\n" +
    "    .hover-info-name {\n" +
    "        text-transform: uppercase;\n" +
    "        color: #ffffff;\n" +
    "        background-color: rgba(44, 85, 116, 0.9);\n" +
    "        font-size: 150%;\n" +
    "        padding-left: 10px;\n" +
    "        padding-top: 4px;\n" +
    "    }\n" +
    "    .hover-info-content {\n" +
    "        background-color: rgba(0, 0, 0, 0.9);\n" +
    "    }\n" +
    "    .hover-info-section {\n" +
    "        text-transform: uppercase;\n" +
    "        color: #727b80;\n" +
    "        font-size: 150%;\n" +
    "        clear: both;\n" +
    "        padding-left: 10px;\n" +
    "    }\n" +
    "    .hover-info-item {\n" +
    "\n" +
    "    }\n" +
    "    .hover-info-item-icon {\n" +
    "        width: 25px;\n" +
    "        height: 25px;\n" +
    "        float: left;\n" +
    "        margin: 2px 2px 2px 10px;\n" +
    "    }\n" +
    "    .hover-info-item-name {\n" +
    "        color: #ffffff;\n" +
    "        display: inline-block;\n" +
    "        clear: both;\n" +
    "        font-size: 150%;\n" +
    "    }\n" +
    "    .hover-info-item-amount {\n" +
    "        color: #ffffff;\n" +
    "        float: right;\n" +
    "        font-size: 150%;\n" +
    "        padding-right: 10px;\n" +
    "    }\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"hover-info\" ng-show=\"hoverInfo.show\"\n" +
    "     ng-style=\"{left: hoverInfo.left, top: hoverInfo.top}\">\n" +
    "    <div class=\"hover-info-name\">{{hoverInfo.info.name}}</div>\n" +
    "    <div class=\"hover-info-content\">\n" +
    "\n" +
    "        <!-- TODO: \"Requires mountain/coastal building site\" -->\n" +
    "\n" +
    "        <div ng-show=\"!isEmpty(hoverInfo.info.production)\">\n" +
    "            <div class=\"hover-info-section\">Production Per Minute</div>\n" +
    "            <div class=\"hover-info-item\" ng-repeat=\"(itemId, amount) in hoverInfo.info.production\">\n" +
    "                <div class=\"hover-info-item-icon\"\n" +
    "                 anno-sprite=\"Anno2205Layouts.iconSpriteMap\"\n" +
    "                 anno-sprite-name=\"Anno2205Layouts.items[itemId].icon\"\n" +
    "                 anno-sprite-size=\"50%\"></div>\n" +
    "                <div class=\"hover-info-item-name\">{{Anno2205Layouts.items[itemId].name}}</div>\n" +
    "                <div class=\"hover-info-item-amount\">{{amount | number}}</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-show=\"!isEmpty(hoverInfo.info.consumption)\">\n" +
    "            <div class=\"hover-info-section\">Consumption Per Minute</div>\n" +
    "            <div class=\"hover-info-item\" ng-repeat=\"(itemId, amount) in hoverInfo.info.consumption\">\n" +
    "                <div class=\"hover-info-item-icon\"\n" +
    "                 anno-sprite=\"Anno2205Layouts.iconSpriteMap\"\n" +
    "                 anno-sprite-name=\"Anno2205Layouts.items[itemId].icon\"\n" +
    "                 anno-sprite-size=\"50%\"></div>\n" +
    "                <div class=\"hover-info-item-name\">{{Anno2205Layouts.items[itemId].name}}</div>\n" +
    "                <div class=\"hover-info-item-amount\">-{{amount | number}}</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"hover-info-section\">Construction Costs</div>\n" +
    "        <div class=\"hover-info-item\" ng-repeat=\"(itemId, amount) in hoverInfo.info.constructionCost\">\n" +
    "            <div class=\"hover-info-item-icon\"\n" +
    "             anno-sprite=\"Anno2205Layouts.iconSpriteMap\"\n" +
    "             anno-sprite-name=\"Anno2205Layouts.items[itemId].icon\"\n" +
    "             anno-sprite-size=\"50%\"></div>\n" +
    "            <div class=\"hover-info-item-name\">{{Anno2205Layouts.items[itemId].name}}</div>\n" +
    "            <div class=\"hover-info-item-amount\">{{amount | number}}</div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("app/my-layouts/my-layouts.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/my-layouts/my-layouts.html",
    "<style>\n" +
    "    input.ng-invalid.ng-touched {\n" +
    "        background-color: #fa787e;\n" +
    "    }\n" +
    "</style>\n" +
    "\n" +
    "<form>\n" +
    "<div id=\"layout-type\">\n" +
    "    <label><input type=\"radio\" name=\"layout-type\" ng-model=\"region\" value=\"earth\">Earth</label>\n" +
    "    <label><input type=\"radio\" name=\"layout-type\" ng-model=\"region\" value=\"arctic\">Arctic</label>\n" +
    "    <label><input type=\"radio\" name=\"layout-type\" ng-model=\"region\" value=\"moon\">Moon</label>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"layout-list-container\">\n" +
    "<table class=\"table table-striped table-bordered table-hover\" id=\"layout-list\">\n" +
    "    <tbody>\n" +
    "    <tr ng-repeat=\"layout in layouts.layouts | filter:{region: region}\" ng-click=\"$location.path('/editor/'+layout.id);\">\n" +
    "        <td>{{layout.name}}</td>\n" +
    "    </tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</form>\n" +
    "\n" +
    "<button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#new-layout-modal\">Add New Layout</button>\n" +
    "\n" +
    "<div id=\"new-layout-modal\" class=\"modal\" role=\"dialog\">\n" +
    "    <div class=\"modal-dialog\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <form novalidate name=\"newLayoutForm\">\n" +
    "                <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n" +
    "                    <h4 class=\"modal-title\">Add New Layout</h4>\n" +
    "                </div>\n" +
    "                <div class=\"modal-body\">\n" +
    "                    <input type=\"text\" class=\"form-control\" name=\"newName\" ng-model=\"newName\" placeholder=\"New Layout Name\" required>\n" +
    "                    <div ng-show=\"newLayoutForm.$submitted || newLayoutForm.newName.$touched\">\n" +
    "                        <span ng-show=\"newLayoutForm.newName.$error.required\">You must enter a layout name.</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"modal-footer\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\" ng-disabled=\"newLayoutForm.$invalid\" ng-click=\"createNewLayout(newName)\">Create</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
