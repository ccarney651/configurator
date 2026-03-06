/**
 * state.js — single source of truth.
 */

const state = {
  // Dimensions
  width:  5.0,
  depth:  4.0,
  height: 2.7,

  // Structure
  foundation: 'concrete',
  roof:       'apex',
  roofTilt:   2,        // degrees, 0–8, only used when roof === 'flat'
  roofFinish: 'epdm',
  cladding:   'timber',
  claddingTint: '#5c4033',
  frameColour:  '#1a1a1a',

  // Defaults for NEW openings
  defaultDoor:     'bifold',
  defaultWindow:   'long',
  defaultDoorMat:  'aluminium',

  // Placed openings
  openings: [
    { id: 1, type: 'door',   wall: 'front', offset:  0,   style: 'bifold' },
    { id: 2, type: 'window', wall: 'left',  offset:  0,   style: 'long'   },
    { id: 3, type: 'window', wall: 'right', offset:  0,   style: 'long'   },
    { id: 4, type: 'window', wall: 'back',  offset:  0,   style: 'tilt'   },
  ],
  nextOpeningId: 5,

  extras: {
    lantern: false, reinforceFloor: false, reinforceWalls: false,
    reinforceCeiling: false, stoveFlue: false, fireBoarding: false,
    logFire: false, radiator: false, decking: false,
  },
  ethernetPoints: 0,
  internalLights: 0,
  externalLights: 0,
  deckingArea:    10,

  // Structure type
  structureType: 'freestanding',

  // Roof additions
  rooflight: 'none',

  // Cladding colour variant (used when cladding is fibre_cement or metal_sheet)
  claddingColourVariant: '',

  // Exterior finish
  handleColour: 'black',

  // Interior finishes
  interiorWalls: 'white',
  interiorFloor: 'oak',

  // Furniture counts
  furniture: {
    desk: 0, office_chair: 0, gaming_chair: 0,
    elliptical: 0, exercise_bike: 0,
    pool_table: 0, dart_board: 0, tv: 0, golf_simulator: 0,
    sofa_3seat: 0, corner_sofa: 0,
    kitchen_base_unit: 0, kitchen_wall_unit: 0,
    worktop_oak: 0, worktop_marble: 0,
  },

  // Socket counts
  sockets: {
    double: 0, floor: 0, usb: 0, tv: 0, data: 0, external: 0,
  },

  // Decking material & balustrade
  deckingMaterial:        'softwood',
  deckingBalustrade:      'none',
  deckingBalustradeFinish: 'black',
};
