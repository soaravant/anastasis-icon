const POINTS = [
    {
        id: 'christ',
        title: 'Ο Χριστός στο κέντρο της δόξας',
        short: 'Το κέντρο της σύνθεσης και η νίκη πάνω στον θάνατο.',
        description: 'Η εστίαση πηγαίνει στο κέντρο της σύνθεσης, όπου ο Χριστός εικονίζεται μέσα στη δόξα, φωτισμένος και νικητής επί του Άδη.',
        x: 0.500,
        y: 0.075,
        zoom: 2.2
    },
    {
        id: 'adam',
        title: 'Ο Αδάμ',
        short: 'Ο Χριστός ανασύρει τον Αδάμ από τον τάφο.',
        description: 'Η λεπτομέρεια δείχνει τον Αδάμ να ανασύρεται από τον τάφο, υπογραμμίζοντας την καθολικότητα της σωτηρίας του ανθρώπου.',
        x: 0.365,
        y: 0.475,
        zoom: 2.65
    },
    {
        id: 'eve',
        title: 'Η Εύα',
        short: 'Η Εύα απαντά στην κίνηση της σωτηρίας.',
        description: 'Στη δεξιά πλευρά ο Χριστός αρπάζει και την Εύα από τον τάφο, παρουσιάζοντας τη λύτρωση ολόκληρου του ανθρωπίνου γένους.',
        x: 0.625,
        y: 0.445,
        zoom: 2.65
    },
    {
        id: 'kings',
        title: 'Οι βασιλείς Δαβίδ και Σολομών',
        short: 'Οι δίκαιοι της Παλαιάς Διαθήκης περιμένουν την Ανάσταση.',
        description: 'Η ομάδα στα αριστερά, με βασιλικά ενδύματα και στέμματα, αποδίδεται ως οι δίκαιοι της Παλαιάς Διαθήκης που αναμένουν τον Χριστό.',
        x: 0.3,
        y: 0.24,
        zoom: 2.45
    },
    {
        id: 'forerunner',
        title: 'Ο Τίμιος Πρόδρομος',
        short: 'Ο Ιωάννης ο Πρόδρομος ξεχωρίζει πίσω από τους δικαίους.',
        description: 'Πίσω από τις βασιλικές μορφές διακρίνεται ο Τίμιος Πρόδρομος, που προαναγγέλλει και στον Άδη την έλευση του Χριστού.',
        x: 0.38,
        y: 0.17,
        zoom: 2.7
    },
    {
        id: 'right-righteous',
        title: 'Οι δίκαιοι στη δεξιά πλευρά',
        short: 'Οι μορφές που υποδέχονται το γεγονός της Αναστάσεως.',
        description: 'Στη δεξιά ομάδα της εικόνας φαίνονται επιπλέον δίκαιοι και προφήτες που συμμετέχουν οπτικά στο γεγονός της καθόδου στον Άδη.',
        x: 0.68,
        y: 0.22,
        zoom: 2.45
    },
    {
        id: 'myrrhbearers',
        title: 'Οι Μυροφόρες και ο άγγελος',
        short: 'Η αριστερή χαμηλή σκηνή με τις γυναικείες μορφές και τον άγγελο.',
        description: 'Στο αριστερό χαμηλό μέρος της εικόνας, οι Μυροφόρες και ο άγγελος θυμίζουν την ευαγγελική μαρτυρία του κενού μνημείου.',
        x: 0.12,
        y: 0.485,
        zoom: 2.5
    },
    {
        id: 'cross-gates',
        title: 'Ο Σταυρός και οι συντριμμένες πύλες',
        short: 'Τα σπασμένα φύλλα των πυλών κάτω από τα πόδια του Χριστού.',
        description: 'Η εστίαση δείχνει τον Χριστό να πατά επάνω στις συντριμμένες πύλες του Άδη, σύμβολο της οριστικής κατάργησης της εξουσίας του θανάτου.',
        x: 0.5,
        y: 0.75,
        zoom: 2.55
    },
    {
        id: 'hades',
        title: 'Ο δεμένος Άδης και τα κλειδιά',
        short: 'Ο πεσμένος Άδης ανάμεσα στα σπασμένα κλειδιά και δεσμά.',
        description: 'Στο χαμηλό κέντρο διακρίνεται η μορφή του δεμένου Άδη, περιστοιχισμένη από σπασμένα κλειδιά και εργαλεία, ως σημείο της συντριβής του θανάτου.',
        x: 0.51,
        y: 0.94,
        zoom: 2.95
    },
    {
        id: 'guards',
        title: 'Οι κοιμώμενοι φρουροί',
        short: 'Η δεξιά χαμηλή λεπτομέρεια με τους πεσμένους φρουρούς.',
        description: 'Στη δεξιά χαμηλή πλευρά της σύνθεσης, οι πεσμένοι φρουροί συμπληρώνουν τη δραματικότητα της σκηνής και την αδυναμία της ανθρώπινης ισχύος μπροστά στην Ανάσταση.',
        x: 0.93,
        y: 0.58,
        zoom: 2.7
    }
];

const titleEl = document.getElementById('pin-title');
const descriptionEl = document.getElementById('pin-description');
const modalEl = document.getElementById('info-modal');
const closeModalButton = document.getElementById('close-modal');
const pinsLayerEl = document.getElementById('pins-layer');
const imageFrameEl = document.getElementById('image-frame');
const imageStageEl = document.getElementById('image-stage');

const IMAGE_RATIO = 2656 / 1600;
const MAX_SCALE = 5;

let activePointId = null;
const viewState = {
    x: 0,
    y: 0,
    scale: 1
};
const layoutState = {
    frameWidth: 0,
    frameHeight: 0,
    stageWidth: 0,
    stageHeight: 0
};
const gestureState = {
    pointers: new Map(),
    mode: null,
    startPointer: null,
    startX: 0,
    startY: 0,
    startScale: 1,
    startDistance: 0,
    anchorX: 0,
    anchorY: 0
};

function init() {
    renderPins();
    updateStageLayout();
    resetView(false);

    closeModalButton.addEventListener('click', event => {
        event.stopPropagation();
        resetView(true);
    });
    imageFrameEl.addEventListener('click', event => {
        if (event.target.closest('.image-pin')) {
            return;
        }
        if (isTouchDevice()) {
            return;
        }
        resetView(true);
    });
    window.addEventListener('resize', () => {
        updateStageLayout();
        if (!activePointId) {
            if (viewState.scale > 1) {
                setView(clampView(viewState.x, viewState.y, viewState.scale), false);
                return;
            }
            resetView(false);
            return;
        }
        const point = POINTS.find(entry => entry.id === activePointId);
        if (point) {
            focusPoint(point, false);
        }
    });

    window.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            resetView(true);
        }
    });
    imageFrameEl.addEventListener('pointerdown', onPointerDown);
    imageFrameEl.addEventListener('pointermove', onPointerMove);
    imageFrameEl.addEventListener('pointerup', onPointerEnd);
    imageFrameEl.addEventListener('pointercancel', onPointerEnd);
}

function renderPins() {
    pinsLayerEl.innerHTML = '';

    POINTS.forEach((point, index) => {
        const pin = document.createElement('button');
        pin.type = 'button';
        pin.className = 'image-pin';
        pin.dataset.pointId = point.id;
        pin.style.left = `${point.x * 100}%`;
        pin.style.top = `${point.y * 100}%`;
        pin.title = point.title;
        pin.setAttribute('aria-label', point.title);
        pin.innerHTML = `<span>${index + 1}</span>`;
        pin.addEventListener('click', event => {
            event.stopPropagation();
            focusPoint(point, true);
        });
        pinsLayerEl.appendChild(pin);
    });
}

function focusPoint(point, smooth = true) {
    if (activePointId === point.id) {
        resetView(smooth);
        return;
    }

    activePointId = point.id;
    syncActiveState();
    updateInfo(point);
    modalEl.classList.remove('hidden');

    const frameWidth = layoutState.frameWidth;
    const frameHeight = layoutState.frameHeight;
    const scale = point.zoom;
    const targetX = layoutState.stageWidth * point.x;
    const targetY = layoutState.stageHeight * point.y;

    const nextX = (frameWidth / 2) - (targetX * scale);
    const nextY = (frameHeight / 2) - (targetY * scale);
    setView(clampView(nextX, nextY, scale), smooth);
}

function resetView(smooth = true) {
    activePointId = null;
    syncActiveState();
    modalEl.classList.add('hidden');
    titleEl.textContent = 'Η Ανάσταση';
    descriptionEl.textContent = 'Πάτησε ένα pin πάνω στην εικόνα για να μεγεθύνεις σε αυτό το τμήμα της σύνθεσης.';
    setView({
        x: (layoutState.frameWidth - layoutState.stageWidth) / 2,
        y: (layoutState.frameHeight - layoutState.stageHeight) / 2,
        scale: 1
    }, smooth);
}

function updateInfo(point) {
    titleEl.textContent = point.title;
    descriptionEl.textContent = point.description;
}

function syncActiveState() {
    document.querySelectorAll('.image-pin').forEach(pin => {
        const isActive = pin.dataset.pointId === activePointId;
        pin.classList.toggle('is-active', isActive);
        pin.classList.toggle('is-muted', Boolean(activePointId) && !isActive);
        pin.setAttribute('aria-pressed', String(isActive));
    });
}

function updateStageLayout() {
    const frameWidth = imageFrameEl.clientWidth;
    const frameHeight = imageFrameEl.clientHeight;

    let stageWidth = frameWidth;
    let stageHeight = stageWidth / IMAGE_RATIO;

    if (stageHeight > frameHeight) {
        stageHeight = frameHeight;
        stageWidth = stageHeight * IMAGE_RATIO;
    }

    layoutState.frameWidth = frameWidth;
    layoutState.frameHeight = frameHeight;
    layoutState.stageWidth = stageWidth;
    layoutState.stageHeight = stageHeight;

    imageStageEl.style.width = `${stageWidth}px`;
    imageStageEl.style.height = `${stageHeight}px`;
}

function setView(nextView, smooth = true) {
    viewState.x = nextView.x;
    viewState.y = nextView.y;
    viewState.scale = nextView.scale;
    imageStageEl.style.transitionDuration = smooth ? '650ms' : '0ms';
    imageStageEl.style.transform = `translate(${viewState.x}px, ${viewState.y}px) scale(${viewState.scale})`;
    imageFrameEl.classList.toggle('is-zoomed', viewState.scale > 1.01);
}

function clampView(x, y, scale) {
    const clampedScale = clamp(scale, 1, MAX_SCALE);
    const scaledWidth = layoutState.stageWidth * clampedScale;
    const scaledHeight = layoutState.stageHeight * clampedScale;
    const minX = Math.min(0, layoutState.frameWidth - scaledWidth);
    const maxX = Math.max(0, layoutState.frameWidth - scaledWidth);
    const minY = Math.min(0, layoutState.frameHeight - scaledHeight);
    const maxY = Math.max(0, layoutState.frameHeight - scaledHeight);

    return {
        x: clamp(x, minX, maxX),
        y: clamp(y, minY, maxY),
        scale: clampedScale
    };
}

function onPointerDown(event) {
    if (event.pointerType !== 'touch') {
        return;
    }
    if (event.target.closest('.image-pin') && gestureState.pointers.size === 0) {
        return;
    }

    const point = getLocalPoint(event);
    gestureState.pointers.set(event.pointerId, point);
    imageFrameEl.setPointerCapture(event.pointerId);

    if (gestureState.pointers.size === 1) {
        startPanGesture();
        return;
    }

    startPinchGesture();
}

function onPointerMove(event) {
    if (!gestureState.pointers.has(event.pointerId)) {
        return;
    }

    gestureState.pointers.set(event.pointerId, getLocalPoint(event));

    if (gestureState.pointers.size >= 2) {
        event.preventDefault();
        updatePinchGesture();
        return;
    }

    if (gestureState.mode === 'pan') {
        event.preventDefault();
        updatePanGesture();
    }
}

function onPointerEnd(event) {
    if (!gestureState.pointers.has(event.pointerId)) {
        return;
    }

    gestureState.pointers.delete(event.pointerId);
    imageFrameEl.classList.remove('is-panning');

    try {
        imageFrameEl.releasePointerCapture(event.pointerId);
    } catch (error) {
        // Ignore capture release errors for already-released pointers.
    }

    if (gestureState.pointers.size >= 2) {
        startPinchGesture();
        return;
    }

    if (gestureState.pointers.size === 1) {
        startPanGesture();
        return;
    }

    gestureState.mode = null;
}

function startPanGesture() {
    const [pointer] = gestureState.pointers.values();
    if (!pointer) {
        gestureState.mode = null;
        return;
    }

    gestureState.mode = 'pan';
    gestureState.startPointer = pointer;
    gestureState.startX = viewState.x;
    gestureState.startY = viewState.y;
}

function updatePanGesture() {
    const [pointer] = gestureState.pointers.values();
    if (!pointer || !gestureState.startPointer) {
        return;
    }

    const deltaX = pointer.x - gestureState.startPointer.x;
    const deltaY = pointer.y - gestureState.startPointer.y;
    imageFrameEl.classList.toggle('is-panning', viewState.scale > 1.01);
    setView(clampView(
        gestureState.startX + deltaX,
        gestureState.startY + deltaY,
        viewState.scale
    ), false);
}

function startPinchGesture() {
    const [first, second] = Array.from(gestureState.pointers.values()).slice(0, 2);
    if (!first || !second) {
        return;
    }

    const center = getMidpoint(first, second);
    gestureState.mode = 'pinch';
    gestureState.startScale = viewState.scale;
    gestureState.startDistance = Math.max(getDistance(first, second), 1);
    gestureState.anchorX = (center.x - viewState.x) / viewState.scale;
    gestureState.anchorY = (center.y - viewState.y) / viewState.scale;
}

function updatePinchGesture() {
    const [first, second] = Array.from(gestureState.pointers.values()).slice(0, 2);
    if (!first || !second) {
        return;
    }

    const center = getMidpoint(first, second);
    const distance = Math.max(getDistance(first, second), 1);
    const scale = clamp(
        gestureState.startScale * (distance / gestureState.startDistance),
        1,
        MAX_SCALE
    );
    const nextX = center.x - (gestureState.anchorX * scale);
    const nextY = center.y - (gestureState.anchorY * scale);

    setView(clampView(nextX, nextY, scale), false);
}

function getLocalPoint(event) {
    const rect = imageFrameEl.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function getDistance(first, second) {
    return Math.hypot(second.x - first.x, second.y - first.y);
}

function getMidpoint(first, second) {
    return {
        x: (first.x + second.x) / 2,
        y: (first.y + second.y) / 2
    };
}

function isTouchDevice() {
    return window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

init();
