'use strict';

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
