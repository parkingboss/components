// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/svelte/internal/index.mjs":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.action_destroyer = action_destroyer;
exports.add_attribute = add_attribute;
exports.add_classes = add_classes;
exports.add_flush_callback = add_flush_callback;
exports.add_location = add_location;
exports.add_render_callback = add_render_callback;
exports.add_resize_listener = add_resize_listener;
exports.add_transform = add_transform;
exports.afterUpdate = afterUpdate;
exports.append = append;
exports.append_dev = append_dev;
exports.assign = assign;
exports.attr = attr;
exports.attr_dev = attr_dev;
exports.beforeUpdate = beforeUpdate;
exports.bind = bind;
exports.blank_object = blank_object;
exports.bubble = bubble;
exports.check_outros = check_outros;
exports.children = children;
exports.claim_component = claim_component;
exports.claim_element = claim_element;
exports.claim_space = claim_space;
exports.claim_text = claim_text;
exports.clear_loops = clear_loops;
exports.component_subscribe = component_subscribe;
exports.compute_rest_props = compute_rest_props;
exports.createEventDispatcher = createEventDispatcher;
exports.create_animation = create_animation;
exports.create_bidirectional_transition = create_bidirectional_transition;
exports.create_component = create_component;
exports.create_in_transition = create_in_transition;
exports.create_out_transition = create_out_transition;
exports.create_slot = create_slot;
exports.create_ssr_component = create_ssr_component;
exports.custom_event = custom_event;
exports.dataset_dev = dataset_dev;
exports.debug = debug;
exports.destroy_block = destroy_block;
exports.destroy_component = destroy_component;
exports.destroy_each = destroy_each;
exports.detach = detach;
exports.detach_after_dev = detach_after_dev;
exports.detach_before_dev = detach_before_dev;
exports.detach_between_dev = detach_between_dev;
exports.detach_dev = detach_dev;
exports.dispatch_dev = dispatch_dev;
exports.each = each;
exports.element = element;
exports.element_is = element_is;
exports.empty = empty;
exports.escape = escape;
exports.exclude_internal_props = exclude_internal_props;
exports.fix_and_destroy_block = fix_and_destroy_block;
exports.fix_and_outro_and_destroy_block = fix_and_outro_and_destroy_block;
exports.fix_position = fix_position;
exports.flush = flush;
exports.getContext = getContext;
exports.get_binding_group_value = get_binding_group_value;
exports.get_current_component = get_current_component;
exports.get_slot_changes = get_slot_changes;
exports.get_slot_context = get_slot_context;
exports.get_spread_object = get_spread_object;
exports.get_spread_update = get_spread_update;
exports.get_store_value = get_store_value;
exports.group_outros = group_outros;
exports.handle_promise = handle_promise;
exports.init = init;
exports.insert = insert;
exports.insert_dev = insert_dev;
exports.is_function = is_function;
exports.is_promise = is_promise;
exports.listen = listen;
exports.listen_dev = listen_dev;
exports.loop = loop;
exports.loop_guard = loop_guard;
exports.mount_component = mount_component;
exports.noop = noop;
exports.not_equal = not_equal;
exports.null_to_empty = null_to_empty;
exports.object_without_properties = object_without_properties;
exports.onDestroy = onDestroy;
exports.onMount = onMount;
exports.once = once;
exports.outro_and_destroy_block = outro_and_destroy_block;
exports.prevent_default = prevent_default;
exports.prop_dev = prop_dev;
exports.query_selector_all = query_selector_all;
exports.run = run;
exports.run_all = run_all;
exports.safe_not_equal = safe_not_equal;
exports.schedule_update = schedule_update;
exports.select_multiple_value = select_multiple_value;
exports.select_option = select_option;
exports.select_options = select_options;
exports.select_value = select_value;
exports.self = self;
exports.setContext = setContext;
exports.set_attributes = set_attributes;
exports.set_current_component = set_current_component;
exports.set_custom_element_data = set_custom_element_data;
exports.set_data = set_data;
exports.set_data_dev = set_data_dev;
exports.set_input_type = set_input_type;
exports.set_input_value = set_input_value;
exports.set_now = set_now;
exports.set_raf = set_raf;
exports.set_store_value = set_store_value;
exports.set_style = set_style;
exports.set_svg_attributes = set_svg_attributes;
exports.space = space;
exports.spread = spread;
exports.stop_propagation = stop_propagation;
exports.subscribe = subscribe;
exports.svg_element = svg_element;
exports.text = text;
exports.tick = tick;
exports.time_ranges_to_array = time_ranges_to_array;
exports.to_number = to_number;
exports.toggle_class = toggle_class;
exports.transition_in = transition_in;
exports.transition_out = transition_out;
exports.update_keyed_each = update_keyed_each;
exports.validate_component = validate_component;
exports.validate_each_argument = validate_each_argument;
exports.validate_each_keys = validate_each_keys;
exports.validate_slots = validate_slots;
exports.validate_store = validate_store;
exports.xlink_attr = xlink_attr;
exports.raf = exports.now = exports.missing_component = exports.is_client = exports.invalid_attribute_name_character = exports.intros = exports.identity = exports.has_prop = exports.globals = exports.escaped = exports.dirty_components = exports.current_component = exports.binding_callbacks = exports.SvelteElement = exports.SvelteComponentDev = exports.SvelteComponent = exports.HtmlTag = void 0;

function noop() {}

const identity = x => x;

exports.identity = identity;

function assign(tar, src) {
  // @ts-ignore
  for (const k in src) tar[k] = src[k];

  return tar;
}

function is_promise(value) {
  return value && typeof value === 'object' && typeof value.then === 'function';
}

function add_location(element, file, line, column, char) {
  element.__svelte_meta = {
    loc: {
      file,
      line,
      column,
      char
    }
  };
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
}

function not_equal(a, b) {
  return a != a ? b == b : a !== b;
}

function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== 'function') {
    throw new Error(`'${name}' is not a store with a 'subscribe' method`);
  }
}

function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }

  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

function get_store_value(store) {
  let value;
  subscribe(store, _ => value = _)();
  return value;
}

function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}

function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}

function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}

function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));

    if ($$scope.dirty === undefined) {
      return lets;
    }

    if (typeof lets === 'object') {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);

      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }

      return merged;
    }

    return $$scope.dirty | lets;
  }

  return $$scope.dirty;
}

function exclude_internal_props(props) {
  const result = {};

  for (const k in props) if (k[0] !== '$') result[k] = props[k];

  return result;
}

function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);

  for (const k in props) if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];

  return rest;
}

function once(fn) {
  let ran = false;
  return function (...args) {
    if (ran) return;
    ran = true;
    fn.call(this, ...args);
  };
}

function null_to_empty(value) {
  return value == null ? '' : value;
}

function set_store_value(store, ret, value = ret) {
  store.set(value);
  return ret;
}

const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

exports.has_prop = has_prop;

function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

const is_client = typeof window !== 'undefined';
exports.is_client = is_client;
let now = is_client ? () => window.performance.now() : () => Date.now();
exports.now = now;
let raf = is_client ? cb => requestAnimationFrame(cb) : noop; // used internally for testing

exports.raf = raf;

function set_now(fn) {
  exports.now = now = fn;
}

function set_raf(fn) {
  exports.raf = raf = fn;
}

const tasks = new Set();

function run_tasks(now) {
  tasks.forEach(task => {
    if (!task.c(now)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
/**
 * For testing purposes only!
 */


function clear_loops() {
  tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */


function loop(callback) {
  let task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise(fulfill => {
      tasks.add(task = {
        c: callback,
        f: fulfill
      });
    }),

    abort() {
      tasks.delete(task);
    }

  };
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function element_is(name, is) {
  return document.createElement(name, {
    is
  });
}

function object_without_properties(obj, exclude) {
  const target = {};

  for (const k in obj) {
    if (has_prop(obj, k) // @ts-ignore
    && exclude.indexOf(k) === -1) {
      // @ts-ignore
      target[k] = obj[k];
    }
  }

  return target;
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}

function prevent_default(fn) {
  return function (event) {
    event.preventDefault(); // @ts-ignore

    return fn.call(this, event);
  };
}

function stop_propagation(fn) {
  return function (event) {
    event.stopPropagation(); // @ts-ignore

    return fn.call(this, event);
  };
}

function self(fn) {
  return function (event) {
    // @ts-ignore
    if (event.target === this) fn.call(this, event);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function set_attributes(node, attributes) {
  // @ts-ignore
  const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

  for (const key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === 'style') {
      node.style.cssText = attributes[key];
    } else if (key === '__value' || descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}

function set_svg_attributes(node, attributes) {
  for (const key in attributes) {
    attr(node, key, attributes[key]);
  }
}

function set_custom_element_data(node, prop, value) {
  if (prop in node) {
    node[prop] = value;
  } else {
    attr(node, prop, value);
  }
}

function xlink_attr(node, attribute, value) {
  node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function get_binding_group_value(group) {
  const value = [];

  for (let i = 0; i < group.length; i += 1) {
    if (group[i].checked) value.push(group[i].__value);
  }

  return value;
}

function to_number(value) {
  return value === '' ? undefined : +value;
}

function time_ranges_to_array(ranges) {
  const array = [];

  for (let i = 0; i < ranges.length; i += 1) {
    array.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }

  return array;
}

function children(element) {
  return Array.from(element.childNodes);
}

function claim_element(nodes, name, attributes, svg) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeName === name) {
      let j = 0;

      while (j < node.attributes.length) {
        const attribute = node.attributes[j];

        if (attributes[attribute.name]) {
          j++;
        } else {
          node.removeAttribute(attribute.name);
        }
      }

      return nodes.splice(i, 1)[0];
    }
  }

  return svg ? svg_element(name) : element(name);
}

function claim_text(nodes, data) {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeType === 3) {
      node.data = '' + data;
      return nodes.splice(i, 1)[0];
    }
  }

  return text(data);
}

function claim_space(nodes) {
  return claim_text(nodes, ' ');
}

function set_data(text, data) {
  data = '' + data;
  if (text.data !== data) text.data = data;
}

function set_input_value(input, value) {
  if (value != null || input.value) {
    input.value = value;
  }
}

function set_input_type(input, type) {
  try {
    input.type = type;
  } catch (e) {// do nothing
  }
}

function set_style(node, key, value, important) {
  node.style.setProperty(key, value, important ? 'important' : '');
}

function select_option(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];

    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }
}

function select_options(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];
    option.selected = ~value.indexOf(option.__value);
  }
}

function select_value(select) {
  const selected_option = select.querySelector(':checked') || select.options[0];
  return selected_option && selected_option.__value;
}

function select_multiple_value(select) {
  return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
}

function add_resize_listener(element, fn) {
  if (getComputedStyle(element).position === 'static') {
    element.style.position = 'relative';
  }

  const object = document.createElement('object');
  object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
  object.setAttribute('aria-hidden', 'true');
  object.type = 'text/html';
  object.tabIndex = -1;
  let win;

  object.onload = () => {
    win = object.contentDocument.defaultView;
    win.addEventListener('resize', fn);
  };

  if (/Trident/.test(navigator.userAgent)) {
    element.appendChild(object);
    object.data = 'about:blank';
  } else {
    object.data = 'about:blank';
    element.appendChild(object);
  }

  return {
    cancel: () => {
      win && win.removeEventListener && win.removeEventListener('resize', fn);
      element.removeChild(object);
    }
  };
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail) {
  const e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, false, false, detail);
  return e;
}

function query_selector_all(selector, parent = document.body) {
  return Array.from(parent.querySelectorAll(selector));
}

class HtmlTag {
  constructor(html, anchor = null) {
    this.e = element('div');
    this.a = anchor;
    this.u(html);
  }

  m(target, anchor = null) {
    for (let i = 0; i < this.n.length; i += 1) {
      insert(target, this.n[i], anchor);
    }

    this.t = target;
  }

  u(html) {
    this.e.innerHTML = html;
    this.n = Array.from(this.e.childNodes);
  }

  p(html) {
    this.d();
    this.u(html);
    this.m(this.t, this.a);
  }

  d() {
    this.n.forEach(detach);
  }

}

exports.HtmlTag = HtmlTag;
const active_docs = new Set();
let active = 0; // https://github.com/darkskyapp/string-hash/blob/master/index.js

function hash(str) {
  let hash = 5381;
  let i = str.length;

  while (i--) hash = (hash << 5) - hash ^ str.charCodeAt(i);

  return hash >>> 0;
}

function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
  const step = 16.666 / duration;
  let keyframes = '{\n';

  for (let p = 0; p <= 1; p += step) {
    const t = a + (b - a) * ease(p);
    keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
  }

  const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
  const name = `__svelte_${hash(rule)}_${uid}`;
  const doc = node.ownerDocument;
  active_docs.add(doc);
  const stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = doc.head.appendChild(element('style')).sheet);
  const current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});

  if (!current_rules[name]) {
    current_rules[name] = true;
    stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
  }

  const animation = node.style.animation || '';
  node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
  active += 1;
  return name;
}

function delete_rule(node, name) {
  const previous = (node.style.animation || '').split(', ');
  const next = previous.filter(name ? anim => anim.indexOf(name) < 0 // remove specific animation
  : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
  );
  const deleted = previous.length - next.length;

  if (deleted) {
    node.style.animation = next.join(', ');
    active -= deleted;
    if (!active) clear_rules();
  }
}

function clear_rules() {
  raf(() => {
    if (active) return;
    active_docs.forEach(doc => {
      const stylesheet = doc.__svelte_stylesheet;
      let i = stylesheet.cssRules.length;

      while (i--) stylesheet.deleteRule(i);

      doc.__svelte_rules = {};
    });
    active_docs.clear();
  });
}

function create_animation(node, from, fn, params) {
  if (!from) return noop;
  const to = node.getBoundingClientRect();
  if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return noop;
  const {
    delay = 0,
    duration = 300,
    easing = identity,
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay,
    // @ts-ignore todo:
    end = start_time + duration,
    tick = noop,
    css
  } = fn(node, {
    from,
    to
  }, params);
  let running = true;
  let started = false;
  let name;

  function start() {
    if (css) {
      name = create_rule(node, 0, 1, duration, delay, easing, css);
    }

    if (!delay) {
      started = true;
    }
  }

  function stop() {
    if (css) delete_rule(node, name);
    running = false;
  }

  loop(now => {
    if (!started && now >= start_time) {
      started = true;
    }

    if (started && now >= end) {
      tick(1, 0);
      stop();
    }

    if (!running) {
      return false;
    }

    if (started) {
      const p = now - start_time;
      const t = 0 + 1 * easing(p / duration);
      tick(t, 1 - t);
    }

    return true;
  });
  start();
  tick(0, 1);
  return stop;
}

function fix_position(node) {
  const style = getComputedStyle(node);

  if (style.position !== 'absolute' && style.position !== 'fixed') {
    const {
      width,
      height
    } = style;
    const a = node.getBoundingClientRect();
    node.style.position = 'absolute';
    node.style.width = width;
    node.style.height = height;
    add_transform(node, a);
  }
}

function add_transform(node, a) {
  const b = node.getBoundingClientRect();

  if (a.left !== b.left || a.top !== b.top) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
  }
}

let current_component;
exports.current_component = current_component;

function set_current_component(component) {
  exports.current_component = current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error(`Function called outside component initialization`);
  return current_component;
}

function beforeUpdate(fn) {
  get_current_component().$$.before_update.push(fn);
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}

function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];

    if (callbacks) {
      // TODO are there situations where events could be dispatched
      // in a server (non-DOM) environment?
      const event = custom_event(type, detail);
      callbacks.slice().forEach(fn => {
        fn.call(component, event);
      });
    }
  };
}

function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}

function getContext(key) {
  return get_current_component().$$.context.get(key);
} // TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism


function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];

  if (callbacks) {
    callbacks.slice().forEach(fn => fn(event));
  }
}

const dirty_components = [];
exports.dirty_components = dirty_components;
const intros = {
  enabled: false
};
exports.intros = intros;
const binding_callbacks = [];
exports.binding_callbacks = binding_callbacks;
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function tick() {
  schedule_update();
  return resolved_promise;
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

function add_flush_callback(fn) {
  flush_callbacks.push(fn);
}

let flushing = false;
const seen_callbacks = new Set();

function flush() {
  if (flushing) return;
  flushing = true;

  do {
    // first, call beforeUpdate functions
    // and update components
    for (let i = 0; i < dirty_components.length; i += 1) {
      const component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }

    dirty_components.length = 0;

    while (binding_callbacks.length) binding_callbacks.pop()(); // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];

      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

let promise;

function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(() => {
      promise = null;
    });
  }

  return promise;
}

function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}

const outroing = new Set();
let outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

const null_transition = {
  duration: 0
};

function create_in_transition(node, fn, params) {
  let config = fn(node, params);
  let running = false;
  let animation_name;
  let task;
  let uid = 0;

  function cleanup() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick(0, 1);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    if (task) task.abort();
    running = true;
    add_render_callback(() => dispatch(node, true, 'start'));
    task = loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(1, 0);
          dispatch(node, true, 'end');
          cleanup();
          return running = false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(t, 1 - t);
        }
      }

      return running;
    });
  }

  let started = false;
  return {
    start() {
      if (started) return;
      delete_rule(node);

      if (is_function(config)) {
        config = config();
        wait().then(go);
      } else {
        go();
      }
    },

    invalidate() {
      started = false;
    },

    end() {
      if (running) {
        cleanup();
        running = false;
      }
    }

  };
}

function create_out_transition(node, fn, params) {
  let config = fn(node, params);
  let running = true;
  let animation_name;
  const group = outros;
  group.r += 1;

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    add_render_callback(() => dispatch(node, false, 'start'));
    loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(0, 1);
          dispatch(node, false, 'end');

          if (! --group.r) {
            // this will result in `end()` being called,
            // so we don't need to clean up here
            run_all(group.c);
          }

          return false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(1 - t, t);
        }
      }

      return running;
    });
  }

  if (is_function(config)) {
    wait().then(() => {
      // @ts-ignore
      config = config();
      go();
    });
  } else {
    go();
  }

  return {
    end(reset) {
      if (reset && config.tick) {
        config.tick(1, 0);
      }

      if (running) {
        if (animation_name) delete_rule(node, animation_name);
        running = false;
      }
    }

  };
}

function create_bidirectional_transition(node, fn, params, intro) {
  let config = fn(node, params);
  let t = intro ? 0 : 1;
  let running_program = null;
  let pending_program = null;
  let animation_name = null;

  function clear_animation() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function init(program, duration) {
    const d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d,
      duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }

  function go(b) {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    const program = {
      start: now() + delay,
      b
    };

    if (!b) {
      // @ts-ignore todo: improve typings
      program.group = outros;
      outros.r += 1;
    }

    if (running_program) {
      pending_program = program;
    } else {
      // if this is an intro, and there's a delay, we need to do
      // an initial tick and/or apply CSS animation immediately
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }

      if (b) tick(0, 1);
      running_program = init(program, duration);
      add_render_callback(() => dispatch(node, b, 'start'));
      loop(now => {
        if (pending_program && now > pending_program.start) {
          running_program = init(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, 'start');

          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }

        if (running_program) {
          if (now >= running_program.end) {
            tick(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, 'end');

            if (!pending_program) {
              // we're done
              if (running_program.b) {
                // intro — we can tidy up immediately
                clear_animation();
              } else {
                // outro — needs to be coordinated
                if (! --running_program.group.r) run_all(running_program.group.c);
              }
            }

            running_program = null;
          } else if (now >= running_program.start) {
            const p = now - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick(t, 1 - t);
          }
        }

        return !!(running_program || pending_program);
      });
    }
  }

  return {
    run(b) {
      if (is_function(config)) {
        wait().then(() => {
          // @ts-ignore
          config = config();
          go(b);
        });
      } else {
        go(b);
      }
    },

    end() {
      clear_animation();
      running_program = pending_program = null;
    }

  };
}

function handle_promise(promise, info) {
  const token = info.token = {};

  function update(type, index, key, value) {
    if (info.token !== token) return;
    info.resolved = value;
    let child_ctx = info.ctx;

    if (key !== undefined) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }

    const block = type && (info.current = type)(child_ctx);
    let needs_flush = false;

    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block, i) => {
          if (i !== index && block) {
            group_outros();
            transition_out(block, 1, 1, () => {
              info.blocks[i] = null;
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }

      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }

    info.block = block;
    if (info.blocks) info.blocks[index] = block;

    if (needs_flush) {
      flush();
    }
  }

  if (is_promise(promise)) {
    const current_component = get_current_component();
    promise.then(value => {
      set_current_component(current_component);
      update(info.then, 1, info.value, value);
      set_current_component(null);
    }, error => {
      set_current_component(current_component);
      update(info.catch, 2, info.error, error);
      set_current_component(null);
    }); // if we previously had a then/catch block, destroy it

    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }

    info.resolved = promise;
  }
}

const globals = typeof window !== 'undefined' ? window : global;
exports.globals = globals;

function destroy_block(block, lookup) {
  block.d(1);
  lookup.delete(block.key);
}

function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, () => {
    lookup.delete(block.key);
  });
}

function fix_and_destroy_block(block, lookup) {
  block.f();
  destroy_block(block, lookup);
}

function fix_and_outro_and_destroy_block(block, lookup) {
  block.f();
  outro_and_destroy_block(block, lookup);
}

function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
  let o = old_blocks.length;
  let n = list.length;
  let i = o;
  const old_indexes = {};

  while (i--) old_indexes[old_blocks[i].key] = i;

  const new_blocks = [];
  const new_lookup = new Map();
  const deltas = new Map();
  i = n;

  while (i--) {
    const child_ctx = get_context(ctx, list, i);
    const key = get_key(child_ctx);
    let block = lookup.get(key);

    if (!block) {
      block = create_each_block(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }

    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
  }

  const will_move = new Set();
  const did_move = new Set();

  function insert(block) {
    transition_in(block, 1);
    block.m(node, next, lookup.has(block.key));
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }

  while (o && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;

    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }

  while (o--) {
    const old_block = old_blocks[o];
    if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
  }

  while (n) insert(new_blocks[n - 1]);

  return new_blocks;
}

function validate_each_keys(ctx, list, get_context, get_key) {
  const keys = new Set();

  for (let i = 0; i < list.length; i++) {
    const key = get_key(get_context(ctx, list, i));

    if (keys.has(key)) {
      throw new Error(`Cannot have duplicate keys in a keyed each`);
    }

    keys.add(key);
  }
}

function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = {
    $$scope: 1
  };
  let i = levels.length;

  while (i--) {
    const o = levels[i];
    const n = updates[i];

    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }

  for (const key in to_null_out) {
    if (!(key in update)) update[key] = undefined;
  }

  return update;
}

function get_spread_object(spread_props) {
  return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
} // source: https://html.spec.whatwg.org/multipage/indices.html


const boolean_attributes = new Set(['allowfullscreen', 'allowpaymentrequest', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'ismap', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected']);
const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u; // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

exports.invalid_attribute_name_character = invalid_attribute_name_character;

function spread(args, classes_to_add) {
  const attributes = Object.assign({}, ...args);

  if (classes_to_add) {
    if (attributes.class == null) {
      attributes.class = classes_to_add;
    } else {
      attributes.class += ' ' + classes_to_add;
    }
  }

  let str = '';
  Object.keys(attributes).forEach(name => {
    if (invalid_attribute_name_character.test(name)) return;
    const value = attributes[name];
    if (value === true) str += " " + name;else if (boolean_attributes.has(name.toLowerCase())) {
      if (value) str += " " + name;
    } else if (value != null) {
      str += ` ${name}="${String(value).replace(/"/g, '&#34;').replace(/'/g, '&#39;')}"`;
    }
  });
  return str;
}

const escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
exports.escaped = escaped;

function escape(html) {
  return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function each(items, fn) {
  let str = '';

  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }

  return str;
}

const missing_component = {
  $$render: () => ''
};
exports.missing_component = missing_component;

function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }

  return component;
}

function debug(file, line, column, values) {
  console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console

  console.log(values); // eslint-disable-line no-console

  return '';
}

let on_destroy;

function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : []),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({
      $$
    });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }

  return {
    render: (props = {}, options = {}) => {
      on_destroy = [];
      const result = {
        title: '',
        head: '',
        css: new Set()
      };
      const html = $$render(result, props, {}, options);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map(css => css.code).join('\n'),
          map: null // TODO

        },
        head: result.title + result.head
      };
    },
    $$render
  };
}

function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value) return '';
  return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

function add_classes(classes) {
  return classes ? ` class="${classes}"` : ``;
}

function bind(component, name, callback) {
  const index = component.$$.props[name];

  if (index !== undefined) {
    component.$$.bound[index] = callback;
    callback(component.$$.ctx[index]);
  }
}

function create_component(block) {
  block && block.c();
}

function claim_component(block, parent_nodes) {
  block && block.l(parent_nodes);
}

function mount_component(component, target, anchor) {
  const {
    fragment,
    on_mount,
    on_destroy,
    after_update
  } = component.$$;
  fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

  add_render_callback(() => {
    const new_on_destroy = on_mount.map(run).filter(is_function);

    if (on_destroy) {
      on_destroy.push(...new_on_destroy);
    } else {
      // Edge case - component was destroyed immediately,
      // most likely as a result of a binding initialising
      run_all(new_on_destroy);
    }

    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  const $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const prop_values = options.props || {};
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : []),
    // everything else
    callbacks: blank_object(),
    dirty
  };
  let ready = false;
  $$.ctx = instance ? instance(component, prop_values, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;

    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if ($$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    flush();
  }

  set_current_component(parent_component);
}

let SvelteElement;
exports.SvelteElement = SvelteElement;

if (typeof HTMLElement === 'function') {
  exports.SvelteElement = SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: 'open'
      });
    }

    connectedCallback() {
      // @ts-ignore todo: improve typings
      for (const key in this.$$.slotted) {
        // @ts-ignore todo: improve typings
        this.appendChild(this.$$.slotted[key]);
      }
    }

    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }

    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }

    $on(type, callback) {
      // TODO should this delegate to addEventListener?
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }

    $set() {// overridden by instance, if it has props
    }

  };
}

class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }

  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }

  $set() {// overridden by instance, if it has props
  }

}

exports.SvelteComponent = SvelteComponent;

function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, Object.assign({
    version: '3.20.1'
  }, detail)));
}

function append_dev(target, node) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node
  });
  append(target, node);
}

function insert_dev(target, node, anchor) {
  dispatch_dev("SvelteDOMInsert", {
    target,
    node,
    anchor
  });
  insert(target, node, anchor);
}

function detach_dev(node) {
  dispatch_dev("SvelteDOMRemove", {
    node
  });
  detach(node);
}

function detach_between_dev(before, after) {
  while (before.nextSibling && before.nextSibling !== after) {
    detach_dev(before.nextSibling);
  }
}

function detach_before_dev(after) {
  while (after.previousSibling) {
    detach_dev(after.previousSibling);
  }
}

function detach_after_dev(before) {
  while (before.nextSibling) {
    detach_dev(before.nextSibling);
  }
}

function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
  const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default) modifiers.push('preventDefault');
  if (has_stop_propagation) modifiers.push('stopPropagation');
  dispatch_dev("SvelteDOMAddEventListener", {
    node,
    event,
    handler,
    modifiers
  });
  const dispose = listen(node, event, handler, options);
  return () => {
    dispatch_dev("SvelteDOMRemoveEventListener", {
      node,
      event,
      handler,
      modifiers
    });
    dispose();
  };
}

function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null) dispatch_dev("SvelteDOMRemoveAttribute", {
    node,
    attribute
  });else dispatch_dev("SvelteDOMSetAttribute", {
    node,
    attribute,
    value
  });
}

function prop_dev(node, property, value) {
  node[property] = value;
  dispatch_dev("SvelteDOMSetProperty", {
    node,
    property,
    value
  });
}

function dataset_dev(node, property, value) {
  node.dataset[property] = value;
  dispatch_dev("SvelteDOMSetDataset", {
    node,
    property,
    value
  });
}

function set_data_dev(text, data) {
  data = '' + data;
  if (text.data === data) return;
  dispatch_dev("SvelteDOMSetData", {
    node: text,
    data
  });
  text.data = data;
}

function validate_each_argument(arg) {
  if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
    let msg = '{#each} only iterates over array-like objects.';

    if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
      msg += ' You can use a spread to convert this iterable into an array.';
    }

    throw new Error(msg);
  }
}

function validate_slots(name, slot, keys) {
  for (const slot_key of Object.keys(slot)) {
    if (!~keys.indexOf(slot_key)) {
      console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
    }
  }
}

class SvelteComponentDev extends SvelteComponent {
  constructor(options) {
    if (!options || !options.target && !options.$$inline) {
      throw new Error(`'target' is a required option`);
    }

    super();
  }

  $destroy() {
    super.$destroy();

    this.$destroy = () => {
      console.warn(`Component was already destroyed`); // eslint-disable-line no-console
    };
  }

  $capture_state() {}

  $inject_state() {}

}

exports.SvelteComponentDev = SvelteComponentDev;

function loop_guard(timeout) {
  const start = Date.now();
  return () => {
    if (Date.now() - start > timeout) {
      throw new Error(`Infinite loop detected`);
    }
  };
}
},{}],"../dist/index.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.Components = {}));
})(this, function (exports) {
  'use strict';

  function noop() {}

  function assign(tar, src) {
    // @ts-ignore
    for (var k in src) {
      tar[k] = src[k];
    }

    return tar;
  }

  function run(fn) {
    return fn();
  }

  function blank_object() {
    return Object.create(null);
  }

  function run_all(fns) {
    fns.forEach(run);
  }

  function is_function(thing) {
    return typeof thing === 'function';
  }

  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
  }

  function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
      var slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
      return definition[0](slot_ctx);
    }
  }

  function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
  }

  function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
      var lets = definition[2](fn(dirty));

      if ($$scope.dirty === undefined) {
        return lets;
      }

      if (_typeof(lets) === 'object') {
        var merged = [];

        var _len = Math.max($$scope.dirty.length, lets.length);

        for (var _i = 0; _i < _len; _i += 1) {
          merged[_i] = $$scope.dirty[_i] | lets[_i];
        }

        return merged;
      }

      return $$scope.dirty | lets;
    }

    return $$scope.dirty;
  }

  function append(target, node) {
    target.appendChild(node);
  }

  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }

  function detach(node) {
    node.parentNode.removeChild(node);
  }

  function destroy_each(iterations, detaching) {
    for (var _i2 = 0; _i2 < iterations.length; _i2 += 1) {
      if (iterations[_i2]) iterations[_i2].d(detaching);
    }
  }

  function element(name) {
    return document.createElement(name);
  }

  function text(data) {
    return document.createTextNode(data);
  }

  function space() {
    return text(' ');
  }

  function empty() {
    return text('');
  }

  function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
  }

  function set_attributes(node, attributes) {
    // @ts-ignore
    var descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

    for (var key in attributes) {
      if (attributes[key] == null) {
        node.removeAttribute(key);
      } else if (key === 'style') {
        node.style.cssText = attributes[key];
      } else if (key === '__value' || descriptors[key] && descriptors[key].set) {
        node[key] = attributes[key];
      } else {
        attr(node, key, attributes[key]);
      }
    }
  }

  function children(element) {
    return Array.from(element.childNodes);
  }

  function set_data(text, data) {
    data = '' + data;
    if (text.data !== data) text.data = data;
  }

  var current_component;

  function set_current_component(component) {
    current_component = component;
  }

  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;

  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }

  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }

  var flushing = false;
  var seen_callbacks = new Set();

  function flush() {
    if (flushing) return;
    flushing = true;

    do {
      // first, call beforeUpdate functions
      // and update components
      for (var _i3 = 0; _i3 < dirty_components.length; _i3 += 1) {
        var component = dirty_components[_i3];
        set_current_component(component);
        update(component.$$);
      }

      dirty_components.length = 0;

      while (binding_callbacks.length) {
        binding_callbacks.pop()();
      } // then, once components are updated, call
      // afterUpdate functions. This may cause
      // subsequent updates...


      for (var _i4 = 0; _i4 < render_callbacks.length; _i4 += 1) {
        var callback = render_callbacks[_i4];

        if (!seen_callbacks.has(callback)) {
          // ...so guard against infinite loops
          seen_callbacks.add(callback);
          callback();
        }
      }

      render_callbacks.length = 0;
    } while (dirty_components.length);

    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }

    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
  }

  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      var dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }

  var outroing = new Set();
  var outros;

  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros // parent group

    };
  }

  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }

    outros = outros.p;
  }

  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }

  function transition_out(block, local, detach, callback) {
    if (block && block.o) {
      if (outroing.has(block)) return;
      outroing.add(block);
      outros.c.push(function () {
        outroing.delete(block);

        if (callback) {
          if (detach) block.d(1);
          callback();
        }
      });
      block.o(local);
    }
  }

  function get_spread_update(levels, updates) {
    var update = {};
    var to_null_out = {};
    var accounted_for = {
      $$scope: 1
    };
    var i = levels.length;

    while (i--) {
      var o = levels[i];
      var n = updates[i];

      if (n) {
        for (var key in o) {
          if (!(key in n)) to_null_out[key] = 1;
        }

        for (var _key in n) {
          if (!accounted_for[_key]) {
            update[_key] = n[_key];
            accounted_for[_key] = 1;
          }
        }

        levels[i] = n;
      } else {
        for (var _key2 in o) {
          accounted_for[_key2] = 1;
        }
      }
    }

    for (var _key3 in to_null_out) {
      if (!(_key3 in update)) update[_key3] = undefined;
    }

    return update;
  }

  function create_component(block) {
    block && block.c();
  }

  function mount_component(component, target, anchor) {
    var _component$$$ = component.$$,
        fragment = _component$$$.fragment,
        on_mount = _component$$$.on_mount,
        on_destroy = _component$$$.on_destroy,
        after_update = _component$$$.after_update;
    fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

    add_render_callback(function () {
      var new_on_destroy = on_mount.map(run).filter(is_function);

      if (on_destroy) {
        on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
      } else {
        // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
      }

      component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
  }

  function destroy_component(component, detaching) {
    var $$ = component.$$;

    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
      // preserve final state?)

      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }

  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }

    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }

  function init(component, options, instance, create_fragment, not_equal, props) {
    var dirty = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [-1];
    var parent_component = current_component;
    set_current_component(component);
    var prop_values = options.props || {};
    var $$ = component.$$ = {
      fragment: null,
      ctx: null,
      // state
      props: props,
      update: noop,
      not_equal: not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      before_update: [],
      after_update: [],
      context: new Map(parent_component ? parent_component.$$.context : []),
      // everything else
      callbacks: blank_object(),
      dirty: dirty
    };
    var ready = false;
    $$.ctx = instance ? instance(component, prop_values, function (i, ret) {
      var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if ($$.bound[i]) $$.bound[i](value);
        if (ready) make_dirty(component, i);
      }

      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update); // `false` as a special case of no DOM component

    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

    if (options.target) {
      if (options.hydrate) {
        var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        $$.fragment && $$.fragment.c();
      }

      if (options.intro) transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor);
      flush();
    }

    set_current_component(parent_component);
  }

  var SvelteComponent = /*#__PURE__*/function () {
    function SvelteComponent() {
      _classCallCheck(this, SvelteComponent);
    }

    _createClass(SvelteComponent, [{
      key: "$destroy",
      value: function $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
    }, {
      key: "$on",
      value: function $on(type, callback) {
        var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return function () {
          var index = callbacks.indexOf(callback);
          if (index !== -1) callbacks.splice(index, 1);
        };
      }
    }, {
      key: "$set",
      value: function $set() {// overridden by instance, if it has props
      }
    }]);

    return SvelteComponent;
  }();
  /* src/Address.svelte generated by Svelte v3.20.1 */


  var get_no_address_slot_changes = function get_no_address_slot_changes(dirty) {
    return {};
  };

  var get_no_address_slot_context = function get_no_address_slot_context(ctx) {
    return {};
  }; // (14:0) {:else}


  function create_else_block(ctx) {
    var address_1;
    var current;
    var no_address_slot_template =
    /*$$slots*/
    ctx[2]["no-address"];
    var no_address_slot = create_slot(no_address_slot_template, ctx,
    /*$$scope*/
    ctx[1], get_no_address_slot_context);
    return {
      c: function c() {
        address_1 = element("address");
        if (no_address_slot) no_address_slot.c();
        attr(address_1, "class", "missing");
      },
      m: function m(target, anchor) {
        insert(target, address_1, anchor);

        if (no_address_slot) {
          no_address_slot.m(address_1, null);
        }

        current = true;
      },
      p: function p(ctx, dirty) {
        if (no_address_slot) {
          if (no_address_slot.p && dirty &
          /*$$scope*/
          2) {
            no_address_slot.p(get_slot_context(no_address_slot_template, ctx,
            /*$$scope*/
            ctx[1], get_no_address_slot_context), get_slot_changes(no_address_slot_template,
            /*$$scope*/
            ctx[1], dirty, get_no_address_slot_changes));
          }
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(no_address_slot, local);
        current = true;
      },
      o: function o(local) {
        transition_out(no_address_slot, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(address_1);
        if (no_address_slot) no_address_slot.d(detaching);
      }
    };
  } // (5:0) {#if address}


  function create_if_block(ctx) {
    var address_1;
    var t0;
    var t1;
    var t2;
    var address_1_data_id_value;
    var if_block0 =
    /*address*/
    ctx[0].street && create_if_block_4(ctx);
    var if_block1 =
    /*address*/
    ctx[0].city && create_if_block_3(ctx);
    var if_block2 =
    /*address*/
    ctx[0].state && create_if_block_2(ctx);
    var if_block3 =
    /*address*/
    ctx[0].postal && create_if_block_1(ctx);
    return {
      c: function c() {
        address_1 = element("address");
        if (if_block0) if_block0.c();
        t0 = space();
        if (if_block1) if_block1.c();
        t1 = space();
        if (if_block2) if_block2.c();
        t2 = space();
        if (if_block3) if_block3.c();
        attr(address_1, "data-id", address_1_data_id_value =
        /*address*/
        ctx[0].id);
      },
      m: function m(target, anchor) {
        insert(target, address_1, anchor);
        if (if_block0) if_block0.m(address_1, null);
        append(address_1, t0);
        if (if_block1) if_block1.m(address_1, null);
        append(address_1, t1);
        if (if_block2) if_block2.m(address_1, null);
        append(address_1, t2);
        if (if_block3) if_block3.m(address_1, null);
      },
      p: function p(ctx, dirty) {
        if (
        /*address*/
        ctx[0].street) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
          } else {
            if_block0 = create_if_block_4(ctx);
            if_block0.c();
            if_block0.m(address_1, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }

        if (
        /*address*/
        ctx[0].city) {
          if (if_block1) {
            if_block1.p(ctx, dirty);
          } else {
            if_block1 = create_if_block_3(ctx);
            if_block1.c();
            if_block1.m(address_1, t1);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }

        if (
        /*address*/
        ctx[0].state) {
          if (if_block2) {
            if_block2.p(ctx, dirty);
          } else {
            if_block2 = create_if_block_2(ctx);
            if_block2.c();
            if_block2.m(address_1, t2);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }

        if (
        /*address*/
        ctx[0].postal) {
          if (if_block3) {
            if_block3.p(ctx, dirty);
          } else {
            if_block3 = create_if_block_1(ctx);
            if_block3.c();
            if_block3.m(address_1, null);
          }
        } else if (if_block3) {
          if_block3.d(1);
          if_block3 = null;
        }

        if (dirty &
        /*address*/
        1 && address_1_data_id_value !== (address_1_data_id_value =
        /*address*/
        ctx[0].id)) {
          attr(address_1, "data-id", address_1_data_id_value);
        }
      },
      i: noop,
      o: noop,
      d: function d(detaching) {
        if (detaching) detach(address_1);
        if (if_block0) if_block0.d();
        if (if_block1) if_block1.d();
        if (if_block2) if_block2.d();
        if (if_block3) if_block3.d();
      }
    };
  } // (8:4) {#if address.street}


  function create_if_block_4(ctx) {
    var span;
    var t_value =
    /*address*/
    ctx[0].street + "";
    var t;
    return {
      c: function c() {
        span = element("span");
        t = text(t_value);
        attr(span, "class", "street");
      },
      m: function m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*address*/
        1 && t_value !== (t_value =
        /*address*/
        ctx[0].street + "")) set_data(t, t_value);
      },
      d: function d(detaching) {
        if (detaching) detach(span);
      }
    };
  } // (9:4) {#if address.city}


  function create_if_block_3(ctx) {
    var span;
    var t_value =
    /*address*/
    ctx[0].city + "";
    var t;
    return {
      c: function c() {
        span = element("span");
        t = text(t_value);
        attr(span, "class", "city");
      },
      m: function m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*address*/
        1 && t_value !== (t_value =
        /*address*/
        ctx[0].city + "")) set_data(t, t_value);
      },
      d: function d(detaching) {
        if (detaching) detach(span);
      }
    };
  } // (10:4) {#if address.state}


  function create_if_block_2(ctx) {
    var span;
    var t_value =
    /*address*/
    ctx[0].state + "";
    var t;
    return {
      c: function c() {
        span = element("span");
        t = text(t_value);
        attr(span, "class", "state");
      },
      m: function m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*address*/
        1 && t_value !== (t_value =
        /*address*/
        ctx[0].state + "")) set_data(t, t_value);
      },
      d: function d(detaching) {
        if (detaching) detach(span);
      }
    };
  } // (11:4) {#if address.postal}


  function create_if_block_1(ctx) {
    var span;
    var t_value =
    /*address*/
    ctx[0].postal + "";
    var t;
    return {
      c: function c() {
        span = element("span");
        t = text(t_value);
        attr(span, "class", "postal");
      },
      m: function m(target, anchor) {
        insert(target, span, anchor);
        append(span, t);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*address*/
        1 && t_value !== (t_value =
        /*address*/
        ctx[0].postal + "")) set_data(t, t_value);
      },
      d: function d(detaching) {
        if (detaching) detach(span);
      }
    };
  }

  function create_fragment(ctx) {
    var current_block_type_index;
    var if_block;
    var if_block_anchor;
    var current;
    var if_block_creators = [create_if_block, create_else_block];
    var if_blocks = [];

    function select_block_type(ctx, dirty) {
      if (
      /*address*/
      ctx[0]) return 0;
      return 1;
    }

    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c: function c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        var previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx);

        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          }

          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block);
        current = false;
      },
      d: function d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching) detach(if_block_anchor);
      }
    };
  }

  function instance($$self, $$props, $$invalidate) {
    var address = $$props.address;
    var _$$props$$$slots = $$props.$$slots,
        $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;

    $$self.$set = function ($$props) {
      if ("address" in $$props) $$invalidate(0, address = $$props.address);
      if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
    };

    return [address, $$scope, $$slots];
  }

  var Address = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Address, _SvelteComponent);

    var _super = _createSuper(Address);

    function Address(options) {
      var _this;

      _classCallCheck(this, Address);

      _this = _super.call(this);
      init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
        address: 0
      });
      return _this;
    }

    return Address;
  }(SvelteComponent);

  var RFC4648 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  var RFC4648_HEX = '0123456789ABCDEFGHIJKLMNOPQRSTUV';
  var CROCKFORD = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
  var toAlphabet = {
    RFC3548: RFC4648,
    RFC4648: RFC4648,
    'RFC4648-HEX': RFC4648_HEX,
    Crockford: CROCKFORD
  };

  function makeToHex() {
    var variant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Crockford";
    var alphabet = toAlphabet[variant];

    if (!alphabet) {
      throw new Error('Unknown base32 variant: ' + variant);
    }

    function readChar(alphabet, char) {
      var idx = alphabet.indexOf(char);

      if (idx === -1) {
        throw new Error('Invalid character found: ' + char);
      }

      return idx;
    }

    function toHexString(byteArray) {
      return Array.from(byteArray, function (byte) {
        return ('0' + (byte & 0xFF).toString(16)).slice(-2);
      }).join('');
    }

    return function base32Decode(input) {
      switch (variant) {
        case 'RFC4648-HEX':
          input = input.replace(/=+$/, '');
          break;

        case 'Crockford':
          input = input.toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1');
          break;

        default:
          input = input.replace(/=+$/, '');
      }

      var length = input.length;
      var bits = 0;
      var value = 0;
      var index = 0;
      var output = new Uint8Array(length * 5 / 8 | 0);

      for (var _i5 = 0; _i5 < length; _i5++) {
        value = value << 5 | readChar(alphabet, input[_i5]);
        bits += 5;

        if (bits >= 8) {
          output[index++] = value >>> bits - 8 & 255;
          bits -= 8;
        }
      }

      return toHexString(output);
    };
  }

  var crockford32ToHex = makeToHex('Crockford');

  function urlToPath(url) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var copied = new URL(url.href);

    if (opts.skipHash) {
      copied.hash = '';
    } // Reminder: replace only replaces the first copy unless the first argument is a global regex


    return copied.href.replace(copied.origin, opts.absolute ? copied.origin : '');
  }

  function isUrlLike(x) {
    return typeof x == 'string' || x instanceof URL || x instanceof Location;
  }

  function build(urlOrOpt, maybeOpt) {
    var urlArg = isUrlLike(urlOrOpt) ? urlOrOpt : self.location;
    var opts = maybeOpt || (isUrlLike(urlOrOpt) ? {} : urlOrOpt);
    var url = new URL(urlArg.toString(), document.baseURI);
    Object.entries(opts.query || {}).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          val = _ref4[1];

      if (val) {
        (Array.isArray(val) ? val : [val]).forEach(function (v, ix) {
          if (ix == 0) {
            url.searchParams.set(key, v);
          } else {
            url.searchParams.append(key, v);
          }
        });
      } else {
        url.searchParams.delete(key);
      }
    });

    if (opts.hash) {
      url.hash = opts.hash;
    }

    var requestedPath = urlToPath(url, {
      skipHash: opts.hash === false,
      absolute: opts.login || opts.absolute
    });

    if (opts.login) {
      return build('https://my.parkingboss.com/user/navigate', {
        query: {
          url: requestedPath
        },
        absolute: true
      });
    }

    return requestedPath;
  }

  function checkBlobConstructor() {
    try {
      return Boolean(new Blob());
    } catch (error) {
      return false;
    }
  }

  function checkArrayBufferView() {
    try {
      return new Blob([new Uint8Array(100)]).size === 100;
    } catch (error) {
      return false;
    }
  }

  var hasBlobConstructor = typeof Blob !== 'undefined' && checkBlobConstructor();
  var hasArrayBufferViewSupport = hasBlobConstructor && typeof Uint8Array !== 'undefined' && checkArrayBufferView();
  var parkingBossUploadRex = /upload\.parkingboss\.com(\/files)?/i;
  var imgxRoot = 'parking-uploads.imgix.net';
  var hrefSearch = {
    auto: "compress,enhance"
  };
  var srcSearch = Object.assign({}, hrefSearch, {
    w: 60,
    h: 60,
    fit: 'crop',
    crop: 'entropy'
  });

  function imgx(url, opts) {
    return build(url.replace(parkingBossUploadRex, imgxRoot), opts);
  }

  function compressed(url) {
    return imgx(url, hrefSearch);
  }

  var imageTypes = new Set(['video', 'image']);

  function isImage(file) {
    return file && typeof file.format === 'string' && formatIsImage(file.format);
  }

  function formatIsImage(format) {
    var mimetype = format.split("/").shift();
    var type = mimetype && mimetype.toLowerCase();
    return imageTypes.has(type);
  }

  var long = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  });
  var med = new Intl.DateTimeFormat("en-US", {
    year: undefined,
    month: "short",
    weekday: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  });
  var short = new Intl.DateTimeFormat("en-US", {
    year: undefined,
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  });
  var medTz = new Intl.DateTimeFormat("en-US", {
    year: undefined,
    month: "short",
    weekday: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short"
  });
  var dateformat = /*#__PURE__*/Object.freeze({
    __proto__: null,
    long: long,
    med: med,
    short: short,
    medTz: medTz
  });
  var lookup = [];
  var revLookup = [];
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  } // Support decoding URL-safe base64 strings, as Node.js does.
  // See: https://en.wikipedia.org/wiki/Base64#URL_applications


  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63; // Maps for number <-> hex string conversion

  var _byteToHex = [];

  for (var i$1 = 0; i$1 < 256; i$1++) {
    _byteToHex[i$1] = (i$1 + 0x100).toString(16).substr(1);
  }

  function tryDate(d) {
    d = new Date(d);
    return isNaN(d) ? null : d;
  }

  function classes() {
    for (var _len2 = arguments.length, list = new Array(_len2), _key4 = 0; _key4 < _len2; _key4++) {
      list[_key4] = arguments[_key4];
    }

    return list.flat().filter(function (x) {
      return x;
    }).join(' ');
  }

  var MILLISECOND = 1;
  var MILLISECONDS = MILLISECOND;
  var SECOND = 1000 * MILLISECONDS;
  var SECONDS = SECOND;
  var MINUTE = 60 * SECONDS;
  var MINUTES = MINUTE;
  var HOUR = 60 * MINUTES;
  var HOURS = HOUR;
  var DAY = 24 * HOURS;
  var DAYS = DAY;
  /* src/Contact.svelte generated by Svelte v3.20.1 */

  var get_no_user_slot_changes = function get_no_user_slot_changes(dirty) {
    return {};
  };

  var get_no_user_slot_context = function get_no_user_slot_context(ctx) {
    return {};
  }; // (13:0) {:else}


  function create_else_block$1(ctx) {
    var data;
    var current;
    var no_user_slot_template =
    /*$$slots*/
    ctx[2]["no-user"];
    var no_user_slot = create_slot(no_user_slot_template, ctx,
    /*$$scope*/
    ctx[1], get_no_user_slot_context);
    return {
      c: function c() {
        data = element("data");
        if (no_user_slot) no_user_slot.c();
        attr(data, "class", "user missing");
      },
      m: function m(target, anchor) {
        insert(target, data, anchor);

        if (no_user_slot) {
          no_user_slot.m(data, null);
        }

        current = true;
      },
      p: function p(ctx, dirty) {
        if (no_user_slot) {
          if (no_user_slot.p && dirty &
          /*$$scope*/
          2) {
            no_user_slot.p(get_slot_context(no_user_slot_template, ctx,
            /*$$scope*/
            ctx[1], get_no_user_slot_context), get_slot_changes(no_user_slot_template,
            /*$$scope*/
            ctx[1], dirty, get_no_user_slot_changes));
          }
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(no_user_slot, local);
        current = true;
      },
      o: function o(local) {
        transition_out(no_user_slot, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(data);
        if (no_user_slot) no_user_slot.d(detaching);
      }
    };
  } // (7:0) {#if contact}


  function create_if_block$1(ctx) {
    var data;
    var data_value_value;
    var data_class_value;
    var current;
    var default_slot_template =
    /*$$slots*/
    ctx[2].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[1], null);
    var default_slot_or_fallback = default_slot || fallback_block(ctx);
    return {
      c: function c() {
        data = element("data");
        if (default_slot_or_fallback) default_slot_or_fallback.c();
        attr(data, "value", data_value_value =
        /*contact*/
        ctx[0].id);
        attr(data, "class", data_class_value = classes("user",
        /*contact*/
        ctx[0].type,
        /*contact*/
        ctx[0].format));
      },
      m: function m(target, anchor) {
        insert(target, data, anchor);

        if (default_slot_or_fallback) {
          default_slot_or_fallback.m(data, null);
        }

        current = true;
      },
      p: function p(ctx, dirty) {
        if (default_slot) {
          if (default_slot.p && dirty &
          /*$$scope*/
          2) {
            default_slot.p(get_slot_context(default_slot_template, ctx,
            /*$$scope*/
            ctx[1], null), get_slot_changes(default_slot_template,
            /*$$scope*/
            ctx[1], dirty, null));
          }
        } else {
          if (default_slot_or_fallback && default_slot_or_fallback.p && dirty &
          /*contact*/
          1) {
            default_slot_or_fallback.p(ctx, dirty);
          }
        }

        if (!current || dirty &
        /*contact*/
        1 && data_value_value !== (data_value_value =
        /*contact*/
        ctx[0].id)) {
          attr(data, "value", data_value_value);
        }

        if (!current || dirty &
        /*contact*/
        1 && data_class_value !== (data_class_value = classes("user",
        /*contact*/
        ctx[0].type,
        /*contact*/
        ctx[0].format))) {
          attr(data, "class", data_class_value);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(default_slot_or_fallback, local);
        current = true;
      },
      o: function o(local) {
        transition_out(default_slot_or_fallback, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(data);
        if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
      }
    };
  } // (10:10) {contact.display}


  function fallback_block(ctx) {
    var t_value =
    /*contact*/
    ctx[0].display + "";
    var t;
    return {
      c: function c() {
        t = text(t_value);
      },
      m: function m(target, anchor) {
        insert(target, t, anchor);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*contact*/
        1 && t_value !== (t_value =
        /*contact*/
        ctx[0].display + "")) set_data(t, t_value);
      },
      d: function d(detaching) {
        if (detaching) detach(t);
      }
    };
  }

  function create_fragment$1(ctx) {
    var current_block_type_index;
    var if_block;
    var if_block_anchor;
    var current;
    var if_block_creators = [create_if_block$1, create_else_block$1];
    var if_blocks = [];

    function select_block_type(ctx, dirty) {
      if (
      /*contact*/
      ctx[0]) return 0;
      return 1;
    }

    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c: function c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p: function p(ctx, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 1),
            dirty = _ref6[0];

        var previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx);

        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          }

          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block);
        current = false;
      },
      d: function d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching) detach(if_block_anchor);
      }
    };
  }

  function instance$1($$self, $$props, $$invalidate) {
    var contact = $$props.contact;
    var _$$props$$$slots2 = $$props.$$slots,
        $$slots = _$$props$$$slots2 === void 0 ? {} : _$$props$$$slots2,
        $$scope = $$props.$$scope;

    $$self.$set = function ($$props) {
      if ("contact" in $$props) $$invalidate(0, contact = $$props.contact);
      if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
    };

    return [contact, $$scope, $$slots];
  }

  var Contact = /*#__PURE__*/function (_SvelteComponent2) {
    _inherits(Contact, _SvelteComponent2);

    var _super2 = _createSuper(Contact);

    function Contact(options) {
      var _this2;

      _classCallCheck(this, Contact);

      _this2 = _super2.call(this);
      init(_assertThisInitialized(_this2), options, instance$1, create_fragment$1, safe_not_equal, {
        contact: 0
      });
      return _this2;
    }

    return Contact;
  }(SvelteComponent);
  /* src/Image.svelte generated by Svelte v3.20.1 */


  var get_no_file_slot_changes = function get_no_file_slot_changes(dirty) {
    return {};
  };

  var get_no_file_slot_context = function get_no_file_slot_context(ctx) {
    return {};
  };

  var get_not_a_file_slot_changes = function get_not_a_file_slot_changes(dirty) {
    return {};
  };

  var get_not_a_file_slot_context = function get_not_a_file_slot_context(ctx) {
    return {};
  }; // (27:0) {:else}


  function create_else_block$2(ctx) {
    var figure;
    var current;
    var no_file_slot_template =
    /*$$slots*/
    ctx[5]["no-file"];
    var no_file_slot = create_slot(no_file_slot_template, ctx,
    /*$$scope*/
    ctx[4], get_no_file_slot_context);
    return {
      c: function c() {
        figure = element("figure");
        if (no_file_slot) no_file_slot.c();
        attr(figure, "class", "missing");
      },
      m: function m(target, anchor) {
        insert(target, figure, anchor);

        if (no_file_slot) {
          no_file_slot.m(figure, null);
        }

        current = true;
      },
      p: function p(ctx, dirty) {
        if (no_file_slot) {
          if (no_file_slot.p && dirty &
          /*$$scope*/
          16) {
            no_file_slot.p(get_slot_context(no_file_slot_template, ctx,
            /*$$scope*/
            ctx[4], get_no_file_slot_context), get_slot_changes(no_file_slot_template,
            /*$$scope*/
            ctx[4], dirty, get_no_file_slot_changes));
          }
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(no_file_slot, local);
        current = true;
      },
      o: function o(local) {
        transition_out(no_file_slot, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(figure);
        if (no_file_slot) no_file_slot.d(detaching);
      }
    };
  } // (21:15) 


  function create_if_block_2$1(ctx) {
    var figure;
    var current;
    var not_a_file_slot_template =
    /*$$slots*/
    ctx[5]["not-a-file"];
    var not_a_file_slot = create_slot(not_a_file_slot_template, ctx,
    /*$$scope*/
    ctx[4], get_not_a_file_slot_context);
    var not_a_file_slot_or_fallback = not_a_file_slot || fallback_block$1();
    return {
      c: function c() {
        figure = element("figure");
        if (not_a_file_slot_or_fallback) not_a_file_slot_or_fallback.c();
        attr(figure, "class", "invalid-type");
      },
      m: function m(target, anchor) {
        insert(target, figure, anchor);

        if (not_a_file_slot_or_fallback) {
          not_a_file_slot_or_fallback.m(figure, null);
        }

        current = true;
      },
      p: function p(ctx, dirty) {
        if (not_a_file_slot) {
          if (not_a_file_slot.p && dirty &
          /*$$scope*/
          16) {
            not_a_file_slot.p(get_slot_context(not_a_file_slot_template, ctx,
            /*$$scope*/
            ctx[4], get_not_a_file_slot_context), get_slot_changes(not_a_file_slot_template,
            /*$$scope*/
            ctx[4], dirty, get_not_a_file_slot_changes));
          }
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(not_a_file_slot_or_fallback, local);
        current = true;
      },
      o: function o(local) {
        transition_out(not_a_file_slot_or_fallback, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(figure);
        if (not_a_file_slot_or_fallback) not_a_file_slot_or_fallback.d(detaching);
      }
    };
  } // (12:0) {#if file && fil.isImage(file)}


  function create_if_block$2(ctx) {
    var figure;
    var img;
    var t;
    var img_levels = [{
      alt:
      /*alt*/
      ctx[0]
    }, {
      src: compressed(
      /*file*/
      ctx[1].url)
    },
    /*imgProps*/
    ctx[2]];
    var img_data = {};

    for (var _i6 = 0; _i6 < img_levels.length; _i6 += 1) {
      img_data = assign(img_data, img_levels[_i6]);
    }

    var if_block =
    /*caption*/
    ctx[3] && create_if_block_1$1(ctx);
    return {
      c: function c() {
        figure = element("figure");
        img = element("img");
        t = space();
        if (if_block) if_block.c();
        set_attributes(img, img_data);
      },
      m: function m(target, anchor) {
        insert(target, figure, anchor);
        append(figure, img);
        append(figure, t);
        if (if_block) if_block.m(figure, null);
      },
      p: function p(ctx, dirty) {
        set_attributes(img, get_spread_update(img_levels, [dirty &
        /*alt*/
        1 && {
          alt:
          /*alt*/
          ctx[0]
        }, dirty &
        /*imgx, file*/
        2 && {
          src: compressed(
          /*file*/
          ctx[1].url)
        }, dirty &
        /*imgProps*/
        4 &&
        /*imgProps*/
        ctx[2]]));

        if (
        /*caption*/
        ctx[3]) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block_1$1(ctx);
            if_block.c();
            if_block.m(figure, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      i: noop,
      o: noop,
      d: function d(detaching) {
        if (detaching) detach(figure);
        if (if_block) if_block.d();
      }
    };
  } // (24:28) Invalid Image File


  function fallback_block$1(ctx) {
    var t;
    return {
      c: function c() {
        t = text("Invalid Image File");
      },
      m: function m(target, anchor) {
        insert(target, t, anchor);
      },
      d: function d(detaching) {
        if (detaching) detach(t);
      }
    };
  } // (16:4) {#if caption}


  function create_if_block_1$1(ctx) {
    var figcaption;
    var t;
    return {
      c: function c() {
        figcaption = element("figcaption");
        t = text(
        /*caption*/
        ctx[3]);
      },
      m: function m(target, anchor) {
        insert(target, figcaption, anchor);
        append(figcaption, t);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*caption*/
        8) set_data(t,
        /*caption*/
        ctx[3]);
      },
      d: function d(detaching) {
        if (detaching) detach(figcaption);
      }
    };
  }

  function create_fragment$2(ctx) {
    var show_if;
    var current_block_type_index;
    var if_block;
    var if_block_anchor;
    var current;
    var if_block_creators = [create_if_block$2, create_if_block_2$1, create_else_block$2];
    var if_blocks = [];

    function select_block_type(ctx, dirty) {
      if (dirty &
      /*file*/
      2) show_if = !!(
      /*file*/
      ctx[1] && isImage(
      /*file*/
      ctx[1]));
      if (show_if) return 0;
      if (
      /*file*/
      ctx[1]) return 1;
      return 2;
    }

    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c: function c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p: function p(ctx, _ref7) {
        var _ref8 = _slicedToArray(_ref7, 1),
            dirty = _ref8[0];

        var previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx, dirty);

        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          }

          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block);
        current = false;
      },
      d: function d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching) detach(if_block_anchor);
      }
    };
  }

  function instance$2($$self, $$props, $$invalidate) {
    var file = $$props.file;
    var _$$props$imgProps = $$props.imgProps,
        imgProps = _$$props$imgProps === void 0 ? {} : _$$props$imgProps;
    var _$$props$alt = $$props.alt,
        alt = _$$props$alt === void 0 ? null : _$$props$alt;
    var _$$props$caption = $$props.caption,
        caption = _$$props$caption === void 0 ? null : _$$props$caption;
    var _$$props$$$slots3 = $$props.$$slots,
        $$slots = _$$props$$$slots3 === void 0 ? {} : _$$props$$$slots3,
        $$scope = $$props.$$scope;

    $$self.$set = function ($$props) {
      if ("file" in $$props) $$invalidate(1, file = $$props.file);
      if ("imgProps" in $$props) $$invalidate(2, imgProps = $$props.imgProps);
      if ("alt" in $$props) $$invalidate(0, alt = $$props.alt);
      if ("caption" in $$props) $$invalidate(3, caption = $$props.caption);
      if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
    };

    $$self.$$.update = function () {
      if ($$self.$$.dirty &
      /*alt, caption, file*/
      11) {
        $$invalidate(0, alt = alt || caption || file && file.filename || "An Image");
      }
    };

    return [alt, file, imgProps, caption, $$scope, $$slots];
  }

  var Image = /*#__PURE__*/function (_SvelteComponent3) {
    _inherits(Image, _SvelteComponent3);

    var _super3 = _createSuper(Image);

    function Image(options) {
      var _this3;

      _classCallCheck(this, Image);

      _this3 = _super3.call(this);
      init(_assertThisInitialized(_this3), options, instance$2, create_fragment$2, safe_not_equal, {
        file: 1,
        imgProps: 2,
        alt: 0,
        caption: 3
      });
      return _this3;
    }

    return Image;
  }(SvelteComponent);
  /* src/File.svelte generated by Svelte v3.20.1 */


  function create_else_block_1(ctx) {
    var data;
    return {
      c: function c() {
        data = element("data");
        data.innerHTML = "<slot='no-file'></slot='no-file'>";
        attr(data, "class", "file missing");
      },
      m: function m(target, anchor) {
        insert(target, data, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function d(detaching) {
        if (detaching) detach(data);
      }
    };
  } // (12:0) {#if file}


  function create_if_block$3(ctx) {
    var a;
    var current_block_type_index;
    var if_block;
    var a_download_value;
    var current;
    var if_block_creators = [create_if_block_1$2, create_else_block$3];
    var if_blocks = [];

    function select_block_type_1(ctx, dirty) {
      if (
      /*image*/
      ctx[1]) return 0;
      return 1;
    }

    current_block_type_index = select_block_type_1(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c: function c() {
        a = element("a");
        if_block.c();
        attr(a, "href",
        /*href*/
        ctx[2]);
        attr(a, "download", a_download_value =
        /*file*/
        ctx[0].filename);
      },
      m: function m(target, anchor) {
        insert(target, a, anchor);
        if_blocks[current_block_type_index].m(a, null);
        current = true;
      },
      p: function p(ctx, dirty) {
        var previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_1(ctx);

        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          }

          transition_in(if_block, 1);
          if_block.m(a, null);
        }

        if (!current || dirty &
        /*href*/
        4) {
          attr(a, "href",
          /*href*/
          ctx[2]);
        }

        if (!current || dirty &
        /*file*/
        1 && a_download_value !== (a_download_value =
        /*file*/
        ctx[0].filename)) {
          attr(a, "download", a_download_value);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(a);
        if_blocks[current_block_type_index].d();
      }
    };
  } // (19:4) {:else}


  function create_else_block$3(ctx) {
    var current;
    var default_slot_template =
    /*$$slots*/
    ctx[4].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[3], null);
    var default_slot_or_fallback = default_slot || fallback_block$2(ctx);
    return {
      c: function c() {
        if (default_slot_or_fallback) default_slot_or_fallback.c();
      },
      m: function m(target, anchor) {
        if (default_slot_or_fallback) {
          default_slot_or_fallback.m(target, anchor);
        }

        current = true;
      },
      p: function p(ctx, dirty) {
        if (default_slot) {
          if (default_slot.p && dirty &
          /*$$scope*/
          8) {
            default_slot.p(get_slot_context(default_slot_template, ctx,
            /*$$scope*/
            ctx[3], null), get_slot_changes(default_slot_template,
            /*$$scope*/
            ctx[3], dirty, null));
          }
        } else {
          if (default_slot_or_fallback && default_slot_or_fallback.p && dirty &
          /*file*/
          1) {
            default_slot_or_fallback.p(ctx, dirty);
          }
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(default_slot_or_fallback, local);
        current = true;
      },
      o: function o(local) {
        transition_out(default_slot_or_fallback, local);
        current = false;
      },
      d: function d(detaching) {
        if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
      }
    };
  } // (15:4) {#if image}


  function create_if_block_1$2(ctx) {
    var current;
    var image_1 = new Image({
      props: {
        file:
        /*file*/
        ctx[0]
      }
    });
    return {
      c: function c() {
        create_component(image_1.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(image_1, target, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        var image_1_changes = {};
        if (dirty &
        /*file*/
        1) image_1_changes.file =
        /*file*/
        ctx[0];
        image_1.$set(image_1_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(image_1.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(image_1.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(image_1, detaching);
      }
    };
  } // (21:10) {file.filename}


  function fallback_block$2(ctx) {
    var t_value =
    /*file*/
    ctx[0].filename + "";
    var t;
    return {
      c: function c() {
        t = text(t_value);
      },
      m: function m(target, anchor) {
        insert(target, t, anchor);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*file*/
        1 && t_value !== (t_value =
        /*file*/
        ctx[0].filename + "")) set_data(t, t_value);
      },
      d: function d(detaching) {
        if (detaching) detach(t);
      }
    };
  }

  function create_fragment$3(ctx) {
    var current_block_type_index;
    var if_block;
    var if_block_anchor;
    var current;
    var if_block_creators = [create_if_block$3, create_else_block_1];
    var if_blocks = [];

    function select_block_type(ctx, dirty) {
      if (
      /*file*/
      ctx[0]) return 0;
      return 1;
    }

    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c: function c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p: function p(ctx, _ref9) {
        var _ref10 = _slicedToArray(_ref9, 1),
            dirty = _ref10[0];

        var previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx);

        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          }

          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block);
        current = false;
      },
      d: function d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching) detach(if_block_anchor);
      }
    };
  }

  function instance$3($$self, $$props, $$invalidate) {
    var file = $$props.file;
    var _$$props$$$slots4 = $$props.$$slots,
        $$slots = _$$props$$$slots4 === void 0 ? {} : _$$props$$$slots4,
        $$scope = $$props.$$scope;

    $$self.$set = function ($$props) {
      if ("file" in $$props) $$invalidate(0, file = $$props.file);
      if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
    };

    var image;
    var href;

    $$self.$$.update = function () {
      if ($$self.$$.dirty &
      /*file*/
      1) {
        $$invalidate(1, image = isImage(file));
      }

      if ($$self.$$.dirty &
      /*file, image*/
      3) {
        $$invalidate(2, href = file && (image ? compressed(file.url) : file.url));
      }
    };

    return [file, image, href, $$scope, $$slots];
  }

  var File = /*#__PURE__*/function (_SvelteComponent4) {
    _inherits(File, _SvelteComponent4);

    var _super4 = _createSuper(File);

    function File(options) {
      var _this4;

      _classCallCheck(this, File);

      _this4 = _super4.call(this);
      init(_assertThisInitialized(_this4), options, instance$3, create_fragment$3, safe_not_equal, {
        file: 0
      });
      return _this4;
    }

    return File;
  }(SvelteComponent);
  /* src/Time.svelte generated by Svelte v3.20.1 */


  var get_no_utc_slot_changes = function get_no_utc_slot_changes(dirty) {
    return {
      localLongFormat: dirty &
      /*localLongFormat*/
      16,
      formatted: dirty &
      /*formatted*/
      32
    };
  };

  var get_no_utc_slot_context = function get_no_utc_slot_context(ctx) {
    return {
      localLongFormat:
      /*localLongFormat*/
      ctx[4],
      formatted:
      /*formatted*/
      ctx[5]
    };
  };

  var get_default_slot_changes = function get_default_slot_changes(dirty) {
    return {
      localLongFormat: dirty &
      /*localLongFormat*/
      16,
      formatted: dirty &
      /*formatted*/
      32
    };
  };

  var get_default_slot_context = function get_default_slot_context(ctx) {
    return {
      localLongFormat:
      /*localLongFormat*/
      ctx[4],
      formatted:
      /*formatted*/
      ctx[5]
    };
  }; // (49:0) {:else}


  function create_else_block_1$1(ctx) {
    var time;
    var time_class_value;
    var current;
    var no_utc_slot_template =
    /*$$slots*/
    ctx[11]["no-utc"];
    var no_utc_slot = create_slot(no_utc_slot_template, ctx,
    /*$$scope*/
    ctx[10], get_no_utc_slot_context);
    return {
      c: function c() {
        time = element("time");
        if (no_utc_slot) no_utc_slot.c();
        attr(time, "class", time_class_value = classes("missing",
        /*klass*/
        ctx[0]));
        attr(time, "utc", "never");
      },
      m: function m(target, anchor) {
        insert(target, time, anchor);

        if (no_utc_slot) {
          no_utc_slot.m(time, null);
        }

        current = true;
      },
      p: function p(ctx, dirty) {
        if (no_utc_slot) {
          if (no_utc_slot.p && dirty &
          /*$$scope, localLongFormat, formatted*/
          1072) {
            no_utc_slot.p(get_slot_context(no_utc_slot_template, ctx,
            /*$$scope*/
            ctx[10], get_no_utc_slot_context), get_slot_changes(no_utc_slot_template,
            /*$$scope*/
            ctx[10], dirty, get_no_utc_slot_changes));
          }
        }

        if (!current || dirty &
        /*klass*/
        1 && time_class_value !== (time_class_value = classes("missing",
        /*klass*/
        ctx[0]))) {
          attr(time, "class", time_class_value);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(no_utc_slot, local);
        current = true;
      },
      o: function o(local) {
        transition_out(no_utc_slot, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(time);
        if (no_utc_slot) no_utc_slot.d(detaching);
      }
    };
  } // (37:0) {#if utc}


  function create_if_block$4(ctx) {
    var time;
    var time_class_value;
    var current;
    var default_slot_template =
    /*$$slots*/
    ctx[11].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[10], get_default_slot_context);
    var default_slot_or_fallback = default_slot || fallback_block$3(ctx);
    return {
      c: function c() {
        time = element("time");
        if (default_slot_or_fallback) default_slot_or_fallback.c();
        attr(time, "class", time_class_value = classes(
        /*klass*/
        ctx[0]));
        attr(time, "utcformatted",
        /*utcFormatted*/
        ctx[3]);
      },
      m: function m(target, anchor) {
        insert(target, time, anchor);

        if (default_slot_or_fallback) {
          default_slot_or_fallback.m(time, null);
        }

        current = true;
      },
      p: function p(ctx, dirty) {
        if (default_slot) {
          if (default_slot.p && dirty &
          /*$$scope, localLongFormat, formatted*/
          1072) {
            default_slot.p(get_slot_context(default_slot_template, ctx,
            /*$$scope*/
            ctx[10], get_default_slot_context), get_slot_changes(default_slot_template,
            /*$$scope*/
            ctx[10], dirty, get_default_slot_changes));
          }
        } else {
          if (default_slot_or_fallback && default_slot_or_fallback.p && dirty &
          /*localLongFormat, formatted, date, utc*/
          54) {
            default_slot_or_fallback.p(ctx, dirty);
          }
        }

        if (!current || dirty &
        /*klass*/
        1 && time_class_value !== (time_class_value = classes(
        /*klass*/
        ctx[0]))) {
          attr(time, "class", time_class_value);
        }

        if (!current || dirty &
        /*utcFormatted*/
        8) {
          attr(time, "utcformatted",
          /*utcFormatted*/
          ctx[3]);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(default_slot_or_fallback, local);
        current = true;
      },
      o: function o(local) {
        transition_out(default_slot_or_fallback, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(time);
        if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
      }
    };
  } // (43:4) {:else}


  function create_else_block$4(ctx) {
    var t;
    return {
      c: function c() {
        t = text(
        /*utc*/
        ctx[1]);
      },
      m: function m(target, anchor) {
        insert(target, t, anchor);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*utc*/
        2) set_data(t,
        /*utc*/
        ctx[1]);
      },
      d: function d(detaching) {
        if (detaching) detach(t);
      }
    };
  } // (41:4) {#if date}


  function create_if_block_1$3(ctx) {
    var abbr;
    var t;
    return {
      c: function c() {
        abbr = element("abbr");
        t = text(
        /*formatted*/
        ctx[5]);
        attr(abbr, "title",
        /*localLongFormat*/
        ctx[4]);
      },
      m: function m(target, anchor) {
        insert(target, abbr, anchor);
        append(abbr, t);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*formatted*/
        32) set_data(t,
        /*formatted*/
        ctx[5]);

        if (dirty &
        /*localLongFormat*/
        16) {
          attr(abbr, "title",
          /*localLongFormat*/
          ctx[4]);
        }
      },
      d: function d(detaching) {
        if (detaching) detach(abbr);
      }
    };
  } // (40:38)      


  function fallback_block$3(ctx) {
    var if_block_anchor;

    function select_block_type_1(ctx, dirty) {
      if (
      /*date*/
      ctx[2]) return create_if_block_1$3;
      return create_else_block$4;
    }

    var current_block_type = select_block_type_1(ctx);
    var if_block = current_block_type(ctx);
    return {
      c: function c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function m(target, anchor) {
        if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },
      p: function p(ctx, dirty) {
        if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx);

          if (if_block) {
            if_block.c();
            if_block.m(time, if_block_anchor);
          }
        }
      },
      d: function d(detaching) {
        if_block.d(detaching);
        if (detaching) detach(if_block_anchor);
      }
    };
  }

  function create_fragment$4(ctx) {
    var current_block_type_index;
    var if_block;
    var if_block_anchor;
    var current;
    var if_block_creators = [create_if_block$4, create_else_block_1$1];
    var if_blocks = [];

    function select_block_type(ctx, dirty) {
      if (
      /*utc*/
      ctx[1]) return 0;
      return 1;
    }

    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c: function c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p: function p(ctx, _ref11) {
        var _ref12 = _slicedToArray(_ref11, 1),
            dirty = _ref12[0];

        var previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx);

        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          }

          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block);
        current = false;
      },
      d: function d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching) detach(if_block_anchor);
      }
    };
  }

  function instance$4($$self, $$props, $$invalidate) {
    console.log("___DATEFORMAT___", dateformat);
    var sixDays = 6 * DAYS;
    var threeSixtyDays = 360 * DAYS;
    var _$$props$class = $$props.class,
        klass = _$$props$class === void 0 ? [] : _$$props$class;
    var utc = $$props.utc;
    var _$$props$local = $$props.local,
        local = _$$props$local === void 0 ? null : _$$props$local;

    function format(date) {
      var now = new Date();
      var withinAWeek = now - sixDays < date || date < now + sixDays;
      var withinAYear = now - threeSixtyDays < date || date < now + threeSixtyDays;
      return now.toLocaleString("en-US", {
        year: !withinAYear ? "numeric" : undefined,
        month: !withinAWeek ? "short" : undefined,
        weekday: withinAWeek ? "short" : undefined,
        day: !withinAWeek ? "numeric" : undefined,
        hour: "numeric",
        minute: "numeric"
      }).replace(/,/g, "");
    }

    var _$$props$$$slots5 = $$props.$$slots,
        $$slots = _$$props$$$slots5 === void 0 ? {} : _$$props$$$slots5,
        $$scope = $$props.$$scope;

    $$self.$set = function ($$props) {
      if ("class" in $$props) $$invalidate(0, klass = $$props.class);
      if ("utc" in $$props) $$invalidate(1, utc = $$props.utc);
      if ("local" in $$props) $$invalidate(6, local = $$props.local);
      if ("$$scope" in $$props) $$invalidate(10, $$scope = $$props.$$scope);
    };

    var date;
    var utcFormatted;
    var localLongFormat;
    var formatted;

    $$self.$$.update = function () {
      if ($$self.$$.dirty &
      /*local, utc*/
      66) {
        $$invalidate(6, local = local || utc);
      }

      if ($$self.$$.dirty &
      /*local*/
      64) {
        $$invalidate(2, date = tryDate(local));
      }

      if ($$self.$$.dirty &
      /*utc*/
      2) {
        $$invalidate(3, utcFormatted = utc instanceof Date && !isNaN(utc) ? utc.toISOString() : utc);
      }

      if ($$self.$$.dirty &
      /*date*/
      4) {
        $$invalidate(4, localLongFormat = long.format(date));
      }

      if ($$self.$$.dirty &
      /*date*/
      4) {
        $$invalidate(5, formatted = format(date));
      }
    };

    return [klass, utc, date, utcFormatted, localLongFormat, formatted, local, sixDays, threeSixtyDays, format, $$scope, $$slots];
  }

  var Time = /*#__PURE__*/function (_SvelteComponent5) {
    _inherits(Time, _SvelteComponent5);

    var _super5 = _createSuper(Time);

    function Time(options) {
      var _this5;

      _classCallCheck(this, Time);

      _this5 = _super5.call(this);
      init(_assertThisInitialized(_this5), options, instance$4, create_fragment$4, safe_not_equal, {
        class: 0,
        utc: 1,
        local: 6
      });
      return _this5;
    }

    return Time;
  }(SvelteComponent);
  /* src/Updated.svelte generated by Svelte v3.20.1 */


  var get_not_updated_slot_changes = function get_not_updated_slot_changes(dirty) {
    return {};
  };

  var get_not_updated_slot_context = function get_not_updated_slot_context(ctx) {
    return {};
  };

  var get_not_a_date_slot_changes = function get_not_a_date_slot_changes(dirty) {
    return {};
  };

  var get_not_a_date_slot_context = function get_not_a_date_slot_context(ctx) {
    return {};
  }; // (19:0) {:else}


  function create_else_block_1$2(ctx) {
    var current;
    var not_updated_slot_template =
    /*$$slots*/
    ctx[2]["not-updated"];
    var not_updated_slot = create_slot(not_updated_slot_template, ctx,
    /*$$scope*/
    ctx[3], get_not_updated_slot_context);
    var not_updated_slot_or_fallback = not_updated_slot || fallback_block_1(ctx);
    return {
      c: function c() {
        if (not_updated_slot_or_fallback) not_updated_slot_or_fallback.c();
      },
      m: function m(target, anchor) {
        if (not_updated_slot_or_fallback) {
          not_updated_slot_or_fallback.m(target, anchor);
        }

        current = true;
      },
      p: function p(ctx, dirty) {
        if (not_updated_slot) {
          if (not_updated_slot.p && dirty &
          /*$$scope*/
          8) {
            not_updated_slot.p(get_slot_context(not_updated_slot_template, ctx,
            /*$$scope*/
            ctx[3], get_not_updated_slot_context), get_slot_changes(not_updated_slot_template,
            /*$$scope*/
            ctx[3], dirty, get_not_updated_slot_changes));
          }
        } else {
          if (not_updated_slot_or_fallback && not_updated_slot_or_fallback.p && dirty &
          /*updated*/
          1) {
            not_updated_slot_or_fallback.p(ctx, dirty);
          }
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(not_updated_slot_or_fallback, local);
        current = true;
      },
      o: function o(local) {
        transition_out(not_updated_slot_or_fallback, local);
        current = false;
      },
      d: function d(detaching) {
        if (not_updated_slot_or_fallback) not_updated_slot_or_fallback.d(detaching);
      }
    };
  } // (11:0) {#if updated}


  function create_if_block$5(ctx) {
    var current;
    var time = new Time({
      props: {
        class: "updated",
        utc:
        /*updated*/
        ctx[0],
        $$slots: {
          default: [create_default_slot]
        },
        $$scope: {
          ctx: ctx
        }
      }
    });
    return {
      c: function c() {
        create_component(time.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(time, target, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        var time_changes = {};
        if (dirty &
        /*updated*/
        1) time_changes.utc =
        /*updated*/
        ctx[0];

        if (dirty &
        /*$$scope, updated, updatedDate*/
        11) {
          time_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        time.$set(time_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(time.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(time.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(time, detaching);
      }
    };
  } // (20:27) {updated | 'Never'}


  function fallback_block_1(ctx) {
    var t_value = (
    /*updated*/
    ctx[0] | "Never") + "";
    var t;
    return {
      c: function c() {
        t = text(t_value);
      },
      m: function m(target, anchor) {
        insert(target, t, anchor);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*updated*/
        1 && t_value !== (t_value = (
        /*updated*/
        ctx[0] | "Never") + "")) set_data(t, t_value);
      },
      d: function d(detaching) {
        if (detaching) detach(t);
      }
    };
  } // (15:4) {:else}


  function create_else_block$5(ctx) {
    var current;
    var not_a_date_slot_template =
    /*$$slots*/
    ctx[2]["not-a-date"];
    var not_a_date_slot = create_slot(not_a_date_slot_template, ctx,
    /*$$scope*/
    ctx[3], get_not_a_date_slot_context);
    var not_a_date_slot_or_fallback = not_a_date_slot || fallback_block$4(ctx);
    return {
      c: function c() {
        if (not_a_date_slot_or_fallback) not_a_date_slot_or_fallback.c();
      },
      m: function m(target, anchor) {
        if (not_a_date_slot_or_fallback) {
          not_a_date_slot_or_fallback.m(target, anchor);
        }

        current = true;
      },
      p: function p(ctx, dirty) {
        if (not_a_date_slot) {
          if (not_a_date_slot.p && dirty &
          /*$$scope*/
          8) {
            not_a_date_slot.p(get_slot_context(not_a_date_slot_template, ctx,
            /*$$scope*/
            ctx[3], get_not_a_date_slot_context), get_slot_changes(not_a_date_slot_template,
            /*$$scope*/
            ctx[3], dirty, get_not_a_date_slot_changes));
          }
        } else {
          if (not_a_date_slot_or_fallback && not_a_date_slot_or_fallback.p && dirty &
          /*updated*/
          1) {
            not_a_date_slot_or_fallback.p(ctx, dirty);
          }
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(not_a_date_slot_or_fallback, local);
        current = true;
      },
      o: function o(local) {
        transition_out(not_a_date_slot_or_fallback, local);
        current = false;
      },
      d: function d(detaching) {
        if (not_a_date_slot_or_fallback) not_a_date_slot_or_fallback.d(detaching);
      }
    };
  } // (13:4) {#if updatedDate}


  function create_if_block_1$4(ctx) {
    var t_value = medTz.format(
    /*updated*/
    ctx[0]) + "";
    var t;
    return {
      c: function c() {
        t = text(t_value);
      },
      m: function m(target, anchor) {
        insert(target, t, anchor);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*updated*/
        1 && t_value !== (t_value = medTz.format(
        /*updated*/
        ctx[0]) + "")) set_data(t, t_value);
      },
      i: noop,
      o: noop,
      d: function d(detaching) {
        if (detaching) detach(t);
      }
    };
  } // (16:28) {updated}


  function fallback_block$4(ctx) {
    var t;
    return {
      c: function c() {
        t = text(
        /*updated*/
        ctx[0]);
      },
      m: function m(target, anchor) {
        insert(target, t, anchor);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*updated*/
        1) set_data(t,
        /*updated*/
        ctx[0]);
      },
      d: function d(detaching) {
        if (detaching) detach(t);
      }
    };
  } // (12:2) <Time class="updated" utc="{updated}">


  function create_default_slot(ctx) {
    var current_block_type_index;
    var if_block;
    var if_block_anchor;
    var current;
    var if_block_creators = [create_if_block_1$4, create_else_block$5];
    var if_blocks = [];

    function select_block_type_1(ctx, dirty) {
      if (
      /*updatedDate*/
      ctx[1]) return 0;
      return 1;
    }

    current_block_type_index = select_block_type_1(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c: function c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        var previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_1(ctx);

        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          }

          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block);
        current = false;
      },
      d: function d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching) detach(if_block_anchor);
      }
    };
  }

  function create_fragment$5(ctx) {
    var current_block_type_index;
    var if_block;
    var if_block_anchor;
    var current;
    var if_block_creators = [create_if_block$5, create_else_block_1$2];
    var if_blocks = [];

    function select_block_type(ctx, dirty) {
      if (
      /*updated*/
      ctx[0]) return 0;
      return 1;
    }

    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c: function c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p: function p(ctx, _ref13) {
        var _ref14 = _slicedToArray(_ref13, 1),
            dirty = _ref14[0];

        var previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx);

        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          }

          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block);
        current = false;
      },
      d: function d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching) detach(if_block_anchor);
      }
    };
  }

  function instance$5($$self, $$props, $$invalidate) {
    var updated = $$props.updated;
    var _$$props$$$slots6 = $$props.$$slots,
        $$slots = _$$props$$$slots6 === void 0 ? {} : _$$props$$$slots6,
        $$scope = $$props.$$scope;

    $$self.$set = function ($$props) {
      if ("updated" in $$props) $$invalidate(0, updated = $$props.updated);
      if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
    };

    var updatedDate;

    $$self.$$.update = function () {
      if ($$self.$$.dirty &
      /*updated*/
      1) {
        $$invalidate(1, updatedDate = tryDate(updated));
      }
    };

    return [updated, updatedDate, $$slots, $$scope];
  }

  var Updated = /*#__PURE__*/function (_SvelteComponent6) {
    _inherits(Updated, _SvelteComponent6);

    var _super6 = _createSuper(Updated);

    function Updated(options) {
      var _this6;

      _classCallCheck(this, Updated);

      _this6 = _super6.call(this);
      init(_assertThisInitialized(_this6), options, instance$5, create_fragment$5, safe_not_equal, {
        updated: 0
      });
      return _this6;
    }

    return Updated;
  }(SvelteComponent);
  /* src/Timestamp.svelte generated by Svelte v3.20.1 */


  var get_no_timestamp_slot_changes = function get_no_timestamp_slot_changes(dirty) {
    return {};
  };

  var get_no_timestamp_slot_context = function get_no_timestamp_slot_context(ctx) {
    return {};
  }; // (24:0) {:else}


  function create_else_block$6(ctx) {
    var current;
    var no_timestamp_slot_template =
    /*$$slots*/
    ctx[2]["no-timestamp"];
    var no_timestamp_slot = create_slot(no_timestamp_slot_template, ctx,
    /*$$scope*/
    ctx[3], get_no_timestamp_slot_context);
    return {
      c: function c() {
        if (no_timestamp_slot) no_timestamp_slot.c();
      },
      m: function m(target, anchor) {
        if (no_timestamp_slot) {
          no_timestamp_slot.m(target, anchor);
        }

        current = true;
      },
      p: function p(ctx, dirty) {
        if (no_timestamp_slot) {
          if (no_timestamp_slot.p && dirty &
          /*$$scope*/
          8) {
            no_timestamp_slot.p(get_slot_context(no_timestamp_slot_template, ctx,
            /*$$scope*/
            ctx[3], get_no_timestamp_slot_context), get_slot_changes(no_timestamp_slot_template,
            /*$$scope*/
            ctx[3], dirty, get_no_timestamp_slot_changes));
          }
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(no_timestamp_slot, local);
        current = true;
      },
      o: function o(local) {
        transition_out(no_timestamp_slot, local);
        current = false;
      },
      d: function d(detaching) {
        if (no_timestamp_slot) no_timestamp_slot.d(detaching);
      }
    };
  } // (10:0) {#if timestamp}


  function create_if_block$6(ctx) {
    var current;
    var time = new Time({
      props: {
        class:
        /*klass*/
        ctx[1],
        utc:
        /*timestamp*/
        ctx[0].utc,
        local:
        /*timestamp*/
        ctx[0].local,
        $$slots: {
          default: [create_default_slot$1, function (_ref15) {
            var localLongFormat = _ref15.localLongFormat,
                formatted = _ref15.formatted;
            return {
              4: localLongFormat,
              5: formatted
            };
          }, function (_ref16) {
            var localLongFormat = _ref16.localLongFormat,
                formatted = _ref16.formatted;
            return (localLongFormat ? 16 : 0) | (formatted ? 32 : 0);
          }]
        },
        $$scope: {
          ctx: ctx
        }
      }
    });
    return {
      c: function c() {
        create_component(time.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(time, target, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        var time_changes = {};
        if (dirty &
        /*klass*/
        2) time_changes.class =
        /*klass*/
        ctx[1];
        if (dirty &
        /*timestamp*/
        1) time_changes.utc =
        /*timestamp*/
        ctx[0].utc;
        if (dirty &
        /*timestamp*/
        1) time_changes.local =
        /*timestamp*/
        ctx[0].local;

        if (dirty &
        /*$$scope, timestamp, localLongFormat, formatted*/
        57) {
          time_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        time.$set(time_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(time.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(time.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(time, detaching);
      }
    };
  } // (13:4) {#if timestamp.title}


  function create_if_block_2$2(ctx) {
    var dfn;
    var t_value =
    /*timestamp*/
    ctx[0].title + "";
    var t;
    return {
      c: function c() {
        dfn = element("dfn");
        t = text(t_value);
      },
      m: function m(target, anchor) {
        insert(target, dfn, anchor);
        append(dfn, t);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*timestamp*/
        1 && t_value !== (t_value =
        /*timestamp*/
        ctx[0].title + "")) set_data(t, t_value);
      },
      d: function d(detaching) {
        if (detaching) detach(dfn);
      }
    };
  } // (19:4) {#if timestamp.user || timestamp.by}


  function create_if_block_1$5(ctx) {
    var current;
    var contact = new Contact({
      props: {
        contact:
        /*timestamp*/
        ctx[0].user ||
        /*timestamp*/
        ctx[0].by
      }
    });
    return {
      c: function c() {
        create_component(contact.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(contact, target, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        var contact_changes = {};
        if (dirty &
        /*timestamp*/
        1) contact_changes.contact =
        /*timestamp*/
        ctx[0].user ||
        /*timestamp*/
        ctx[0].by;
        contact.$set(contact_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(contact.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(contact.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(contact, detaching);
      }
    };
  } // (12:2) <Time class={klass} utc={timestamp.utc} local={timestamp.local} let:localLongFormat let:formatted>


  function create_default_slot$1(ctx) {
    var t0;
    var abbr;
    var t1_value =
    /*formatted*/
    ctx[5] + "";
    var t1;
    var abbr_title_value;
    var t2;
    var if_block1_anchor;
    var current;
    var if_block0 =
    /*timestamp*/
    ctx[0].title && create_if_block_2$2(ctx);
    var if_block1 = (
    /*timestamp*/
    ctx[0].user ||
    /*timestamp*/
    ctx[0].by) && create_if_block_1$5(ctx);
    return {
      c: function c() {
        if (if_block0) if_block0.c();
        t0 = space();
        abbr = element("abbr");
        t1 = text(t1_value);
        t2 = space();
        if (if_block1) if_block1.c();
        if_block1_anchor = empty();
        attr(abbr, "title", abbr_title_value =
        /*localLongFormat*/
        ctx[4]);
      },
      m: function m(target, anchor) {
        if (if_block0) if_block0.m(target, anchor);
        insert(target, t0, anchor);
        insert(target, abbr, anchor);
        append(abbr, t1);
        insert(target, t2, anchor);
        if (if_block1) if_block1.m(target, anchor);
        insert(target, if_block1_anchor, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        if (
        /*timestamp*/
        ctx[0].title) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
          } else {
            if_block0 = create_if_block_2$2(ctx);
            if_block0.c();
            if_block0.m(t0.parentNode, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }

        if ((!current || dirty &
        /*formatted*/
        32) && t1_value !== (t1_value =
        /*formatted*/
        ctx[5] + "")) set_data(t1, t1_value);

        if (!current || dirty &
        /*localLongFormat*/
        16 && abbr_title_value !== (abbr_title_value =
        /*localLongFormat*/
        ctx[4])) {
          attr(abbr, "title", abbr_title_value);
        }

        if (
        /*timestamp*/
        ctx[0].user ||
        /*timestamp*/
        ctx[0].by) {
          if (if_block1) {
            if_block1.p(ctx, dirty);
            transition_in(if_block1, 1);
          } else {
            if_block1 = create_if_block_1$5(ctx);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, function () {
            if_block1 = null;
          });
          check_outros();
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block1);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block1);
        current = false;
      },
      d: function d(detaching) {
        if (if_block0) if_block0.d(detaching);
        if (detaching) detach(t0);
        if (detaching) detach(abbr);
        if (detaching) detach(t2);
        if (if_block1) if_block1.d(detaching);
        if (detaching) detach(if_block1_anchor);
      }
    };
  }

  function create_fragment$6(ctx) {
    var current_block_type_index;
    var if_block;
    var if_block_anchor;
    var current;
    var if_block_creators = [create_if_block$6, create_else_block$6];
    var if_blocks = [];

    function select_block_type(ctx, dirty) {
      if (
      /*timestamp*/
      ctx[0]) return 0;
      return 1;
    }

    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c: function c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p: function p(ctx, _ref17) {
        var _ref18 = _slicedToArray(_ref17, 1),
            dirty = _ref18[0];

        var previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx);

        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          }

          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block);
        current = false;
      },
      d: function d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching) detach(if_block_anchor);
      }
    };
  }

  function instance$6($$self, $$props, $$invalidate) {
    var timestamp = $$props.timestamp;
    var _$$props$class2 = $$props.class,
        klass = _$$props$class2 === void 0 ? [] : _$$props$class2;
    var _$$props$$$slots7 = $$props.$$slots,
        $$slots = _$$props$$$slots7 === void 0 ? {} : _$$props$$$slots7,
        $$scope = $$props.$$scope;

    $$self.$set = function ($$props) {
      if ("timestamp" in $$props) $$invalidate(0, timestamp = $$props.timestamp);
      if ("class" in $$props) $$invalidate(1, klass = $$props.class);
      if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
    };

    return [timestamp, klass, $$slots, $$scope];
  }

  var Timestamp = /*#__PURE__*/function (_SvelteComponent7) {
    _inherits(Timestamp, _SvelteComponent7);

    var _super7 = _createSuper(Timestamp);

    function Timestamp(options) {
      var _this7;

      _classCallCheck(this, Timestamp);

      _this7 = _super7.call(this);
      init(_assertThisInitialized(_this7), options, instance$6, create_fragment$6, safe_not_equal, {
        timestamp: 0,
        class: 1
      });
      return _this7;
    }

    return Timestamp;
  }(SvelteComponent);
  /* src/Note.svelte generated by Svelte v3.20.1 */


  var get_no_note_slot_changes = function get_no_note_slot_changes(dirty) {
    return {};
  };

  var get_no_note_slot_context = function get_no_note_slot_context(ctx) {
    return {};
  };

  function get_each_context(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[3] = list[i];
    return child_ctx;
  } // (19:0) {:else}


  function create_else_block$7(ctx) {
    var blockquote;
    var current;
    var no_note_slot_template =
    /*$$slots*/
    ctx[2]["no-note"];
    var no_note_slot = create_slot(no_note_slot_template, ctx,
    /*$$scope*/
    ctx[1], get_no_note_slot_context);
    return {
      c: function c() {
        blockquote = element("blockquote");
        if (no_note_slot) no_note_slot.c();
        attr(blockquote, "class", "missing");
      },
      m: function m(target, anchor) {
        insert(target, blockquote, anchor);

        if (no_note_slot) {
          no_note_slot.m(blockquote, null);
        }

        current = true;
      },
      p: function p(ctx, dirty) {
        if (no_note_slot) {
          if (no_note_slot.p && dirty &
          /*$$scope*/
          2) {
            no_note_slot.p(get_slot_context(no_note_slot_template, ctx,
            /*$$scope*/
            ctx[1], get_no_note_slot_context), get_slot_changes(no_note_slot_template,
            /*$$scope*/
            ctx[1], dirty, get_no_note_slot_changes));
          }
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(no_note_slot, local);
        current = true;
      },
      o: function o(local) {
        transition_out(no_note_slot, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(blockquote);
        if (no_note_slot) no_note_slot.d(detaching);
      }
    };
  } // (7:0) {#if note}


  function create_if_block$7(ctx) {
    var blockquote;
    var t;
    var footer;
    var current;
    var each_value =
    /*note*/
    ctx[0].lines || [];
    var each_blocks = [];

    for (var _i7 = 0; _i7 < each_value.length; _i7 += 1) {
      each_blocks[_i7] = create_each_block(get_each_context(ctx, each_value, _i7));
    }

    var timestamp = new Timestamp({
      props: {
        class: "issued",
        timestamp:
        /*note*/
        ctx[0].issued
      }
    });
    return {
      c: function c() {
        blockquote = element("blockquote");

        for (var _i8 = 0; _i8 < each_blocks.length; _i8 += 1) {
          each_blocks[_i8].c();
        }

        t = space();
        footer = element("footer");
        create_component(timestamp.$$.fragment);
      },
      m: function m(target, anchor) {
        insert(target, blockquote, anchor);

        for (var _i9 = 0; _i9 < each_blocks.length; _i9 += 1) {
          each_blocks[_i9].m(blockquote, null);
        }

        append(blockquote, t);
        append(blockquote, footer);
        mount_component(timestamp, footer, null);
        current = true;
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*note*/
        1) {
          each_value =
          /*note*/
          ctx[0].lines || [];

          var _i10;

          for (_i10 = 0; _i10 < each_value.length; _i10 += 1) {
            var child_ctx = get_each_context(ctx, each_value, _i10);

            if (each_blocks[_i10]) {
              each_blocks[_i10].p(child_ctx, dirty);
            } else {
              each_blocks[_i10] = create_each_block(child_ctx);

              each_blocks[_i10].c();

              each_blocks[_i10].m(blockquote, t);
            }
          }

          for (; _i10 < each_blocks.length; _i10 += 1) {
            each_blocks[_i10].d(1);
          }

          each_blocks.length = each_value.length;
        }

        var timestamp_changes = {};
        if (dirty &
        /*note*/
        1) timestamp_changes.timestamp =
        /*note*/
        ctx[0].issued;
        timestamp.$set(timestamp_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(timestamp.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(timestamp.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(blockquote);
        destroy_each(each_blocks, detaching);
        destroy_component(timestamp);
      }
    };
  } // (10:4) {#each (note.lines || []) as line}


  function create_each_block(ctx) {
    var p;
    var t_value =
    /*line*/
    ctx[3] + "";
    var t;
    return {
      c: function c() {
        p = element("p");
        t = text(t_value);
      },
      m: function m(target, anchor) {
        insert(target, p, anchor);
        append(p, t);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*note*/
        1 && t_value !== (t_value =
        /*line*/
        ctx[3] + "")) set_data(t, t_value);
      },
      d: function d(detaching) {
        if (detaching) detach(p);
      }
    };
  }

  function create_fragment$7(ctx) {
    var current_block_type_index;
    var if_block;
    var if_block_anchor;
    var current;
    var if_block_creators = [create_if_block$7, create_else_block$7];
    var if_blocks = [];

    function select_block_type(ctx, dirty) {
      if (
      /*note*/
      ctx[0]) return 0;
      return 1;
    }

    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c: function c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p: function p(ctx, _ref19) {
        var _ref20 = _slicedToArray(_ref19, 1),
            dirty = _ref20[0];

        var previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx);

        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, function () {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          }

          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block);
        current = false;
      },
      d: function d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching) detach(if_block_anchor);
      }
    };
  }

  function instance$7($$self, $$props, $$invalidate) {
    var note = $$props.note;
    var _$$props$$$slots8 = $$props.$$slots,
        $$slots = _$$props$$$slots8 === void 0 ? {} : _$$props$$$slots8,
        $$scope = $$props.$$scope;

    $$self.$set = function ($$props) {
      if ("note" in $$props) $$invalidate(0, note = $$props.note);
      if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
    };

    return [note, $$scope, $$slots];
  }

  var Note = /*#__PURE__*/function (_SvelteComponent8) {
    _inherits(Note, _SvelteComponent8);

    var _super8 = _createSuper(Note);

    function Note(options) {
      var _this8;

      _classCallCheck(this, Note);

      _this8 = _super8.call(this);
      init(_assertThisInitialized(_this8), options, instance$7, create_fragment$7, safe_not_equal, {
        note: 0
      });
      return _this8;
    }

    return Note;
  }(SvelteComponent);

  exports.Address = Address;
  exports.Contact = Contact;
  exports.File = File;
  exports.Image = Image;
  exports.Note = Note;
  exports.Timestamp = Timestamp;
  exports.Updated = Updated;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});
},{}],"defaultProps.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timestamp = exports.Note = exports.Updated = exports.Image = exports.File = exports.Contact = exports.Address = void 0;
var Address = JSON.stringify({
  address: {
    id: '90210',
    street: '15 Broken Dreams Blvd.',
    city: 'Beverly Hills',
    state: 'CA',
    postal: '90210'
  }
}, null, 2);
exports.Address = Address;
var Contact = JSON.stringify({
  contact: {
    id: "007",
    type: "user",
    format: "agent",
    display: "James Bond"
  }
}, null, 2);
exports.Contact = Contact;
var File = JSON.stringify({}, null, 2);
exports.File = File;
var Image = JSON.stringify({}, null, 2);
exports.Image = Image;
var Updated = JSON.stringify({}, null, 2);
exports.Updated = Updated;
var Note = JSON.stringify({}, null, 2);
exports.Note = Note;
var Timestamp = JSON.stringify({}, null, 2);
exports.Timestamp = Timestamp;
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"Example.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var components = _interopRequireWildcard(require("../dist"));

var defaultProps = _interopRequireWildcard(require("./defaultProps"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var file = "Example.svelte";

function add_css() {
  var style = (0, _internal.element)("style");
  style.id = "svelte-1hwgym9-style";
  style.textContent = "article.svelte-1hwgym9{border-bottom:1px solid var(--gray-6)}section.svelte-1hwgym9{display:flex}label.svelte-1hwgym9{width:50%}textarea.svelte-1hwgym9{min-height:10em;display:block;width:100%}data.svelte-1hwgym9{display:block;margin:.5em}\n";
  (0, _internal.append_dev)(document.head, style);
} // (58:6) {:else}


function create_else_block(ctx) {
  var pre;
  var t_value = JSON.stringify(_objectSpread({},
  /*props*/
  ctx[1]), null, 2) + "";
  var t;
  var block = {
    c: function create() {
      pre = (0, _internal.element)("pre");
      t = (0, _internal.text)(t_value);
      (0, _internal.add_location)(pre, file, 58, 8, 992);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, pre, anchor);
      (0, _internal.append_dev)(pre, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*props*/
      2 && t_value !== (t_value = JSON.stringify(_objectSpread({},
      /*props*/
      ctx[1]), null, 2) + "")) (0, _internal.set_data_dev)(t, t_value);
    },
    i: _internal.noop,
    o: _internal.noop,
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(pre);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(58:6) {:else}",
    ctx: ctx
  });
  return block;
} // (54:6) {#if success}


function create_if_block(ctx) {
  var data;
  var current;
  var switch_instance_spread_levels = [
  /*props*/
  ctx[1]];
  var switch_value =
  /*component*/
  ctx[3];

  function switch_props(ctx) {
    var switch_instance_props = {};

    for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = (0, _internal.assign)(switch_instance_props, switch_instance_spread_levels[i]);
    }

    return {
      props: switch_instance_props,
      $$inline: true
    };
  }

  if (switch_value) {
    var switch_instance = new switch_value(switch_props(ctx));
  }

  var block = {
    c: function create() {
      data = (0, _internal.element)("data");
      if (switch_instance) (0, _internal.create_component)(switch_instance.$$.fragment);
      (0, _internal.attr_dev)(data, "class", "svelte-1hwgym9");
      (0, _internal.add_location)(data, file, 54, 8, 888);
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, data, anchor);

      if (switch_instance) {
        (0, _internal.mount_component)(switch_instance, data, null);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      var switch_instance_changes = dirty &
      /*props*/
      2 ? (0, _internal.get_spread_update)(switch_instance_spread_levels, [(0, _internal.get_spread_object)(
      /*props*/
      ctx[1])]) : {};

      if (switch_value !== (switch_value =
      /*component*/
      ctx[3])) {
        if (switch_instance) {
          (0, _internal.group_outros)();
          var old_component = switch_instance;
          (0, _internal.transition_out)(old_component.$$.fragment, 1, 0, function () {
            (0, _internal.destroy_component)(old_component, 1);
          });
          (0, _internal.check_outros)();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          (0, _internal.create_component)(switch_instance.$$.fragment);
          (0, _internal.transition_in)(switch_instance.$$.fragment, 1);
          (0, _internal.mount_component)(switch_instance, data, null);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function intro(local) {
      if (current) return;
      if (switch_instance) (0, _internal.transition_in)(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance) (0, _internal.transition_out)(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(data);
      if (switch_instance) (0, _internal.destroy_component)(switch_instance);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(54:6) {#if success}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var article;
  var h2;
  var t0;
  var t1;
  var section;
  var label0;
  var t2;
  var textarea;
  var t3;
  var label1;
  var t4_value = (
  /*success*/
  ctx[2] ? "Result" : "Parse Error") + "";
  var t4;
  var t5;
  var current_block_type_index;
  var if_block;
  var current;
  var dispose;
  var if_block_creators = [create_if_block, create_else_block];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*success*/
    ctx[2]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var block = {
    c: function create() {
      article = (0, _internal.element)("article");
      h2 = (0, _internal.element)("h2");
      t0 = (0, _internal.text)(
      /*name*/
      ctx[0]);
      t1 = (0, _internal.space)();
      section = (0, _internal.element)("section");
      label0 = (0, _internal.element)("label");
      t2 = (0, _internal.text)("Props JSON\n      ");
      textarea = (0, _internal.element)("textarea");
      t3 = (0, _internal.space)();
      label1 = (0, _internal.element)("label");
      t4 = (0, _internal.text)(t4_value);
      t5 = (0, _internal.space)();
      if_block.c();
      (0, _internal.add_location)(h2, file, 43, 2, 696);
      (0, _internal.attr_dev)(textarea, "class", "svelte-1hwgym9");
      (0, _internal.add_location)(textarea, file, 48, 6, 760);
      (0, _internal.attr_dev)(label0, "class", "svelte-1hwgym9");
      (0, _internal.add_location)(label0, file, 46, 4, 729);
      (0, _internal.attr_dev)(label1, "class", "svelte-1hwgym9");
      (0, _internal.add_location)(label1, file, 51, 4, 809);
      (0, _internal.attr_dev)(section, "class", "svelte-1hwgym9");
      (0, _internal.add_location)(section, file, 45, 2, 715);
      (0, _internal.attr_dev)(article, "class", "svelte-1hwgym9");
      (0, _internal.add_location)(article, file, 42, 0, 684);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor, remount) {
      (0, _internal.insert_dev)(target, article, anchor);
      (0, _internal.append_dev)(article, h2);
      (0, _internal.append_dev)(h2, t0);
      (0, _internal.append_dev)(article, t1);
      (0, _internal.append_dev)(article, section);
      (0, _internal.append_dev)(section, label0);
      (0, _internal.append_dev)(label0, t2);
      (0, _internal.append_dev)(label0, textarea);
      (0, _internal.set_input_value)(textarea,
      /*json*/
      ctx[4]);
      (0, _internal.append_dev)(section, t3);
      (0, _internal.append_dev)(section, label1);
      (0, _internal.append_dev)(label1, t4);
      (0, _internal.append_dev)(label1, t5);
      if_blocks[current_block_type_index].m(label1, null);
      current = true;
      if (remount) dispose();
      dispose = (0, _internal.listen_dev)(textarea, "input",
      /*textarea_input_handler*/
      ctx[5]);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!current || dirty &
      /*name*/
      1) (0, _internal.set_data_dev)(t0,
      /*name*/
      ctx[0]);

      if (dirty &
      /*json*/
      16) {
        (0, _internal.set_input_value)(textarea,
        /*json*/
        ctx[4]);
      }

      if ((!current || dirty &
      /*success*/
      4) && t4_value !== (t4_value = (
      /*success*/
      ctx[2] ? "Result" : "Parse Error") + "")) (0, _internal.set_data_dev)(t4, t4_value);
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx, dirty);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        (0, _internal.group_outros)();
        (0, _internal.transition_out)(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        (0, _internal.check_outros)();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        (0, _internal.transition_in)(if_block, 1);
        if_block.m(label1, null);
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(if_block);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(article);
      if_blocks[current_block_type_index].d();
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function wrapped(fn) {
  try {
    return [true, fn()];
  } catch (err) {
    return [false, err];
  }
}

function instance($$self, $$props, $$invalidate) {
  var name = $$props.name;
  var props = null,
      success = false;
  var writable_props = ["name"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Example> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  (0, _internal.validate_slots)("Example", $$slots, []);

  function textarea_input_handler() {
    json = this.value;
    $$invalidate(4, json), $$invalidate(0, name);
  }

  $$self.$set = function ($$props) {
    if ("name" in $$props) $$invalidate(0, name = $$props.name);
  };

  $$self.$capture_state = function () {
    return {
      components: components,
      defaultProps: defaultProps,
      name: name,
      wrapped: wrapped,
      props: props,
      success: success,
      component: component,
      json: json
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("name" in $$props) $$invalidate(0, name = $$props.name);
    if ("props" in $$props) $$invalidate(1, props = $$props.props);
    if ("success" in $$props) $$invalidate(2, success = $$props.success);
    if ("component" in $$props) $$invalidate(3, component = $$props.component);
    if ("json" in $$props) $$invalidate(4, json = $$props.json);
  };

  var component;
  var json;

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*name*/
    1) {
      $: $$invalidate(3, component = components[name]);
    }

    if ($$self.$$.dirty &
    /*name*/
    1) {
      $: $$invalidate(4, json = defaultProps[name]);
    }

    if ($$self.$$.dirty &
    /*json*/
    16) {
      var _wrapped, _wrapped2;

      $: $$invalidate(2, (_wrapped = wrapped(function () {
        return JSON.parse(json);
      }), _wrapped2 = _slicedToArray(_wrapped, 2), success = _wrapped2[0], props = _wrapped2[1], _wrapped), success, (($$invalidate(1, props), $$invalidate(4, json)), $$invalidate(0, name)));
    }
  };

  return [name, props, success, component, json, textarea_input_handler];
}

var Example = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Example, _SvelteComponentDev);

  var _super = _createSuper(Example);

  function Example(options) {
    var _this;

    _classCallCheck(this, Example);

    _this = _super.call(this, options);
    if (!document.getElementById("svelte-1hwgym9-style")) add_css();
    (0, _internal.init)(_assertThisInitialized(_this), options, instance, create_fragment, _internal.safe_not_equal, {
      name: 0
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Example",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*name*/
    ctx[0] === undefined && !("name" in props)) {
      console.warn("<Example> was created without expected prop 'name'");
    }

    return _this;
  }

  _createClass(Example, [{
    key: "name",
    get: function get() {
      throw new Error("<Example>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Example>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Example;
}(_internal.SvelteComponentDev);

var _default = Example;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","../dist":"../dist/index.js","./defaultProps":"defaultProps.js","_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"Demo.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _Example = _interopRequireDefault(require("./Example.svelte"));

var components = _interopRequireWildcard(require("../dist"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Object_1 = _internal.globals.Object;
var file = "Demo.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
} // (10:0) {#each keys as name}


function create_each_block(ctx) {
  var current;
  var example = new _Example.default({
    props: {
      name:
      /*name*/
      ctx[1]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      (0, _internal.create_component)(example.$$.fragment);
    },
    m: function mount(target, anchor) {
      (0, _internal.mount_component)(example, target, anchor);
      current = true;
    },
    p: _internal.noop,
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(example.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(example.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      (0, _internal.destroy_component)(example, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(10:0) {#each keys as name}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var h1;
  var t1;
  var each_1_anchor;
  var current;
  var each_value =
  /*keys*/
  ctx[0];
  (0, _internal.validate_each_argument)(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return (0, _internal.transition_out)(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      h1 = (0, _internal.element)("h1");
      h1.textContent = "Components";
      t1 = (0, _internal.space)();

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      each_1_anchor = (0, _internal.empty)();
      (0, _internal.add_location)(h1, file, 7, 0, 144);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, h1, anchor);
      (0, _internal.insert_dev)(target, t1, anchor);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(target, anchor);
      }

      (0, _internal.insert_dev)(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*keys*/
      1) {
        each_value =
        /*keys*/
        ctx[0];
        (0, _internal.validate_each_argument)(each_value);

        var _i3;

        for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);

            (0, _internal.transition_in)(each_blocks[_i3], 1);
          } else {
            each_blocks[_i3] = create_each_block(child_ctx);

            each_blocks[_i3].c();

            (0, _internal.transition_in)(each_blocks[_i3], 1);

            each_blocks[_i3].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        (0, _internal.group_outros)();

        for (_i3 = each_value.length; _i3 < each_blocks.length; _i3 += 1) {
          out(_i3);
        }

        (0, _internal.check_outros)();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i4 = 0; _i4 < each_value.length; _i4 += 1) {
        (0, _internal.transition_in)(each_blocks[_i4]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        (0, _internal.transition_out)(each_blocks[_i5]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(h1);
      if (detaching) (0, _internal.detach_dev)(t1);
      (0, _internal.destroy_each)(each_blocks, detaching);
      if (detaching) (0, _internal.detach_dev)(each_1_anchor);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var keys = Object.keys(components);
  var writable_props = [];
  Object_1.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Demo> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  (0, _internal.validate_slots)("Demo", $$slots, []);

  $$self.$capture_state = function () {
    return {
      Example: _Example.default,
      components: components,
      keys: keys
    };
  };

  return [keys];
}

var Demo = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Demo, _SvelteComponentDev);

  var _super = _createSuper(Demo);

  function Demo(options) {
    var _this;

    _classCallCheck(this, Demo);

    _this = _super.call(this, options);
    (0, _internal.init)(_assertThisInitialized(_this), options, instance, create_fragment, _internal.safe_not_equal, {});
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Demo",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Demo;
}(_internal.SvelteComponentDev);

var _default = Demo;
exports.default = _default;
},{"svelte/internal":"../node_modules/svelte/internal/index.mjs","./Example.svelte":"Example.svelte","../dist":"../dist/index.js"}],"app.js":[function(require,module,exports) {
"use strict";

var _Demo = _interopRequireDefault(require("./Demo.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.demo = new _Demo.default({
  target: document.getElementById('svelte'),
  props: {}
});
},{"./Demo.svelte":"Demo.svelte"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50309" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map