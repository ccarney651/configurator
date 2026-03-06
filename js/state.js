/**
 * state.js — single source of truth.
 */

// ─── UNDO / REDO ────────────────────────────────────────────────────────────────

const stateHistory = {
  stack: [],
  pointer: -1,
  maxSize: 50,
  _paused: false,

  push() {
    if (this._paused) return;
    const snap = JSON.stringify(state);
    // Skip if identical to current
    if (this.pointer >= 0 && this.stack[this.pointer] === snap) return;
    // Truncate any redo entries
    this.stack.length = this.pointer + 1;
    this.stack.push(snap);
    if (this.stack.length > this.maxSize) this.stack.shift();
    this.pointer = this.stack.length - 1;
    this._updateButtons();
  },

  undo() {
    if (this.pointer <= 0) return;
    this.pointer--;
    this._restore();
  },

  redo() {
    if (this.pointer >= this.stack.length - 1) return;
    this.pointer++;
    this._restore();
  },

  _restore() {
    this._paused = true;
    const snap = JSON.parse(this.stack[this.pointer]);
    // Restore all keys
    Object.keys(snap).forEach(k => {
      if (typeof snap[k] === 'object' && snap[k] !== null && !Array.isArray(snap[k])) {
        Object.assign(state[k], snap[k]);
      } else {
        state[k] = snap[k];
      }
    });
    if (typeof buildRoom === 'function') buildRoom();
    if (typeof updatePriceDisplay === 'function') updatePriceDisplay();
    if (typeof syncSwatchesToState === 'function') syncSwatchesToState();
    if (typeof syncDimSliders === 'function') syncDimSliders();
    if (typeof renderOpeningsList === 'function') renderOpeningsList();
    this._paused = false;
    this._updateButtons();
  },

  _updateButtons() {
    const ub = document.getElementById('tbUndo');
    const rb = document.getElementById('tbRedo');
    if (ub) ub.disabled = this.pointer <= 0;
    if (rb) rb.disabled = this.pointer >= this.stack.length - 1;
  },

  canUndo() { return this.pointer > 0; },
  canRedo() { return this.pointer < this.stack.length - 1; },
};

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

  // Scene environment
  groundType: 'grass',

  // Roof controls
  apexPitch: 1.0,        // ridge height in metres (0.5–1.8)
  windowSillAdjust: 0,   // global window sill offset in metres (-0.3 to +0.3)

  // Veranda
  veranda: { enabled: false, depth: 2.0 },

  // Guttering colour
  gutterColour: '#1a1a1a',

  // Display preferences (transient — not saved to URL)
  units: 'metric',
};
