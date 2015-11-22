'use strict';

angular.module('anno2205Layouts', [
    'ngRoute',
    'ngStorage',
    'anno2205Layouts.my-layouts',
    'anno2205Layouts.editor',
    'templates-dist'
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

    Anno2205Layouts.maintenanceModules = {
        credits: {
            icon: 'credits_module',
            name: 'Finance Calculator',
            unitSize: [2, 2],
            effect: {credits: '-10%'},
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
            effect: {energy: '-10%'},
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
            effect: {maintenance: '+10%'},
            constructionCost: {earth: {credits: 500000, superalloys: 50, biopolymers: 100, 'construct-o-bots': 100}},
        },

        headquarter2: {
            icon: 'headquarter_module_2',
            name: 'Corporation HQ Wing',
            unitSize: [4, 4],
            effect: {maintenance: '+10%'},
            constructionCost: {earth: {credits: 500000, superalloys: 50, biopolymers: 100, 'construct-o-bots': 100}},
        },

        headquarter3: {
            icon: 'headquarter_module_3',
            name: 'Corporation HQ Intersection',
            unitSize: [4, 4],
            effect: {maintenance: '+10%'},
            constructionCost: {earth: {credits: 500000, superalloys: 50, biopolymers: 100, 'construct-o-bots': 100}},
        },

        headquarter4: {
            icon: 'headquarter_module_4',
            name: 'Corporation HQ Terminal',
            unitSize: [4, 4],
            effect: {maintenance: '+10%'},
            constructionCost: {earth: {credits: 500000, superalloys: 50, biopolymers: 100, 'construct-o-bots': 100}},
        },

        headquarter5: {
            icon: 'headquarter_module_5',
            name: 'Corporation HQ Terminal',
            unitSize: [4, 4],
            effect: {maintenance: '+10%'},
            constructionCost: {earth: {credits: 500000, superalloys: 50, biopolymers: 100, 'construct-o-bots': 100}},
        },

        logistics: {
            icon: 'logistics_module',
            name: 'Storage Depot',
            unitSize: [2, 2],
            effect: {maintenance: -2},
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
            effect: {workforce: '-20%'},
            constructionCost: {
                earth: {credits: 500, iridium: 10},
                arctic: {credits: 1500, iridium: 15},
                moon: {credits: 4000, iridium: 30},
            },
        },
        //graphene: graphene_module
        //temp: temp_module
    };

    Anno2205Layouts.buildingLevels = {
        earth: [
            {
                id: 'workers',
                style: {
                    background: 'url("images/buttons/button-construction-levels-sheet.png") 0 0'
                },
                buildings: [
                    {
                        id: 'sunflower-farm',
                        name: 'Sunflower Farm',
                        icon: 'bioresigns',
                        placementType: 'ground',
                        unitSize: [4, 8],
                        // effect
                        // constructionCost
                        // maintenance
                        productionUnit: {
                            name: 'Sunflower Cropland',
                            id: 'sunflower-cropland',
                            // icon: 'bioresigns',
                            unitSize: [5, 8],
                            // placementType: 'ground',
                            // effect
                            // constructionCost
                            // maintenance
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],

                    },
                    {
                        id: 'biopolymer-factory',
                        name: 'Biopolymer Factory',
                        icon: 'biocomposites',
                        placementType: 'ground',
                        unitSize: [5, 7],
                        productionUnit: {
                            name: 'Biopolymer Basins',
                            id: 'biopolymer-basins',
                            unitSize: [3, 5],
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'rice-farm',
                        name: 'Rice Farm',
                        icon: 'rice_dish',
                        placementType: 'ground',
                        unitSize: [5, 7],
                        productionUnit: {
                            name: 'Rice Field',
                            id: 'rice-field',
                            unitSize: [7, 7],
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'desalinization-plant',
                        name: 'Desalinization Plant',
                        icon: 'water',
                        placementType: 'coast',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'infodrome',
                        name: 'Infodrome',
                        icon: 'information',
                        placementType: 'ground',
                        unitSize: [7, 7],
                    },
                ]
            },
            {
                id: 'operators',
                style: {
                    background: 'url("images/buttons/button-construction-levels-sheet.png") -417px 0'
                },
                buildings: [
                    {
                        id: 'feldspar-quarry',
                        name: 'Feldspar Quarry',
                        icon: 'ceramics',
                        placementType: 'mountain',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'cobalt-mine',
                        name: 'Cobalt Mine',
                        icon: 'cobalt',
                        placementType: 'mountain',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'robot-assembly-hall',
                        name: 'Robot Assembly Hall',
                        icon: 'robots',
                        placementType: 'ground',
                        unitSize: [4, 13],
                        productionUnit: {
                            name: 'Robot Conveyor Belt',
                            id: 'robot-conveyor-belt',
                            unitSize: [4, 10],
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                        maintenanceConstructionCost: {credits: 4000, iridium: 30},
                    },
                    {
                        id: 'fruit-plantation',
                        name: 'Fruit Plantation',
                        icon: 'fruit',
                        placementType: 'ground',
                        unitSize: [4, 7],
                        productionUnit: {
                            name: 'Fruit Orchard',
                            id: 'fruit-orchard',
                            unitSize: [4, 9],
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'vitamin-condenser',
                        name: 'Vitamin Condenser',
                        icon: 'fruit_drink',
                        placementType: 'ground',
                        unitSize: [3, 4],
                        productionUnit: {
                            name: 'Fruit Press',
                            id: 'fruit-press',
                            unitSize: [2, 2],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'algae-farm',
                        name: 'Algae Farm',
                        icon: 'algae',
                        placementType: 'coast',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'synthcell-incubator',
                        name: 'Synthcell Incubator',
                        icon: 'synth_cells',
                        placementType: 'ground',
                        unitSize: [5, 5],
                        productionUnit: {
                            name: 'Synthcell Chambers',
                            id: 'synthcell-chambers',
                            unitSize: [3, 5],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'biomedical-laboratory',
                        name: 'Biomedical Laboratory',
                        icon: 'rejuvenators',
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
                        productionUnit: {
                            name: 'Reaction Pods',
                            id: 'reaction-pods',
                            unitSize: [5, 5],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'security-department',
                        name: 'Security Department',
                        icon: 'security',
                        placementType: 'ground',
                        unitSize: [8, 9],
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                ]
            },
            {
                id: 'executives',
                style: {
                    background: 'url("images/buttons/button-construction-levels-sheet.png") -834px 0'
                },
                buildings: [
                    {
                        id: 'soy-farm',
                        name: 'Soy Farm',
                        icon: 'soy_beans',
                        placementType: 'ground',
                        unitSize: [4, 7],
                        productionUnit: {
                            name: 'Soy Field',
                            id: 'soy-field',
                            unitSize: [4, 4],
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'cattle-ranch',
                        name: 'Cattle Ranch',
                        icon: 'beef',
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
                        productionUnit: {
                            name: 'Cattle Pen',
                            id: 'cattle-pen',
                            unitSize: [7, 9],
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'vineyard',
                        name: 'Vineyard',
                        icon: 'wine',
                        placementType: 'ground',
                        unitSize: [7, 8],
                        productionUnit: {
                            name: 'Vineyard Terrace',
                            id: 'vineyard-terrace',
                            unitSize: [5, 5],
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'food-design-workshop',
                        name: 'Food Design Workshop',
                        icon: 'luxury_food',
                        placementType: 'ground',
                        unitSize: [4, 9],
                        productionUnit: {
                            name: 'Molecular Kitchens',
                            id: 'molecular-kitchens',
                            unitSize: [3, 6],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'flax-plantation',
                        name: 'Flax Plantation',
                        icon: 'plant_fibres',
                        placementType: 'ground',
                        unitSize: [3, 7],
                        productionUnit: {
                            name: 'Flax Planters',
                            id: 'flax-planters',
                            unitSize: [2, 3],
                        },
                        productionLimit: 4,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'silicon-mine',
                        name: 'Silicon Mine',
                        icon: 'silica',
                        placementType: 'mountain',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'microfabrication-hall',
                        name: 'Microfabrication Hall',
                        icon: 'microchips',
                        placementType: 'ground',
                        unitSize: [3, 6],
                        productionUnit: {
                            name: 'Sterile Chambers',
                            id: 'sterile-chambers',
                            unitSize: [3, 6],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'nano-textile-mill',
                        name: 'Nano Textile Mill',
                        icon: 'intelli_clothes',
                        placementType: 'ground',
                        unitSize: [4, 11],
                        productionUnit: {
                            name: 'Nano-Loom',
                            id: 'nano-loom',
                            unitSize: [5, 5],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'metro-station',
                        name: 'Metro Station',
                        icon: 'mobility',
                        placementType: 'ground',
                        unitSize: [10, 19],
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                ]
            },
            {
                id: 'investors',
                style: {
                    background: 'url("images/buttons/button-construction-levels-sheet.png") -1251px 0'
                },
                buildings: [
                    {
                        id: 'diamond-mine',
                        name: 'Diamond Mine',
                        icon: 'diamant',
                        placementType: 'mountain',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'nano-cutting-unit',
                        name: 'Nano Cutting Unit',
                        icon: 'multispectral_prisms',
                        placementType: 'ground',
                        unitSize: [5, 8],
                        productionUnit: {
                            name: 'Polishing Unit',
                            id: 'polishing-unit',
                            unitSize: [5, 5],
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'neutronium-lab',
                        name: 'Neutronium Lab',
                        icon: 'replicators',
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
                        productionUnit: {
                            name: 'Neutronium Generator',
                            id: 'neutronium-generator',
                            unitSize: [4, 5],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'ai-composition-plant',
                        name: 'AI Composition Plant',
                        icon: 'synaptic_circuits',
                        placementType: 'ground',
                        unitSize: [6, 7],
                        productionUnit: {
                            name: 'AI Incubator',
                            id: 'ai-incubator',
                            unitSize: [3, 7],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'android-factory',
                        name: 'Android Factory',
                        icon: 'androids',
                        placementType: 'ground',
                        unitSize: [5, 11],
                        productionUnit: {
                            name: 'Android Assembly Line',
                            id: 'android-assembly-line',
                            unitSize: [4, 5],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'stadium',
                        name: 'Stadium',
                        icon: 'recreation',
                        placementType: 'ground',
                        unitSize: [17, 17],
                    },
                ]
            },
            {
                id: 'ornaments',
                style: {
                    background: 'url("images/buttons/button-construction-levels-sheet.png") -1668px 0'
                },
                buildings: [
                    {
                        id: 'small-park',
                        name: 'Small Park',
                        icon: 'ornamental_park_small',
                        placementType: 'ground',
                        unitSize: [1, 1],
                    },
                    {
                        id: 'medium-park',
                        name: 'Medium Park',
                        icon: 'ornamental_park_medium',
                        placementType: 'ground',
                        unitSize: [2, 2],
                    },
                    {
                        id: 'big-park',
                        name: 'Big Park',
                        icon: 'ornamental_park_large',
                        placementType: 'ground',
                        unitSize: [3, 3],
                    },
                    {
                        id: 'small-parking-lot',
                        name: 'Small Parking Lot',
                        icon: 'ornamental_car_park_small',
                        placementType: 'ground',
                        unitSize: [1, 1],
                    },
                    {
                        id: 'medium-parking-lot',
                        name: 'Medium Parking Lot',
                        icon: 'ornamental_car_park_medium',
                        placementType: 'ground',
                        unitSize: [2, 2],
                    },
                    {
                        id: 'big-parking-lot',
                        name: 'Big Parking Lot',
                        icon: 'ornamental_car_park_large',
                        placementType: 'ground',
                        unitSize: [3, 3],
                    },
                ]
            }
        ],
        arctic: [
            {
                id: 'protectors',
                style: {
                    background: 'url("images/buttons/button-construction-levels-sheet.png") -2085px 0'
                },
                buildings: [
                    {
                        id: 'aluminum-mine',
                        name: 'Aluminum Mine',
                        icon: 'aluminium',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'compression-chamber',
                        name: 'Compression Chamber',
                        icon: 'metal_foam',
                        placementType: 'ground',
                        unitSize: [4, 7],
                        productionUnit: {
                            name: 'Compression Smelters',
                            id: 'compression-smelters',
                            unitSize: [7, 7],
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'fishing-harbor',
                        name: 'Fishing Harbor',
                        icon: 'fish',
                        placementType: 'coast',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'cannery',
                        name: 'Cannery',
                        icon: 'canned_food',
                        placementType: 'ground',
                        unitSize: [4, 7],
                        productionUnit: {
                            name: 'Canning Conveyor Belt',
                            id: 'canning-conveyor-belt',
                            unitSize: [4, 4],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'molybdenum-mine',
                        name: 'Molybdenum Mine',
                        icon: 'molybdenum',
                        placementType: 'mountain',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'neuro-module-factory',
                        name: 'Neuro-Module Factory',
                        icon: 'neuro_implants_2',
                        placementType: 'ground',
                        unitSize: [5, 7],
                        productionUnit: {
                            name: 'Neuro-Module Complex',
                            id: 'neuro-module-complex',
                            unitSize: [5, 9],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'community-center',
                        name: 'Community Center',
                        icon: 'community_center',
                        placementType: 'ground',
                        unitSize: [5, 7],
                    },
                ]
            },
            {
                id: 'scientists',
                style: {
                    background: 'url("images/buttons/button-construction-levels-sheet.png") -2502px 0'
                },
                buildings: [
                    {
                        id: 'plasma-smelter',
                        name: 'Plasma Smelter',
                        icon: 'super_alloys',
                        placementType: 'ground',
                        unitSize: [5, 9],
                        productionUnit: {
                            name: 'Melting Pots',
                            id: 'melting-pots',
                            unitSize: [4, 5],
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                        maintenanceConstructionCost: {credits: 500, iridium: 10},
                    },
                    {
                        id: 'coral-farm',
                        name: 'Coral Farm',
                        icon: 'deep_water_corals',
                        placementType: 'coast',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'pharma-lab',
                        name: 'Pharma Lab',
                        icon: 'stimulants',
                        placementType: 'ground',
                        unitSize: [3, 6],
                        productionUnit: {
                            name: 'Enrichment Containers',
                            id: 'enrichment-containers',
                            unitSize: [3, 3],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'methane-extractor',
                        name: 'Methane Extractor',
                        icon: 'methan_clathrate',
                        placementType: 'coast',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'deuterium-strainer',
                        name: 'Deuterium Strainer',
                        icon: 'deuterium',
                        placementType: 'coast',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'cryogenics-lab',
                        name: 'Cryogenics Lab',
                        icon: 'super_coolants',
                        placementType: 'ground',
                        unitSize: [4, 8],
                        productionUnit: {
                            name: 'Cryochamber',
                            id: 'cryochamber',
                            unitSize: [4, 7],
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'subzero-cleanroom',
                        name: 'Subzero Cleanroom',
                        icon: 'qubit_processors',
                        placementType: 'ground',
                        unitSize: [3, 8],
                        productionUnit: {
                            name: 'Chip Assembly',
                            id: 'chip-assembly',
                            unitSize: [2, 8],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'hardware-fabrication-plant',
                        name: 'Hardware Fabrication Plant',
                        icon: 'quantum_computers',
                        placementType: 'ground',
                        unitSize: [7, 7],
                        productionUnit: {
                            name: 'Air-Locked Labs',
                            id: 'air-locked-labs',
                            unitSize: [4, 7],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'high-security-laboratory',
                        name: 'High Security Laboratory',
                        icon: 'forbidden_science',
                        placementType: 'ground',
                        //TODO: What is the size?
                        unitSize: [1, 1],
                    },
                ]
            },
        ],
        moon: [
            {
                id: 'miners',
                style: {
                    background: 'url("images/buttons/button-construction-levels-sheet.png") -2919px 0'
                },
                buildings: [
                    {
                        id: 'titanium-mine',
                        name: 'Titanium Mine',
                        icon: 'titanium',
                        placementType: 'mountain',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'ion-welder',
                        name: 'Ion Welder',
                        icon: 'titan_plating',
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
                        productionUnit: {
                            name: 'Melting Chamber',
                            id: 'melting-chamber',
                            unitSize: [6, 9],
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'core-ice-driller',
                        name: 'Core Ice Driller',
                        icon: 'moon_ice',
                        placementType: 'mountain',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'oxygen-separator',
                        name: 'Oxygen Separator',
                        icon: 'oxygen',
                        placementType: 'ground',
                        unitSize: [3, 6],
                        productionUnit: {
                            name: 'Splitting Unit',
                            id: 'splitting-unit',
                            unitSize: [3, 6],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'kreep-gatherer',
                        name: 'Kreep Gatherer',
                        icon: 'rare_earth_elements',
                        placementType: 'mountain',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'cybernetics-factory',
                        name: 'Cybernetics Factory',
                        icon: 'bio_enhancers',
                        placementType: 'ground',
                        unitSize: [6, 8],
                        productionUnit: {
                            name: 'Cybernetics Manufacture',
                            id: 'cybernetics-manufacture',
                            unitSize: [4, 8],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'maintenance-station',
                        name: 'Maintenance Station',
                        icon: 'colony_safety',
                        placementType: 'ground',
                        unitSize: [7, 7],
                    },
                ]
            },
            {
                id: 'officers',
                style: {
                    background: 'url("images/buttons/button-construction-levels-sheet.png") -3336px 0'
                },
                buildings: [
                    {
                        id: 'aeroponic-farm',
                        name: 'Aeroponic Farm',
                        icon: 'moon_crops',
                        placementType: 'ground',
                        unitSize: [4, 9],
                        productionUnit: {
                            name: 'Aeroponic Greenhouse',
                            id: 'aeroponic-greenhouse',
                            unitSize: [4, 5],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'space-galley',
                        name: 'Space Galley',
                        icon: 'natural_space_food',
                        placementType: 'ground',
                        unitSize: [5, 12],
                        productionUnit: {
                            name: 'Kitchen Hall',
                            id: 'kitchen-hall',
                            unitSize: [8, 12],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'regolith-collector',
                        name: 'Regolith Collector',
                        icon: 'helium_3',
                        placementType: 'mountain',
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'fusion-preparation-plant',
                        name: 'Fusion Preparation Plant',
                        icon: 'fusion_accumulators',
                        placementType: 'ground',
                        unitSize: [3, 10],
                        productionUnit: {
                            name: 'Preparation Complex',
                            id: 'preparation-complex',
                            unitSize: [6, 10],
                        },
                        productionLimit: 6,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'anti-g-workshop',
                        name: 'Anti-G Workshop',
                        icon: 'gravity_generators',
                        placementType: 'ground',
                        unitSize: [5, 10],
                        productionUnit: {
                            name: 'Gravity Modifiers',
                            id: 'gravity-modifiers',
                            unitSize: [10, 10],
                        },
                        productionLimit: 8,
                        maintenanceModules: ['workforce', 'energy', 'logistics'],
                    },
                    {
                        id: 'health-center',
                        name: 'Health Center',
                        icon: 'health_care',
                        placementType: 'ground',
                        // TODO: Size?
                        unitSize: [1, 1],
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
                placementType: 'ground',
                unitSize: [1, 1],
            },
            {
                id: 'residence',
                name: 'Residence',
                icon: 'residence_earth',
                placementType: 'ground',
                unitSize: [3, 3],
            },
            {
                id: 'residential-complex',
                name: 'Residential Complex',
                icon: 'residence_estate',
                placementType: 'ground',
                unitSize: [6, 6],
            },
            {
                id: 'earth-transportation-center',
                name: 'Transportation Center',
                icon: 'transportation_center_earth',
                placementType: 'ground',
                unitSize: [4, 6],
            },
            {
                id: 'windpark',
                name: 'Windpark',
                icon: 'windpark',
                placementType: 'ground',
                unitSize: [4, 8],
                productionUnit: {
                    name: 'Wind Turbine',
                    id: 'wind-turbine',
                    unitSize: [4, 5],
                },
                productionLimit: 4,
                maintenanceModules: ['credits', 'workforce'],
            },
            {
                id: 'tidal-power-station',
                name: 'Tidal Power Station',
                icon: 'tidal_power_station',
                placementType: 'coast',
                maintenanceModules: ['credits', 'workforce'],
            },
            {
                id: 'corporation-hq',
                name: 'Corporation HQ',
                icon: 'headquarter_base',
                placementType: 'ground',
                unitSize: [6, 12],
                // productionUnit: {
                //     unitSize: [4, 4],
                // },
                // productionLimit: 30,
                // TODO
                // maintenanceModules: ['headquarter_module_1', 'headquarter_module_2', 'headquarter_module_3', 'headquarter_module_4', 'headquarter_module_5'],
            },
        ],
        arctic: [
            {
                id: 'polar-road',
                name: 'Polar Road',
                icon: 'arctic_road',
                placementType: 'ground',
                unitSize: [1, 1],
            },
            {
                id: 'arctic-dwelling',
                name: 'Arctic Dwelling',
                icon: 'residence_arctic',
                placementType: 'ground',
                unitSize: [5, 5],
            },
            {
                id: 'arctic-transportation-center',
                name: 'Transportation Center',
                icon: 'transportation_center_arctic',
                placementType: 'ground',
                unitSize: [4, 6],
            },
            {
                id: 'geothermal-turbines',
                name: 'Geothermal Turbines',
                icon: 'geothermal_turbinnes',
                placementType: 'coast',
                maintenanceModules: ['credits', 'workforce'],
            },
            {
                id: 'gas-power-station',
                name: 'Gas Power Station',
                icon: 'gas_power_plant',
                placementType: 'ground',
                unitSize: [8, 11],
                productionUnit: {
                    name: 'Generator Domes',
                    id: 'generator-domes',
                    unitSize: [4, 8],
                },
                productionLimit: 6,
                // TODO:  Double-check this.
                maintenanceModules: ['credits', 'workforce', 'logistics'],
            },
        ],
        moon: [
            {
                id: 'moon-tracks',
                name: 'Moon Tracks',
                icon: 'moon_road',
                placementType: 'ground',
                unitSize: [1, 1],
            },
            {
                id: 'living-unit',
                name: 'Living Unit',
                icon: 'residence_moon',
                placementType: 'ground',
                unitSize: [5, 5],
            },
            {
                id: 'small-shield-generator',
                name: 'Small Shield Generator',
                icon: 'energy_shielding_small_2',
                placementType: 'ground',
                unitSize: [2, 2],
            },
            {
                id: 'large-shield-generator',
                name: 'Large Shield Generator',
                icon: 'energy_shielding_big_2',
                placementType: 'ground',
                unitSize: [4, 4],
            },
            {
                id: 'lunar-transportation-center',
                name: 'Lunar Transportation Center',
                icon: 'transportation_center_moon',
                placementType: 'ground',
                unitSize: [4, 6],
            },
            {
                id: 'solar-array',
                name: 'Solar Array',
                icon: 'solar_array',
                placementType: 'mountain',
                maintenanceModules: ['credits', 'workforce'],
            },
            {
                id: 'fusion-reactor',
                name: 'Fusion Reactor',
                icon: 'fusion_power_plant',
                placementType: 'ground',
                unitSize: [12, 12],
                productionUnit: {
                    name: 'Reactor Coolers',
                    id: 'reactor-coolers',
                    unitSize: [6, 11],
                },
                productionLimit: 6,
                maintenanceModules: ['credits', 'workforce', 'logistics'],
            },
        ]
    };

    // Add "id" attribute to maintenance modules.
    _.each(Anno2205Layouts.maintenanceModules, function(module, key) {
        module.id = key;
    });

    // Maps building id to its description object.
    Anno2205Layouts.unitIdMap = {};

    Anno2205Layouts.initBuildings = function() {
        // Build the unitIdMap.
        _.each(Anno2205Layouts.regions, function(region) {
            _.each(Anno2205Layouts.buildingLevels[region], function(level) {
                _.each(level.buildings, function(building) {
                    Anno2205Layouts.unitIdMap[building.id] = building;
                    if (building.productionUnit !== undefined) {
                        Anno2205Layouts.unitIdMap[building.productionUnit.id] = building.productionUnit;
                    }
                });
            });
            _.each(Anno2205Layouts.commonBuildings[region], function(building) {
                Anno2205Layouts.unitIdMap[building.id] = building;
            });
        });
        _.each(Anno2205Layouts.maintenanceModules, function(module) {
            Anno2205Layouts.unitIdMap[module.id] = module;
        });

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
                unit.productionUnit.iconScale = 0.6;
            }
        });

        // Add a "style" property for icons to make it easier to apply.
        var spriteMap = Anno2205Layouts.iconSpriteMap;
        _.each(spriteMap, function(spriteInfo, key) {
            spriteInfo.style = {
                'background-image': 'url("images/buttons/construction_icons.png")',
                'background-position': '-' + spriteInfo.x + 'px -' + spriteInfo.y+'px'
            };
        });

        // Replace icon IDs with icon info objects for convenience.
        _.each(Anno2205Layouts.unitIdMap, function(unit) {
            unit.icon = spriteMap[unit.icon];
        });

        // Populate the background image information for the tab buttons.
        var index = 0;
        var width = 139;
        _.each(Anno2205Layouts.regions, function(region) {
            _.each(Anno2205Layouts.buildingLevels[region], function(level) {
                level.backgroundBase = 'url("images/buttons/button-construction-levels-sheet.png") -'+(width*3*index)+'px 0';
                level.backgroundHover = 'url("images/buttons/button-construction-levels-sheet.png") -'+(width + width*3*index)+'px 0';
                level.backgroundActive = 'url("images/buttons/button-construction-levels-sheet.png") -'+(width*2 + width*3*index)+'px 0';
                level.background = level.backgroundBase;
                index += 1;
            });
        });
    };

    Anno2205Layouts.rotateShape = function(shape, orientation) {
        console.log('orientation='+orientation);
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
     * @var {jQuery} buildingCanvas - The <canvas> element for the unit.
     */
    var EditorUnit = function() {
        this.unitInfo = undefined;
        this.position = undefined;
        this.orientation = 0;
        this.ctx = undefined;
        this.state = undefined;
    };

    EditorUnit.createFromStorage = function(unitStorage) {
        var eu = new EditorUnit();
        eu.unitInfo = Anno2205Layouts.unitIdMap[unitStorage.unitInfoId];
        eu.position = unitStorage.position.slice();
        eu.orientation = unitStorage.orientation;
        eu.state = 'onGrid';
        return eu;
    };

    EditorUnit.createNew = function(unitInfo) {
        var eu = new EditorUnit();
        eu.unitInfo = unitInfo;
        eu.createElement();
        eu.state = 'positioning';
        return eu;
    };

    EditorUnit.prototype.export = function() {
        return {
            unitInfoId: this.unitInfo.id,
            position: this.position.slice(),
            orientation: this.orientation,
        };
    };

    /** Determine the bounding box of the unit.  */
    EditorUnit.prototype.unitBBox = function() {
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
        var bbox = this.unitBBox();
        return ((this.position[0] + bbox.gridWidth < grid.gridWidth) &&
                (this.position[1] + bbox.gridHeight < grid.gridHeight));
    };

    /** Create the <canvas> element and add it to the document. */
    EditorUnit.prototype.createElement = function() {
        var bbox = this.unitBBox();
        var gridCanvas = $("#anno-canvas");
        var canvasOffset = gridCanvas.offset();
        var left = 0;
        var top = 0;
        if (this.position) {
            left = this.position[0]*Anno2205Layouts.gridSize + canvasOffset.left;
            top = this.position[1]*Anno2205Layouts.gridSize + canvasOffset.top;
        }
        this.buildingCanvas = $('<canvas></canvas>').css({
            position: 'absolute',
            left: left,
            top: top,
        }).prop({
            width: bbox.size,
            height: bbox.size,
        });
        this.ctx = this.buildingCanvas.get(0).getContext('2d');
        $("#construction-area").append(this.buildingCanvas);
    };

    EditorUnit.prototype.demolish = function() {
        if (this.buildingCanvas) {
            this.buildingCanvas.remove();
        }
    };

    EditorUnit.prototype.hitTest = function(pageX, pageY) {
        var offset = this.buildingCanvas.offset();
        var bbox = this.unitBBox();
        var relativeX = pageX - offset.left;
        var relativeY = pageY - offset.top;
        if (relativeX > 0 && relativeY > 0 &&
            relativeX < bbox.width && relativeY < bbox.height) {
            var pixel = this.ctx.getImageData(relativeX, relativeY, 1, 1).data;
            // Hit if not transparent.
            return pixel[3] > 0;
        }
    };

    /** Draw the unit on its canvas. */
    EditorUnit.prototype.drawUnit = function() {
        var bbox = this.unitBBox();
        var ctx = this.ctx;
        ctx.clearRect(0, 0, bbox.size, bbox.size);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000000';
        ctx.fillStyle = 'rgba(238, 0, 0, 0.8)';
        ctx.beginPath();
        if (this.unitInfo.unitShape) {
            var shape = Anno2205Layouts.rotateShape(
                this.unitInfo.unitShape, this.orientation);

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
        var iconSheet = $('#construction-icons')[0];
        var icon = this.unitInfo.icon;
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
    };

    // Determine the grid position from mouse coordinates.
    // The `c` parameters are the position and size for the grid.
    var gridFromMouse = function(cLeft, cTop, cWidth, cHeight, x, y) {
        // Determine position of the grid.
        if (x > cLeft && x < cLeft+cWidth &&
            y > cTop && y < cTop+cHeight) {
            var gridX = Math.floor((x - cLeft) / Anno2205Layouts.gridSize);
            var gridY = Math.floor((y - cTop) / Anno2205Layouts.gridSize);
            return [gridX, gridY];
        } else {
            return undefined;
        }
    };

    /**
     * Adds event handlers for positioning a unit.
     * @param {function} placeCallback - Called once the unit is placed.
     *     Arguments are (editorUnit).
     */
    EditorUnit.prototype.createPositionHandlers = function(placeCallback) {
        var gridCanvas = $("#anno-canvas");
        var canvasWidth = gridCanvas.width();
        var canvasHeight = gridCanvas.height();
        var eu = this;

        // Drag the building with the mouse. Ensure it stays aligned to the
        // construction grid when hovering over the grid.
        var freeMoveFunction = function(event) {
            var canvasOffset = gridCanvas.offset();
            var gridPos  = gridFromMouse(canvasOffset.left, canvasOffset.top,
                    canvasWidth, canvasHeight, event.pageX, event.pageY);
            if (gridPos === undefined) {
                eu.buildingCanvas.css({
                    left: event.pageX,
                    top: event.pageY,
                });
            } else {
                eu.buildingCanvas.css({
                    left: gridPos[0]*Anno2205Layouts.gridSize + canvasOffset.left,
                    top: gridPos[1]*Anno2205Layouts.gridSize + canvasOffset.top,
                });
            }
        };
        $("html").mousemove(freeMoveFunction);

        // Create a click handler to place the building.
        var positionClick = function(event) {
            var canvasOffset = gridCanvas.offset();
            var gridPos  = gridFromMouse(canvasOffset.left, canvasOffset.top,
                    canvasWidth, canvasHeight, event.pageX, event.pageY);
            if (gridPos !== undefined) {
                var gridX = Math.floor((event.pageX - canvasOffset.left) / Anno2205Layouts.gridSize);
                var gridY = Math.floor((event.pageY - canvasOffset.top) / Anno2205Layouts.gridSize);
                eu.position = [gridX, gridY];
                eu.state = 'onGrid';
                placeCallback(eu);
                positionCleanup();
            }
        };
        $("#construction-area").on('click', positionClick);

        var rotateCounterClockwise = function() {
            eu.orientation -= 1;
            if (eu.orientation < 0) {
                eu.orientation = 3;
            }
        };
        var rotateClockwise = function() {
            eu.orientation += 1;
            if (eu.orientation > 3) {
                eu.orientation = 0;
            }
        };

        // MMB handler for rotating the unit.
        var rotateClick = function(event) {
            if (event.which == 2) {
                // TODO: What does Anno do?
                rotateCounterClockwise();
                eu.drawUnit();
            }
        };
        $("#construction-area").on('mousedown', rotateClick);

        var positionUnitKey = function(event) {
            if (event.which == 188) { // ,
                rotateCounterClockwise();
                eu.drawUnit();
            } else if (event.which == 190) { // .
                rotateClockwise();
                eu.drawUnit();
            }
        };
        $(document).on('keydown', positionUnitKey);

        var positionCleanup = function() {
            $(document).off('keydown', positionUnitKey);
            $('html').off('mousemove', freeMoveFunction);
            $("#construction-area")
                .off('click', positionClick)
                .off('mousedown', rotateClick);
        };
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
    };

    EditorBuilding.createFromStorage = function(buildingStorage) {
        var eb = new EditorBuilding();
        eb.buildingUnit = EditorUnit.createFromStorage(buildingStorage.building);
        eb.type = Anno2205Layouts.unitIdMap[buildingStorage.buildingId];
        eb.productionModules = _.map(buildingStorage.productionModules, function(modInfo) {
            return EditorUnit.createFromStorage(modInfo);
        });
        eb.maintenanceModules = _.map(buildingStorage.maintenanceModules, function(modInfo) {
            return EditorUnit.createFromStorage(modInfo);
        });
        return eb;
    };

    EditorBuilding.createNew = function(buildingType) {
        var eb = new EditorBuilding();
        eb.type = buildingType;
        eb.buildingUnit = EditorUnit.createNew(buildingType);
        return eb;
    };

    EditorBuilding.prototype.export = function() {
        return {
            buildingId: this.type.id,
            building: this.buildingUnit.export(),
            productionModules: _.map(this.productionModules, function(module) {
                return module.export();
            }),
            maintenanceModules: _.map(this.maintenanceModules, function(module) {
                return module.export();
            }),
        };
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

    EditorBuilding.prototype.createElements = function(first_argument) {
        this.eachUnit(function(unit) {unit.createElement();});
    };

    EditorBuilding.prototype.draw = function() {
        this.eachUnit(function(unit) {unit.drawUnit();});
    };

    EditorBuilding.prototype.demolish = function() {
        this.eachUnit(function(unit) {unit.demolish();});
    };

    Anno2205Layouts.EditorBuilding = EditorBuilding;


}(Anno2205Layouts));
;'use strict';

angular.module('anno2205Layouts.editor', ['ngRoute', 'ngStorage'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editor/:layoutId', {
    templateUrl: 'editor/editor.html',
    controller: 'EditorCtrl'
  });
}])

.controller('EditorCtrl', ['$rootScope', '$scope', '$location', '$routeParams', '$localStorage',
    function($rootScope, $scope, $location, $routeParams, $localStorage) {

    var layout = $rootScope.layouts.layoutFromId($routeParams.layoutId);
    // Make a deep copy to edit locally.
    $scope.layout = layout.copy();
    $scope.grids = Anno2205Layouts.grids;

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

    $scope.createNewBuilding = function(buildingType) {
        if (buildingType.placementType != 'ground') {
            // TODO: Handle other types.
            return;
        }
        var newBuilding = Anno2205Layouts.EditorBuilding.createNew(buildingType);
        newBuilding.draw();
        newBuilding.buildingUnit.createPositionHandlers(function(editorUnit) {
            $scope.layout.buildings.push(newBuilding);
        });
    };

    var drawBuildings = function() {
        _.each($scope.layout.buildings, function(building) {
            building.createElements();
            building.draw();
        });
    };

    $scope.setActiveLevel(Anno2205Layouts.buildingLevels[$scope.layout.region][0]);


    // When you click on a building, it creates a popup, and marks the building
    // selected.
    var buildingDefaultClickHandler = function(building) {
        $scope.selectedBuilding = building;
        $scope.buildingPopup.show = true;
        var buildingOffset = building.buildingUnit.buildingCanvas.offset();
        var buildingBBox = building.buildingUnit.unitBBox();
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
                buildingClickHandler(building);
                return true;
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
        var newProdMod = Anno2205Layouts.EditorUnit.createNew($scope.selectedBuilding.type.productionUnit);
        newProdMod.drawUnit();
        newProdMod.createPositionHandlers(function(editorUnit) {
            $scope.selectedBuilding.productionModules.push(editorUnit);
        });
    };
    $scope.createMaintenanceModule = function(maintenance) {
        $scope.buildingPopup.show = false;
        var newMaintMod = Anno2205Layouts.EditorUnit.createNew(maintenance);
        newMaintMod.drawUnit();
        newMaintMod.createPositionHandlers(function(editorUnit) {
            $scope.selectedBuilding.maintenanceModules.push(editorUnit);
        });
    };

    // While in demolition mode, if you click on a building, delete it.
    var demolitionClickHandler = function(building) {
        var i = $scope.layout.buildings.indexOf(building);
        $scope.layout.buildings.splice(i, 1);
        building.demolish();
    };
    var demoModule = function(modules, module) {
        var i = modules.indexOf(module);
        modules.splice(i, 1);
        module.demolish();
    };
    var demoProdClickHandler = function(building, module) {
        demoModule(building.productionModules, module);
    };
    var demoMaintClickHandler = function(building, module) {
        demoModule(building.maintenanceModules, module);
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
        var gridCanvas = $('#anno-canvas');
        var canvas = gridCanvas.clone()[0];
        var ctx = canvas.getContext('2d');

        // Canvas.
        ctx.drawImage(gridCanvas[0], 0, 0);
        // Buildings.
        var canvasOffset = gridCanvas.offset();
        var drawUnit = function(unit) {
            var unitCanvas = unit.buildingCanvas;
            var unitOffset = unitCanvas.offset();
            ctx.drawImage(unitCanvas[0],
                unitOffset.left - canvasOffset.left,
                unitOffset.top - canvasOffset.top);
        };
        _.each($scope.layout.buildings, function(building) {
            drawUnit(building.buildingUnit);
            _.each(building.productionModules, function(unit) {
                drawUnit(unit);
            });
            _.each(building.maintenanceModules, function(unit) {
                drawUnit(unit);
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

    $('#construction-icons').on('load', function() {
        // Ensure icons are available before drawing on the canvas.
        drawBuildings();
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

.directive('annoGridDraw', function() {
    return {
        link: function(scope, element, attrs) {
            scope.$watch('layout.grid', function() {
                var canvas = $("#anno-canvas");
                scope.layout.grid.drawGrid(canvas[0].getContext('2d'));
            });
        }
    };
});
;'use strict';

var Anno2205Layouts = Anno2205Layouts || {};
(function(Anno2205Layouts) {

    function Grid() {

    }

    Grid.prototype.drawGrid = function(ctx) {
    };

    /************************************************************************/

    function RectGrid(width, height) {
        // Grid.call(this);
        this.gridWidth = width;
        this.gridHeight = height;
        this.pixelWidth = width * Anno2205Layouts.gridSize + 1;
        this.pixelHeight = height * Anno2205Layouts.gridSize + 1;
        this.id = width+'x'+height;
        this.name = width + ' x ' + height;
    }
    RectGrid.prototype  = Object.create(Grid.prototype);
    RectGrid.prototype.constructor = RectGrid;

    RectGrid.prototype.drawGrid = function(ctx) {
        // create white background.
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, this.pixelWidth, this.pixelHeight);

        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000000';
        var x, y;
        for (var row=0; row<=this.gridHeight; row++) {
            ctx.beginPath();
            x = this.gridWidth*Anno2205Layouts.gridSize + 0.5;
            y = row*Anno2205Layouts.gridSize + 0.5;
            ctx.moveTo(0.5, y);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        for (var col=0; col<=this.gridWidth; col++) {
            ctx.beginPath();
            x = col*Anno2205Layouts.gridSize + 0.5;
            y = this.gridHeight*Anno2205Layouts.gridSize + 0.5;
            ctx.moveTo(x, 0.5);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    };


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
        layout.grid = Anno2205Layouts.grids[0];
        layout.buildings = [];
        return layout;
    };

    Layout.createFromStorage = function(layoutStorage) {
        var layout = new Layout();
        layout.id = layoutStorage.id;
        layout.name = layoutStorage.name;
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
        return layout;
    };

    Layout.prototype.export = function() {
        var result = {
            id: this.id,
            name: this.name,
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
        } else {
            return this.grid;
        }
    };

    Anno2205Layouts.Layout = Layout;


}(Anno2205Layouts));

;'use strict';

angular.module('anno2205Layouts.my-layouts', ['ngRoute', 'ngStorage'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/my-layouts', {
        templateUrl: 'my-layouts/my-layouts.html',
        controller: 'MyLayoutsCtrl'
    });
}])

.controller('MyLayoutsCtrl', ['$rootScope', '$scope', '$location', '$localStorage',
    function($rootScope, $scope, $location, $localStorage) {
    // TODO: keep this state sticky somehow?
    $scope.region = 'earth';
    $scope.$location = $location;

    $scope.createNewLayout = function(newLayoutName) {
        console.log("Creating "+newLayoutName+" type:"+$scope.region);
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
                    console.log('hidden');
                    $location.path('/editor/'+newLayout.id);
                    console.log($location.path());
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
;// This file is auto-generated.  DO NOT EDIT.
var Anno2205Layouts = Anno2205Layouts || {};
Anno2205Layouts.iconSpriteMap = {
    "bioresigns": {"x":50,"y":0,"width":50,"height":50},
    "biocomposites": {"x":200,"y":300,"width":50,"height":50},
    "rice_dish": {"x":0,"y":50,"width":50,"height":50},
    "water": {"x":50,"y":50,"width":50,"height":50},
    "information": {"x":100,"y":0,"width":50,"height":50},
    "ceramics": {"x":100,"y":50,"width":50,"height":50},
    "cobalt": {"x":0,"y":100,"width":50,"height":50},
    "robots": {"x":50,"y":100,"width":50,"height":50},
    "fruit": {"x":100,"y":100,"width":50,"height":50},
    "fruit_drink": {"x":150,"y":0,"width":50,"height":50},
    "algae": {"x":150,"y":50,"width":50,"height":50},
    "synth_cells": {"x":150,"y":100,"width":50,"height":50},
    "rejuvenators": {"x":0,"y":150,"width":50,"height":50},
    "security": {"x":50,"y":150,"width":50,"height":50},
    "soy_beans": {"x":100,"y":150,"width":50,"height":50},
    "beef": {"x":150,"y":150,"width":50,"height":50},
    "wine": {"x":200,"y":0,"width":50,"height":50},
    "luxury_food": {"x":200,"y":50,"width":50,"height":50},
    "plant_fibres": {"x":200,"y":100,"width":50,"height":50},
    "silica": {"x":200,"y":150,"width":50,"height":50},
    "microchips": {"x":0,"y":200,"width":50,"height":50},
    "intelli_clothes": {"x":50,"y":200,"width":50,"height":50},
    "mobility": {"x":100,"y":200,"width":50,"height":50},
    "diamant": {"x":150,"y":200,"width":50,"height":50},
    "multispectral_prisms": {"x":200,"y":200,"width":50,"height":50},
    "replicators": {"x":250,"y":0,"width":50,"height":50},
    "synaptic_circuits": {"x":250,"y":50,"width":50,"height":50},
    "androids": {"x":250,"y":100,"width":50,"height":50},
    "recreation": {"x":250,"y":150,"width":50,"height":50},
    "ornamental_park_small": {"x":250,"y":200,"width":50,"height":50},
    "ornamental_park_medium": {"x":0,"y":250,"width":50,"height":50},
    "ornamental_park_large": {"x":50,"y":250,"width":50,"height":50},
    "ornamental_car_park_small": {"x":100,"y":250,"width":50,"height":50},
    "ornamental_car_park_medium": {"x":150,"y":250,"width":50,"height":50},
    "ornamental_car_park_large": {"x":200,"y":250,"width":50,"height":50},
    "earth_road": {"x":250,"y":250,"width":50,"height":50},
    "residence_earth": {"x":300,"y":0,"width":50,"height":50},
    "residence_estate": {"x":300,"y":50,"width":50,"height":50},
    "transportation_center_earth": {"x":300,"y":100,"width":50,"height":50},
    "windpark": {"x":300,"y":150,"width":50,"height":50},
    "tidal_power_station": {"x":300,"y":200,"width":50,"height":50},
    "headquarter_base": {"x":300,"y":250,"width":50,"height":50},
    "aluminium": {"x":0,"y":300,"width":50,"height":50},
    "metal_foam": {"x":50,"y":300,"width":50,"height":50},
    "fish": {"x":100,"y":300,"width":50,"height":50},
    "canned_food": {"x":150,"y":300,"width":50,"height":50},
    "molybdenum": {"x":0,"y":0,"width":50,"height":50},
    "neuro_implants_2": {"x":250,"y":300,"width":50,"height":50},
    "community_center": {"x":300,"y":300,"width":50,"height":50},
    "super_alloys": {"x":350,"y":0,"width":50,"height":50},
    "deep_water_corals": {"x":350,"y":50,"width":50,"height":50},
    "stimulants": {"x":350,"y":100,"width":50,"height":50},
    "methan_clathrate": {"x":350,"y":150,"width":50,"height":50},
    "deuterium": {"x":350,"y":200,"width":50,"height":50},
    "super_coolants": {"x":350,"y":250,"width":50,"height":50},
    "qubit_processors": {"x":350,"y":300,"width":50,"height":50},
    "quantum_computers": {"x":0,"y":350,"width":50,"height":50},
    "forbidden_science": {"x":50,"y":350,"width":50,"height":50},
    "arctic_road": {"x":100,"y":350,"width":50,"height":50},
    "residence_arctic": {"x":150,"y":350,"width":50,"height":50},
    "transportation_center_arctic": {"x":200,"y":350,"width":50,"height":50},
    "geothermal_turbinnes": {"x":250,"y":350,"width":50,"height":50},
    "gas_power_plant": {"x":300,"y":350,"width":50,"height":50},
    "titanium": {"x":350,"y":350,"width":50,"height":50},
    "titan_plating": {"x":400,"y":0,"width":50,"height":50},
    "moon_ice": {"x":400,"y":50,"width":50,"height":50},
    "oxygen": {"x":400,"y":100,"width":50,"height":50},
    "rare_earth_elements": {"x":400,"y":150,"width":50,"height":50},
    "bio_enhancers": {"x":400,"y":200,"width":50,"height":50},
    "colony_safety": {"x":400,"y":250,"width":50,"height":50},
    "moon_crops": {"x":400,"y":300,"width":50,"height":50},
    "natural_space_food": {"x":400,"y":350,"width":50,"height":50},
    "helium_3": {"x":0,"y":400,"width":50,"height":50},
    "fusion_accumulators": {"x":50,"y":400,"width":50,"height":50},
    "gravity_generators": {"x":100,"y":400,"width":50,"height":50},
    "health_care": {"x":150,"y":400,"width":50,"height":50},
    "moon_road": {"x":200,"y":400,"width":50,"height":50},
    "residence_moon": {"x":250,"y":400,"width":50,"height":50},
    "energy_shielding_small_2": {"x":300,"y":400,"width":50,"height":50},
    "energy_shielding_big_2": {"x":350,"y":400,"width":50,"height":50},
    "transportation_center_moon": {"x":400,"y":400,"width":50,"height":50},
    "solar_array": {"x":450,"y":0,"width":50,"height":50},
    "fusion_power_plant": {"x":450,"y":50,"width":50,"height":50},
    "credits_module": {"x":450,"y":100,"width":50,"height":50},
    "energy_module": {"x":450,"y":150,"width":50,"height":50},
    "headquarter_module_1": {"x":450,"y":200,"width":50,"height":50},
    "headquarter_module_2": {"x":450,"y":250,"width":50,"height":50},
    "headquarter_module_3": {"x":450,"y":300,"width":50,"height":50},
    "headquarter_module_4": {"x":450,"y":350,"width":50,"height":50},
    "headquarter_module_5": {"x":450,"y":400,"width":50,"height":50},
    "logistics_module": {"x":0,"y":450,"width":50,"height":50},
    "workforce_module": {"x":50,"y":450,"width":50,"height":50},
};
;angular.module('templates-dist', ['editor/editor.html', 'index.html', 'my-layouts/my-layouts.html']);

angular.module("editor/editor.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("editor/editor.html",
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
    "\n" +
    "</style>\n" +
    "\n" +
    "<form>\n" +
    "<input type=\"text\" name=\"layoutName\" ng-model=\"layout.name\">\n" +
    "\n" +
    "<div id=\"editor-top\">\n" +
    "    <div>\n" +
    "        Layout Size:\n" +
    "\n" +
    "        <select ng-model=\"layout.gridChange\"\n" +
    "                ng-model-options=\"{ getterSetter: true }\"\n" +
    "                ng-options=\"grid as grid.name for grid in grids track by grid.id\">\n" +
    "        </select>\n" +
    "\n" +
    "        <div id=\"save-button\" ng-click=\"saveLayout()\"></div>\n" +
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
    "         ng-click=\"createNewBuilding(building)\">\n" +
    "            <div class=\"construction-building-button-icon\" ng-style=\"building.icon.style\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"construction-building-button\"\n" +
    "     ng-repeat=\"building in commonBuildings[layout.region]\"\n" +
    "     ng-click=\"createNewBuilding(building)\">\n" +
    "    <div class=\"construction-building-button-icon\" ng-style=\"building.icon.style\"></div>\n" +
    "</div>\n" +
    "\n" +
    "</form>\n" +
    "\n" +
    "<div class=\"editor-mode-button\" id=\"move-button\" ng-click=\"enterMoveMode()\">\n" +
    "    <div class=\"editor-mode-button-icon\" id=\"editor-mode-icon-move\"></div>\n" +
    "</div>\n" +
    "<div class=\"editor-mode-button\" id=\"copy-button\" ng-click=\"enterCopyMode()\">\n" +
    "    <div class=\"editor-mode-button-icon\" id=\"editor-mode-icon-copy\"></div>\n" +
    "</div>\n" +
    "<div class=\"editor-mode-button\" id=\"demolition-button\" ng-click=\"enterDemoMode()\">\n" +
    "    <div class=\"editor-mode-button-icon\" id=\"editor-mode-icon-demo\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<a ng-click=\"exportImage()\">Export Image</a>\n" +
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
    "        height: 200px;\n" +
    "        background-color: #0c2937;\n" +
    "        position: absolute;\n" +
    "    }\n" +
    "\n" +
    "    .create-production-button {\n" +
    "        background: url('images/buttons/module-button-base.png');\n" +
    "        width: 61px;\n" +
    "        height: 34px;\n" +
    "        display: inline-block;\n" +
    "    }\n" +
    "    .create-production-button:hover {\n" +
    "        background: url('images/buttons/module-button-hover.png');\n" +
    "    }\n" +
    "    .create-production-icon {\n" +
    "        width: 50px;\n" +
    "        height: 50px;\n" +
    "        transform: scale(0.5, 0.5);\n" +
    "        position: relative;\n" +
    "        /* Positioning is before transform.*/\n" +
    "        left: 5px;\n" +
    "        top: -8px;\n" +
    "    }\n" +
    "    .building-popup-modules {\n" +
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
    "        transform: scale(0.8, 0.8);\n" +
    "        width: 50px;\n" +
    "        height: 50px;\n" +
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
    "</style>\n" +
    "\n" +
    "<div id=\"building-popup\" ng-show=\"buildingPopup.show\"\n" +
    "     ng-style=\"{left: buildingPopup.left, top: buildingPopup.top}\">\n" +
    "    <div class=\"building-popup-top\"></div>\n" +
    "    <div class=\"building-popup-name\">\n" +
    "        <div class=\"building-popup-icon\" ng-style=\"selectedBuilding.type.icon.style\"></div>\n" +
    "        {{ selectedBuilding.type.name }}\n" +
    "        <button type=\"button\" class=\"building-popup-close\" ng-click=\"buildingPopup.show=false\">&times;</button>\n" +
    "    </div>\n" +
    "    <div ng-show=\"selectedBuilding.type.productionUnit || selectedBuilding.type.maintenanceMoudles\">\n" +
    "        <div class=\"building-popup-modules\">Modules</div>\n" +
    "        <div ng-show=\"selectedBuilding.type.productionUnit\" class=\"create-production-button\" ng-click=\"createProductionModule()\">\n" +
    "            <div class=\"create-production-icon\" ng-style=\"selectedBuilding.type.icon.style\"></div>\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"maintenance in selectedBuilding.type.maintenanceModules\"\n" +
    "             class=\"create-production-button\"\n" +
    "             ng-click=\"createMaintenanceModule(maintenance)\">\n" +
    "            <div class=\"create-production-icon\" ng-style=\"maintenance.icon.style\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- TODO: Maintenance information. -->\n" +
    "</div>\n" +
    "");
}]);

angular.module("index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("index.html",
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\" ng-app=\"anno2205Layouts\" class=\"no-js\">\n" +
    "<head>\n" +
    "  <meta charset=\"utf-8\">\n" +
    "  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
    "  <title>Anno 2205 Layouts</title>\n" +
    "  <meta name=\"description\" content=\"\">\n" +
    "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
    "  <link rel=\"stylesheet\" href=\"libs/bootstrap/dist/css/bootstrap.css\">\n" +
    "  <link rel=\"stylesheet\" href=\"app.css\">\n" +
    "  <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>\n" +
    "\n" +
    "<!--\n" +
    "  TODO: Use CDN instead.\n" +
    "\n" +
    "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css\" integrity=\"sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==\" crossorigin=\"anonymous\">\n" +
    "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css\" integrity=\"sha384-aUGj/X2zp5rLCbBxumKTCw2Z50WgIr1vs/PFN4praOTvYXWlVyh2UtNUU0KAUhAX\" crossorigin=\"anonymous\">\n" +
    "<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js\" integrity=\"sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==\" crossorigin=\"anonymous\"></script>\n" +
    "-->\n" +
    "\n" +
    "</head>\n" +
    "<body>\n" +
    "\n" +
    "<h1 id=\"header\">Anno 2205 Layouts</h1>\n" +
    "\n" +
    "  <!--[if lt IE 7]>\n" +
    "      <p class=\"browsehappy\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>\n" +
    "  <![endif]-->\n" +
    "\n" +
    "  <div ng-view></div>\n" +
    "\n" +
    "  <!-- In production use:\n" +
    "  <script src=\"//ajax.googleapis.com/ajax/libs/angularjs/x.x.x/angular.min.js\"></script>\n" +
    "  -->\n" +
    "\n" +
    "  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n" +
    "  <script src=\"libs/underscore/underscore-min.js\"></script>\n" +
    "  <script src=\"libs/bootstrap/dist/js/bootstrap.js\"></script>\n" +
    "  <script src=\"libs/angular/angular.js\"></script>\n" +
    "  <script src=\"libs/angular-route/angular-route.js\"></script>\n" +
    "  <!-- <script src=\"libs/angular-bootstrap/ui-bootstrap-tpls.min.js\"></script> -->\n" +
    "\n" +
    "  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.10/ngStorage.min.js\"></script>\n" +
    "\n" +
    "  <script src=\"app.js\"></script>\n" +
    "\n" +
    "<!--\n" +
    "  <script src=\"sprite_map.js\"></script>\n" +
    "  <script src=\"regions.js\"></script>\n" +
    "  <script src=\"layouts.js\"></script>\n" +
    "  <script src=\"buildings.js\"></script>\n" +
    "  <script src=\"app.js\"></script>\n" +
    "  <script src=\"my-layouts/my-layouts.js\"></script>\n" +
    "  <script src=\"editor/EditorBuilding.js\"></script>\n" +
    "  <script src=\"editor/editor.js\"></script>\n" +
    "-->\n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("my-layouts/my-layouts.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("my-layouts/my-layouts.html",
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
