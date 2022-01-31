System.register(["./chunk-vendor.js", "./chunk-frameworks.js", "./chunk-notification-list-focus.js", "./chunk-cookies.js", "./chunk-edit.js", "./chunk-responsive-underlinenav.js", "./chunk-tag-input.js"], function(aw, _) {
    "use strict";
    var y, te, q, m, d, ne, Gr, ta, Jr, A, v, na, Ie, Oe, Yr, ra, oa, sa, ia, aa, ca, la, ua, da, Sn, fa, Qr, ma, Zr, pa, Ln, ha, ga, ba, ya, va, At, Pt, wa, ja, Ea, eo, xt, Sa, La, _a, ka, Ta, Ca, Aa, T, Pa, xa, H, _n, Ma, Fe, Le, Mt, $t, Re, De, to, me, He, qt, Ne, E, N, It, kn, $a, ce, Ot, no, ro, oo, qa, Ia, Ft, pe, Tn, Rt, Cn, Dt, so, U, le, re, _e, Be, Ue, An, Oa, Ht, Fa, Ra, Da, Ha, Na, Ba, io, ao, Ua, Wa, Nt, za, Va, Pn, Ka, co, Xa, Ga, lo, uo, Ja, Ya, Qa, Za, ec, fo, tc, nc, xn, rc, mo, oc, po, sc, ic, ac, Mn, ho, cc, lc, uc, $n, dc, go, fc, mc, pc, bo, yo, hc;
    return {
        setters: [function(u) {
            y = u.t,
            te = u.b,
            q = u.c,
            m = u.o,
            d = u.a,
            ne = u.j,
            Gr = u.I,
            ta = u.R,
            Jr = u.C,
            A = u.r,
            v = u.f,
            na = u.A,
            Ie = u.k,
            Oe = u.e,
            Yr = u.l,
            ra = u.s,
            oa = u.m,
            sa = u.n,
            ia = u.q,
            aa = u.v,
            ca = u.w,
            la = u.x,
            ua = u.y,
            da = u.z,
            Sn = u.B,
            fa = u.E,
            Qr = u.F,
            ma = u.G,
            Zr = u.H,
            pa = u.J,
            Ln = u.h,
            ha = u.K,
            ga = u.Q,
            ba = u.M,
            ya = u.L,
            va = u.N,
            At = u.O,
            Pt = u.P,
            wa = u.U,
            ja = u.V,
            Ea = u.W,
            eo = u.X,
            xt = u.Y,
            Sa = u.Z,
            La = u._,
            _a = u.$,
            ka = u.a0,
            Ta = u.a1,
            Ca = u.a2,
            Aa = u.a3,
            T = u.a4
        }
        , function(u) {
            Pa = u.p,
            xa = u.k,
            H = u.e,
            _n = u.l,
            Ma = u.n,
            Fe = u.j,
            Le = u.q,
            Mt = u.v,
            $t = u.t,
            Re = u.w,
            De = u.x,
            to = u.i,
            me = u.y,
            He = u.z,
            qt = u.o,
            Ne = u.A,
            E = u.c,
            N = u.r,
            It = u.B,
            kn = u.C,
            $a = u.D,
            ce = u.E,
            Ot = u.F,
            no = u.G,
            ro = u.H,
            oo = u.I,
            qa = u.J,
            Ia = u.K,
            Ft = u.L,
            pe = u.a,
            Tn = u.M,
            Rt = u.N,
            Cn = u.O,
            Dt = u.P,
            so = u.Q,
            U = u.R,
            le = u.m,
            re = u.S,
            _e = u.g,
            Be = u.T,
            Ue = u.U,
            An = u.V,
            Oa = u.W,
            Ht = u.X,
            Fa = u.Y,
            Ra = u.Z,
            Da = u._,
            Ha = u.$,
            Na = u.a0,
            Ba = u.a1,
            io = u.a2,
            ao = u.a3,
            Ua = u.a4,
            Wa = u.a5,
            Nt = u.a6,
            za = u.a7,
            Va = u.a8,
            Pn = u.a9,
            Ka = u.aa,
            co = u.ab,
            Xa = u.ac,
            Ga = u.ad,
            lo = u.ae,
            uo = u.af,
            Ja = u.ag,
            Ya = u.ah,
            Qa = u.ai,
            Za = u.aj,
            ec = u.ak,
            fo = u.al,
            tc = u.am,
            nc = u.s,
            xn = u.an,
            rc = u.ao,
            mo = u.ap,
            oc = u.aq,
            po = u.ar,
            sc = u.as,
            ic = u.at,
            ac = u.au,
            Mn = u.u,
            ho = u.av,
            cc = u.aw,
            lc = u.ax,
            uc = u.ay,
            $n = u.h,
            dc = u.az,
            go = u.aA,
            fc = u.aB
        }
        , function(u) {
            mc = u.g,
            pc = u.r
        }
        , function(u) {
            bo = u.g,
            yo = u.d,
            hc = u.s
        }
        , function() {}
        , function() {}
        , function() {}
        ],
        execute: function() {
            const u = function() {
                return document.readyState === "complete" ? Promise.resolve() : new Promise(e=>{
                    window.addEventListener("load", e)
                }
                )
            }();
            class gc extends HTMLElement {
                async connectedCallback() {
                    await u,
                    this.content && await sh(this.lines, this.content, this.characterDelay, this.lineDelay),
                    this.cursor && (this.cursor.hidden = !0),
                    this.dispatchEvent(new CustomEvent("typing:complete",{
                        bubbles: !0,
                        cancelable: !0
                    }))
                }
                get content() {
                    return this.querySelector('[data-target="typing-effect.content"]')
                }
                get cursor() {
                    return this.querySelector('[data-target="typing-effect.cursor"]')
                }
                get lines() {
                    const t = this.getAttribute("data-lines");
                    try {
                        return t ? JSON.parse(t) : []
                    } catch (n) {
                        return []
                    }
                }
                get prefersReducedMotion() {
                    return window.matchMedia("(prefers-reduced-motion)").matches
                }
                get characterDelay() {
                    return this.prefersReducedMotion ? 0 : Math.max(0, Math.min(Math.floor(Number(this.getAttribute("data-character-delay"))), 2147483647)) || 40
                }
                set characterDelay(t) {
                    if (t > 2147483647 || t < 0)
                        throw new DOMException("Value is negative or greater than the allowed amount");
                    this.setAttribute("data-character-delay", String(t))
                }
                get lineDelay() {
                    return this.prefersReducedMotion ? 0 : Math.max(0, Math.min(Math.floor(Number(this.getAttribute("data-line-delay"))), 2147483647)) || 40
                }
                set lineDelay(t) {
                    if (t > 2147483647 || t < 0)
                        throw new DOMException("Value is negative or greater than the allowed amount");
                    this.setAttribute("data-line-delay", String(t))
                }
            }
            window.customElements.get("typing-effect") || (window.TypingEffectElement = gc,
            window.customElements.define("typing-effect", gc));
            async function sh(e, t, n, r) {
                for (let o = 0; o < e.length; o++) {
                    if (n === 0)
                        t.append(e[o]);
                    else
                        for (const s of e[o].split(""))
                            await bc(n),
                            t.innerHTML += s;
                    r !== 0 && await bc(r),
                    o < e.length - 1 && t.append(document.createElement("br"))
                }
            }
            async function bc(e) {
                return new Promise(t=>{
                    setTimeout(t, e)
                }
                )
            }
            const ih = 2e3;
            function yc(e) {
                e.style.display = "inline-block"
            }
            function vc(e) {
                e.style.display = "none"
            }
            function ah(e) {
                const [t,n] = e.querySelectorAll(".octicon");
                !t || !n || (yc(t),
                vc(n))
            }
            function ch(e) {
                const [t,n] = e.querySelectorAll(".octicon");
                !t || !n || (vc(t),
                yc(n))
            }
            const qn = new WeakMap;
            document.addEventListener("clipboard-copy", function({target: e}) {
                if (!(e instanceof HTMLElement) || !e.hasAttribute("data-view-component"))
                    return;
                const t = qn.get(e);
                t ? (clearTimeout(t),
                qn.delete(e)) : ch(e),
                qn.set(e, setTimeout(()=>{
                    ah(e),
                    qn.delete(e)
                }
                , ih))
            });
            var lh = Object.defineProperty, uh = (e,t)=>lh(e, "name", {
                value: t,
                configurable: !0
            }), wc = (e,t,n)=>{
                if (!t.has(e))
                    throw TypeError("Cannot " + n)
            }
            , k = (e,t,n)=>(wc(e, t, "read from private field"),
            n ? n.call(e) : t.get(e)), We = (e,t,n)=>{
                if (t.has(e))
                    throw TypeError("Cannot add the same private member more than once");
                t instanceof WeakSet ? t.add(e) : t.set(e, n)
            }
            , he = (e,t,n,r)=>(wc(e, t, "write to private field"),
            r ? r.call(e, n) : t.set(e, n),
            n), ze, V, ke, oe, Bt, vo, it;
            class wo extends HTMLElement {
                constructor() {
                    super(...arguments);
                    We(this, ze, !1),
                    We(this, V, new Set),
                    We(this, ke, new Map),
                    We(this, oe, 1 / 0),
                    We(this, Bt, new Map),
                    We(this, vo, new Map),
                    We(this, it, 0)
                }
                static get observedAttributes() {
                    return ["data-updating"]
                }
                get updating() {
                    return this.getAttribute("data-updating") === "lazy" ? "lazy" : "eager"
                }
                set updating(t) {
                    this.setAttribute("data-updating", t)
                }
                get size() {
                    return k(this, V).size
                }
                get range() {
                    const t = this.getBoundingClientRect().height
                      , {scrollTop: n} = this
                      , r = `${n}-${t}`;
                    if (k(this, Bt).has(r))
                        return k(this, Bt).get(r);
                    let o = 0
                      , s = 0
                      , i = 0
                      , a = 0;
                    const c = k(this, ke);
                    for (const l of k(this, V)) {
                        const f = c.get(l) || k(this, oe);
                        if (i + f < n)
                            i += f,
                            o += 1,
                            s += 1;
                        else if (a - f < t)
                            a += f,
                            s += 1;
                        else if (a >= t)
                            break
                    }
                    return [o, s]
                }
                attributeChangedCallback(t, n, r) {
                    if (n === r || !this.isConnected)
                        return;
                    const o = t === "data-updating" && r === "eager"
                      , s = t === "data-sorted" && this.hasAttribute("data-sorted");
                    (o || s) && this.update()
                }
                connectedCallback() {
                    this.addEventListener("scroll", ()=>this.update()),
                    this.updateSync = this.updateSync.bind(this)
                }
                update() {
                    k(this, it) && cancelAnimationFrame(k(this, it)),
                    !k(this, ze) && this.hasAttribute("data-sorted") ? he(this, it, requestAnimationFrame(()=>{
                        this.dispatchEvent(new CustomEvent("virtual-list-sort",{
                            cancelable: !0
                        })) && this.sort()
                    }
                    )) : he(this, it, requestAnimationFrame(this.updateSync))
                }
                renderItem(t) {
                    const n = {
                        item: t,
                        fragment: document.createDocumentFragment()
                    };
                    return this.dispatchEvent(new CustomEvent("virtual-list-render-item",{
                        detail: n
                    })),
                    n.fragment.children[0]
                }
                recalculateHeights(t) {
                    const n = this.querySelector("ul, ol, tbody");
                    n && (n.append(this.renderItem(t)),
                    he(this, oe, n.children[0].getBoundingClientRect().height),
                    k(this, ke).set(t, k(this, oe)),
                    n.replaceChildren())
                }
                updateSync() {
                    const t = this.querySelector("ul, ol");
                    if (!t)
                        return;
                    const [n,r] = this.range;
                    if (r < n || !this.dispatchEvent(new CustomEvent("virtual-list-update",{
                        cancelable: !0
                    })))
                        return;
                    const s = new Map
                      , i = k(this, vo);
                    let a = -1
                      , c = !0
                      , l = 0;
                    for (const w of k(this, V)) {
                        if (a === -1 && (!Number.isFinite(k(this, oe)) || k(this, oe) === 0) && this.recalculateHeights(w),
                        a += 1,
                        a < n) {
                            l += k(this, ke).get(w) || k(this, oe);
                            continue
                        }
                        if (a > r) {
                            c = !1;
                            break
                        }
                        let S = null;
                        if (i.has(w))
                            S = i.get(w);
                        else {
                            if (S = this.renderItem(w),
                            !S)
                                continue;
                            i.set(w, S)
                        }
                        s.set(w, S)
                    }
                    t.replaceChildren(...s.values()),
                    t.style.paddingTop = `${l}px`;
                    const f = this.size * k(this, oe);
                    t.style.height = `${f || 0}px`;
                    let p = !1;
                    const h = this.getBoundingClientRect().bottom;
                    for (const [w,S] of s) {
                        const {height: P, bottom: j} = S.getBoundingClientRect();
                        p = p || j >= h,
                        k(this, ke).set(w, P)
                    }
                    if (!c && this.size > s.size && !p)
                        return k(this, Bt).delete(`${this.scrollTop}-${this.getBoundingClientRect().height}`),
                        this.update();
                    this.dispatchEvent(new CustomEvent("virtual-list-updated"))
                }
                has(t) {
                    return k(this, V).has(t)
                }
                add(t) {
                    return k(this, V).add(t),
                    he(this, ze, !1),
                    Number.isFinite(k(this, oe)) || this.recalculateHeights(t),
                    this.updating === "eager" && this.update(),
                    this
                }
                delete(t) {
                    const n = k(this, V).delete(t);
                    return he(this, ze, !1),
                    k(this, ke).delete(t),
                    this.updating === "eager" && this.update(),
                    n
                }
                clear() {
                    k(this, V).clear(),
                    k(this, ke).clear(),
                    he(this, oe, 1 / 0),
                    he(this, ze, !0),
                    this.updating === "eager" && this.update()
                }
                forEach(t, n) {
                    for (const r of this)
                        t.call(n, r, r, this)
                }
                entries() {
                    return k(this, V).entries()
                }
                values() {
                    return k(this, V).values()
                }
                keys() {
                    return k(this, V).keys()
                }
                [Symbol.iterator]() {
                    return k(this, V)[Symbol.iterator]()
                }
                sort(t) {
                    return he(this, V, new Set(Array.from(this).sort(t))),
                    he(this, ze, !0),
                    this.updating === "eager" && this.update(),
                    this
                }
            }
            uh(wo, "VirtualListElement"),
            ze = new WeakMap,
            V = new WeakMap,
            ke = new WeakMap,
            oe = new WeakMap,
            Bt = new WeakMap,
            vo = new WeakMap,
            it = new WeakMap,
            window.customElements.get("virtual-list") || (window.VirtualListElement = wo,
            window.customElements.define("virtual-list", wo));
            var dh = Object.defineProperty, jo = (e,t)=>dh(e, "name", {
                value: t,
                configurable: !0
            }), jc = (e,t,n)=>{
                if (!t.has(e))
                    throw TypeError("Cannot " + n)
            }
            , at = (e,t,n)=>(jc(e, t, "read from private field"),
            n ? n.call(e) : t.get(e)), In = (e,t,n)=>{
                if (t.has(e))
                    throw TypeError("Cannot add the same private member more than once");
                t instanceof WeakSet ? t.add(e) : t.set(e, n)
            }
            , Ve = (e,t,n,r)=>(jc(e, t, "write to private field"),
            r ? r.call(e, n) : t.set(e, n),
            n), ct, Ut, Wt, zt;
            function Ec(e) {
                return Boolean(e instanceof Set || e && typeof e == "object" && "size"in e && "add"in e && "delete"in e && "clear"in e)
            }
            jo(Ec, "isSetAlike");
            class Eo extends HTMLElement {
                constructor() {
                    super(...arguments);
                    In(this, ct, 0),
                    In(this, Ut, null),
                    In(this, Wt, void 0),
                    In(this, zt, new Set),
                    this.filtered = new Set,
                    this.filter = jo((t,n)=>String(t).includes(n), "filter")
                }
                static get observedAttributes() {
                    return ["src", "loading", "data-property", "aria-owns"]
                }
                get input() {
                    return this.querySelector("input, textarea")
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
                get loading() {
                    return this.getAttribute("loading") === "lazy" ? "lazy" : "eager"
                }
                set loading(t) {
                    this.setAttribute("loading", t)
                }
                get accept() {
                    return this.getAttribute("accept") || ""
                }
                set accept(t) {
                    this.setAttribute("accept", t)
                }
                get property() {
                    return this.getAttribute("data-property") || ""
                }
                set property(t) {
                    this.setAttribute("data-property", t)
                }
                reset() {
                    this.filtered.clear(),
                    Ve(this, zt, new Set)
                }
                attributeChangedCallback(t, n, r) {
                    const o = this.isConnected && this.src
                      , s = this.loading === "eager"
                      , i = t === "src" || t === "loading" || t === "accept" || t === "data-property"
                      , a = t === "src" || t === "data-property"
                      , c = n !== r;
                    if (a && c && Ve(this, Ut, null),
                    o && s && i && c)
                        cancelAnimationFrame(at(this, ct)),
                        Ve(this, ct, requestAnimationFrame(()=>this.load()));
                    else if (t === "aria-owns") {
                        const l = this.ownerDocument.getElementById(r);
                        if (!l)
                            return;
                        Ec(l) && (this.filtered = l)
                    }
                }
                connectedCallback() {
                    this.src && this.loading === "eager" && (cancelAnimationFrame(at(this, ct)),
                    Ve(this, ct, requestAnimationFrame(()=>this.load())));
                    const t = this.input;
                    !t || (this.hasAttribute("aria-owns") && this.attributeChangedCallback("aria-owns", "", this.getAttribute("aria-owns")),
                    t.setAttribute("autocomplete", "off"),
                    t.setAttribute("spellcheck", "false"),
                    this.src && this.loading === "lazy" && (document.activeElement === t ? this.load() : t.addEventListener("focus", ()=>{
                        this.load()
                    }
                    , {
                        once: !0
                    })),
                    t.addEventListener("input", this))
                }
                disconnectedCallback() {
                    var t;
                    (t = this.input) == null || t.removeEventListener("input", this)
                }
                handleEvent(t) {
                    var n, r;
                    t.type === "input" && (at(this, Wt) && clearTimeout(at(this, Wt)),
                    Ve(this, Wt, window.setTimeout(()=>this.filterItems(), ((r = (n = this.input) == null ? void 0 : n.value) == null ? void 0 : r.length) || 0 < 3 ? 300 : 100)))
                }
                async load() {
                    if (!this.src)
                        throw new Error("missing src");
                    await new Promise(t=>setTimeout(t, 0)),
                    this.dispatchEvent(new Event("loadstart"));
                    try {
                        const t = await this.fetch(this.request());
                        if (!t.url.includes(this.src))
                            return;
                        if (!t.ok)
                            throw new Error(`Failed to load resource: the server responded with a status of ${t.status}`);
                        Ve(this, zt, new Set((await t.json())[this.property])),
                        this.dispatchEvent(new Event("loadend"))
                    } catch (t) {
                        throw (async()=>{
                            this.dispatchEvent(new Event("error")),
                            this.dispatchEvent(new Event("loadend"))
                        }
                        )(),
                        t
                    }
                    this.filtered.clear(),
                    this.filterItems()
                }
                request() {
                    return new Request(this.src,{
                        method: "GET",
                        credentials: "same-origin",
                        headers: {
                            Accept: this.accept || "application/json"
                        }
                    })
                }
                fetch(t) {
                    return fetch(t)
                }
                filterItems() {
                    var t, n;
                    const r = (n = (t = this.input) == null ? void 0 : t.value.trim()) != null ? n : ""
                      , o = at(this, Ut);
                    if (Ve(this, Ut, r),
                    r === o)
                        return;
                    this.dispatchEvent(new CustomEvent("virtual-filter-input-filter"));
                    let s;
                    o && r.includes(o) ? s = this.filtered : (s = at(this, zt),
                    this.filtered.clear());
                    for (const i of s)
                        this.filter(i, r) ? this.filtered.add(i) : this.filtered.delete(i);
                    this.dispatchEvent(new CustomEvent("virtual-filter-input-filtered"))
                }
            }
            jo(Eo, "VirtualFilterInputElement"),
            ct = new WeakMap,
            Ut = new WeakMap,
            Wt = new WeakMap,
            zt = new WeakMap,
            window.customElements.get("virtual-filter-input") || (window.VirtualFilterInputElement = Eo,
            window.customElements.define("virtual-filter-input", Eo));
            var fh = Object.defineProperty, Sc = (e,t)=>fh(e, "name", {
                value: t,
                configurable: !0
            }), Lc = (e,t,n)=>{
                if (!t.has(e))
                    throw TypeError("Cannot " + n)
            }
            , Ke = (e,t,n)=>(Lc(e, t, "read from private field"),
            n ? n.call(e) : t.get(e)), On = (e,t,n)=>{
                if (t.has(e))
                    throw TypeError("Cannot add the same private member more than once");
                t instanceof WeakSet ? t.add(e) : t.set(e, n)
            }
            , Fn = (e,t,n,r)=>(Lc(e, t, "write to private field"),
            r ? r.call(e, n) : t.set(e, n),
            n), Rn, Dn, lt, Vt;
            function _c(e, t) {
                const n = [];
                let r = 0;
                for (let o = 0; o < e.length; o++) {
                    const s = e[o]
                      , i = t.indexOf(s, r);
                    if (i === -1)
                        return n;
                    r = i + 1,
                    n.push(i)
                }
                return n
            }
            Sc(_c, "defaultPositions");
            class Hn extends HTMLElement {
                constructor() {
                    super(...arguments);
                    On(this, Rn, ""),
                    On(this, Dn, ""),
                    On(this, lt, void 0),
                    On(this, Vt, void 0)
                }
                get query() {
                    return this.ownerInput ? this.ownerInput.value : this.getAttribute("query") || ""
                }
                set query(t) {
                    this.setAttribute("query", t)
                }
                get ownerInput() {
                    const t = this.ownerDocument.getElementById(this.getAttribute("data-owner-input") || "");
                    return t instanceof HTMLInputElement ? t : null
                }
                connectedCallback() {
                    var t;
                    this.handleEvent(),
                    (t = this.ownerInput) == null || t.addEventListener("input", this),
                    Fn(this, lt, new MutationObserver(()=>this.handleEvent()))
                }
                handleEvent() {
                    Ke(this, Vt) && cancelAnimationFrame(Ke(this, Vt)),
                    Fn(this, Vt, requestAnimationFrame(()=>this.mark()))
                }
                disconnectedCallback() {
                    var t;
                    (t = this.ownerInput) == null || t.removeEventListener("input", this),
                    Ke(this, lt).disconnect()
                }
                mark() {
                    const t = this.textContent || ""
                      , n = this.query;
                    if (t === Ke(this, Rn) && n === Ke(this, Dn))
                        return;
                    Fn(this, Rn, t),
                    Fn(this, Dn, n),
                    Ke(this, lt).disconnect();
                    let r = 0;
                    const o = document.createDocumentFragment();
                    for (const s of (this.positions || _c)(n, t)) {
                        if (Number(s) !== s || s < r || s > t.length)
                            continue;
                        t.slice(r, s) !== "" && o.appendChild(document.createTextNode(t.slice(r, s))),
                        r = s + 1;
                        const a = document.createElement("mark");
                        a.textContent = t[s],
                        o.appendChild(a)
                    }
                    o.appendChild(document.createTextNode(t.slice(r))),
                    this.replaceChildren(o),
                    Ke(this, lt).observe(this, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0
                    })
                }
            }
            Sc(Hn, "MarkedTextElement"),
            Rn = new WeakMap,
            Dn = new WeakMap,
            lt = new WeakMap,
            Vt = new WeakMap,
            Hn.observedAttributes = ["query", "data-owner-input"],
            window.customElements.get("marked-text") || (window.MarkedTextElement = Hn,
            window.customElements.define("marked-text", Hn));
            var kc = Object.defineProperty
              , mh = Object.getOwnPropertyDescriptor
              , ph = (e,t)=>kc(e, "name", {
                value: t,
                configurable: !0
            })
              , Nn = (e,t,n,r)=>{
                for (var o = r > 1 ? void 0 : r ? mh(t, n) : t, s = e.length - 1, i; s >= 0; s--)
                    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                return r && o && kc(t, n, o),
                o
            }
            ;
            let ut = class extends HTMLElement {
                updateURL(e) {
                    const t = e.currentTarget
                      , n = t.getAttribute("data-url") || "";
                    if (this.helpField.value = n,
                    t.matches(".js-git-protocol-clone-url"))
                        for (const r of this.helpTexts)
                            r.textContent = n;
                    for (const r of this.cloneURLButtons)
                        r.classList.remove("selected");
                    t.classList.add("selected")
                }
            }
            ;
            ph(ut, "GitCloneHelpElement"),
            Nn([y], ut.prototype, "helpField", 2),
            Nn([te], ut.prototype, "helpTexts", 2),
            Nn([te], ut.prototype, "cloneURLButtons", 2),
            ut = Nn([q], ut);
            var Tc = Object.defineProperty
              , hh = Object.getOwnPropertyDescriptor
              , gh = (e,t)=>Tc(e, "name", {
                value: t,
                configurable: !0
            })
              , So = (e,t,n,r)=>{
                for (var o = r > 1 ? void 0 : r ? hh(t, n) : t, s = e.length - 1, i; s >= 0; s--)
                    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                return r && o && Tc(t, n, o),
                o
            }
            ;
            let Kt = class extends HTMLElement {
                constructor() {
                    super();
                    this.addEventListener("socket:message", this.update.bind(this))
                }
                update(e) {
                    const t = e.detail.data;
                    this.link.setAttribute("aria-label", t.aria_label),
                    this.link.setAttribute("data-ga-click", t.ga_click),
                    this.modifier.setAttribute("class", t.span_class)
                }
            }
            ;
            gh(Kt, "NotificationIndicatorElement"),
            So([y], Kt.prototype, "link", 2),
            So([y], Kt.prototype, "modifier", 2),
            Kt = So([q], Kt);
            var Cc = Object.defineProperty
              , bh = Object.getOwnPropertyDescriptor
              , yh = (e,t)=>Cc(e, "name", {
                value: t,
                configurable: !0
            })
              , Lo = (e,t,n,r)=>{
                for (var o = r > 1 ? void 0 : r ? bh(t, n) : t, s = e.length - 1, i; s >= 0; s--)
                    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                return r && o && Cc(t, n, o),
                o
            }
            ;
            let Xt = class extends HTMLElement {
                connectedCallback() {
                    this.addEventListener("socket:message", e=>{
                        const t = e.detail.data;
                        this.link.setAttribute("aria-label", t.aria_label),
                        this.link.setAttribute("data-ga-click", t.ga_click),
                        this.modifier.setAttribute("class", t.span_class)
                    }
                    )
                }
                toggleSidebar() {
                    const e = new CustomEvent("notification-focus:toggle-sidebar",{
                        bubbles: !0
                    });
                    this.dispatchEvent(e)
                }
            }
            ;
            yh(Xt, "NotificationFocusIndicatorElement"),
            Lo([y], Xt.prototype, "link", 2),
            Lo([y], Xt.prototype, "modifier", 2),
            Xt = Lo([q], Xt);
            var Ac = Object.defineProperty
              , vh = Object.getOwnPropertyDescriptor
              , wh = (e,t)=>Ac(e, "name", {
                value: t,
                configurable: !0
            })
              , _o = (e,t,n,r)=>{
                for (var o = r > 1 ? void 0 : r ? vh(t, n) : t, s = e.length - 1, i; s >= 0; s--)
                    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                return r && o && Ac(t, n, o),
                o
            }
            ;
            let Gt = class extends HTMLElement {
                changeFilter(e) {
                    e.preventDefault(),
                    this.detailsContainer.removeAttribute("open");
                    const t = e.currentTarget;
                    this.setFilterTitle(t.innerHTML),
                    this.dispatchEvent(new CustomEvent("focus-mode-filter-change",{
                        detail: {
                            url: t.href
                        }
                    }))
                }
                setFilterTitle(e) {
                    this.filterTitle.innerHTML = e
                }
            }
            ;
            wh(Gt, "NotificationFocusFiltersElement"),
            _o([y], Gt.prototype, "detailsContainer", 2),
            _o([y], Gt.prototype, "filterTitle", 2),
            Gt = _o([q], Gt);
            var Pc = Object.defineProperty
              , jh = Object.getOwnPropertyDescriptor
              , Eh = (e,t)=>Pc(e, "name", {
                value: t,
                configurable: !0
            })
              , Te = (e,t,n,r)=>{
                for (var o = r > 1 ? void 0 : r ? jh(t, n) : t, s = e.length - 1, i; s >= 0; s--)
                    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                return r && o && Pc(t, n, o),
                o
            }
            ;
            let ue = class extends HTMLElement {
                connectedCallback() {
                    m(".js-notification-focus-list", ()=>{
                        this.setupPaginationObserver()
                    }
                    ),
                    d("pjax:end", "#js-repo-pjax-container", ()=>{
                        this.toggleCurrentFocusedNotification()
                    }
                    )
                }
                disconnectedCallback() {
                    this.disconnectCurrentObserver()
                }
                deactivateNavigation() {
                    Pa(this.container)
                }
                activateNavigation() {
                    xa(this.container)
                }
                replaceContent(e) {
                    this.container.innerHTML = "",
                    this.container.appendChild(e),
                    this.setupPaginationObserver()
                }
                onRemoveItem(e) {
                    var t, n, r;
                    const o = e.detail.notificationId
                      , s = mc(this.container, ".js-navigation-item.navigation-focus");
                    (r = (n = (t = this.listElements) == null ? void 0 : t.find(i=>i.notificationId === o)) == null ? void 0 : n.closest("li")) == null || r.remove(),
                    this.listElements.length === 0 ? (this.blankSlate.hidden = !1,
                    this.list.hidden = !0) : pc(s, this.container)
                }
                toggleCurrentFocusedNotification() {
                    for (const e of this.listElements) {
                        const t = window.location.href.includes(e.url());
                        e.setFocusedState(t)
                    }
                }
                setupPaginationObserver() {
                    !!window.IntersectionObserver && this.nextPageItem && (this.currentObserver = new IntersectionObserver(e=>{
                        !e[0].isIntersecting || (this.disconnectCurrentObserver(),
                        this.loadNextPage())
                    }
                    ,{
                        root: this.container,
                        threshold: 0
                    }),
                    this.currentObserver.observe(this.nextPageItem))
                }
                async loadNextPage() {
                    if (!this.nextPageItem)
                        return;
                    const e = this.nextPageItem.getAttribute("data-next-page-url");
                    if (e) {
                        this.nextPageItemSpinner.hidden = !1;
                        const t = await H(document, e);
                        this.nextPageItem.remove();
                        const n = t.querySelectorAll("ul > li.focus-notification-item");
                        for (const o of n)
                            this.list.appendChild(o);
                        const r = t.querySelector("ul > li.focus-pagination-next-item");
                        r && this.list.appendChild(r),
                        this.setupPaginationObserver()
                    }
                }
                disconnectCurrentObserver() {
                    this.currentObserver && this.currentObserver.disconnect()
                }
            }
            ;
            Eh(ue, "NotificationFocusListElement"),
            Te([y], ue.prototype, "container", 2),
            Te([y], ue.prototype, "includeFragment", 2),
            Te([y], ue.prototype, "list", 2),
            Te([y], ue.prototype, "blankSlate", 2),
            Te([te], ue.prototype, "listElements", 2),
            Te([y], ue.prototype, "nextPageItem", 2),
            Te([y], ue.prototype, "nextPageItemSpinner", 2),
            ue = Te([q], ue);
            var xc = Object.defineProperty
              , Sh = Object.getOwnPropertyDescriptor
              , Lh = (e,t)=>xc(e, "name", {
                value: t,
                configurable: !0
            })
              , Xe = (e,t,n,r)=>{
                for (var o = r > 1 ? void 0 : r ? Sh(t, n) : t, s = e.length - 1, i; s >= 0; s--)
                    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                return r && o && xc(t, n, o),
                o
            }
            ;
            let ge = class extends HTMLElement {
                constructor() {
                    super(...arguments);
                    this.notificationId = "",
                    this.isUnread = !1
                }
                connectedCallback() {
                    var e, t;
                    (e = this.closest(".js-navigation-item")) == null || e.addEventListener("navigation:keydown", this.handleCustomKeybindings.bind(this)),
                    (t = this.closest(".js-navigation-item")) == null || t.addEventListener("navigation:keyopen", this.handleKeyOpen.bind(this))
                }
                url() {
                    var e;
                    return (e = this.notificationLink) == null ? void 0 : e.href
                }
                handleCustomKeybindings(e) {
                    const t = e.detail;
                    !_n(t.originalEvent) || (t.hotkey === "e" ? this.doneForm.dispatchEvent(new Event("submit")) : t.hotkey === "M" && this.unsubscribeForm.dispatchEvent(new Event("submit")))
                }
                handleKeyOpen() {
                    this.notificationLink.dispatchEvent(new MouseEvent("click",{
                        bubbles: !0,
                        cancelable: !0
                    }))
                }
                setFocusedState(e) {
                    var t, n, r;
                    e && this.isUnread && (this.isUnread = !1,
                    (t = this.closest(".js-navigation-item")) == null || t.classList.remove("color-bg-default"),
                    (n = this.closest(".js-navigation-item")) == null || n.classList.add("color-bg-subtle")),
                    (r = this.closest(".js-navigation-item")) == null || r.classList.toggle("current-focused-item", e),
                    this.notificationTitle.classList.toggle("text-bold", e || this.isUnread)
                }
                async runRemoveAction(e) {
                    e.preventDefault();
                    const t = e.currentTarget
                      , n = new FormData(t)
                      , r = t.method
                      , o = t.action
                      , {ok: s} = await fetch(o, {
                        body: n,
                        method: r
                    });
                    s && this.dispatchEvent(new CustomEvent("focus-mode-remove-item",{
                        bubbles: !0,
                        detail: {
                            notificationId: this.notificationId
                        }
                    }))
                }
            }
            ;
            Lh(ge, "NotificationFocusListItemElement"),
            Xe([ne], ge.prototype, "notificationId", 2),
            Xe([ne], ge.prototype, "isUnread", 2),
            Xe([y], ge.prototype, "doneForm", 2),
            Xe([y], ge.prototype, "unsubscribeForm", 2),
            Xe([y], ge.prototype, "notificationLink", 2),
            Xe([y], ge.prototype, "notificationTitle", 2),
            ge = Xe([q], ge);
            var Mc = Object.defineProperty
              , _h = Object.getOwnPropertyDescriptor
              , kh = (e,t)=>Mc(e, "name", {
                value: t,
                configurable: !0
            })
              , Bn = (e,t,n,r)=>{
                for (var o = r > 1 ? void 0 : r ? _h(t, n) : t, s = e.length - 1, i; s >= 0; s--)
                    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                return r && o && Mc(t, n, o),
                o
            }
            ;
            let dt = class extends HTMLElement {
                connectedCallback() {
                    this.addEventListener("notification-focus:toggle-sidebar", this.toggleSidebar.bind(this), !0),
                    window.localStorage.getItem("focus-sidebar-active") === "true" && this.toggleSidebar()
                }
                toggleSidebar() {
                    this.adjustSidebarPosition(),
                    this.sidebar.classList.contains("active") ? (this.listElement.deactivateNavigation(),
                    this.sidebar.classList.remove("active"),
                    window.localStorage.removeItem("focus-sidebar-active")) : (this.listElement.activateNavigation(),
                    this.sidebar.classList.add("active"),
                    window.localStorage.setItem("focus-sidebar-active", "true"))
                }
                async onFocusFilterChange(e) {
                    const t = e.detail;
                    if (t.url) {
                        this.listElement.deactivateNavigation();
                        const n = await H(document, t.url);
                        this.listElement.replaceContent(n),
                        this.listElement.activateNavigation()
                    }
                }
                adjustSidebarPosition() {
                    const e = document.querySelector("header[role=banner]");
                    if (e) {
                        const t = e.offsetTop + e.offsetHeight;
                        this.sidebar.style.top = `${t - 10}px`
                    }
                }
            }
            ;
            kh(dt, "NotificationFocusSidebarElement"),
            Bn([y], dt.prototype, "sidebar", 2),
            Bn([y], dt.prototype, "listElement", 2),
            Bn([y], dt.prototype, "filtersElement", 2),
            dt = Bn([q], dt);
            var $c = Object.defineProperty
              , Th = Object.getOwnPropertyDescriptor
              , Ch = (e,t)=>$c(e, "name", {
                value: t,
                configurable: !0
            })
              , Z = (e,t,n,r)=>{
                for (var o = r > 1 ? void 0 : r ? Th(t, n) : t, s = e.length - 1, i; s >= 0; s--)
                    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                return r && o && $c(t, n, o),
                o
            }
            ;
            let K = class extends HTMLElement {
                async submitCustomForm(e) {
                    await this.submitForm(e),
                    this.closeMenu()
                }
                async submitForm(e) {
                    e.preventDefault(),
                    Ma();
                    const t = e.currentTarget
                      , n = new FormData(t)
                      , r = await self.fetch(t.action, {
                        method: t.method,
                        body: n,
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            Accept: "application/json"
                        }
                    });
                    if (!r.ok) {
                        Fe();
                        return
                    }
                    const o = await r.json()
                      , s = n.get("do");
                    typeof s == "string" && this.updateCheckedState(s),
                    typeof s == "string" && this.updateMenuButtonCopy(s),
                    this.updateSocialCount(o.count),
                    this.applyInputsCheckedPropertiesToAttributesForNextFormReset()
                }
                updateMenuButtonCopy(e) {
                    this.unwatchButtonCopy.hidden = !(e === "subscribed" || e === "custom"),
                    this.stopIgnoringButtonCopy.hidden = e !== "ignore",
                    this.watchButtonCopy.hidden = !(e !== "subscribed" && e !== "custom" && e !== "ignore")
                }
                applyInputsCheckedPropertiesToAttributesForNextFormReset() {
                    for (const e of [...this.threadTypeCheckboxes])
                        e.toggleAttribute("checked", e.checked)
                }
                updateCheckedState(e) {
                    for (const t of this.subscriptionButtons)
                        t.setAttribute("aria-checked", t.value === e ? "true" : "false");
                    if (e === "custom")
                        this.customButton.setAttribute("aria-checked", "true");
                    else {
                        this.customButton.setAttribute("aria-checked", "false");
                        for (const t of [...this.threadTypeCheckboxes])
                            Le(t, !1)
                    }
                }
                updateSocialCount(e) {
                    this.socialCount && (this.socialCount.textContent = e,
                    this.socialCount.setAttribute("aria-label", `${this.pluralizeUsers(e)} watching this repository`))
                }
                pluralizeUsers(e) {
                    return parseInt(e) === 1 ? "1 user is" : `${e} users are`
                }
                openCustomDialog(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    this.menu.toggleAttribute("hidden", !0),
                    this.customDialog.toggleAttribute("hidden", !1),
                    setTimeout(()=>{
                        var t;
                        (t = this.customDialog.querySelector("input[type=checkbox][autofocus]")) == null || t.focus()
                    }
                    , 0)
                }
                closeCustomDialog(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    this.menu.toggleAttribute("hidden", !1),
                    this.customDialog.toggleAttribute("hidden", !0),
                    setTimeout(()=>{
                        this.customButton.focus()
                    }
                    , 0)
                }
                detailsToggled() {
                    this.menu.toggleAttribute("hidden", !1),
                    this.customDialog.toggleAttribute("hidden", !0)
                }
                submitCustom(e) {
                    e.preventDefault(),
                    this.details.toggleAttribute("open", !1)
                }
                threadTypeCheckboxesUpdated() {
                    const e = !this.threadTypeCheckboxes.some(t=>t.checked);
                    this.customSubmit.disabled = e
                }
                closeMenu() {
                    this.details.toggleAttribute("open", !1)
                }
            }
            ;
            Ch(K, "NotificationsListSubscriptionFormElement"),
            Z([y], K.prototype, "details", 2),
            Z([y], K.prototype, "menu", 2),
            Z([y], K.prototype, "customButton", 2),
            Z([y], K.prototype, "customDialog", 2),
            Z([te], K.prototype, "subscriptionButtons", 2),
            Z([y], K.prototype, "socialCount", 2),
            Z([y], K.prototype, "unwatchButtonCopy", 2),
            Z([y], K.prototype, "stopIgnoringButtonCopy", 2),
            Z([y], K.prototype, "watchButtonCopy", 2),
            Z([te], K.prototype, "threadTypeCheckboxes", 2),
            Z([y], K.prototype, "customSubmit", 2),
            K = Z([q], K);
            var qc = Object.defineProperty
              , Ah = Object.getOwnPropertyDescriptor
              , Ph = (e,t)=>qc(e, "name", {
                value: t,
                configurable: !0
            })
              , Ic = (e,t,n,r)=>{
                for (var o = r > 1 ? void 0 : r ? Ah(t, n) : t, s = e.length - 1, i; s >= 0; s--)
                    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                return r && o && qc(t, n, o),
                o
            }
            ;
            let Un = class extends HTMLElement {
                closeMenu() {
                    this.details.toggleAttribute("open", !1)
                }
            }
            ;
            Ph(Un, "NotificationsTeamSubscriptionFormElement"),
            Ic([y], Un.prototype, "details", 2),
            Un = Ic([q], Un);
            var xh = Object.defineProperty
              , Wn = (e,t)=>xh(e, "name", {
                value: t,
                configurable: !0
            });
            class zn extends HTMLElement {
                connectedCallback() {
                    this.addEventListener("input", ko)
                }
                disconnectedCallback() {
                    this.removeEventListener("input", ko)
                }
            }
            Wn(zn, "PasswordStrengthElement"),
            window.customElements.get("password-strength") || (window.PasswordStrengthElement = zn,
            window.customElements.define("password-strength", zn));
            function ko(e) {
                const t = e.currentTarget;
                if (!(t instanceof zn))
                    return;
                const n = e.target;
                if (!(n instanceof HTMLInputElement))
                    return;
                const r = n.form;
                if (!(r instanceof HTMLFormElement))
                    return;
                const o = Oc(n.value, {
                    minimumCharacterCount: Number(t.getAttribute("minimum-character-count")),
                    passphraseLength: Number(t.getAttribute("passphrase-length"))
                });
                if (o.valid) {
                    n.setCustomValidity("");
                    const s = t.querySelector("dl.form-group");
                    s && (s.classList.remove("errored"),
                    s.classList.add("successed"))
                } else
                    n.setCustomValidity(t.getAttribute("invalid-message"));
                Fc(t, o),
                Mt(r)
            }
            Wn(ko, "onInput");
            function Oc(e, t) {
                const n = {
                    valid: !1,
                    hasMinimumCharacterCount: e.length >= t.minimumCharacterCount,
                    hasMinimumPassphraseLength: t.passphraseLength !== 0 && e.length >= t.passphraseLength,
                    hasLowerCase: /[a-z]/.test(e),
                    hasNumber: /\d/.test(e)
                };
                return n.valid = n.hasMinimumPassphraseLength || n.hasMinimumCharacterCount && n.hasLowerCase && n.hasNumber,
                n
            }
            Wn(Oc, "validatePassword");
            function Fc(e, t) {
                const n = e.querySelector("[data-more-than-n-chars]")
                  , r = e.querySelector("[data-min-chars]")
                  , o = e.querySelector("[data-number-requirement]")
                  , s = e.querySelector("[data-letter-requirement]")
                  , i = e.getAttribute("error-class").split(" ").filter(c=>c.length > 0)
                  , a = e.getAttribute("pass-class").split(" ").filter(c=>c.length > 0);
                for (const c of [n, r, o, s])
                    c == null || c.classList.remove(...i, ...a);
                if (t.hasMinimumPassphraseLength && n)
                    n.classList.add(...a);
                else if (t.valid)
                    r.classList.add(...a),
                    o.classList.add(...a),
                    s.classList.add(...a);
                else {
                    const c = t.hasMinimumCharacterCount ? a : i
                      , l = t.hasNumber ? a : i
                      , f = t.hasLowerCase ? a : i;
                    n == null || n.classList.add(...i),
                    r.classList.add(...c),
                    o.classList.add(...l),
                    s.classList.add(...f)
                }
            }
            Wn(Fc, "highlightPasswordStrengthExplainer");
            var Mh = Object.defineProperty
              , $h = (e,t)=>Mh(e, "name", {
                value: t,
                configurable: !0
            });
            class To extends Gr {
                async fetch(t, n=1e3) {
                    const r = await super.fetch(t);
                    return r.status === 202 ? (await new Promise(o=>setTimeout(o, n)),
                    this.fetch(t, n * 1.5)) : r
                }
            }
            $h(To, "PollIncludeFragmentElement"),
            window.customElements.get("poll-include-fragment") || (window.PollIncludeFragmentElement = To,
            window.customElements.define("poll-include-fragment", To));
            var qh = Object.defineProperty
              , Rc = (e,t)=>qh(e, "name", {
                value: t,
                configurable: !0
            });
            class Co extends ta {
                connectedCallback() {
                    Jt.push(this),
                    Vn || (Ao(),
                    Vn = window.setInterval(Ao, 1e3))
                }
                disconnectedCallback() {
                    const t = Jt.indexOf(this);
                    t !== -1 && Jt.splice(t, 1),
                    Jt.length || (window.clearInterval(Vn),
                    Vn = void 0)
                }
                getFormattedDate() {
                    const t = this.date;
                    if (!t)
                        return;
                    const n = new Date().getTime() - t.getTime()
                      , r = Math.floor(n / 1e3)
                      , o = Math.floor(r / 60)
                      , s = Math.floor(o / 60)
                      , i = Math.floor(s / 24)
                      , a = r - o * 60
                      , c = o - s * 60
                      , l = s - i * 24;
                    return o < 1 ? this.applyPrecision([`${r}s`]) : s < 1 ? this.applyPrecision([`${o}m`, `${a}s`]) : i < 1 ? this.applyPrecision([`${s}h`, `${c}m`, `${a}s`]) : this.applyPrecision([`${i}d`, `${l}h`, `${c}m`, `${a}s`])
                }
                applyPrecision(t) {
                    const n = Number(this.getAttribute("data-precision") || t.length);
                    return t.slice(0, n).join(" ")
                }
            }
            Rc(Co, "PreciseTimeAgoElement");
            const Jt = [];
            let Vn;
            function Ao() {
                for (const e of Jt)
                    e.textContent = e.getFormattedDate() || ""
            }
            Rc(Ao, "updateNowElements"),
            window.customElements.get("precise-time-ago") || (window.PreciseTimeAgoElement = Co,
            window.customElements.define("precise-time-ago", Co));
            var Ih = Object.defineProperty
              , Dc = (e,t)=>Ih(e, "name", {
                value: t,
                configurable: !0
            });
            const Oh = /\s|\(|\[/;
            function Hc(e, t, n) {
                const r = e.lastIndexOf(t, n - 1);
                if (r === -1 || e.lastIndexOf(" ", n - 1) > r)
                    return;
                const s = e[r - 1];
                return s && !Oh.test(s) ? void 0 : {
                    word: e.substring(r + t.length, n),
                    position: r + t.length,
                    beginningOfLine: Fh(s)
                }
            }
            Dc(Hc, "keyword");
            const Fh = Dc(e=>e === void 0 || /\n/.test(e), "isBeginningOfLine");
            var Rh = Object.defineProperty
              , Dh = (e,t)=>Rh(e, "name", {
                value: t,
                configurable: !0
            });
            const Hh = ["position:absolute;", "overflow:auto;", "word-wrap:break-word;", "top:0px;", "left:-9999px;"]
              , Nc = ["box-sizing", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "letter-spacing", "line-height", "max-height", "min-height", "padding-bottom", "padding-left", "padding-right", "padding-top", "border-bottom", "border-left", "border-right", "border-top", "text-decoration", "text-indent", "text-transform", "width", "word-spacing"]
              , Bc = new WeakMap;
            function Uc(e, t) {
                const n = e.nodeName.toLowerCase();
                if (n !== "textarea" && n !== "input")
                    throw new Error("expected textField to a textarea or input");
                let r = Bc.get(e);
                if (r && r.parentElement === e.parentElement)
                    r.innerHTML = "";
                else {
                    r = document.createElement("div"),
                    Bc.set(e, r);
                    const a = window.getComputedStyle(e)
                      , c = Hh.slice(0);
                    n === "textarea" ? c.push("white-space:pre-wrap;") : c.push("white-space:nowrap;");
                    for (let l = 0, f = Nc.length; l < f; l++) {
                        const p = Nc[l];
                        c.push(`${p}:${a.getPropertyValue(p)};`)
                    }
                    r.style.cssText = c.join(" ")
                }
                const o = document.createElement("span");
                o.style.cssText = "position: absolute;",
                o.innerHTML = "&nbsp;";
                let s, i;
                if (typeof t == "number") {
                    let a = e.value.substring(0, t);
                    a && (s = document.createTextNode(a)),
                    a = e.value.substring(t),
                    a && (i = document.createTextNode(a))
                } else {
                    const a = e.value;
                    a && (s = document.createTextNode(a))
                }
                if (s && r.appendChild(s),
                r.appendChild(o),
                i && r.appendChild(i),
                !r.parentElement) {
                    if (!e.parentElement)
                        throw new Error("textField must have a parentElement to mirror");
                    e.parentElement.insertBefore(r, e)
                }
                return r.scrollTop = e.scrollTop,
                r.scrollLeft = e.scrollLeft,
                {
                    mirror: r,
                    marker: o
                }
            }
            Dh(Uc, "textFieldMirror");
            var Nh = Object.defineProperty
              , Bh = (e,t)=>Nh(e, "name", {
                value: t,
                configurable: !0
            });
            function Wc(e, t=e.selectionEnd) {
                const {mirror: n, marker: r} = Uc(e, t)
                  , o = n.getBoundingClientRect()
                  , s = r.getBoundingClientRect();
                return setTimeout(()=>{
                    n.remove()
                }
                , 5e3),
                {
                    top: s.top - o.top,
                    left: s.left - o.left
                }
            }
            Bh(Wc, "textFieldSelectionPosition");
            var Uh = Object.defineProperty
              , Po = (e,t)=>Uh(e, "name", {
                value: t,
                configurable: !0
            });
            const ft = new WeakMap;
            class zc {
                constructor(t, n) {
                    this.expander = t,
                    this.input = n,
                    this.combobox = null,
                    this.menu = null,
                    this.match = null,
                    this.justPasted = !1,
                    this.oninput = this.onInput.bind(this),
                    this.onpaste = this.onPaste.bind(this),
                    this.onkeydown = this.onKeydown.bind(this),
                    this.oncommit = this.onCommit.bind(this),
                    this.onmousedown = this.onMousedown.bind(this),
                    this.onblur = this.onBlur.bind(this),
                    this.interactingWithMenu = !1,
                    n.addEventListener("paste", this.onpaste),
                    n.addEventListener("input", this.oninput),
                    n.addEventListener("keydown", this.onkeydown),
                    n.addEventListener("blur", this.onblur)
                }
                destroy() {
                    this.input.removeEventListener("paste", this.onpaste),
                    this.input.removeEventListener("input", this.oninput),
                    this.input.removeEventListener("keydown", this.onkeydown),
                    this.input.removeEventListener("blur", this.onblur)
                }
                activate(t, n) {
                    this.input === document.activeElement && this.setMenu(t, n)
                }
                deactivate() {
                    const t = this.menu
                      , n = this.combobox;
                    return !t || !n ? !1 : (this.menu = null,
                    this.combobox = null,
                    t.removeEventListener("combobox-commit", this.oncommit),
                    t.removeEventListener("mousedown", this.onmousedown),
                    n.destroy(),
                    t.remove(),
                    !0)
                }
                setMenu(t, n) {
                    this.deactivate(),
                    this.menu = n,
                    n.id || (n.id = `text-expander-${Math.floor(Math.random() * 1e5).toString()}`),
                    this.expander.append(n);
                    const r = n.querySelector(".js-slash-command-menu-items");
                    r ? this.combobox = new Jr(this.input,r) : this.combobox = new Jr(this.input,n);
                    const {top: o, left: s} = Wc(this.input, t.position)
                      , i = parseInt(window.getComputedStyle(this.input).fontSize);
                    n.style.top = `${o + i}px`,
                    n.style.left = `${s}px`,
                    this.combobox.start(),
                    n.addEventListener("combobox-commit", this.oncommit),
                    n.addEventListener("mousedown", this.onmousedown),
                    this.combobox.navigate(1)
                }
                setValue(t) {
                    if (t == null)
                        return;
                    const n = this.match;
                    if (!n)
                        return;
                    const r = this.input.value.substring(0, n.position - n.key.length)
                      , o = this.input.value.substring(n.position + n.text.length);
                    let {cursor: s, value: i} = this.replaceCursorMark(t);
                    i = (i == null ? void 0 : i.length) === 0 ? i : `${i} `,
                    this.input.value = r + i + o,
                    this.deactivate(),
                    this.input.focus(),
                    s = r.length + (s || i.length),
                    this.input.selectionStart = s,
                    this.input.selectionEnd = s
                }
                replaceCursorMark(t) {
                    const n = /%cursor%/gm
                      , r = n.exec(t);
                    return r ? {
                        cursor: r.index,
                        value: t.replace(n, "")
                    } : {
                        cursor: null,
                        value: t
                    }
                }
                onCommit({target: t}) {
                    const n = t;
                    if (!(n instanceof HTMLElement) || !this.combobox)
                        return;
                    const r = this.match;
                    if (!r)
                        return;
                    const o = {
                        item: n,
                        key: r.key,
                        value: null
                    };
                    !this.expander.dispatchEvent(new CustomEvent("text-expander-value",{
                        cancelable: !0,
                        detail: o
                    })) || o.value && this.setValue(o.value)
                }
                onBlur() {
                    if (this.interactingWithMenu) {
                        this.interactingWithMenu = !1;
                        return
                    }
                    this.deactivate()
                }
                onPaste() {
                    this.justPasted = !0
                }
                async delay(t) {
                    return new Promise(n=>setTimeout(n, t))
                }
                async onInput() {
                    if (this.justPasted) {
                        this.justPasted = !1;
                        return
                    }
                    const t = this.findMatch();
                    if (t) {
                        if (this.match = t,
                        await this.delay(this.appropriateDelay(this.match)),
                        this.match !== t)
                            return;
                        const n = await this.notifyProviders(t);
                        if (!this.match)
                            return;
                        n ? this.activate(t, n) : this.deactivate()
                    } else
                        this.match = null,
                        this.deactivate()
                }
                appropriateDelay(t) {
                    return t.beginningOfLine || t.text !== "" ? 0 : 250
                }
                findMatch() {
                    const t = this.input.selectionEnd
                      , n = this.input.value;
                    for (const r of this.expander.keys) {
                        const o = Hc(n, r, t);
                        if (o)
                            return {
                                text: o.word,
                                key: r,
                                position: o.position,
                                beginningOfLine: o.beginningOfLine
                            }
                    }
                }
                async notifyProviders(t) {
                    const n = []
                      , r = Po(a=>n.push(a), "provide");
                    return this.expander.dispatchEvent(new CustomEvent("text-expander-change",{
                        cancelable: !0,
                        detail: {
                            provide: r,
                            text: t.text,
                            key: t.key
                        }
                    })) ? (await Promise.all(n)).filter(a=>a.matched).map(a=>a.fragment)[0] : void 0
                }
                onMousedown() {
                    this.interactingWithMenu = !0
                }
                onKeydown(t) {
                    t.key === "Escape" && this.deactivate() && (t.stopImmediatePropagation(),
                    t.preventDefault())
                }
            }
            Po(zc, "SlashCommandExpander");
            class xo extends HTMLElement {
                get keys() {
                    const t = this.getAttribute("keys");
                    return t ? t.split(" ") : []
                }
                connectedCallback() {
                    const t = this.querySelector('input[type="text"], textarea');
                    if (!(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement))
                        return;
                    const n = new zc(this,t);
                    ft.set(this, n)
                }
                disconnectedCallback() {
                    const t = ft.get(this);
                    !t || (t.destroy(),
                    ft.delete(this))
                }
                setValue(t) {
                    const n = ft.get(this);
                    !n || n.setValue(t)
                }
                setMenu(t, n=!1) {
                    const r = ft.get(this);
                    !r || !r.match || (n && (r.interactingWithMenu = !0),
                    r.setMenu(r.match, t))
                }
                closeMenu() {
                    const t = ft.get(this);
                    !t || t.setValue("")
                }
                isLoading() {
                    const t = this.getElementsByClassName("js-slash-command-expander-loading")[0];
                    if (t) {
                        const n = t.cloneNode(!0);
                        n.classList.remove("d-none"),
                        this.setMenu(n)
                    }
                }
                showError() {
                    const t = this.getElementsByClassName("js-slash-command-expander-error")[0];
                    if (t) {
                        const n = t.cloneNode(!0);
                        n.classList.remove("d-none"),
                        this.setMenu(n)
                    }
                }
            }
            Po(xo, "SlashCommandExpanderElement"),
            window.customElements.get("slash-command-expander") || (window.SlashCommandExpanderElement = xo,
            window.customElements.define("slash-command-expander", xo)),
            d("deprecatedAjaxSend", "[data-remote]", function(e) {
                e.currentTarget === e.target && (e.defaultPrevented || e.currentTarget.classList.add("loading"))
            }),
            d("deprecatedAjaxComplete", "[data-remote]", function(e) {
                e.currentTarget === e.target && e.currentTarget.classList.remove("loading")
            }),
            A("form.js-ajax-pagination, .js-ajax-pagination form", async function(e, t) {
                const n = e.closest(".js-ajax-pagination");
                let r;
                try {
                    r = await t.html()
                } catch (o) {
                    if (o.response && o.response.status === 404) {
                        n.remove();
                        return
                    } else
                        throw o
                }
                n.replaceWith(r.html),
                v(e, "page:loaded")
            });
            const Wh = "analytics.click";
            d("click", "[data-analytics-event]", e=>{
                const n = e.currentTarget.getAttribute("data-analytics-event");
                if (!n)
                    return;
                const r = JSON.parse(n);
                $t(Wh, r)
            }
            ),
            document.addEventListener("pjax:start", function() {
                Re("Loading page")
            }),
            document.addEventListener("pjax:error", function() {
                Re("Loading failed")
            }),
            document.addEventListener("pjax:end", function() {
                Re("Loading complete")
            });
            var zh = Object.defineProperty
              , Vc = (e,t)=>zh(e, "name", {
                value: t,
                configurable: !0
            });
            const Kc = new WeakMap;
            m("auto-check", function(e) {
                if (e.classList.contains("js-prevent-default-behavior"))
                    return;
                const t = e.querySelector("input");
                if (!t)
                    return;
                const n = t.closest(".form-group") || e
                  , r = t.form;
                let o;
                function s() {
                    return o || (o = `input-check-${(Math.random() * 1e4).toFixed(0)}`),
                    o
                }
                Vc(s, "generateId");
                const i = t.getAttribute("aria-describedby");
                t.addEventListener("focusout:delay", ()=>{
                    t.setAttribute("aria-describedby", [o, i].join(" "))
                }
                );
                const a = n.querySelector("p.note");
                a && (a.id || (a.id = s()),
                Kc.set(a, a.innerHTML)),
                e.addEventListener("loadstart", ()=>{
                    Kn(t, n),
                    n.classList.add("is-loading"),
                    t.classList.add("is-autocheck-loading"),
                    Mt(r)
                }
                ),
                e.addEventListener("loadend", ()=>{
                    n.classList.remove("is-loading"),
                    t.classList.remove("is-autocheck-loading")
                }
                ),
                t.addEventListener("auto-check-success", async c=>{
                    t.classList.add("is-autocheck-successful"),
                    n.classList.add("successed"),
                    Mt(r);
                    const {response: l} = c.detail;
                    if (!l)
                        return;
                    const f = await l.text();
                    if (!!f) {
                        if (a instanceof HTMLElement)
                            a.innerHTML = f,
                            De(a);
                        else {
                            const p = l.status === 200
                              , h = n.tagName === "DL" ? "dd" : "div"
                              , g = document.createElement(h);
                            g.id = s(),
                            g.classList.add(p ? "success" : "warning"),
                            g.innerHTML = f,
                            n.append(g),
                            n.classList.add(p ? "successed" : "warn"),
                            De(g),
                            p && (g.hidden = document.activeElement !== t)
                        }
                        v(t, "auto-check-message-updated")
                    }
                }
                ),
                t.addEventListener("auto-check-error", async c=>{
                    t.classList.add("is-autocheck-errored"),
                    n.classList.add("errored"),
                    Mt(r);
                    const {response: l} = c.detail;
                    if (!l)
                        return;
                    const f = await l.text();
                    if (a instanceof HTMLElement)
                        a.innerHTML = f || "Something went wrong",
                        De(a);
                    else {
                        const p = n.tagName === "DL" ? "dd" : "div"
                          , h = document.createElement(p);
                        h.id = s(),
                        h.classList.add("error"),
                        h.innerHTML = f || "Something went wrong",
                        n.append(h),
                        De(h)
                    }
                }
                ),
                t.addEventListener("input", ()=>{
                    t.removeAttribute("aria-describedby"),
                    t.value || Kn(t, n)
                }
                ),
                t.addEventListener("blur", ()=>{
                    const c = n.querySelector(".success");
                    c && (c.hidden = !0)
                }
                ),
                t.addEventListener("focus", ()=>{
                    const c = n.querySelector(".success");
                    c && (c.hidden = !1)
                }
                ),
                r.addEventListener("reset", ()=>{
                    Kn(t, n)
                }
                )
            });
            function Kn(e, t) {
                var n, r, o, s, i, a;
                t.classList.remove("is-loading", "successed", "errored", "warn"),
                e.classList.remove("is-autocheck-loading", "is-autocheck-successful", "is-autocheck-errored");
                const c = t.querySelector("p.note");
                if (c) {
                    const l = Kc.get(c);
                    l && (c.innerHTML = l)
                }
                t.tagName === "DL" ? ((n = t.querySelector("dd.error")) == null || n.remove(),
                (r = t.querySelector("dd.warning")) == null || r.remove(),
                (o = t.querySelector("dd.success")) == null || o.remove()) : ((s = t.querySelector("div.error")) == null || s.remove(),
                (i = t.querySelector("div.warning")) == null || i.remove(),
                (a = t.querySelector("div.success")) == null || a.remove())
            }
            Vc(Kn, "reset");
            var Vh = Object.defineProperty
              , Kh = (e,t)=>Vh(e, "name", {
                value: t,
                configurable: !0
            });
            m("auto-complete", function(e) {
                e.addEventListener("loadstart", ()=>e.classList.add("is-auto-complete-loading")),
                e.addEventListener("loadend", ()=>e.classList.remove("is-auto-complete-loading"))
            }),
            m("auto-complete", {
                constructor: na,
                initialize: Mo
            }),
            d("auto-complete-change", "auto-complete", function(e) {
                Mo(e.currentTarget)
            });
            function Mo(e) {
                const t = e.closest("form");
                if (!t)
                    return;
                const n = t.querySelector(".js-auto-complete-button");
                n instanceof HTMLButtonElement && (n.disabled = !e.value)
            }
            Kh(Mo, "toggleSubmitButton");
            let $o = null;
            d("submit", "[data-autosearch-results-container]", async function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLFormElement))
                    return;
                e.preventDefault(),
                $o == null || $o.abort(),
                t.classList.add("is-sending");
                const n = new URL(t.action,window.location.origin)
                  , r = t.method
                  , o = to(t);
                let s = null;
                r === "get" ? n.search = o : s = new FormData(t);
                const {signal: i} = $o = new AbortController
                  , a = new Request(n.toString(),{
                    method: r,
                    body: s,
                    signal: i,
                    headers: {
                        Accept: "text/html",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                });
                let c;
                try {
                    c = await fetch(a)
                } catch (p) {}
                if (t.classList.remove("is-sending"),
                !c || !c.ok || i.aborted)
                    return;
                const l = t.getAttribute("data-autosearch-results-container")
                  , f = l ? document.getElementById(l) : null;
                f && (f.innerHTML = "",
                f.appendChild(me(document, await c.text()))),
                He(null, "", `?${o}`)
            }),
            qt("input[data-autoselect], textarea[data-autoselect]", async function(e) {
                await Ne(),
                e.select()
            });
            var Xh = Object.defineProperty
              , Gh = (e,t)=>Xh(e, "name", {
                value: t,
                configurable: !0
            });
            d("change", "form[data-autosubmit]", function(e) {
                const t = e.currentTarget;
                N(t)
            }),
            d("change", "input[data-autosubmit], select[data-autosubmit]", qo);
            function qo(e) {
                const t = e.target;
                if (!(t instanceof HTMLInputElement) && !(t instanceof HTMLSelectElement))
                    return;
                const n = t.form;
                N(n)
            }
            Gh(qo, "submit");
            const Jh = Ie(qo, 300);
            m("input[data-throttled-autosubmit]", {
                subscribe: e=>E(e, "input", Jh)
            });
            var Yh = Object.defineProperty
              , Xc = (e,t)=>Yh(e, "name", {
                value: t,
                configurable: !0
            });
            async function Gc(e) {
                const t = e.getAttribute("data-url") || "";
                if (await Jc(t)) {
                    const r = e.getAttribute("data-gravatar-text");
                    r != null && (e.textContent = r)
                }
            }
            Xc(Gc, "detectGravatar"),
            m(".js-detect-gravatar", function(e) {
                Gc(e)
            });
            async function Jc(e) {
                const t = e;
                if (!t)
                    return !1;
                try {
                    const n = await fetch(t, {
                        headers: {
                            Accept: "application/json"
                        }
                    });
                    return n.ok ? (await n.json()).has_gravatar : !1
                } catch (n) {
                    return !1
                }
            }
            Xc(Jc, "fetchGravatarInfo");
            var Yc = Object.defineProperty
              , Qh = Object.getOwnPropertyDescriptor
              , Io = (e,t)=>Yc(e, "name", {
                value: t,
                configurable: !0
            })
              , Oo = (e,t,n,r)=>{
                for (var o = r > 1 ? void 0 : r ? Qh(t, n) : t, s = e.length - 1, i; s >= 0; s--)
                    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                return r && o && Yc(t, n, o),
                o
            }
            ;
            class Qc {
                constructor(t=50, n=30) {
                    this.elements = [],
                    this.timer = null,
                    this.callbacks = [],
                    this.csrf = null,
                    this.timeout = t,
                    this.limit = n
                }
                push(t) {
                    if (this.timer && (window.clearTimeout(this.timer),
                    this.timer = null),
                    t instanceof HTMLElement) {
                        const n = t.querySelector("[data-csrf]");
                        n !== null && (this.csrf = n.value)
                    }
                    this.elements.length >= this.limit && this.flush(),
                    this.elements.push(t),
                    this.timer = window.setTimeout(()=>{
                        this.flush()
                    }
                    , this.timeout)
                }
                onFlush(t) {
                    this.callbacks.push(t)
                }
                async flush() {
                    const t = this.elements.splice(0, this.limit);
                    t.length !== 0 && await Promise.all(this.callbacks.map(n=>n(t)))
                }
            }
            Io(Qc, "AutoFlushingQueue");
            async function Zc(e, t) {
                const n = await fetch(e, {
                    method: "POST",
                    body: t,
                    headers: {
                        Accept: "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                });
                if (n.ok) {
                    const r = await n.json()
                      , o = new Map;
                    for (const s in r)
                        o.set(s, r[s]);
                    return o
                } else
                    return new Map
            }
            Io(Zc, "fetchContents");
            const el = new Map;
            let Yt = class extends HTMLElement {
                constructor() {
                    super(...arguments);
                    this.url = ""
                }
                connectedCallback() {
                    this.queue.push(this)
                }
                get queue() {
                    let e = el.get(this.url);
                    return e || (e = this.buildAutoFlushingQueue(),
                    el.set(this.url, e),
                    e)
                }
                buildAutoFlushingQueue() {
                    const e = new Qc;
                    return e.onFlush(async t=>{
                        const n = new Map
                          , r = new FormData;
                        e.csrf !== null && r.set("authenticity_token", e.csrf);
                        for (const s in t) {
                            const i = t[s]
                              , a = `item-${s}`;
                            n.set(a, i);
                            for (const c of i.inputs)
                                r.append(`items[${a}][${c.name}]`, c.value)
                        }
                        const o = await Zc(this.url, r);
                        for (const [s,i] of o.entries())
                            n.get(s).replaceWith(me(document, i))
                    }
                    ),
                    e
                }
            }
            ;
            Io(Yt, "BatchDeferredContentElement"),
            Oo([ne], Yt.prototype, "url", 2),
            Oo([te], Yt.prototype, "inputs", 2),
            Yt = Oo([q], Yt);
            var Zh = Object.defineProperty
              , mt = (e,t)=>Zh(e, "name", {
                value: t,
                configurable: !0
            });
            let Fo = null;
            d("click", ".js-org-signup-duration-change", e=>{
                e.preventDefault();
                const n = e.currentTarget.getAttribute("data-plan-duration");
                nl(n),
                ol(n);
                for (const r of document.querySelectorAll(".js-seat-field"))
                    Ge(r);
                tl()
            }
            );
            async function Ge(e) {
                const t = e.getAttribute("data-item-name") || "items"
                  , n = e.value
                  , r = parseInt(e.getAttribute("data-item-minimum")) || 0
                  , o = parseInt(e.getAttribute("data-item-maximum")) || 300
                  , s = parseInt(e.getAttribute("data-item-count")) || 0
                  , i = Math.max(r, parseInt(n) || 0)
                  , a = i > o
                  , c = document.querySelector(".js-downgrade-button");
                c instanceof HTMLButtonElement && (c.disabled = i === s);
                const l = new URL(e.getAttribute("data-url"),window.location.origin)
                  , f = new URLSearchParams(l.search.slice(1));
                f.append(t, i.toString()),
                document.querySelector(".js-transform-user") && f.append("transform_user", "1"),
                l.search = f.toString(),
                Fo == null || Fo.abort();
                const {signal: h} = Fo = new AbortController;
                let g = null;
                try {
                    const I = await fetch(l.toString(), {
                        signal: h,
                        headers: {
                            Accept: "application/json"
                        }
                    });
                    if (!I.ok)
                        return;
                    g = await I.json()
                } catch (I) {}
                if (h.aborted || !g)
                    return;
                const w = document.querySelector(".js-contact-us");
                w && w.classList.toggle("d-none", !a);
                const S = document.querySelector(".js-payment-summary");
                S && S.classList.toggle("d-none", a);
                const P = document.querySelector(".js-submit-billing");
                P instanceof HTMLElement && (P.hidden = a);
                const j = document.querySelector(".js-billing-section");
                j && j.classList.toggle("has-removed-contents", g.free || g.is_enterprise_cloud_trial);
                const C = document.querySelector(".js-upgrade-info");
                C && C.classList.toggle("d-none", i <= 0);
                const M = document.querySelector(".js-downgrade-info");
                M && M.classList.toggle("d-none", i >= 0);
                const x = document.querySelector(".js-extra-seats-line-item");
                x && x.classList.toggle("d-none", g.no_additional_seats),
                document.querySelector(".js-seat-field") && rl(n);
                const L = document.querySelector(".js-minimum-seats-disclaimer");
                L && (L.classList.toggle("tooltipped", g.seats === 5),
                L.classList.toggle("tooltipped-nw", g.seats === 5));
                const qe = g.selectors;
                for (const I in qe)
                    for (const Tt of document.querySelectorAll(I))
                        Tt.innerHTML = qe[I];
                He($a(), "", g.url)
            }
            mt(Ge, "updateTotals");
            function tl() {
                for (const e of document.querySelectorAll(".js-unit-price"))
                    e.hidden = !e.hidden
            }
            mt(tl, "toggleDurationUnitPrices");
            function nl(e) {
                const t = e === "year" ? "month" : "year";
                for (const o of document.querySelectorAll(".js-plan-duration-text"))
                    o.innerHTML = e;
                for (const o of document.querySelectorAll(".unstyled-available-plan-duration-adjective"))
                    o.innerHTML = `${e}ly`;
                for (const o of document.querySelectorAll(".js-org-signup-duration-change"))
                    o.setAttribute("data-plan-duration", t);
                const n = document.getElementById("signup-plan-duration");
                n && (n.value = e);
                const r = document.querySelector(".js-signup-duration-title");
                r && (r.innerHTML = `${e}ly Subscription`)
            }
            mt(nl, "updateDurationFields");
            function rl(e) {
                for (const t of document.querySelectorAll(".js-seat-field"))
                    t.value = e
            }
            mt(rl, "updateSeatFields");
            function ol(e) {
                for (const t of document.querySelectorAll(".js-seat-field")) {
                    const n = new URL(t.getAttribute("data-url"),window.location.origin)
                      , r = new URLSearchParams(n.search.slice(1));
                    r.delete("plan_duration"),
                    r.append("plan_duration", e),
                    n.search = r.toString(),
                    t.setAttribute("data-url", n.toString())
                }
            }
            mt(ol, "updateSeatFieldURLs"),
            m(".js-addon-purchase-field", {
                constructor: HTMLInputElement,
                add(e) {
                    It(e) && Ge(e),
                    kn(e, function() {
                        Ge(e)
                    })
                }
            }),
            m(".js-addon-downgrade-field", {
                constructor: HTMLSelectElement,
                add(e) {
                    It(e) && Ge(e),
                    e.addEventListener("change", function() {
                        Ge(e)
                    })
                }
            });
            function sl(e) {
                const t = document.querySelector(".js-addon-purchase-field")
                  , n = e.target.querySelector("input:checked");
                if (t instanceof HTMLInputElement && n instanceof HTMLInputElement) {
                    const r = n.getAttribute("data-upgrade-url");
                    r && (t.setAttribute("data-url", r),
                    t.value = "0",
                    Ge(t))
                }
            }
            mt(sl, "handleOrgChange"),
            d("details-menu-selected", ".js-organization-container", sl, {
                capture: !0
            }),
            ce(".js-csv-filter-field", function(e) {
                const t = e.target.value.toLowerCase();
                for (const n of document.querySelectorAll(".js-csv-data tbody tr"))
                    n instanceof HTMLElement && (!n.textContent || (n.hidden = !!t && !n.textContent.toLowerCase().includes(t)))
            });
            var eg = Object.defineProperty
              , X = (e,t)=>eg(e, "name", {
                value: t,
                configurable: !0
            });
            let Ro = !1;
            function Xn(e, t) {
                return document.querySelector(`#${e}LC${t}`)
            }
            X(Xn, "queryLineElement");
            function il({blobRange: e, anchorPrefix: t}) {
                if (document.querySelectorAll(".js-file-line").length !== 0 && (al(),
                !!e)) {
                    if (e.start.column === null || e.end.column === null)
                        for (let r = e.start.line; r <= e.end.line; r += 1) {
                            const o = Xn(t, r);
                            o && o.classList.add("highlighted")
                        }
                    else if (e.start.line === e.end.line && e.start.column != null && e.end.column != null) {
                        const r = no(e, o=>Xn(t, o));
                        if (r) {
                            const o = document.createElement("span");
                            o.classList.add("highlighted"),
                            ro(r, o)
                        }
                    }
                }
            }
            X(il, "highlightLines");
            function al() {
                for (const e of document.querySelectorAll(".js-file-line.highlighted"))
                    e.classList.remove("highlighted");
                for (const e of document.querySelectorAll(".js-file-line .highlighted")) {
                    const t = e.closest(".js-file-line");
                    e.replaceWith(...e.childNodes),
                    t.normalize()
                }
            }
            X(al, "clearHighlights");
            function cl() {
                const e = oo(window.location.hash);
                il(e),
                pl();
                const {blobRange: t, anchorPrefix: n} = e
                  , r = t && Xn(n, t.start.line);
                if (!Ro && r) {
                    r.scrollIntoView();
                    const o = r.closest(".blob-wrapper, .js-blob-wrapper");
                    o.scrollLeft = 0
                }
                Ro = !1
            }
            X(cl, "scrollLinesIntoView"),
            Ot(function() {
                if (document.querySelector(".js-file-line-container")) {
                    setTimeout(cl, 0);
                    const e = window.location.hash;
                    for (const t of document.querySelectorAll(".js-update-url-with-hash"))
                        if (t instanceof HTMLAnchorElement)
                            t.hash = e;
                        else if (t instanceof HTMLFormElement) {
                            const n = new URL(t.action,window.location.origin);
                            n.hash = e,
                            t.action = n.toString()
                        }
                }
            });
            function ll(e) {
                const t = [];
                for (const r of e)
                    t.push(r.textContent);
                const n = document.getElementById("js-copy-lines");
                if (n instanceof Yr) {
                    n.textContent = `Copy ${e.length === 1 ? "line" : "lines"}`,
                    n.value = t.join(`
`);
                    const r = `Blob, copyLines, numLines:${e.length.toString()}`;
                    n.setAttribute("data-ga-click", r)
                }
            }
            X(ll, "setCopyLines");
            function ul(e) {
                const t = document.querySelector(".js-permalink-shortcut");
                if (t instanceof HTMLAnchorElement) {
                    const n = `${t.href}${window.location.hash}`
                      , r = document.getElementById("js-copy-permalink");
                    if (r instanceof Yr) {
                        r.value = n;
                        const o = `Blob, copyPermalink, numLines:${e.toString()}`;
                        r.setAttribute("data-ga-click", o)
                    }
                    return n
                }
            }
            X(ul, "setPermalink");
            function dl(e, t) {
                const n = document.getElementById("js-new-issue");
                if (n instanceof HTMLAnchorElement) {
                    if (!n.href)
                        return;
                    const r = new URL(n.href,window.location.origin)
                      , o = new URLSearchParams(r.search);
                    o.set("permalink", e),
                    r.search = o.toString(),
                    n.href = r.toString(),
                    n.setAttribute("data-ga-click", `Blob, newIssue, numLines:${t.toString()}`)
                }
            }
            X(dl, "setOpenIssueLink");
            function fl(e, t) {
                const n = document.getElementById("js-new-discussion");
                if (!(n instanceof HTMLAnchorElement) || !(n == null ? void 0 : n.href))
                    return;
                const r = new URL(n.href,window.location.origin)
                  , o = new URLSearchParams(r.search);
                o.set("permalink", e),
                r.search = o.toString(),
                n.href = r.toString(),
                n.setAttribute("data-ga-click", `Blob, newDiscussion, numLines:${t.toString()}`)
            }
            X(fl, "setOpenDiscussionLink");
            function ml(e) {
                const t = document.getElementById("js-view-git-blame");
                !t || t.setAttribute("data-ga-click", `Blob, viewGitBlame, numLines:${e.toString()}`)
            }
            X(ml, "setViewGitBlame");
            function pl() {
                const e = document.querySelector(".js-file-line-actions");
                if (!e)
                    return;
                const t = document.querySelectorAll(".js-file-line.highlighted")
                  , n = t[0];
                if (n) {
                    ll(t),
                    ml(t.length);
                    const r = ul(t.length);
                    r && dl(r, t.length),
                    r && fl(r, t.length),
                    e.style.top = `${n.offsetTop - 2}px`,
                    e.classList.remove("d-none")
                } else
                    e.classList.add("d-none")
            }
            X(pl, "showOrHideLineActions");
            function hl(e) {
                const t = window.scrollY;
                Ro = !0,
                e(),
                window.scrollTo(0, t)
            }
            X(hl, "preserveLineNumberScrollPosition"),
            d("click", ".js-line-number", function(e) {
                const t = oo(e.currentTarget.id)
                  , {blobRange: n} = t
                  , r = qa(window.location.hash);
                r && e.shiftKey && (t.blobRange = {
                    start: r.start,
                    end: n.end
                }),
                hl(()=>{
                    window.location.hash = Ia(t)
                }
                )
            }),
            d("submit", ".js-jump-to-line-form", function(e) {
                const r = e.currentTarget.querySelector(".js-jump-to-line-field").value.replace(/[^\d-]/g, "").split("-").map(o=>parseInt(o, 10)).filter(o=>o > 0).sort((o,s)=>o - s);
                r.length && (window.location.hash = `L${r.join("-L")}`),
                e.preventDefault()
            }),
            m(".js-check-bidi", yl);
            const tg = /[\u202A-\u202E]|[\u2066-\u2069]/
              , gl = {
                "\u202A": "U+202A",
                "\u202B": "U+202B",
                "\u202C": "U+202C",
                "\u202D": "U+202D",
                "\u202E": "U+202E",
                "\u2066": "U+2066",
                "\u2067": "U+2067",
                "\u2068": "U+2068",
                "\u2069": "U+2069"
            };
            function Do(e, t) {
                if (e.nodeType === Node.TEXT_NODE)
                    return bl(e, t);
                if (!e.childNodes || !e.childNodes.length)
                    return !1;
                let n = !1;
                for (const r of e.childNodes)
                    if (n || (n = Do(r, t)),
                    n && !t)
                        break;
                return n
            }
            X(Do, "checkNodeForBidiCharacters");
            function bl(e, t) {
                let n = !1;
                if (e.nodeValue)
                    for (let r = e.nodeValue.length - 1; r >= 0; r--) {
                        const o = e.nodeValue.charAt(r);
                        if (gl[o]) {
                            if (n = !0,
                            !t)
                                break;
                            const s = new Oe(t,{
                                revealedCharacter: gl[o]
                            })
                              , i = new Range;
                            i.setStart(e, r),
                            i.setEnd(e, r + 1),
                            i.deleteContents(),
                            i.insertNode(s)
                        }
                    }
                return n
            }
            X(bl, "checkTextNodeForBidiCharacters");
            function yl(e) {
                let t = !1;
                const n = performance.now()
                  , r = e.textContent || "";
                if (tg.test(r)) {
                    const i = e.querySelectorAll(".diff-table .blob-code-inner, .js-file-line-container .js-file-line, .js-suggested-changes-blob .blob-code-inner")
                      , a = document.querySelector(".js-line-alert-template")
                      , c = document.querySelector(".js-revealed-character-template");
                    for (const l of i)
                        if (Do(l, c) && (t = !0,
                        a)) {
                            const f = new Oe(a,{});
                            e.getAttribute("data-line-alert") === "before" ? l.before(f) : l.after(f)
                        }
                }
                const s = {
                    durationMs: (performance.now() - n).toString(),
                    result: t.toString()
                };
                if ($t("blob_js_check_bidi_character", s),
                t) {
                    const i = document.querySelector(".js-file-alert-template");
                    if (i) {
                        const a = new URL(window.location.href,window.location.origin);
                        a.searchParams.get("h") === "1" ? a.searchParams.delete("h") : a.searchParams.set("h", "1");
                        const c = new Oe(i,{
                            revealButtonHref: a.href
                        });
                        e.prepend(c)
                    }
                }
                e.classList.remove("js-check-bidi")
            }
            X(yl, "alertOnBidiCharacter");
            var ng = Object.defineProperty
              , rg = (e,t)=>ng(e, "name", {
                value: t,
                configurable: !0
            });
            function vl(e) {
                const t = e.target
                  , n = t == null ? void 0 : t.closest(".js-branch-protection-integration-select")
                  , r = n == null ? void 0 : n.querySelector(".js-branch-protection-integration-select-current")
                  , o = t == null ? void 0 : t.closest(".js-branch-protection-integration-select-item")
                  , s = o == null ? void 0 : o.querySelector(".js-branch-protection-integration-select-label");
                r && s && n && (r.innerHTML = s.innerHTML,
                n.open = !1)
            }
            rg(vl, "changeSelection"),
            d("change", ".js-branch-protection-integration-select-input", vl);
            var og = Object.defineProperty
              , Ho = (e,t)=>og(e, "name", {
                value: t,
                configurable: !0
            });
            function wl(e) {
                const t = new URL(e.getAttribute("data-bulk-actions-url"),window.location.origin)
                  , n = new URLSearchParams(t.search.slice(1))
                  , r = e.getAttribute("data-bulk-actions-parameter")
                  , o = Array.from(e.querySelectorAll(".js-bulk-actions-toggle:checked"));
                if (r) {
                    const s = o.map(i=>i.closest(".js-bulk-actions-item").getAttribute("data-bulk-actions-id")).sort();
                    for (const i of s)
                        n.append(`${r}[]`, i)
                } else
                    for (const s of o.sort((i,a)=>i.value > a.value ? 1 : -1))
                        n.append(s.name, s.value);
                return t.search = n.toString(),
                t.toString()
            }
            Ho(wl, "bulkUrl");
            let No = null;
            async function jl(e) {
                const t = e.target;
                if (!(t instanceof HTMLElement))
                    return;
                const n = t.querySelector(".js-bulk-actions")
                  , r = !!t.querySelector(".js-bulk-actions-toggle:checked");
                No == null || No.abort();
                const {signal: o} = No = new AbortController;
                let s = "";
                try {
                    const i = await fetch(wl(t), {
                        signal: o,
                        headers: {
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    });
                    if (!i.ok)
                        return;
                    s = await i.text()
                } catch (i) {}
                o.aborted || !s || (r ? (Bo(t),
                n.innerHTML = s) : (n.innerHTML = s,
                Bo(t)),
                v(t, "bulk-actions:updated"))
            }
            Ho(jl, "updateBulkActions");
            function Bo(e) {
                const t = document.querySelector(".js-membership-tabs");
                if (t) {
                    const n = e.querySelectorAll(".js-bulk-actions-toggle:checked");
                    t.classList.toggle("d-none", n.length > 0)
                }
            }
            Ho(Bo, "toggleMembershipTabs"),
            d("change", ".js-bulk-actions-toggle", function(e) {
                const n = e.currentTarget.closest(".js-bulk-actions-container");
                v(n, "bulk-actions:update")
            }),
            d("bulk-actions:update", ".js-bulk-actions-container", Ie(jl, 100));
            var El = Object.defineProperty
              , Sl = Object.getOwnPropertySymbols
              , sg = Object.prototype.hasOwnProperty
              , ig = Object.prototype.propertyIsEnumerable
              , Ll = (e,t,n)=>t in e ? El(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
              , _l = (e,t)=>{
                for (var n in t || (t = {}))
                    sg.call(t, n) && Ll(e, n, t[n]);
                if (Sl)
                    for (var n of Sl(t))
                        ig.call(t, n) && Ll(e, n, t[n]);
                return e
            }
              , Gn = (e,t)=>El(e, "name", {
                value: t,
                configurable: !0
            });
            function kl(e) {
                try {
                    const t = window.localStorage.getItem(e);
                    return {
                        kind: "ok",
                        value: t ? JSON.parse(t) : null
                    }
                } catch (t) {
                    return {
                        kind: "err",
                        value: t
                    }
                }
            }
            Gn(kl, "getLocalJSON");
            function Uo(e, t) {
                try {
                    return window.localStorage.setItem(e, JSON.stringify(t)),
                    {
                        kind: "ok",
                        value: null
                    }
                } catch (n) {
                    return {
                        kind: "err",
                        value: n
                    }
                }
            }
            Gn(Uo, "setLocalJSON");
            function Tl() {
                const e = {};
                for (const t of document.getElementsByTagName("script")) {
                    const n = t.src.match(/\/([\w-]+)-[0-9a-f]{8,}\.js$/);
                    n && (e[`${n[1]}.js`] = t.src)
                }
                for (const t of document.getElementsByTagName("link")) {
                    const n = t.href.match(/\/([\w-]+)-[0-9a-f]{8,}\.css$/);
                    n && (e[`${n[1]}.css`] = t.href)
                }
                return e
            }
            Gn(Tl, "gatherBundleURLs");
            function Cl() {
                const e = Tl()
                  , t = kl("bundle-urls");
                if (t.kind === "err") {
                    Uo("bundle-urls", e);
                    return
                }
                const n = t.value || {}
                  , r = Object.keys(e).filter(o=>n[o] !== e[o]);
                r.length && Uo("bundle-urls", _l(_l({}, n), e)).kind === "ok" && pe({
                    downloadedBundles: r
                })
            }
            Gn(Cl, "report"),
            (async()=>{
                await Ft,
                window.requestIdleCallback(Cl)
            }
            )();
            var ag = Object.defineProperty
              , cg = (e,t)=>ag(e, "name", {
                value: t,
                configurable: !0
            });
            let Al, Wo = !1;
            function zo() {
                Al = document.activeElement,
                document.body && document.body.classList.toggle("intent-mouse", Wo)
            }
            cg(zo, "setClass"),
            document.addEventListener("mousedown", function() {
                Wo = !0,
                Al === document.activeElement && zo()
            }, {
                capture: !0
            }),
            document.addEventListener("keydown", function() {
                Wo = !1
            }, {
                capture: !0
            }),
            document.addEventListener("focusin", zo, {
                capture: !0
            });
            var lg = Object.defineProperty
              , ug = (e,t)=>lg(e, "name", {
                value: t,
                configurable: !0
            });
            function Pl(e) {
                e.preventDefault(),
                e.stopPropagation()
            }
            ug(Pl, "cancelEvent"),
            m("a.btn.disabled", {
                subscribe: e=>E(e, "click", Pl)
            }),
            m(".js-check-all-container", {
                constructor: HTMLElement,
                subscribe: ra
            });
            var dg = Object.defineProperty
              , xl = (e,t)=>dg(e, "name", {
                value: t,
                configurable: !0
            });
            const Ml = "logout-was-successful";
            function $l() {
                for (const e of [sessionStorage, localStorage])
                    try {
                        e.clear()
                    } catch (t) {}
            }
            xl($l, "clearData");
            function ql() {
                bo(Ml).length > 0 && ($l(),
                yo(Ml))
            }
            xl(ql, "clearDataIfJustLoggedOut"),
            ql();
            var fg = Object.defineProperty
              , Il = (e,t)=>fg(e, "name", {
                value: t,
                configurable: !0
            });
            const Ol = 2e3;
            d("clipboard-copy", "[data-copy-feedback]", e=>{
                const t = e.currentTarget
                  , n = t.getAttribute("data-copy-feedback")
                  , r = t.getAttribute("aria-label")
                  , o = t.getAttribute("data-tooltip-direction") || "s";
                t.setAttribute("aria-label", n),
                t.classList.add("tooltipped", `tooltipped-${o}`),
                t instanceof HTMLElement && (De(t),
                setTimeout(()=>{
                    r ? t.setAttribute("aria-label", r) : t.removeAttribute("aria-label"),
                    t.classList.remove("tooltipped", `tooltipped-${o}`)
                }
                , Ol))
            }
            );
            function Fl(e) {
                Ko.delete(e),
                Vo(e)
            }
            Il(Fl, "timerCallback");
            function Vo(e) {
                const t = e.querySelector(".js-clipboard-copy-icon")
                  , n = e.querySelector(".js-clipboard-check-icon");
                e.classList.toggle("ClipboardButton--success"),
                t && t.classList.toggle("d-none"),
                n && (n.classList.contains("d-sm-none") ? n.classList.toggle("d-sm-none") : n.classList.toggle("d-none"))
            }
            Il(Vo, "toggleCopyButton");
            const Ko = new WeakMap;
            d("clipboard-copy", ".js-clipboard-copy:not([data-view-component])", function({currentTarget: e}) {
                if (!(e instanceof HTMLElement))
                    return;
                const t = Ko.get(e);
                t ? clearTimeout(t) : Vo(e),
                Ko.set(e, setTimeout(Fl, Ol, e))
            });
            var mg = Object.defineProperty
              , W = (e,t)=>mg(e, "name", {
                value: t,
                configurable: !0
            });
            d("click", ".js-code-nav-retry", async function(e) {
                if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)
                    return;
                const t = document.querySelector(".js-tagsearch-popover");
                if (!t)
                    return;
                const n = t.querySelector(".js-tagsearch-popover-content");
                if (!n)
                    return;
                let r;
                const o = e.currentTarget;
                o.getAttribute("data-code-nav-kind") === "definitions" ? r = t.querySelector(".js-tagsearch-popover-content") : r = t.querySelector(".js-code-nav-references");
                const i = o.getAttribute("data-code-nav-url")
                  , a = new URL(i,window.location.origin)
                  , c = await fetch(a.toString(), {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    }
                });
                if (!c.ok)
                    return;
                const l = await c.text();
                !l || (r.innerHTML = l,
                n.scrollTop = 0)
            }),
            m(".js-code-nav-container", {
                constructor: HTMLElement,
                subscribe(e) {
                    const t = e
                      , n = document.querySelector(".js-tagsearch-popover");
                    if (!(n instanceof HTMLElement))
                        return {
                            unsubscribe() {}
                        };
                    const r = n.querySelector(".js-tagsearch-popover-content")
                      , o = new WeakMap
                      , s = new WeakMap;
                    let i;
                    async function a(j) {
                        const C = Dl(/\w+[!?]?/g, j.clientX, j.clientY);
                        if (!C)
                            return;
                        const M = C.commonAncestorContainer.parentElement;
                        for (const iw of M.classList)
                            if (["pl-token", "pl-c", "pl-s", "pl-k"].includes(iw))
                                return;
                        if (M.closest(".js-skip-tagsearch"))
                            return;
                        const x = C.toString();
                        if (!x || x.match(/\n|\s|[();&.=",]/))
                            return;
                        let $e = s.get(M);
                        if ($e || ($e = new Set,
                        s.set(M, $e)),
                        $e.has(x))
                            return;
                        $e.add(x);
                        const L = M.closest(".js-tagsearch-file");
                        if (!L)
                            return;
                        const qe = L.getAttribute("data-tagsearch-path") || "";
                        let I = L.getAttribute("data-tagsearch-lang") || "";
                        if (I === "HTML+ERB")
                            if (M.closest(".pl-sre"))
                                I = "Ruby";
                            else
                                return;
                        if (e.classList.contains("js-code-block-container") && (I = Nl(M) || "",
                        !I))
                            return;
                        const Tt = Bl(C)
                          , Q = await Rl(n, x, I, Tt, qe);
                        if (!Q)
                            return;
                        const Ct = document.createElement("span");
                        Ct.classList.add("pl-token"),
                        Ct.addEventListener("click", l),
                        Ct.setAttribute("data-hydro-click", n.getAttribute("data-hydro-click")),
                        Ct.setAttribute("data-hydro-click-hmac", n.getAttribute("data-hydro-click-hmac")),
                        o.set(Ct, Q),
                        C.surroundContents(Ct)
                    }
                    W(a, "onMouseMove");
                    function c() {
                        r.scrollTop = 0
                    }
                    W(c, "resetScrollTop");
                    function l(j) {
                        if (j.altKey || j.ctrlKey || j.metaKey || j.shiftKey)
                            return;
                        const C = j.currentTarget;
                        C === i ? g() : (f(C),
                        h()),
                        j.preventDefault()
                    }
                    W(l, "onClick");
                    function f(j) {
                        i && i.classList.remove("active"),
                        i = j,
                        i.classList.add("active"),
                        r.innerHTML = o.get(j) || "",
                        p(j)
                    }
                    W(f, "populatePopover");
                    function p(j) {
                        const C = t.getClientRects()[0]
                          , M = j.getClientRects()[0];
                        n.style.position = "absolute",
                        t.classList.contains("position-relative") ? (n.style.top = `${M.bottom - C.top + 7}px`,
                        n.style.left = `${M.left - C.left - 10}px`) : (n.style.top = `${window.scrollY + M.bottom + 7}px`,
                        n.style.left = `${window.scrollX + M.left - 10}px`)
                    }
                    W(p, "positionPopover");
                    function h() {
                        if (!n.hidden) {
                            c();
                            return
                        }
                        n.hidden = !1,
                        c(),
                        document.addEventListener("click", S),
                        document.addEventListener("keyup", P),
                        window.addEventListener("resize", w)
                    }
                    W(h, "showPopover");
                    function g() {
                        n.hidden || (n.hidden = !0,
                        i && i.classList.remove("active"),
                        i = void 0,
                        document.removeEventListener("click", S),
                        document.removeEventListener("keyup", P),
                        window.removeEventListener("resize", w))
                    }
                    W(g, "hidePopover");
                    function w() {
                        i instanceof HTMLElement && p(i)
                    }
                    W(w, "onResize");
                    function S(j) {
                        const {target: C} = j;
                        C instanceof Node && !n.contains(C) && !i.contains(C) && g()
                    }
                    W(S, "onDocumentClick");
                    function P(j) {
                        switch (j.key) {
                        case "Escape":
                            g();
                            break
                        }
                    }
                    return W(P, "onKeyup"),
                    e.addEventListener("mousemove", a),
                    {
                        unsubscribe() {
                            e.removeEventListener("mousemove", a)
                        }
                    }
                }
            });
            async function Rl(e, t, n, r, o) {
                const s = e.getAttribute("data-tagsearch-url")
                  , i = e.getAttribute("data-tagsearch-ref")
                  , a = new URL(s,window.location.origin)
                  , c = new URLSearchParams;
                c.set("q", t),
                c.set("blob_path", o),
                c.set("ref", i),
                c.set("language", n),
                c.set("row", r[0].toString()),
                c.set("col", r[1].toString()),
                a.search = c.toString();
                const l = await fetch(a.toString(), {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    }
                });
                if (!l.ok)
                    return "";
                const f = await l.text();
                return /js-tagsearch-no-definitions/.test(f) ? "" : f
            }
            W(Rl, "fetchPopoverContents");
            function Dl(e, t, n) {
                let r, o;
                if (document.caretPositionFromPoint) {
                    const c = document.caretPositionFromPoint(t, n);
                    c && (r = c.offsetNode,
                    o = c.offset)
                } else if (document.caretRangeFromPoint) {
                    const c = document.caretRangeFromPoint(t, n);
                    c && (r = c.startContainer,
                    o = c.startOffset)
                }
                if (!r || typeof o != "number" || r.nodeType !== Node.TEXT_NODE)
                    return;
                const s = r.textContent;
                if (!s)
                    return null;
                const i = Hl(s, e, o);
                if (!i)
                    return null;
                const a = document.createRange();
                return a.setStart(r, i[1]),
                a.setEnd(r, i[2]),
                a
            }
            W(Dl, "matchFromPoint");
            function Hl(e, t, n) {
                let r;
                for (; r = t.exec(e); ) {
                    const o = r.index + r[0].length;
                    if (r.index <= n && n < o)
                        return [r[0], r.index, o]
                }
                return null
            }
            W(Hl, "findNearestMatch");
            function Nl(e) {
                const t = e.closest(".highlight");
                if (t)
                    for (const n of t.classList)
                        switch (n) {
                        case "highlight-source-go":
                            return "Go";
                        case "highlight-source-js":
                            return "JavaScript";
                        case "highlight-source-python":
                            return "Python";
                        case "highlight-source-ruby":
                            return "Ruby";
                        case "highlight-source-ts":
                            return "TypeScript"
                        }
                return null
            }
            W(Nl, "getCodeBlockLanguage");
            function Bl(e) {
                let t = e.startContainer
                  , n = e.startOffset
                  , r = !1;
                for (; ; ) {
                    let o = t.previousSibling;
                    for (; !r && o; )
                        ["#comment", "BUTTON"].includes(o.nodeName) || (n += (o.textContent || "").length),
                        o = o.previousSibling;
                    const s = t.parentElement;
                    if (s) {
                        if (s.classList.contains("js-code-nav-pass"))
                            r = !0;
                        else if (s.classList.contains("js-file-line")) {
                            const i = s.previousElementSibling;
                            if (!i.classList.contains("js-code-nav-line-number"))
                                throw new Error("invariant");
                            return [parseInt(i.getAttribute("data-line-number") || "1", 10) - 1, n]
                        }
                        t = s
                    } else
                        return [0, 0]
                }
            }
            W(Bl, "getRowAndColumn");
            var pg = Object.defineProperty
              , Ul = (e,t)=>pg(e, "name", {
                value: t,
                configurable: !0
            });
            function Wl(e) {
                const t = e.querySelector(".js-comment-form-error");
                t instanceof HTMLElement && (t.hidden = !0)
            }
            Ul(Wl, "clearFormError"),
            d("click", ".errored.js-remove-error-state-on-click", function({currentTarget: e}) {
                e.classList.remove("errored")
            }),
            A(".js-new-comment-form", async function(e, t) {
                let n;
                Wl(e);
                try {
                    n = await t.json()
                } catch (s) {
                    zl(e, s)
                }
                if (!n)
                    return;
                e.reset();
                for (const s of e.querySelectorAll(".js-resettable-field"))
                    Le(s, s.getAttribute("data-reset-value") || "");
                const r = e.querySelector(".js-write-tab");
                r instanceof HTMLElement && r.click();
                const o = n.json.updateContent;
                for (const s in o) {
                    const i = o[s]
                      , a = document.querySelector(s);
                    a instanceof HTMLElement ? Tn(a, i) : console.warn(`couldn't find ${s} for immediate update`)
                }
                v(e, "comment:success")
            });
            function zl(e, t) {
                let n = "You can't comment at this time";
                if (t.response && t.response.status === 422) {
                    const o = t.response.json;
                    o.errors && (Array.isArray(o.errors) ? n += ` \u2014 your comment ${o.errors.join(", ")}` : n = o.errors)
                }
                n += ". ";
                const r = e.querySelector(".js-comment-form-error");
                if (r instanceof HTMLElement) {
                    r.textContent = n,
                    r.hidden = !1;
                    const o = r.closest("div.form-group.js-remove-error-state-on-click");
                    o && o.classList.add("errored")
                }
            }
            Ul(zl, "handleFormError");
            var hg = Object.defineProperty
              , Vl = (e,t)=>hg(e, "name", {
                value: t,
                configurable: !0
            });
            const gg = Vl((e,t)=>{
                const n = e.querySelector(".js-form-action-text")
                  , r = n || e;
                r.textContent = t ? e.getAttribute("data-comment-text") : r.getAttribute("data-default-action-text")
            }
            , "setButtonText")
              , bg = Vl(e=>{
                let t;
                return n=>{
                    const o = n.currentTarget.value.trim();
                    o !== t && (t = o,
                    gg(e, Boolean(o)))
                }
            }
            , "createInputHandler");
            m(".js-comment-and-button", {
                constructor: HTMLButtonElement,
                initialize(e) {
                    const t = e.form.querySelector(".js-comment-field")
                      , n = bg(e);
                    return {
                        add() {
                            t.addEventListener("input", n),
                            t.addEventListener("change", n)
                        },
                        remove() {
                            t.removeEventListener("input", n),
                            t.removeEventListener("change", n)
                        }
                    }
                }
            });
            var yg = Object.defineProperty
              , Kl = (e,t)=>yg(e, "name", {
                value: t,
                configurable: !0
            });
            function Xo(e, t) {
                const n = e.closest(".js-write-bucket");
                n && n.classList.toggle("focused", t)
            }
            Kl(Xo, "toggleFocus");
            function Xl(e) {
                const t = e.currentTarget;
                t instanceof Element && Xo(t, !1)
            }
            Kl(Xl, "blurred"),
            qt(".js-comment-field", function(e) {
                Xo(e, !0),
                e.addEventListener("blur", Xl, {
                    once: !0
                })
            });
            var vg = Object.defineProperty
              , wg = (e,t)=>vg(e, "name", {
                value: t,
                configurable: !0
            });
            const jg = 2303741511
              , Eg = 4;
            class Jn {
                static fromFile(t) {
                    return new Promise(function(n, r) {
                        const o = new FileReader;
                        o.onload = function() {
                            n(new Jn(o.result))
                        }
                        ,
                        o.onerror = function() {
                            r(o.error)
                        }
                        ,
                        o.readAsArrayBuffer(t)
                    }
                    )
                }
                constructor(t) {
                    this.dataview = new DataView(t),
                    this.pos = 0
                }
                advance(t) {
                    this.pos += t
                }
                readInt(t) {
                    const n = this
                      , r = function() {
                        switch (t) {
                        case 1:
                            return n.dataview.getUint8(n.pos);
                        case 2:
                            return n.dataview.getUint16(n.pos);
                        case 4:
                            return n.dataview.getUint32(n.pos);
                        default:
                            throw new Error("bytes parameter must be 1, 2 or 4")
                        }
                    }();
                    return this.advance(t),
                    r
                }
                readChar() {
                    return this.readInt(1)
                }
                readShort() {
                    return this.readInt(2)
                }
                readLong() {
                    return this.readInt(4)
                }
                readString(t) {
                    const n = [];
                    for (let r = 0; r < t; r++)
                        n.push(String.fromCharCode(this.readChar()));
                    return n.join("")
                }
                scan(t) {
                    if (this.readLong() !== jg)
                        throw new Error("invalid PNG");
                    for (this.advance(4); ; ) {
                        const n = this.readLong()
                          , r = this.readString(4)
                          , o = this.pos + n + Eg;
                        if (t.call(this, r, n) === !1 || r === "IEND")
                            break;
                        this.pos = o
                    }
                }
            }
            wg(Jn, "PNGScanner");
            var Sg = Object.defineProperty
              , Lg = (e,t)=>Sg(e, "name", {
                value: t,
                configurable: !0
            });
            const _g = .0254;
            async function Gl(e) {
                if (e.type !== "image/png")
                    return null;
                const t = e.slice(0, 10240, e.type)
                  , n = await Jn.fromFile(t)
                  , r = {
                    width: 0,
                    height: 0,
                    ppi: 1
                };
                return n.scan(function(o) {
                    switch (o) {
                    case "IHDR":
                        return r.width = this.readLong(),
                        r.height = this.readLong(),
                        !0;
                    case "pHYs":
                        {
                            const s = this.readLong()
                              , i = this.readLong()
                              , a = this.readChar();
                            let c;
                            return a === 1 && (c = _g),
                            c && (r.ppi = Math.round((s + i) / 2 * c)),
                            !1
                        }
                    case "IDAT":
                        return !1
                    }
                    return !0
                }),
                r
            }
            Lg(Gl, "imageDimensions");
            const kg = ["direction", "boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderStyle", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing", "tabSize", "MozTabSize"]
              , Tg = typeof window != "undefined" && window.mozInnerScreenX != null;
            function Cg(e, t, n) {
                const r = n && n.debug || !1;
                if (r) {
                    const f = document.querySelector("#input-textarea-caret-position-mirror-div");
                    f && f.parentNode.removeChild(f)
                }
                const o = document.createElement("div");
                o.id = "input-textarea-caret-position-mirror-div",
                document.body.appendChild(o);
                const s = o.style
                  , i = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle
                  , a = e.nodeName === "INPUT";
                s.whiteSpace = "pre-wrap",
                a || (s.wordWrap = "break-word"),
                s.position = "absolute",
                r || (s.visibility = "hidden");
                for (const f of kg)
                    if (a && f === "lineHeight")
                        if (i.boxSizing === "border-box") {
                            const p = parseInt(i.height)
                              , h = parseInt(i.paddingTop) + parseInt(i.paddingBottom) + parseInt(i.borderTopWidth) + parseInt(i.borderBottomWidth)
                              , g = h + parseInt(i.lineHeight);
                            p > g ? s.lineHeight = `${p - h}px` : p === g ? s.lineHeight = i.lineHeight : s.lineHeight = 0
                        } else
                            s.lineHeight = i.height;
                    else
                        s[f] = i[f];
                Tg ? e.scrollHeight > parseInt(i.height) && (s.overflowY = "scroll") : s.overflow = "hidden",
                o.textContent = e.value.substring(0, t),
                a && (o.textContent = o.textContent.replace(/\s/g, "\xA0"));
                const c = document.createElement("span");
                c.textContent = e.value.substring(t) || ".",
                o.appendChild(c);
                const l = {
                    top: c.offsetTop + parseInt(i.borderTopWidth),
                    left: c.offsetLeft + parseInt(i.borderLeftWidth),
                    height: parseInt(i.lineHeight)
                };
                return r ? c.style.backgroundColor = "#aaa" : document.body.removeChild(o),
                l
            }
            var Ag = Object.defineProperty
              , Qt = (e,t)=>Ag(e, "name", {
                value: t,
                configurable: !0
            });
            const Yn = new WeakMap;
            function Jl(e, t) {
                let n;
                if (Yn.has(e) ? n = Yn.get(e) : (n = new Map,
                Yn.set(e, n)),
                n.has(t))
                    return n.get(t);
                {
                    const r = Cg(e, t);
                    return n.set(t, r),
                    r
                }
            }
            Qt(Jl, "fetchCaretCoords");
            const Zt = Qt((e,t,n,r,o,s)=>{
                if (n === t)
                    return n;
                const i = Math.floor((n + t) / 2);
                if (i === t || i === n)
                    return i;
                const a = Jl(e, i)
                  , c = Math.floor(a.top / a.height)
                  , l = Math.floor(o / a.height);
                return c < l ? Zt(e, i + 1, n, r, o, s + 1) : c > l ? Zt(e, t, i - 1, r, o, s + 1) : a.left < r ? Zt(e, i + 1, n, r, o, s + 1) : a.left > r ? Zt(e, t, i - 1, r, o, s + 1) : i
            }
            , "binaryCursorSearch")
              , Pg = Qt((e,t,n)=>{
                const r = 0
                  , o = e.value.length - 1;
                return Zt(e, r, o, t, n, 0)
            }
            , "findCursorPosition");
            function Yl(e, t, n) {
                const r = Pg(e, t, n);
                e.setSelectionRange(r, r)
            }
            Qt(Yl, "setCursorPosition");
            function Ql(e, t) {
                const n = e.getBoundingClientRect();
                t.type === "dragenter" && Yn.delete(e);
                const r = t.clientX - n.left
                  , o = t.clientY - n.top + e.scrollTop;
                Yl(e, r, o)
            }
            Qt(Ql, "updateCaret");
            var xg = Object.defineProperty
              , O = (e,t)=>xg(e, "name", {
                value: t,
                configurable: !0
            });
            m(".js-paste-markdown", {
                constructor: HTMLElement,
                add(e) {
                    oa(e),
                    sa(e),
                    Rt("LINKIFY_SELECTED_TEXT_ON_URL_PASTE") && ia(e),
                    aa(e)
                },
                remove(e) {
                    ca(e),
                    la(e),
                    Rt("LINKIFY_SELECTED_TEXT_ON_URL_PASTE") && ua(e),
                    da(e)
                }
            });
            const Go = new WeakMap;
            function Mg(e, t) {
                Go.set(e, t)
            }
            O(Mg, "cachePlaceholder");
            function Zl(e) {
                return Go.get(e) || Yo(e)
            }
            O(Zl, "getPlaceholder");
            function Qn(e) {
                return ["video/mp4", "video/quicktime"].includes(e.file.type)
            }
            O(Qn, "isVideo");
            function eu(e) {
                return e.replace(/[[\]\\"<>&]/g, ".").replace(/\.{2,}/g, ".").replace(/^\.|\.$/gi, "")
            }
            O(eu, "parameterizeName");
            function Jo(e) {
                return Qn(e) ? `
Uploading ${e.file.name}\u2026
` : `${e.isImage() ? "!" : ""}[Uploading ${e.file.name}\u2026]()`
            }
            O(Jo, "placeholderText");
            function tu(e) {
                return eu(e).replace(/\.[^.]+$/, "").replace(/\./g, " ")
            }
            O(tu, "altText");
            const $g = 72 * 2;
            function en(e) {
                const n = e.target.closest("form").querySelector(".btn-primary");
                n.disabled = !0
            }
            O(en, "disableSubmit");
            function tn(e) {
                const n = e.target.closest("form").querySelector(".btn-primary");
                n.disabled = !1
            }
            O(tn, "enableSubmit");
            async function nu(e) {
                const {attachment: t} = e.detail
                  , n = e.currentTarget;
                let r;
                t.isImage() ? r = await su(t) : Qn(t) ? r = ou(t) : r = ru(t),
                Zo("", r, e, n)
            }
            O(nu, "onUploadCompleted");
            function ru(e) {
                return `[${e.file.name}](${e.href})`
            }
            O(ru, "mdLink");
            function ou(e) {
                return `
${e.href}
`
            }
            O(ou, "videoMarkdown");
            async function su(e) {
                const t = await iu(e.file)
                  , n = tu(e.file.name)
                  , r = e.href;
                return t.ppi === $g ? `<img width="${Math.round(t.width / 2)}" alt="${n}" src="${r}">` : `![${n}](${r})`
            }
            O(su, "imageTag");
            async function iu(e) {
                var t;
                const n = {
                    width: 0,
                    height: 0,
                    ppi: 0
                };
                try {
                    return (t = await Gl(e)) != null ? t : n
                } catch (r) {
                    return n
                }
            }
            O(iu, "imageSize");
            function Yo(e) {
                const t = Jo(e);
                return Qn(e) ? `
${t}
` : `${t}
`
            }
            O(Yo, "replacementText");
            function Qo(e) {
                const t = e.currentTarget.querySelector(".js-comment-field")
                  , n = Zl(e.detail.attachment);
                if (t)
                    t.setCustomValidity(""),
                    Cn(t, n, "");
                else {
                    const o = Dt(e.currentTarget.querySelector(".js-code-editor")).editor.getSearchCursor(n);
                    o.findNext(),
                    o.replace("")
                }
            }
            O(Qo, "removeFailedUpload");
            function Zo(e, t, n, r) {
                const o = (r || n.currentTarget).querySelector(".js-comment-field")
                  , s = (r || n.currentTarget).querySelector(".js-file-upload-loading-text")
                  , i = Jo(n.detail.attachment)
                  , {batch: a} = n.detail;
                if (o) {
                    const c = o.value.substring(o.selectionStart, o.selectionEnd);
                    if (e === "uploading") {
                        let l;
                        c.length ? l = Cn(o, c, i) : l = so(o, i, {
                            appendNewline: !0
                        }),
                        Go.set(n.detail.attachment, l)
                    } else
                        Cn(o, i, t);
                    a.isFinished() ? tn(n) : en(n)
                } else {
                    const c = Dt((r || n.currentTarget).querySelector(".js-code-editor")).editor;
                    if (e === "uploading")
                        if (c.getSelection().length)
                            c.replaceSelection(i);
                        else {
                            const l = c.getCursor()
                              , f = Yo(n.detail.attachment);
                            c.replaceRange(f, l)
                        }
                    else {
                        const l = c.getSearchCursor(i);
                        l.findNext(),
                        l.replace(t)
                    }
                    a.isFinished() ? tn(n) : en(n)
                }
                if (s) {
                    const c = s.getAttribute("data-file-upload-message");
                    s.textContent = `${c} (${a.uploaded() + 1}/${a.size})`
                }
            }
            O(Zo, "setValidityAndLinkText"),
            d("upload:setup", ".js-upload-markdown-image", function(e) {
                Zo("uploading", "", e)
            }),
            d("upload:complete", ".js-upload-markdown-image", nu),
            d("upload:error", ".js-upload-markdown-image", function(e) {
                Qo(e);
                const {batch: t} = e.detail;
                t.isFinished() ? tn(e) : en(e)
            });
            function es(e) {
                var t;
                if (e.stopPropagation(),
                Rt("FILE_UPLOAD_CURSOR_POSITION")) {
                    const n = e.currentTarget;
                    if (!n)
                        return;
                    const r = n.querySelector(".js-comment-field");
                    if (r)
                        Ql(r, e);
                    else {
                        const o = (t = Dt(n.querySelector(".js-code-editor"))) == null ? void 0 : t.editor;
                        if (o) {
                            const s = o.coordsChar({
                                left: e.pageX,
                                top: e.pageY
                            });
                            o.setCursor(s)
                        }
                    }
                }
            }
            O(es, "updateCursor"),
            d("dragenter", "file-attachment", es),
            d("dragover", "file-attachment", es),
            d("upload:invalid", ".js-upload-markdown-image", function(e) {
                Qo(e);
                const {batch: t} = e.detail;
                t.isFinished() ? tn(e) : en(e)
            });
            var qg = Object.defineProperty
              , Je = (e,t)=>qg(e, "name", {
                value: t,
                configurable: !0
            });
            function au(e) {
                const t = e.querySelector(".js-data-preview-url-csrf")
                  , n = e.closest("form").elements.namedItem("authenticity_token");
                if (t instanceof HTMLInputElement)
                    return t.value;
                if (n instanceof HTMLInputElement)
                    return n.value;
                throw new Error("Comment preview authenticity token not found")
            }
            Je(au, "token");
            function Zn(e) {
                const t = e.closest(".js-previewable-comment-form")
                  , n = e.classList.contains("js-preview-tab");
                if (n) {
                    const s = t.querySelector(".js-write-bucket")
                      , i = t.querySelector(".js-preview-body");
                    s.clientHeight > 0 && (i.style.minHeight = `${s.clientHeight}px`)
                }
                t.classList.toggle("preview-selected", n),
                t.classList.toggle("write-selected", !n);
                const r = t.querySelector('.tabnav-tab.selected, .tabnav-tab[aria-selected="true"]');
                r.setAttribute("aria-selected", "false"),
                r.classList.remove("selected"),
                e.classList.add("selected"),
                e.setAttribute("aria-selected", "true");
                const o = t.querySelector(".js-write-tab");
                return n ? o.setAttribute("data-hotkey", "Control+P,Meta+Shift+p") : o.removeAttribute("data-hotkey"),
                t
            }
            Je(Zn, "activateTab"),
            d("click", ".js-write-tab", function(e) {
                const t = e.currentTarget
                  , n = t.closest(".js-previewable-comment-form");
                if (n instanceof Sn) {
                    setTimeout(()=>{
                        n.querySelector(".js-comment-field").focus()
                    }
                    );
                    return
                }
                const r = Zn(t);
                setTimeout(()=>{
                    r.querySelector(".js-comment-field").focus()
                }
                );
                const o = n.querySelector("markdown-toolbar");
                o instanceof HTMLElement && (o.hidden = !1)
            }),
            d("click", ".js-preview-tab", function(e) {
                const t = e.currentTarget
                  , n = t.closest(".js-previewable-comment-form");
                if (n instanceof Sn)
                    return;
                const r = Zn(t);
                setTimeout(()=>{
                    er(r)
                }
                );
                const o = n.querySelector("markdown-toolbar");
                o instanceof HTMLElement && (o.hidden = !0),
                e.stopPropagation(),
                e.preventDefault()
            }),
            d("tab-container-change", ".js-previewable-comment-form", function(e) {
                const t = e.detail.relatedTarget
                  , n = t && t.classList.contains("js-preview-panel")
                  , r = e.currentTarget
                  , o = r.querySelector(".js-write-tab");
                if (n) {
                    const s = r.querySelector(".js-write-bucket")
                      , i = r.querySelector(".js-preview-body");
                    !i.hasAttribute("data-skip-sizing") && s.clientHeight > 0 && (i.style.minHeight = `${s.clientHeight}px`),
                    o.setAttribute("data-hotkey", "Control+P,Meta+Shift+p"),
                    er(r);
                    const c = r.querySelector("markdown-toolbar");
                    c instanceof HTMLElement && (c.hidden = !0)
                } else {
                    o.removeAttribute("data-hotkey");
                    const s = r.querySelector("markdown-toolbar");
                    s instanceof HTMLElement && (s.hidden = !1)
                }
                r.classList.toggle("preview-selected", n),
                r.classList.toggle("write-selected", !n)
            }),
            d("preview:render", ".js-previewable-comment-form", function(e) {
                const t = e.target.querySelector(".js-preview-tab")
                  , n = Zn(t);
                setTimeout(()=>{
                    er(n);
                    const r = n.querySelector("markdown-toolbar");
                    r instanceof HTMLElement && (r.hidden = !0)
                }
                )
            });
            function cu(e) {
                var t, n, r, o, s, i, a, c, l;
                const f = e.querySelector(".js-comment-field").value
                  , p = (t = e.querySelector(".js-path")) == null ? void 0 : t.value
                  , h = (n = e.querySelector(".js-line-number")) == null ? void 0 : n.value
                  , g = (r = e.querySelector(".js-start-line-number")) == null ? void 0 : r.value
                  , w = (o = e.querySelector(".js-side")) == null ? void 0 : o.value
                  , S = (s = e.querySelector(".js-start-side")) == null ? void 0 : s.value
                  , P = (i = e.querySelector(".js-start-commit-oid")) == null ? void 0 : i.value
                  , j = (a = e.querySelector(".js-end-commit-oid")) == null ? void 0 : a.value
                  , C = (c = e.querySelector(".js-base-commit-oid")) == null ? void 0 : c.value
                  , M = (l = e.querySelector(".js-comment-id")) == null ? void 0 : l.value
                  , x = new FormData;
                return x.append("text", f),
                x.append("authenticity_token", au(e)),
                p && x.append("path", p),
                h && x.append("line_number", h),
                g && x.append("start_line_number", g),
                w && x.append("side", w),
                S && x.append("start_side", S),
                P && x.append("start_commit_oid", P),
                j && x.append("end_commit_oid", j),
                C && x.append("base_commit_oid", C),
                M && x.append("comment_id", M),
                x
            }
            Je(cu, "previewForm");
            function ts(e) {
                const t = e.getAttribute("data-preview-url")
                  , n = cu(e);
                return v(e, "preview:setup", {
                    data: n
                }),
                Ig(t, n)
            }
            Je(ts, "fetchPreview");
            const Ig = le(lu, {
                hash: uu
            });
            let ns = null;
            async function lu(e, t) {
                ns == null || ns.abort();
                const {signal: n} = ns = new AbortController
                  , r = await fetch(e, {
                    method: "post",
                    body: t,
                    signal: n
                });
                if (!r.ok)
                    throw new Error("something went wrong");
                return r.text()
            }
            Je(lu, "uncachedFetch");
            function uu(e, t) {
                const n = [...t.entries()].toString();
                return `${e}:${n}`
            }
            Je(uu, "hash");
            async function er(e) {
                const t = e.querySelector(".comment-body");
                t.innerHTML = "<p>Loading preview&hellip;</p>";
                try {
                    const n = await ts(e);
                    t.innerHTML = n || "<p>Nothing to preview</p>"
                } catch (n) {
                    n.name !== "AbortError" && (t.innerHTML = "<p>Error rendering preview</p>")
                }
            }
            Je(er, "renderPreview"),
            m(".js-preview-tab", function(e) {
                e.addEventListener("mouseenter", async()=>{
                    const t = e.closest(".js-previewable-comment-form");
                    try {
                        await ts(t)
                    } catch (n) {}
                }
                )
            }),
            U("keydown", ".js-comment-field", function(e) {
                const t = e.target;
                if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toUpperCase() === "P") {
                    const n = t.closest(".js-previewable-comment-form");
                    n.classList.contains("write-selected") && (n instanceof Sn ? n.querySelector(".js-preview-tab").click() : (t.blur(),
                    n.dispatchEvent(new CustomEvent("preview:render",{
                        bubbles: !0,
                        cancelable: !1
                    }))),
                    e.preventDefault(),
                    e.stopImmediatePropagation())
                }
            });
            var Og = Object.defineProperty
              , rs = (e,t)=>Og(e, "name", {
                value: t,
                configurable: !0
            });
            const du = /^(\+1|-1|:\+1?|:-1?)$/
              , Fg = rs(e=>{
                let t = !1;
                for (const n of e.split(`
`)) {
                    const r = n.trim();
                    if (!(!r || r.startsWith(">"))) {
                        if (t && du.test(r) === !1)
                            return !1;
                        !t && du.test(r) && (t = !0)
                    }
                }
                return t
            }
            , "isReactionLikeComment");
            d("focusout", "#new_comment_field", function(e) {
                const n = e.currentTarget.closest(".js-reaction-suggestion");
                n && ss(n)
            }),
            d("focusin", "#new_comment_field", function(e) {
                os(e)
            }),
            U("keyup", "#new_comment_field", function(e) {
                os(e)
            });
            function os(e) {
                const t = e.target
                  , n = t.value
                  , r = t.closest(".js-reaction-suggestion");
                if (!!r)
                    if (Fg(n)) {
                        r.classList.remove("hide-reaction-suggestion"),
                        r.classList.add("reaction-suggestion");
                        const o = r.getAttribute("data-reaction-markup");
                        r.setAttribute("data-reaction-suggestion-message", o)
                    } else
                        ss(r)
            }
            rs(os, "toggleReactionSuggestion");
            function ss(e) {
                e.classList.remove("reaction-suggestion"),
                e.classList.add("hide-reaction-suggestion"),
                e.removeAttribute("data-reaction-suggestion-message")
            }
            rs(ss, "clearReactionSuggestion"),
            d("navigation:keydown", ".js-commits-list-item", function(e) {
                !_n(e.detail.originalEvent) || e.target instanceof Element && e.detail.hotkey === "c" && e.target.querySelector(".js-navigation-open").click()
            }),
            document.addEventListener("click", function(e) {
                if (!(e.target instanceof Element))
                    return;
                const t = "a[data-confirm], input[type=submit][data-confirm], input[type=checkbox][data-confirm], button[data-confirm]"
                  , n = e.target.closest(t);
                if (!n)
                    return;
                const r = n.getAttribute("data-confirm");
                !r || n instanceof HTMLInputElement && n.hasAttribute("data-confirm-checked") && !n.checked || confirm(r) || (e.stopImmediatePropagation(),
                e.preventDefault())
            }, !0),
            ce(".js-company-name-input", function(e) {
                const t = e.target
                  , n = t.form
                  , r = n.querySelectorAll(".js-company-name-text");
                if (r.length === 0)
                    return;
                const o = n.querySelector(".js-corp-tos-link")
                  , s = n.querySelector(".js-tos-link");
                s && (s.classList.add("d-none"),
                s.setAttribute("aria-hidden", "true"),
                o && (o.classList.remove("d-none"),
                o.setAttribute("aria-hidden", "false")));
                for (const i of r)
                    if (t.value)
                        if (i.hasAttribute("data-wording")) {
                            const c = i.getAttribute("data-wording");
                            i.textContent = ` ${c} ${t.value}`
                        } else
                            i.textContent = t.value;
                    else
                        i.textContent = ""
            });
            var Rg = Object.defineProperty
              , Dg = (e,t)=>Rg(e, "name", {
                value: t,
                configurable: !0
            });
            m(".js-company-owned:not(:checked)", {
                constructor: HTMLInputElement,
                add(e) {
                    const n = e.form.querySelector(".js-company-name-input")
                      , r = document.querySelector(".js-company-name-text")
                      , o = document.querySelector(".js-corp-tos-link")
                      , s = document.querySelector(".js-tos-link");
                    e.getAttribute("data-optional") && n.removeAttribute("required"),
                    Le(n, ""),
                    s.classList.remove("d-none"),
                    s.setAttribute("aria-hidden", "false"),
                    o.classList.add("d-none"),
                    o.setAttribute("aria-hidden", "true"),
                    r.textContent = ""
                }
            }),
            m(".js-company-owned:checked", {
                constructor: HTMLInputElement,
                add(e) {
                    const n = e.form.querySelector(".js-company-name-input");
                    n && (n.setAttribute("required", ""),
                    v(n, "focus"),
                    v(n, "input"))
                }
            }),
            m(".js-company-owned-autoselect", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = e;
                    function n() {
                        if (t.checked && t.form) {
                            const r = t.form.querySelector(".js-company-owned");
                            Le(r, !0)
                        }
                    }
                    Dg(n, "autoselect"),
                    t.addEventListener("change", n),
                    n()
                }
            });
            var Hg = Object.defineProperty
              , is = (e,t)=>Hg(e, "name", {
                value: t,
                configurable: !0
            });
            let Ce = null;
            document.addEventListener("keydown", function(e) {
                !e.defaultPrevented && e.key === "Escape" && Ce && Ce.removeAttribute("open")
            }),
            m(".js-dropdown-details", {
                subscribe: e=>re(E(e, "toggle", mu), E(e, "toggle", fu))
            });
            function fu({currentTarget: e}) {
                const t = e;
                if (t.hasAttribute("open")) {
                    const n = t.querySelector("[autofocus]");
                    n && n.focus()
                } else {
                    const n = t.querySelector("summary");
                    n && n.focus()
                }
            }
            is(fu, "autofocus");
            function mu({currentTarget: e}) {
                const t = e;
                t.hasAttribute("open") ? (Ce && Ce !== t && Ce.removeAttribute("open"),
                Ce = t) : t === Ce && (Ce = null)
            }
            is(mu, "closeCurrentDetailsDropdown"),
            m("[data-deferred-details-content-url]:not([data-details-no-preload-on-hover])", {
                subscribe: e=>{
                    const t = e.querySelector("summary");
                    return E(t, "mouseenter", as)
                }
            }),
            m("[data-deferred-details-content-url]", {
                subscribe: e=>E(e, "toggle", as)
            });
            function as({currentTarget: e}) {
                if (!(e instanceof Element))
                    return;
                const t = e.closest("details")
                  , n = t.getAttribute("data-deferred-details-content-url");
                t.removeAttribute("data-deferred-details-content-url");
                const r = t.querySelector("include-fragment, poll-include-fragment");
                r.src = n
            }
            is(as, "loadDeferredContent"),
            d("click", "[data-toggle-for]", function(e) {
                const t = e.currentTarget.getAttribute("data-toggle-for") || ""
                  , n = document.getElementById(t);
                !n || (n.hasAttribute("open") ? n.removeAttribute("open") : n.setAttribute("open", "open"))
            }),
            Ot(function({target: e}) {
                if (!e || e.closest("summary"))
                    return;
                let t = e.parentElement;
                for (; t; )
                    t = t.closest("details"),
                    t && (t.hasAttribute("open") || t.setAttribute("open", ""),
                    t = t.parentElement)
            }),
            d("details-dialog-close", "[data-disable-dialog-dismiss]", function(e) {
                e.preventDefault()
            });
            var Ng = Object.defineProperty
              , pu = (e,t)=>Ng(e, "name", {
                value: t,
                configurable: !0
            });
            m("details.select-menu details-menu include-fragment", function(e) {
                const t = e.closest("details");
                !t || (e.addEventListener("loadstart", function() {
                    t.classList.add("is-loading"),
                    t.classList.remove("has-error")
                }),
                e.addEventListener("error", function() {
                    t.classList.add("has-error")
                }),
                e.addEventListener("loadend", function() {
                    t.classList.remove("is-loading");
                    const n = t.querySelector(".js-filterable-field");
                    n && v(n, "filterable:change")
                }))
            }),
            m("details details-menu .js-filterable-field", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = e.closest("details");
                    t.addEventListener("toggle", function() {
                        t.hasAttribute("open") || (e.value = "",
                        v(e, "filterable:change"))
                    })
                }
            }),
            m("details-menu[role=menu] [role=menu]", e=>{
                const t = e.closest("details-menu[role]");
                t && t !== e && t.removeAttribute("role")
            }
            ),
            m("details details-menu remote-input input", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = e.closest("details");
                    t.addEventListener("toggle", function() {
                        t.hasAttribute("open") || (e.value = "")
                    })
                }
            }),
            m("form details-menu", e=>{
                const t = e.closest("form");
                t.addEventListener("reset", ()=>{
                    setTimeout(()=>hu(t), 0)
                }
                )
            }
            );
            function hu(e) {
                const t = e.querySelectorAll("details-menu [role=menuitemradio] input[type=radio]:checked");
                for (const n of t)
                    v(n, "change")
            }
            pu(hu, "resetMenus"),
            U("keypress", "details-menu .js-filterable-field, details-menu filter-input input", e=>{
                if (e.key === "Enter") {
                    const r = e.currentTarget.closest("details-menu").querySelector('[role^="menuitem"]:not([hidden])');
                    r instanceof HTMLElement && r.click(),
                    e.preventDefault()
                }
            }
            ),
            d("details-menu-selected", "details-menu", e=>{
                const n = e.currentTarget.querySelector(".js-filterable-field");
                n instanceof HTMLInputElement && n.value && n.focus()
            }
            , {
                capture: !0
            }),
            d("details-menu-selected", "[data-menu-input]", e=>{
                if (!(e.target instanceof Element))
                    return;
                const t = e.target.getAttribute("data-menu-input")
                  , n = document.getElementById(t);
                (n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement) && (n.value = e.detail.relatedTarget.value)
            }
            , {
                capture: !0
            }),
            m("details-menu remote-input", {
                constructor: fa,
                initialize(e) {
                    const t = document.getElementById(e.getAttribute("aria-owns") || "");
                    if (!t)
                        return;
                    let n = null;
                    e.addEventListener("load", ()=>{
                        document.activeElement && t.contains(document.activeElement) && document.activeElement.id ? n = document.activeElement.id : n = null
                    }
                    ),
                    e.addEventListener("loadend", ()=>{
                        if (n) {
                            const r = t.querySelector(`#${n}`) || t.querySelector('[role^="menu"]');
                            r instanceof HTMLElement ? r.focus() : e.input && e.input.focus()
                        }
                    }
                    )
                }
            }),
            d("details-menu-selected", "details-menu[data-menu-max-options]", e=>{
                const t = +e.currentTarget.getAttribute("data-menu-max-options")
                  , n = e.currentTarget.querySelectorAll('[role="menuitemcheckbox"][aria-checked="true"]')
                  , r = t === n.length;
                e.currentTarget.querySelector("[data-menu-max-options-warning]").hidden = !r;
                for (const o of e.currentTarget.querySelectorAll('[role="menuitemcheckbox"] input'))
                    o.disabled = r && !o.checked
            }
            , {
                capture: !0
            }),
            m("details > details-menu", {
                subscribe(e) {
                    const t = e.closest("details");
                    return E(t, "toggle", gu)
                }
            });
            async function gu({currentTarget: e}) {
                const t = e
                  , n = t.hasAttribute("open");
                v(t, n ? "menu:activate" : "menu:deactivate"),
                await Ne(),
                v(t, n ? "menu:activated" : "menu:deactivated")
            }
            pu(gu, "fireMenuToggleEvent");
            var Bg = Object.defineProperty
              , cs = (e,t)=>Bg(e, "name", {
                value: t,
                configurable: !0
            });
            const ls = new WeakMap
              , bu = ["input[type=submit][data-disable-with]", "button[data-disable-with]"].join(", ");
            function yu(e) {
                return e instanceof HTMLInputElement ? e.value || "Submit" : e.innerHTML || ""
            }
            cs(yu, "getButtonText");
            function us(e, t) {
                e instanceof HTMLInputElement ? e.value = t : e.innerHTML = t
            }
            cs(us, "setButtonText"),
            d("submit", "form", function(e) {
                for (const t of e.currentTarget.querySelectorAll(bu)) {
                    ls.set(t, yu(t));
                    const n = t.getAttribute("data-disable-with");
                    n && us(t, n),
                    t.disabled = !0
                }
            }, {
                capture: !0
            });
            function ds(e) {
                for (const t of e.querySelectorAll(bu)) {
                    const n = ls.get(t);
                    n != null && (us(t, n),
                    (!t.hasAttribute("data-disable-invalid") || e.checkValidity()) && (t.disabled = !1),
                    ls.delete(t))
                }
            }
            cs(ds, "revert"),
            d("deprecatedAjaxComplete", "form", function({currentTarget: e, target: t}) {
                e === t && ds(e)
            }),
            Qr(ds);
            var Ug = Object.defineProperty
              , pt = (e,t)=>Ug(e, "name", {
                value: t,
                configurable: !0
            });
            m(".js-document-dropzone", {
                constructor: HTMLElement,
                add(e) {
                    document.body.addEventListener("dragstart", bs),
                    document.body.addEventListener("dragend", ys),
                    document.body.addEventListener("dragenter", nn),
                    document.body.addEventListener("dragover", nn),
                    document.body.addEventListener("dragleave", ps),
                    e.addEventListener("drop", hs)
                },
                remove(e) {
                    document.body.removeEventListener("dragstart", bs),
                    document.body.removeEventListener("dragend", ys),
                    document.body.removeEventListener("dragenter", nn),
                    document.body.removeEventListener("dragover", nn),
                    document.body.removeEventListener("dragleave", ps),
                    e.removeEventListener("drop", hs)
                }
            });
            function fs(e) {
                return Array.from(e.types).indexOf("Files") >= 0
            }
            pt(fs, "hasFile");
            let ms = null;
            function nn(e) {
                if (gs)
                    return;
                const t = e.currentTarget;
                ms && window.clearTimeout(ms),
                ms = window.setTimeout(()=>t.classList.remove("dragover"), 200);
                const n = e.dataTransfer;
                !n || !fs(n) || (n.dropEffect = "copy",
                t.classList.add("dragover"),
                e.stopPropagation(),
                e.preventDefault())
            }
            pt(nn, "onDragenter");
            function ps(e) {
                e.target instanceof Element && e.target.classList.contains("js-document-dropzone") && e.currentTarget.classList.remove("dragover")
            }
            pt(ps, "onBodyDragleave");
            function hs(e) {
                const t = e.currentTarget;
                t.classList.remove("dragover"),
                document.body.classList.remove("dragover");
                const n = e.dataTransfer;
                !n || !fs(n) || (v(t, "document:drop", {
                    transfer: n
                }),
                e.stopPropagation(),
                e.preventDefault())
            }
            pt(hs, "onDrop");
            let gs = !1;
            function bs() {
                gs = !0
            }
            pt(bs, "onDragstart");
            function ys() {
                gs = !1
            }
            pt(ys, "onDragend");
            var Wg = Object.defineProperty
              , tr = (e,t)=>Wg(e, "name", {
                value: t,
                configurable: !0
            });
            async function vs(e, t) {
                const r = new TextEncoder().encode(t)
                  , {seal: o} = await _.import("./chunk-tweetsodium.js");
                return o(r, e)
            }
            tr(vs, "encrypt");
            function ws(e) {
                const t = atob(e).split("").map(n=>n.charCodeAt(0));
                return Uint8Array.from(t)
            }
            tr(ws, "decode");
            function js(e) {
                let t = "";
                for (const n of e)
                    t += String.fromCharCode(n);
                return btoa(t)
            }
            tr(js, "encode"),
            d("submit", "form.js-encrypt-submit", async function(e) {
                const t = e.currentTarget;
                if (e.defaultPrevented || !t.checkValidity())
                    return;
                const n = t.elements.namedItem("secret_value");
                if (n.disabled = !0,
                !n.value)
                    return;
                e.preventDefault();
                const r = ws(t.getAttribute("data-public-key"));
                t.elements.namedItem("encrypted_value").value = js(await vs(r, n.value)),
                t.submit()
            }),
            d("submit", "form.js-encrypt-bulk-submit", Es(!0)),
            d("submit", "form.js-encrypt-bulk-submit-enable-empty", Es(!1));
            function Es(e) {
                return async function(t) {
                    const n = t.currentTarget;
                    if (t.defaultPrevented || !n.checkValidity())
                        return;
                    const r = ws(n.getAttribute("data-public-key"));
                    t.preventDefault();
                    for (const o of n.elements) {
                        const s = o;
                        if (s.id.endsWith("secret")) {
                            if (s.disabled = !0,
                            s.required && !s.value) {
                                const a = `${s.name} is invalid!`
                                  , c = document.querySelector("template.js-flash-template");
                                c.after(new Oe(c,{
                                    className: "flash-error",
                                    message: a
                                }));
                                return
                            }
                            const i = `${s.name}_encrypted_value`;
                            if (!s.value) {
                                n.elements.namedItem(i).disabled = e;
                                continue
                            }
                            n.elements.namedItem(i).value = js(await vs(r, s.value))
                        }
                    }
                    n.submit()
                }
            }
            tr(Es, "submitBulk");
            var zg = Object.defineProperty
              , Ss = (e,t)=>zg(e, "name", {
                value: t,
                configurable: !0
            });
            let nr;
            function rn(e, t) {
                const n = document.querySelector('.js-site-favicon[type="image/svg+xml"]')
                  , r = document.querySelector('.js-site-favicon[type="image/png"]');
                t || (t = "light");
                const o = t === "light" ? "" : "-dark";
                if (n && r)
                    if (nr == null && (nr = n.href),
                    e) {
                        e = e.substr(0, e.lastIndexOf(".")),
                        e = `${e}${o}.svg`,
                        n.href = e;
                        const s = n.href.substr(0, n.href.lastIndexOf("."));
                        r.href = `${s}.png`
                    } else {
                        const s = n.href.indexOf("-dark.svg")
                          , i = n.href.substr(0, s !== -1 ? s : n.href.lastIndexOf("."));
                        n.href = `${i}${o}.svg`,
                        r.href = `${i}${o}.png`
                    }
            }
            Ss(rn, "updateFavicon");
            function on() {
                return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
            }
            Ss(on, "prefersDarkColorScheme");
            function vu() {
                nr != null && rn(nr, on() ? "dark" : "light")
            }
            Ss(vu, "resetIcon"),
            m("[data-favicon-override]", {
                add(e) {
                    const t = e.getAttribute("data-favicon-override");
                    setTimeout(()=>rn(t, on() ? "dark" : "light"))
                },
                remove() {
                    vu()
                }
            }),
            on() && rn(void 0, "dark"),
            window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{
                rn(void 0, on() ? "dark" : "light")
            }
            );
            var Vg = Object.defineProperty
              , wu = (e,t)=>Vg(e, "name", {
                value: t,
                configurable: !0
            });
            m(".js-feature-preview-indicator-container", e=>{
                ju(e)
            }
            );
            async function ju(e) {
                const t = e.getAttribute("data-feature-preview-indicator-src")
                  , n = await Eu(t)
                  , r = e.querySelectorAll(".js-feature-preview-indicator");
                for (const o of r)
                    o.hidden = !n
            }
            wu(ju, "fetchFeaturePreviewIndicator");
            async function Eu(e) {
                try {
                    const t = await fetch(e, {
                        headers: {
                            Accept: "application/json"
                        }
                    });
                    return t.ok ? (await t.json()).show_indicator : !1
                } catch (t) {
                    return !1
                }
            }
            wu(Eu, "fetchIndicator"),
            d("click", "[data-feature-preview-trigger-url]", async e=>{
                const t = e.currentTarget
                  , n = t.getAttribute("data-feature-preview-trigger-url")
                  , r = await _e({
                    content: H(document, n),
                    dialogClass: "feature-preview-dialog"
                })
                  , o = t.getAttribute("data-feature-preview-close-details")
                  , s = t.getAttribute("data-feature-preview-close-hmac");
                r.addEventListener("dialog:remove", ()=>{
                    pe({
                        hydroEventPayload: o,
                        hydroEventHmac: s
                    }, !0)
                }
                );
                const i = document.querySelectorAll(".js-feature-preview-indicator");
                for (const a of i)
                    a.hidden = !0
            }
            ),
            A(".js-feature-preview-unenroll", async(e,t)=>{
                await t.text();
                const n = e.querySelector(".js-feature-preview-slug").value;
                v(e, `feature-preview-unenroll:${n}`)
            }
            ),
            A(".js-feature-preview-enroll", async(e,t)=>{
                await t.text();
                const n = e.querySelector(".js-feature-preview-slug").value;
                v(e, `feature-preview-enroll:${n}`)
            }
            );
            var Kg = Object.defineProperty
              , rr = (e,t)=>Kg(e, "name", {
                value: t,
                configurable: !0
            });
            class Su {
                constructor(t, n) {
                    this.attachment = t,
                    this.policy = n
                }
                async process(t) {
                    var n, r, o, s;
                    const i = window.performance.now()
                      , a = new Headers(this.policy.header || {})
                      , c = new XMLHttpRequest;
                    c.open("POST", this.policy.upload_url, !0);
                    for (const [h,g] of a)
                        c.setRequestHeader(h, g);
                    c.onloadstart = ()=>{
                        t.attachmentUploadDidStart(this.attachment, this.policy)
                    }
                    ,
                    c.upload.onprogress = h=>{
                        if (h.lengthComputable) {
                            const g = Math.round(h.loaded / h.total * 100);
                            t.attachmentUploadDidProgress(this.attachment, g)
                        }
                    }
                    ,
                    await Lu(c, _u(this.attachment, this.policy)),
                    c.status === 204 ? (Ls(this.policy),
                    t.attachmentUploadDidComplete(this.attachment, this.policy, {})) : c.status === 201 ? (Ls(this.policy),
                    t.attachmentUploadDidComplete(this.attachment, this.policy, JSON.parse(c.responseText))) : t.attachmentUploadDidError(this.attachment, {
                        status: c.status,
                        body: c.responseText
                    });
                    const p = {
                        duration: window.performance.now() - i,
                        size: (r = (n = this.attachment) == null ? void 0 : n.file) == null ? void 0 : r.size,
                        fileType: (s = (o = this.attachment) == null ? void 0 : o.file) == null ? void 0 : s.type,
                        success: c.status === 204 || c.status === 201
                    };
                    pe({
                        uploadTiming: p
                    }, !0)
                }
            }
            rr(Su, "AttachmentUpload");
            function Lu(e, t) {
                return new Promise((n,r)=>{
                    e.onload = ()=>n(e),
                    e.onerror = r,
                    e.send(t)
                }
                )
            }
            rr(Lu, "send");
            function _u(e, t) {
                const n = new FormData;
                t.same_origin && n.append("authenticity_token", t.upload_authenticity_token);
                for (const r in t.form)
                    n.append(r, t.form[r]);
                return n.append("file", e.file),
                n
            }
            rr(_u, "uploadForm");
            function Ls(e) {
                const t = typeof e.asset_upload_url == "string" ? e.asset_upload_url : null
                  , n = typeof e.asset_upload_authenticity_token == "string" ? e.asset_upload_authenticity_token : null;
                if (!(t && n))
                    return;
                const r = new FormData;
                r.append("authenticity_token", n),
                fetch(t, {
                    method: "PUT",
                    body: r,
                    credentials: "same-origin",
                    headers: {
                        Accept: "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                })
            }
            rr(Ls, "markComplete");
            var Xg = Object.defineProperty
              , be = (e,t)=>Xg(e, "name", {
                value: t,
                configurable: !0
            });
            async function ku(e, t) {
                const n = Pu(e, t);
                for (const r of e.attachments) {
                    const o = await Tu(e, r, t);
                    if (!o)
                        return;
                    try {
                        await new Su(r,o).process(n)
                    } catch (s) {
                        v(t, "upload:error", {
                            batch: e,
                            attachment: r
                        }),
                        ye(t, "is-failed");
                        return
                    }
                }
            }
            be(ku, "upload");
            async function Tu(e, t, n) {
                const r = Cu(t, n)
                  , o = [];
                v(n, "upload:setup", {
                    batch: e,
                    attachment: t,
                    form: r,
                    preprocess: o
                });
                try {
                    await Promise.all(o);
                    const s = await fetch(Au(r, n));
                    if (s.ok)
                        return await s.json();
                    v(n, "upload:invalid", {
                        batch: e,
                        attachment: t
                    });
                    const i = await s.text()
                      , a = s.status
                      , {state: c, messaging: l} = _s({
                        status: a,
                        body: i
                    }, t.file);
                    ye(n, c, l)
                } catch (s) {
                    v(n, "upload:invalid", {
                        batch: e,
                        attachment: t
                    }),
                    ye(n, "is-failed")
                }
                return null
            }
            be(Tu, "validate");
            function Cu(e, t) {
                const n = t.querySelector(".js-data-upload-policy-url-csrf").value
                  , r = t.getAttribute("data-upload-repository-id")
                  , o = t.getAttribute("data-subject-type")
                  , s = t.getAttribute("data-subject-param")
                  , i = e.file
                  , a = new FormData;
                return a.append("name", i.name),
                a.append("size", String(i.size)),
                a.append("content_type", i.type),
                a.append("authenticity_token", n),
                o && a.append("subject_type", o),
                s && a.append("subject", s),
                r && a.append("repository_id", r),
                e.directory && a.append("directory", e.directory),
                a
            }
            be(Cu, "policyForm");
            function Au(e, t) {
                return new Request(t.getAttribute("data-upload-policy-url"),{
                    method: "POST",
                    body: e,
                    credentials: "same-origin",
                    headers: {
                        Accept: "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                })
            }
            be(Au, "policyRequest");
            function Pu(e, t) {
                return {
                    attachmentUploadDidStart(n, r) {
                        n.saving(0),
                        ye(t, "is-uploading"),
                        v(t, "upload:start", {
                            batch: e,
                            attachment: n,
                            policy: r
                        })
                    },
                    attachmentUploadDidProgress(n, r) {
                        n.saving(r),
                        v(t, "upload:progress", {
                            batch: e,
                            attachment: n
                        })
                    },
                    attachmentUploadDidComplete(n, r, o) {
                        n.saved(xu(o, r)),
                        v(t, "upload:complete", {
                            batch: e,
                            attachment: n
                        }),
                        e.isFinished() && ye(t, "is-default")
                    },
                    attachmentUploadDidError(n, r) {
                        v(t, "upload:error", {
                            batch: e,
                            attachment: n
                        });
                        const {state: o} = _s(r);
                        ye(t, o)
                    }
                }
            }
            be(Pu, "createDelegate");
            function xu(e, t) {
                const n = (e.id == null ? null : String(e.id)) || (t.asset.id == null ? null : String(t.asset.id))
                  , r = (typeof e.href == "string" ? e.href : null) || (typeof t.asset.href == "string" ? t.asset.href : null);
                return {
                    id: n,
                    href: r,
                    name: t.asset.name
                }
            }
            be(xu, "savedAttributes");
            function _s(e, t) {
                if (e.status === 400)
                    return {
                        state: "is-bad-file"
                    };
                if (e.status !== 422)
                    return {
                        state: "is-failed"
                    };
                const n = JSON.parse(e.body);
                if (!n || !n.errors)
                    return {
                        state: "is-failed"
                    };
                for (const r of n.errors)
                    switch (r.field) {
                    case "size":
                        {
                            const o = t ? t.size : null;
                            return o != null && o === 0 ? {
                                state: "is-empty"
                            } : {
                                state: "is-too-big",
                                messaging: {
                                    message: Gg(r.message),
                                    target: ".js-upload-too-big"
                                }
                            }
                        }
                    case "file_count":
                        return {
                            state: "is-too-many"
                        };
                    case "width":
                    case "height":
                        return {
                            state: "is-bad-dimensions"
                        };
                    case "name":
                        return r.code === "already_exists" ? {
                            state: "is-duplicate-filename"
                        } : {
                            state: "is-bad-file"
                        };
                    case "content_type":
                        return {
                            state: "is-bad-file"
                        };
                    case "uploader_id":
                        return {
                            state: "is-bad-permissions"
                        };
                    case "repository_id":
                        return {
                            state: "is-repository-required"
                        };
                    case "format":
                        return {
                            state: "is-bad-format"
                        }
                    }
                return {
                    state: "is-failed"
                }
            }
            be(_s, "policyErrorState");
            const Gg = be(e=>e.startsWith("size") ? e.substring(5) : e, "trimSizeErrorMessage")
              , Jg = ["is-default", "is-uploading", "is-bad-file", "is-duplicate-filename", "is-too-big", "is-too-many", "is-hidden-file", "is-failed", "is-bad-dimensions", "is-empty", "is-bad-permissions", "is-repository-required", "is-bad-format"];
            function ye(e, t, n) {
                if (n) {
                    const {message: r, target: o} = n
                      , s = e.querySelector(o);
                    s && (s.innerHTML = r)
                }
                e.classList.remove(...Jg),
                e.classList.add(t)
            }
            be(ye, "resetState");
            var Yg = Object.defineProperty
              , or = (e,t)=>Yg(e, "name", {
                value: t,
                configurable: !0
            });
            class Mu {
                constructor(t) {
                    this.attachments = t,
                    this.size = this.attachments.length,
                    this.total = sr(this.attachments, n=>n.file.size)
                }
                percent() {
                    const t = or(r=>r.file.size * r.percent / 100, "bytes")
                      , n = sr(this.attachments, t);
                    return Math.round(n / this.total * 100)
                }
                uploaded() {
                    const t = or(n=>n.isSaved() ? 1 : 0, "value");
                    return sr(this.attachments, t)
                }
                isFinished() {
                    return this.attachments.every(t=>t.isSaved())
                }
            }
            or(Mu, "Batch");
            function sr(e, t) {
                return e.reduce((n,r)=>n + t(r), 0)
            }
            or(sr, "sum");
            var Qg = Object.defineProperty
              , ir = (e,t)=>Qg(e, "name", {
                value: t,
                configurable: !0
            });
            m("file-attachment[hover]", {
                add(e) {
                    e.classList.add("dragover")
                },
                remove(e) {
                    e.classList.remove("dragover")
                }
            }),
            d("file-attachment-accept", "file-attachment", function(e) {
                const {attachments: t} = e.detail;
                t.length === 0 && (ye(e.currentTarget, "is-hidden-file"),
                e.preventDefault())
            }),
            d("file-attachment-accepted", "file-attachment", function(e) {
                const t = e.currentTarget.querySelector(".drag-and-drop");
                if (t && t.hidden)
                    return;
                const {attachments: n} = e.detail;
                ku(new Mu(n), e.currentTarget)
            });
            let $u = 0;
            m("file-attachment", {
                add(e) {
                    $u++ == 0 && (document.addEventListener("drop", Ts),
                    document.addEventListener("dragover", Cs));
                    const t = e.closest("form");
                    t && t.addEventListener("reset", As)
                },
                remove(e) {
                    --$u == 0 && (document.removeEventListener("drop", Ts),
                    document.removeEventListener("dragover", Cs));
                    const t = e.closest("form");
                    t && t.removeEventListener("reset", As)
                }
            });
            function ks(e) {
                return Array.from(e.types).indexOf("Files") >= 0
            }
            ir(ks, "hasFile");
            function Ts(e) {
                const t = e.dataTransfer;
                t && ks(t) && e.preventDefault()
            }
            ir(Ts, "onDocumentDrop");
            function Cs(e) {
                const t = e.dataTransfer;
                t && ks(t) && e.preventDefault()
            }
            ir(Cs, "onDocumentDragover");
            function As({currentTarget: e}) {
                const t = e.querySelector("file-attachment");
                ye(t, "is-default")
            }
            ir(As, "onFormReset");
            var Zg = Object.defineProperty
              , eb = (e,t)=>Zg(e, "name", {
                value: t,
                configurable: !0
            });
            d("filter-input-updated", "filter-input", e=>{
                const t = e.currentTarget.input;
                if (!(document.activeElement && document.activeElement === t))
                    return;
                const {count: n, total: r} = e.detail;
                Re(`Found ${n} out of ${r} ${r === 1 ? "item" : "items"}`)
            }
            ),
            d("toggle", "details", e=>{
                setTimeout(()=>qu(e.target), 0)
            }
            , {
                capture: !0
            }),
            d("tab-container-changed", "tab-container", e=>{
                if (!(e.target instanceof HTMLElement))
                    return;
                const {relatedTarget: t} = e.detail
                  , n = e.target.querySelector("filter-input");
                n instanceof ma && n.setAttribute("aria-owns", t.id)
            }
            , {
                capture: !0
            });
            function qu(e) {
                const t = e.querySelector("filter-input");
                t && !e.hasAttribute("open") && t.reset()
            }
            eb(qu, "resetFilter");
            var tb = Object.defineProperty
              , Iu = (e,t)=>tb(e, "name", {
                value: t,
                configurable: !0
            });
            function Ps(e, t, n, r={}) {
                var o;
                const s = (o = r.limit) != null ? o : 1 / 0;
                let i = 0;
                for (const a of e.children) {
                    const c = n(a, t);
                    c == null || (c && i < s ? (i++,
                    xs(a, !0)) : xs(a, !1))
                }
                return i
            }
            Iu(Ps, "filterList");
            function xs(e, t) {
                e.style.display = t ? "" : "none",
                e.hidden = !t
            }
            Iu(xs, "toggle");
            var nb = Object.defineProperty
              , rb = (e,t)=>nb(e, "name", {
                value: t,
                configurable: !0
            });
            const Ou = new WeakMap;
            function Fu(e, t, n) {
                const r = t.toLowerCase()
                  , o = n.limit;
                let s = Ou.get(e);
                const i = e.querySelector('input[type="radio"]:checked')
                  , a = Array.from(e.children);
                s || (s = Array.from(e.children),
                Ou.set(e, s));
                for (const w of a)
                    e.removeChild(w),
                    w instanceof HTMLElement && (w.style.display = "");
                const c = r ? Be(s, n.sortKey, Ue) : s
                  , l = o == null ? c : c.slice(0, o)
                  , f = l.length
                  , p = document.createDocumentFragment();
                for (const w of l)
                    p.appendChild(w);
                let h = !1;
                if (i instanceof HTMLInputElement)
                    for (const w of p.querySelectorAll('input[type="radio"]:checked'))
                        w instanceof HTMLInputElement && w.value !== i.value && (w.checked = !1,
                        h = !0);
                e.appendChild(p),
                i && h && i.dispatchEvent(new Event("change",{
                    bubbles: !0
                }));
                const g = e.querySelectorAll(".js-divider");
                for (const w of g)
                    w.classList.toggle("d-none", Boolean(r && r.trim().length > 0));
                return f
            }
            rb(Fu, "filterSortList");
            var ob = Object.defineProperty
              , Ye = (e,t)=>ob(e, "name", {
                value: t,
                configurable: !0
            });
            let Ms = new AbortController;
            const sn = new WeakMap
              , Ru = new WeakMap
              , Du = new WeakMap;
            async function Hu(e, t, n, r) {
                n && !sn.has(e) && Uu(e);
                const o = await Nu(e, t, n, r);
                return e.hasAttribute("data-filterable-data-pre-rendered") && (o.suggestions = Bu(e, n)),
                o
            }
            Ye(Hu, "getData");
            async function Nu(e, t, n, r) {
                const o = new URL(e.getAttribute("data-filterable-src"),window.location.origin);
                if (n) {
                    const s = sn.get(e)
                      , i = t.trim();
                    if (s.lastSearchText === i)
                        return s.lastSearchResult;
                    const a = s.lastSearchText === void 0;
                    s.lastSearchText = i;
                    const c = e.getAttribute("data-filterable-for")
                      , l = document.getElementById(c);
                    if (Ms.abort(),
                    i === "" && !r)
                        s.lastSearchResult = {
                            suggestions: [],
                            users: []
                        };
                    else {
                        Ms = new AbortController;
                        const f = {
                            headers: {
                                Accept: "application/json",
                                "X-Requested-With": "XMLHttpRequest"
                            },
                            signal: Ms.signal
                        }
                          , p = o.searchParams || new URLSearchParams;
                        p.set("q", t),
                        p.set("typeAhead", "true"),
                        o.search = p.toString(),
                        a || l == null || l.classList.add("is-loading");
                        const h = await fetch(o.toString(), f);
                        s.lastSearchResult = await h.json()
                    }
                    return l == null || l.classList.remove("is-loading"),
                    s.lastSearchResult
                } else {
                    const s = {
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    };
                    return await (await fetch(o.toString(), s)).json()
                }
            }
            Ye(Nu, "fetchQueryIfNeeded");
            function Bu(e, t) {
                const n = []
                  , r = e.querySelectorAll(".js-filterable-suggested-user");
                if (r.length > 0)
                    for (const o of e.querySelectorAll(".js-filterable-suggested-user"))
                        o.classList.remove("js-filterable-suggested-user"),
                        n.push({
                            name: o.querySelector(".js-description").textContent,
                            login: o.querySelector(".js-username").textContent,
                            selected: o.getAttribute("aria-checked") === "true",
                            element: o,
                            suggestion: !0
                        });
                if (t) {
                    const o = sn.get(e);
                    return r.length > 0 && (o.cachedSuggestions = n,
                    o.userResultCache.clear()),
                    o.cachedSuggestions
                }
                return n
            }
            Ye(Bu, "getPreRenderedUsers");
            function Uu(e) {
                sn.set(e, {
                    lastSearchResult: {
                        suggestions: [],
                        users: []
                    },
                    cachedSuggestions: [],
                    userResultCache: new Map
                })
            }
            Ye(Uu, "initializeTypeAheadCache");
            async function Wu(e, t, n) {
                var r, o;
                Du.set(e, t),
                await An();
                const s = e.hasAttribute("data-filterable-show-suggestion-header")
                  , i = e.hasAttribute("data-filterable-type-ahead")
                  , a = e.hasAttribute("data-filterable-type-ahead-query-on-empty");
                let c = Ru.get(e);
                if (!c)
                    try {
                        c = await Hu(e, t, i, a),
                        i || Ru.set(e, c)
                    } catch (L) {
                        if (L.name === "AbortError")
                            return -1;
                        throw L
                    }
                if (!i && Du.get(e) !== t)
                    return -1;
                const l = n.limit
                  , f = e.querySelector("template")
                  , p = {};
                for (const L of e.querySelectorAll("input[type=hidden]"))
                    p[`${L.name}${L.value}`] = L;
                let h = f.nextElementSibling;
                for (; h; ) {
                    const L = h;
                    h = L.nextElementSibling,
                    L instanceof HTMLElement && (i || L.getAttribute("aria-checked") === "true" || L.classList.contains("select-menu-divider")) ? L.hidden = !0 : L.remove()
                }
                let g = 0;
                const w = t.trim() === ""
                  , S = document.createDocumentFragment()
                  , P = e.querySelector(".js-divider-suggestions")
                  , j = e.querySelector(".js-divider-rest")
                  , C = sn.get(e);
                function M(L) {
                    const qe = `${L.login} ${L.name}`.toLowerCase().trim().includes(t)
                      , I = !(l != null && g >= l) && qe;
                    if (I || L.selected || L.suggestion) {
                        const Q = zu(L, f, p, C);
                        Q.hidden = !I,
                        I && g++,
                        S.appendChild(Q)
                    }
                }
                Ye(M, "addItem");
                let x = !1;
                if (P && (((r = c.suggestions) == null ? void 0 : r.length) > 0 || s && c.users.length > 0)) {
                    const L = (o = c.suggestions) != null ? o : []
                      , qe = L.filter(Q=>Q.selected)
                      , I = L.filter(Q=>!Q.selected);
                    for (const Q of qe)
                        M(Q);
                    S.appendChild(P);
                    const Tt = g;
                    for (const Q of I)
                        M(Q);
                    x = g > Tt,
                    P.hidden = !x || i && !w,
                    s && c.users.length > 0 && (P.hidden = !w)
                }
                j && S.appendChild(j);
                const $e = g;
                for (const L of c.users)
                    M(L);
                return j && (j.hidden = $e === g || !x),
                e.append(S),
                g
            }
            Ye(Wu, "substringMemoryFilterList");
            function zu(e, t, n, r) {
                if (e.element != null)
                    return e.element;
                if (r == null ? void 0 : r.userResultCache.has(e.id))
                    return r.userResultCache.get(e.id);
                const o = t.content.cloneNode(!0)
                  , s = o.querySelector("input[type=checkbox], input[type=radio]");
                e.type && (s.name = `reviewer_${e.type}_ids[]`),
                s.value = e.id;
                const i = `${s.name}${e.id}`;
                let a = e.selected;
                n[i] && (a = !0,
                n[i].remove(),
                delete n[i]);
                const c = o.querySelector("[role^=menuitem]");
                a && (c.setAttribute("aria-checked", "true"),
                s.checked = !0),
                e.disabled && c.setAttribute("aria-disabled", "true");
                const l = o.querySelector(".js-username");
                l && (l.textContent = e.login);
                const f = o.querySelector(".js-description");
                f && (f.textContent = e.name);
                const p = o.querySelector(".js-extended-description");
                p && (e.description ? p.textContent = e.description : p.remove());
                const h = o.querySelector(".js-avatar");
                return h.className = `${h.className} ${e.class}`,
                h.src = e.avatar,
                e.element = c,
                r == null || r.userResultCache.set(e.id, c),
                e.element
            }
            Ye(zu, "createReviewerItem");
            var sb = Object.defineProperty
              , ve = (e,t)=>sb(e, "name", {
                value: t,
                configurable: !0
            });
            m(".js-filterable-field", {
                constructor: HTMLInputElement,
                initialize(e) {
                    e.autocomplete || (e.autocomplete = "off");
                    const t = e.hasAttribute("type-ahead") ? 200 : null;
                    let n = e.value;
                    async function r(s) {
                        n !== s.value && (n = s.value,
                        await Ne(),
                        v(s, "filterable:change"))
                    }
                    ve(r, "onInputChange");
                    async function o() {
                        n = e.value,
                        await Ne(),
                        v(e, "filterable:change")
                    }
                    return ve(o, "onFocus"),
                    {
                        add(s) {
                            s.addEventListener("focus", o),
                            kn(s, r, {
                                wait: t
                            }),
                            document.activeElement === s && o()
                        },
                        remove(s) {
                            s.removeEventListener("focus", o),
                            Oa(s, r)
                        }
                    }
                }
            }),
            d("filterable:change", ".js-filterable-field", async function(e) {
                const t = e.currentTarget
                  , n = t.value.trim().toLowerCase()
                  , r = document.querySelectorAll(`[data-filterable-for="${t.id}"]`);
                for (const o of r) {
                    const s = await Ku(o, n);
                    if (s === -1)
                        return;
                    document.activeElement && t === document.activeElement && Re(`${s} results found.`),
                    o.dispatchEvent(new CustomEvent("filterable:change",{
                        bubbles: !0,
                        cancelable: !1,
                        detail: {
                            inputField: t
                        }
                    }))
                }
            });
            function Vu(e) {
                return e.hasAttribute("data-filter-value") ? e.getAttribute("data-filter-value").toLowerCase().trim() : e.textContent.toLowerCase().trim()
            }
            ve(Vu, "defaultText");
            async function Ku(e, t) {
                const n = parseInt(e.getAttribute("data-filterable-limit"), 10) || null;
                let r = 0;
                switch (e.getAttribute("data-filterable-type")) {
                case "fuzzy":
                    {
                        const o = t.toLowerCase();
                        r = Fu(e, t, {
                            limit: n,
                            sortKey: ve(i=>{
                                const a = Vu(i)
                                  , c = Ht(a, o);
                                return c > 0 ? {
                                    score: c,
                                    text: a
                                } : null
                            }
                            , "sortKey")
                        });
                        break
                    }
                case "substring":
                    r = Ps(e, t.toLowerCase(), Gu, {
                        limit: n
                    });
                    break;
                case "substring-memory":
                    r = await Wu(e, t, {
                        limit: n
                    });
                    break;
                default:
                    r = Ps(e, t.toLowerCase(), Xu, {
                        limit: n
                    });
                    break
                }
                return e.classList.toggle("filterable-active", t.length > 0),
                e.classList.toggle("filterable-empty", r === 0),
                r
            }
            ve(Ku, "filter");
            function Xu(e, t) {
                return e.textContent.toLowerCase().trim().startsWith(t)
            }
            ve(Xu, "prefix");
            function Gu(e, t) {
                return e.classList.contains("select-menu-no-results") ? null : (e.querySelector("[data-filterable-item-text]") || e).textContent.toLowerCase().trim().includes(t)
            }
            ve(Gu, "substring"),
            d("filterable:change", "details-menu .select-menu-list", function(e) {
                const t = e.currentTarget
                  , n = t.querySelector(".js-new-item-form");
                n && Ju(t, n, e.detail.inputField.value)
            });
            function Ju(e, t, n) {
                const r = n.length > 0 && !Yu(e, n);
                if (e.classList.toggle("is-showing-new-item-form", r),
                !r)
                    return;
                t.querySelector(".js-new-item-name").textContent = n;
                const o = t.querySelector(".js-new-item-value");
                (o instanceof HTMLInputElement || o instanceof HTMLButtonElement) && (o.value = n)
            }
            ve(Ju, "toggleForm");
            function Yu(e, t) {
                for (const n of e.querySelectorAll("[data-menu-button-text]"))
                    if (n.textContent.toLowerCase().trim() === t.toLowerCase())
                        return !0;
                return !1
            }
            ve(Yu, "itemExists"),
            m("tab-container .select-menu-list .filterable-empty, details-menu .select-menu-list .filterable-empty", {
                add(e) {
                    e.closest(".select-menu-list").classList.add("filterable-empty")
                },
                remove(e) {
                    e.closest(".select-menu-list").classList.remove("filterable-empty")
                }
            });
            var ib = Object.defineProperty
              , $s = (e,t)=>ib(e, "name", {
                value: t,
                configurable: !0
            });
            const Qu = navigator.userAgent.match(/Firefox\/(\d+)/);
            Qu && Number(Qu[1]) < 76 && (m('details-menu label[tabindex][role^="menuitem"]', e=>{
                const t = e.querySelector("input");
                if (!t)
                    return;
                const n = e.classList.contains("select-menu-item")
                  , r = t.classList.contains("d-none")
                  , o = n || r || t.hidden;
                n && t.classList.add("d-block"),
                r && t.classList.remove("d-none"),
                o && (t.classList.add("sr-only"),
                t.hidden = !1),
                e.removeAttribute("tabindex")
            }
            ),
            d("focus", 'details-menu label[role="menuitemradio"] input, details-menu label[role="menuitemcheckbox"] input', e=>{
                const t = e.currentTarget.closest("label");
                t.classList.contains("select-menu-item") && t.classList.add("navigation-focus"),
                t.classList.contains("SelectMenu-item") && t.classList.add("hx_menuitem--focus"),
                t.classList.contains("dropdown-item") && t.classList.add("hx_menuitem--focus"),
                e.currentTarget.addEventListener("blur", ()=>{
                    t.classList.contains("select-menu-item") && t.classList.remove("navigation-focus"),
                    t.classList.contains("SelectMenu-item") && t.classList.remove("hx_menuitem--focus"),
                    t.classList.contains("dropdown-item") && t.classList.remove("hx_menuitem--focus")
                }
                , {
                    once: !0
                })
            }
            , {
                capture: !0
            }),
            U("keydown", 'details-menu label[role="menuitemradio"] input, details-menu label[role="menuitemcheckbox"] input', async function(e) {
                if (qs(e))
                    e.currentTarget instanceof Element && Zu(e.currentTarget);
                else if (e.key === "Enter") {
                    const t = e.currentTarget;
                    e.preventDefault(),
                    await Ne(),
                    t instanceof HTMLInputElement && t.click()
                }
            }),
            d("blur", 'details-menu label input[role="menuitemradio"], details-menu label input[role="menuitemcheckbox"]', e=>{
                Is(e.currentTarget)
            }
            , {
                capture: !0
            }),
            U("keyup", 'details-menu label[role="menuitemradio"] input, details-menu label[role="menuitemcheckbox"] input', e=>{
                !qs(e) || e.currentTarget instanceof Element && Is(e.currentTarget)
            }
            ));
            function qs(e) {
                return e.key === "ArrowDown" || e.key === "ArrowUp"
            }
            $s(qs, "isArrowKeys");
            function Zu(e) {
                const t = e.closest("label");
                t.hasAttribute("data-role") || t.setAttribute("data-role", t.getAttribute("role")),
                e.setAttribute("role", t.getAttribute("data-role")),
                t.removeAttribute("role")
            }
            $s(Zu, "switchRoleToInputForNavigation");
            function Is(e) {
                const t = e.closest("label");
                t.hasAttribute("data-role") || t.setAttribute("data-role", t.getAttribute("role")),
                t.setAttribute("role", t.getAttribute("data-role")),
                e.removeAttribute("role")
            }
            $s(Is, "switchRoleBackToOriginalState");
            var ab = Object.defineProperty
              , cb = (e,t)=>ab(e, "name", {
                value: t,
                configurable: !0
            });
            function Os() {
                Fa(document) && Ra(document)
            }
            cb(Os, "scrollTargetIntoViewIfNeeded"),
            Ot(Os),
            d("click", 'a[href^="#"]', function(e) {
                const {currentTarget: t} = e;
                t instanceof HTMLAnchorElement && setTimeout(Os, 0)
            }),
            d("click", ".js-flash-close", function(e) {
                const t = e.currentTarget.closest(".flash-messages");
                e.currentTarget.closest(".flash").remove(),
                t && !t.querySelector(".flash") && t.remove()
            });
            var lb = Object.defineProperty
              , ub = (e,t)=>lb(e, "name", {
                value: t,
                configurable: !0
            });
            const db = ["flash-notice", "flash-error", "flash-message", "flash-warn"];
            function ed(e) {
                for (const {key: t, value: n} of db.flatMap(bo)) {
                    yo(t);
                    let r;
                    try {
                        r = atob(decodeURIComponent(n))
                    } catch (o) {
                        continue
                    }
                    e.after(new Oe(e,{
                        className: t,
                        message: r
                    }))
                }
            }
            ub(ed, "displayFlash"),
            m("template.js-flash-template", {
                constructor: HTMLTemplateElement,
                add(e) {
                    ed(e)
                }
            });
            const Fs = new WeakMap;
            document.addEventListener("focus", function(e) {
                const t = e.target;
                t instanceof Element && !Fs.get(t) && (v(t, "focusin:delay"),
                Fs.set(t, !0))
            }, {
                capture: !0
            }),
            document.addEventListener("blur", function(e) {
                setTimeout(function() {
                    const t = e.target;
                    t instanceof Element && t !== document.activeElement && (v(t, "focusout:delay"),
                    Fs.delete(t))
                }, 200)
            }, {
                capture: !0
            }),
            A(".js-form-toggle-target", async function(e, t) {
                try {
                    await t.text()
                } catch (r) {
                    return
                }
                const n = e.closest(".js-form-toggle-container");
                n.querySelector(".js-form-toggle-target[hidden]").hidden = !1,
                e.hidden = !0
            });
            var fb = Object.defineProperty
              , mb = (e,t)=>fb(e, "name", {
                value: t,
                configurable: !0
            });
            function td(e) {
                e instanceof CustomEvent && Re(`${e.detail} results found.`)
            }
            mb(td, "noticeHandler"),
            m("fuzzy-list", {
                constructor: Da,
                subscribe: e=>E(e, "fuzzy-list-sorted", td)
            }),
            d("click", ".email-hidden-toggle", function(e) {
                const t = e.currentTarget.nextElementSibling;
                t instanceof HTMLElement && (t.style.display = "",
                t.classList.toggle("expanded"),
                e.preventDefault())
            });
            var pb = Object.defineProperty
              , nd = (e,t)=>pb(e, "name", {
                value: t,
                configurable: !0
            });
            m(".js-hook-url-field", {
                constructor: HTMLInputElement,
                add(e) {
                    function t() {
                        const n = e.form;
                        if (!n)
                            return;
                        let r;
                        try {
                            r = new URL(e.value)
                        } catch (a) {}
                        const o = n.querySelector(".js-invalid-url-notice");
                        o instanceof HTMLElement && (o.hidden = !!(e.value === "" || r && /^https?:/.test(r.protocol)));
                        const s = n.querySelector(".js-insecure-url-notice");
                        s instanceof HTMLElement && r && e.value && (s.hidden = /^https:$/.test(r.protocol));
                        const i = n.querySelector(".js-ssl-hook-fields");
                        i instanceof HTMLElement && (i.hidden = !(r && r.protocol === "https:"))
                    }
                    nd(t, "checkUrl"),
                    kn(e, t),
                    t()
                }
            });
            function Rs(e) {
                const t = document.querySelectorAll(".js-hook-event-checkbox");
                for (const n of t)
                    n.checked = n.matches(e)
            }
            nd(Rs, "chooseEvents"),
            d("change", ".js-hook-event-choice", function(e) {
                const t = e.currentTarget
                  , n = t.checked && t.value === "custom"
                  , r = t.closest(".js-hook-events-field");
                if (r && r.classList.toggle("is-custom", n),
                t.checked)
                    if (n) {
                        const o = document.querySelector(".js-hook-wildcard-event");
                        o.checked = !1
                    } else
                        t.value === "push" ? Rs('[value="push"]') : t.value === "all" && Rs(".js-hook-wildcard-event")
            }),
            d("click", ".js-hook-deliveries-pagination-button", async function(e) {
                const t = e.currentTarget;
                t.disabled = !0;
                const n = t.parentElement
                  , r = t.getAttribute("data-url");
                n.before(await H(document, r)),
                n.remove()
            }),
            A(".js-redeliver-hook-form", async function(e, t) {
                let n;
                try {
                    n = await t.html()
                } catch (o) {
                    e.classList.add("failed");
                    return
                }
                document.querySelector(".js-hook-deliveries-container").replaceWith(n.html)
            });
            var hb = Object.defineProperty
              , gb = (e,t)=>hb(e, "name", {
                value: t,
                configurable: !0
            });
            m("[data-hotkey]", {
                constructor: HTMLElement,
                add(e) {
                    if (Ha())
                        Zr(e);
                    else {
                        const t = e.getAttribute("data-hotkey");
                        if (t) {
                            const n = rd(t);
                            n.length > 0 && (e.setAttribute("data-hotkey", n),
                            Zr(e))
                        }
                    }
                },
                remove(e) {
                    pa(e)
                }
            });
            function rd(e) {
                return e.split(",").filter(n=>Na(n)).join(",")
            }
            gb(rd, "filterOutCharacterKeyShortcuts");
            var bb = Object.defineProperty
              , F = (e,t)=>bb(e, "name", {
                value: t,
                configurable: !0
            });
            const R = document.querySelector(".js-hovercard-content")
              , yb = le(H);
            let de, ar = null, Ds, Hs = 0;
            const Ns = 12
              , Bs = 24
              , od = Bs - 7
              , sd = 16
              , vb = 100
              , wb = 250;
            function Ae(e) {
                return "Popover-message--" + e
            }
            F(Ae, "contentClass");
            function id(e) {
                setTimeout(()=>{
                    if (document.body && document.body.contains(e)) {
                        const t = e.querySelector("[data-hovercard-tracking]");
                        if (t) {
                            const r = t.getAttribute("data-hovercard-tracking");
                            r && $t("user-hovercard-load", JSON.parse(r))
                        }
                        const n = e.querySelector("[data-hydro-view]");
                        n instanceof HTMLElement && Ba(n)
                    }
                }
                , 500)
            }
            F(id, "trackLoad");
            function ht() {
                R instanceof HTMLElement && (R.style.display = "none",
                R.children[0].innerHTML = "",
                ar = null,
                de = null)
            }
            F(ht, "hideCard");
            function ad(e) {
                const t = e.getClientRects();
                let n = t[0] || e.getBoundingClientRect() || {
                    top: 0,
                    left: 0,
                    height: 0,
                    width: 0
                };
                if (t.length > 0) {
                    for (const r of t)
                        if (r.left < Hs && r.right > Hs) {
                            n = r;
                            break
                        }
                }
                return n
            }
            F(ad, "selectRectNearestMouse");
            function cd(e) {
                const {width: t, height: n} = R.getBoundingClientRect()
                  , {left: r, top: o, height: s, width: i} = ad(e)
                  , a = o > n;
                if (e.classList.contains("js-hovercard-left")) {
                    const l = r - t - Ns
                      , f = o + s / 2;
                    return {
                        containerTop: a ? f - n + od + sd / 2 : f - od - sd / 2,
                        containerLeft: l,
                        contentClassSuffix: a ? "right-bottom" : "right-top"
                    }
                } else {
                    const l = window.innerWidth - r > t
                      , f = r + i / 2
                      , p = l ? f - Bs : f - t + Bs;
                    return {
                        containerTop: a ? o - n - Ns : o + s + Ns,
                        containerLeft: p,
                        contentClassSuffix: a ? l ? "bottom-left" : "bottom-right" : l ? "top-left" : "top-right"
                    }
                }
            }
            F(cd, "calculatePositions");
            function ld(e, t) {
                if (!(R instanceof HTMLElement))
                    return;
                R.style.visibility = "hidden",
                R.style.display = "block",
                t.classList.remove(Ae("bottom-left"), Ae("bottom-right"), Ae("right-top"), Ae("right-bottom"), Ae("top-left"), Ae("top-right"));
                const {containerTop: n, containerLeft: r, contentClassSuffix: o} = cd(e);
                t.classList.add(Ae(o)),
                R.style.top = `${n + window.pageYOffset}px`,
                R.style.left = `${r + window.pageXOffset}px`,
                bd(e, R),
                R.style.visibility = ""
            }
            F(ld, "positionCard");
            function Us(e, t) {
                if (!(R instanceof HTMLElement))
                    return;
                const n = R.children[0];
                n.innerHTML = "";
                const r = document.createElement("div");
                for (const o of e.children)
                    r.appendChild(o.cloneNode(!0));
                n.appendChild(r),
                ld(t, n),
                id(r),
                R.style.display = "block"
            }
            F(Us, "showCard");
            function ud(e) {
                const t = e.closest("[data-hovercard-subject-tag]");
                if (t)
                    return t.getAttribute("data-hovercard-subject-tag");
                const n = document.head && document.head.querySelector('meta[name="hovercard-subject-tag"]');
                return n ? n.getAttribute("content") : null
            }
            F(ud, "determineEnclosingSubject");
            function dd(e) {
                const t = e.getAttribute("data-hovercard-url");
                if (t) {
                    const n = ud(e);
                    if (n) {
                        const r = new URL(t,window.location.origin)
                          , o = new URLSearchParams(r.search.slice(1));
                        return o.append("subject", n),
                        o.append("current_path", window.location.pathname + window.location.search),
                        r.search = o.toString(),
                        r.toString()
                    }
                    return t
                }
                return ""
            }
            F(dd, "hovercardUrlFromTarget");
            function fd(e) {
                const t = e.getAttribute("data-hovercard-type");
                return t === "pull_request" || t === "issue" ? !!e.closest("[data-issue-and-pr-hovercards-enabled]") : t === "team" ? !!e.closest("[data-team-hovercards-enabled]") : t === "repository" ? !!e.closest("[data-repository-hovercards-enabled]") : t === "commit" ? !!e.closest("[data-commit-hovercards-enabled]") : t === "project" ? !!e.closest("[data-project-hovercards-enabled]") : t === "discussion" ? !!e.closest("[data-discussion-hovercards-enabled]") : t === "acv_badge" ? !!e.closest("[data-acv-badge-hovercards-enabled]") : t === "sponsors_listing" ? !!e.closest("[data-sponsors-listing-hovercards-enabled]") : !0
            }
            F(fd, "hovercardsAreEnabledForType");
            async function md(e, t) {
                const n = e.currentTarget;
                if (e instanceof MouseEvent && (Hs = e.clientX),
                !(n instanceof Element) || de === n || n.closest(".js-hovercard-content") || !fd(n))
                    return;
                ht(),
                de = n,
                ar = document.activeElement;
                const r = dd(n);
                let o;
                try {
                    const s = new Promise(i=>window.setTimeout(i, t, 0));
                    o = await yb(document, r),
                    await s
                } catch (s) {
                    const i = s.response;
                    if (i && i.status === 404) {
                        const a = "Hovercard is unavailable";
                        n.setAttribute("aria-label", a),
                        n.classList.add("tooltipped", "tooltipped-ne")
                    } else if (i && i.status === 410) {
                        const a = await i.clone().json();
                        n.setAttribute("aria-label", a.message),
                        n.classList.add("tooltipped", "tooltipped-ne")
                    }
                    return
                }
                n === de && (Us(o, n),
                e instanceof KeyboardEvent && R instanceof HTMLElement && R.focus())
            }
            F(md, "activateFn");
            function pd(e) {
                md(e, wb)
            }
            F(pd, "activateWithTimeoutFn");
            function cr(e) {
                if (!!de) {
                    if (e instanceof MouseEvent && e.relatedTarget instanceof HTMLElement) {
                        const t = e.relatedTarget;
                        if (t.closest(".js-hovercard-content") || t.closest("[data-hovercard-url]"))
                            return
                    } else
                        e instanceof KeyboardEvent && ar instanceof HTMLElement && ar.focus();
                    ht()
                }
            }
            F(cr, "deactivateFn");
            function hd(e) {
                const t = de;
                Ds = window.setTimeout(()=>{
                    de === t && cr(e)
                }
                , vb)
            }
            F(hd, "deactivateWithTimeoutFn");
            function Ws(e) {
                if (e instanceof KeyboardEvent)
                    switch (e.key) {
                    case "Escape":
                        cr(e)
                    }
            }
            F(Ws, "keyupFn");
            function gd() {
                Ds && clearTimeout(Ds)
            }
            F(gd, "cancelDeactivation"),
            R && (m("[data-hovercard-url]", {
                subscribe: e=>re(E(e, "mouseover", pd), E(e, "mouseleave", hd), E(e, "keyup", Ws))
            }),
            m("[data-hovercard-url]", {
                remove(e) {
                    de === e && ht()
                }
            }),
            m(".js-hovercard-content", {
                subscribe: e=>re(E(e, "mouseover", gd), E(e, "mouseleave", cr), E(e, "keyup", Ws))
            }),
            m(".js-hovercard-include-fragment", {
                constructor: HTMLTemplateElement,
                add(e) {
                    de && Us(e.content, de)
                }
            }),
            d("menu:activated", "details", ht),
            window.addEventListener("statechange", ht));
            function bd(e, t) {
                const n = e.getAttribute("data-hovercard-z-index-override");
                n ? t.style.zIndex = n : t.style.zIndex = "100"
            }
            F(bd, "setZIndexOverride"),
            async function() {
                document.addEventListener("pjax:complete", ()=>io({
                    pjax: "true"
                })),
                await Ft,
                io()
            }(),
            d("click", "[data-octo-click]", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLElement))
                    return;
                const n = t.getAttribute("data-octo-click") || ""
                  , r = {};
                if (t.hasAttribute("data-ga-click")) {
                    const s = t.getAttribute("data-ga-click").split(",");
                    r.category = s[0].trim(),
                    r.action = s[1].trim()
                }
                if (t.hasAttribute("data-octo-dimensions")) {
                    const o = t.getAttribute("data-octo-dimensions").split(",");
                    for (const s of o) {
                        const [i,a] = s.split(/:(.+)/);
                        i && (r[i] = a || "")
                    }
                }
                $t(n, r)
            }),
            d("click", "[data-hydro-click]", function(e) {
                const t = e.currentTarget
                  , n = t.getAttribute("data-hydro-click") || ""
                  , r = t.getAttribute("data-hydro-click-hmac") || ""
                  , o = t.getAttribute("data-hydro-client-context") || "";
                ao(n, r, o)
            }),
            d("click", "[data-optimizely-hydro-click]", function(e) {
                const t = e.currentTarget
                  , n = t.getAttribute("data-optimizely-hydro-click") || ""
                  , r = t.getAttribute("data-optimizely-hydro-click-hmac") || "";
                ao(n, r, "")
            }),
            A(".js-immediate-updates", async function(e, t) {
                let n;
                try {
                    n = (await t.json()).json.updateContent
                } catch (r) {
                    r.response.json && (n = r.response.json.updateContent)
                }
                if (n)
                    for (const r in n) {
                        const o = n[r]
                          , s = document.querySelector(r);
                        s instanceof HTMLElement && Tn(s, o)
                    }
            });
            var jb = Object.defineProperty
              , zs = (e,t)=>jb(e, "name", {
                value: t,
                configurable: !0
            });
            m("include-fragment, poll-include-fragment", {
                subscribe: e=>re(E(e, "error", vd), E(e, "loadstart", yd))
            }),
            d("click", "include-fragment button[data-retry-button]", ({currentTarget: e})=>{
                const t = e.closest("include-fragment")
                  , n = t.src;
                t.src = "",
                t.src = n
            }
            );
            function Vs(e, t) {
                const n = e.currentTarget;
                if (n instanceof Element) {
                    for (const r of n.querySelectorAll("[data-show-on-error]"))
                        r instanceof HTMLElement && (r.hidden = !t);
                    for (const r of n.querySelectorAll("[data-hide-on-error]"))
                        r instanceof HTMLElement && (r.hidden = t)
                }
            }
            zs(Vs, "toggleElements");
            function yd(e) {
                Vs(e, !1)
            }
            zs(yd, "onLoad");
            function vd(e) {
                Vs(e, !0)
            }
            zs(vd, "onError"),
            m("[data-indeterminate]", {
                constructor: HTMLInputElement,
                initialize(e) {
                    e.indeterminate = !0
                }
            });
            var Eb = Object.defineProperty
              , Sb = (e,t)=>Eb(e, "name", {
                value: t,
                configurable: !0
            });
            function wd() {
                _.import("./chunk-jump-to.js")
            }
            Sb(wd, "load"),
            m(".js-jump-to-field", {
                constructor: HTMLInputElement,
                add(e) {
                    e.addEventListener("focusin", wd, {
                        once: !0
                    }),
                    Ua(window.location.pathname)
                }
            });
            var Lb = Object.defineProperty
              , _b = (e,t)=>Lb(e, "name", {
                value: t,
                configurable: !0
            });
            let Ks = !1;
            async function Xs() {
                if (Ks)
                    return;
                Ks = !0;
                const t = {
                    contexts: document.querySelector("meta[name=github-keyboard-shortcuts]").content
                }
                  , n = `/site/keyboard_shortcuts?${new URLSearchParams(t).toString()}`
                  , r = await _e({
                    content: H(document, n)
                });
                r.style.width = "800px",
                r.addEventListener("dialog:remove", function() {
                    Ks = !1
                }, {
                    once: !0
                })
            }
            _b(Xs, "showKeyboardShortcuts"),
            d("click", ".js-keyboard-shortcuts", Xs),
            document.addEventListener("keydown", e=>{
                e instanceof KeyboardEvent && (!_n(e) || e.target instanceof Node && Wa(e.target) || Ln(e) === "Shift+?" && Xs())
            }
            ),
            m(".js-modifier-key", {
                constructor: HTMLElement,
                add(e) {
                    if (/Macintosh/.test(navigator.userAgent)) {
                        let t = e.textContent;
                        t && (t = t.replace(/ctrl/, "\u2318"),
                        t = t.replace(/alt/, "\u2325"),
                        e.textContent = t)
                    }
                }
            }),
            m(".js-modifier-label-key", {
                add(e) {
                    if (/Macintosh/.test(navigator.userAgent)) {
                        let t = e.getAttribute("aria-label");
                        t = t.replace(/ctrl\+/, "cmd-"),
                        t = t.replace(/alt\+/, "option-"),
                        t = t.replace(/shift\+/, "shift-"),
                        e.setAttribute("aria-label", t)
                    }
                }
            });
            var kb = Object.defineProperty
              , Tb = (e,t)=>kb(e, "name", {
                value: t,
                configurable: !0
            });
            function an(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement))
                    return;
                const n = parseInt(t.getAttribute("data-input-max-length") || "", 10)
                  , r = parseInt(t.getAttribute("data-warning-length") || "", 10) || 5
                  , s = t.value.replace(/(\r\n|\n|\r)/g, `\r
`);
                let i = n - s.length;
                if (i <= 0) {
                    let f = s.substr(0, n);
                    f.endsWith("\r") ? (f = f.substr(0, n - 1),
                    i = 1) : i = 0,
                    t.value = f
                }
                const a = t.getAttribute("data-warning-text")
                  , l = t.closest(".js-length-limited-input-container").querySelector(".js-length-limited-input-warning");
                i <= r ? (l.textContent = a.replace(new RegExp("{{remaining}}","g"), `${i}`),
                l.classList.remove("d-none")) : (l.textContent = "",
                l.classList.add("d-none"))
            }
            Tb(an, "displayLengthWarning"),
            m(".js-length-limited-input", {
                add(e) {
                    e.addEventListener("input", an),
                    e.addEventListener("change", an)
                },
                remove(e) {
                    e.removeEventListener("input", an),
                    e.removeEventListener("change", an)
                }
            }),
            m("link[rel=prefetch-viewed]", {
                initialize() {
                    window.requestIdleCallback(()=>{
                        fetch(location.href, {
                            method: "HEAD",
                            credentials: "same-origin",
                            headers: {
                                Purpose: "prefetch-viewed"
                            }
                        })
                    }
                    )
                }
            }),
            d("click", ".js-member-search-filter", function(e) {
                e.preventDefault();
                const t = e.currentTarget.getAttribute("data-filter")
                  , r = e.currentTarget.closest("[data-filter-on]").getAttribute("data-filter-on")
                  , o = document.querySelector(".js-member-filter-field")
                  , s = o.value
                  , i = new RegExp(`${r}:(?:[a-z]|_|((').*(')))+`)
                  , a = s.toString().trim().replace(i, "");
                o.value = `${a} ${t}`.replace(/\s\s/, " ").trim(),
                o.focus(),
                v(o, "input")
            }),
            d("auto-check-success", ".js-new-organization-name", function(e) {
                const t = e.target
                  , r = t.closest("dd").querySelector(".js-field-hint-name");
                !r || (r.textContent = t.value)
            }),
            A(".js-notice-dismiss", async function(e, t) {
                await t.text(),
                e.closest(".js-notice").remove()
            }),
            d("submit", ".js-notice-dismiss-remote", async function(e) {
                const t = e.currentTarget;
                e.preventDefault();
                let n;
                try {
                    n = await fetch(t.action, {
                        method: t.method,
                        body: new FormData(t),
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })
                } catch (r) {
                    Fe();
                    return
                }
                n && !n.ok ? Fe() : t.closest(".js-notice").remove()
            });
            var Cb = Object.defineProperty
              , Ab = (e,t)=>Cb(e, "name", {
                value: t,
                configurable: !0
            });
            function jd(e) {
                try {
                    const t = e.getBoundingClientRect();
                    if (t.height === 0 && t.width === 0 || e.style.opacity === "0" || e.style.visibility === "hidden")
                        return !1
                } catch (t) {}
                return !0
            }
            Ab(jd, "isVisible"),
            d("click", ".js-github-dev-shortcut", function(e) {
                e.preventDefault();
                for (const n of document.querySelectorAll("textarea.js-comment-field"))
                    if (n.value && jd(n) && !confirm("Are you sure you want to open github.dev?"))
                        return;
                const t = e.currentTarget;
                t.pathname = window.location.pathname,
                t.hash = window.location.hash,
                window.location.href = t.href
            }),
            d("click", ".js-permalink-shortcut", function(e) {
                const t = e.currentTarget;
                try {
                    He(null, "", t.href + window.location.hash)
                } catch (n) {
                    window.location.href = t.href + window.location.hash
                }
                for (const n of document.querySelectorAll(".js-permalink-replaceable-link"))
                    n instanceof HTMLAnchorElement && (n.href = n.getAttribute("data-permalink-href"));
                e.preventDefault()
            }),
            A(".js-permission-menu-form", async function(e, t) {
                const n = e.querySelector(".js-permission-success")
                  , r = e.querySelector(".js-permission-error");
                n.hidden = !0,
                r.hidden = !0,
                e.classList.add("is-loading");
                let o;
                try {
                    o = await t.json()
                } catch (i) {
                    e.classList.remove("is-loading"),
                    r.hidden = !1;
                    return
                }
                e.classList.remove("is-loading"),
                n.hidden = !1;
                const s = e.closest(".js-org-repo");
                if (s) {
                    const i = o.json;
                    s.classList.toggle("with-higher-access", i.members_with_higher_access)
                }
            });
            var Pb = Object.defineProperty
              , lr = (e,t)=>Pb(e, "name", {
                value: t,
                configurable: !0
            });
            (async function() {
                await Nt;
                const e = document.querySelector(".js-pjax-loader-bar");
                if (!e)
                    return;
                const t = e.firstElementChild;
                if (!(t instanceof HTMLElement))
                    return;
                let n = 0
                  , r = null
                  , o = null;
                function s() {
                    i(0),
                    e && e.classList.add("is-loading"),
                    r = window.setTimeout(a, 0)
                }
                lr(s, "initiateLoader");
                function i(l) {
                    t instanceof HTMLElement && (l === 0 && (o == null && (o = getComputedStyle(t).transition),
                    t.style.transition = "none"),
                    n = l,
                    t.style.width = `${n}%`,
                    l === 0 && (t.clientWidth,
                    t.style.transition = o || ""))
                }
                lr(i, "setWidth");
                function a() {
                    n === 0 && (n = 12),
                    i(Math.min(n + 3, 95)),
                    r = window.setTimeout(a, 500)
                }
                lr(a, "increment");
                function c() {
                    r && clearTimeout(r),
                    i(100),
                    e && e.classList.remove("is-loading")
                }
                lr(c, "finishLoader"),
                document.addEventListener("pjax:start", s),
                document.addEventListener("pjax:end", c)
            }
            )();
            var xb = Object.defineProperty
              , Gs = (e,t)=>xb(e, "name", {
                value: t,
                configurable: !0
            });
            let Js = null;
            const Ys = "last_pjax_request"
              , ur = "pjax_start"
              , Qs = "pjax_end";
            function Ed(e) {
                e instanceof CustomEvent && e.detail && e.detail.url && (window.performance.mark(ur),
                Js = e.detail.url)
            }
            Gs(Ed, "markPjaxStart");
            async function Sd() {
                if (await Ne(),
                !window.performance.getEntriesByName(ur).length)
                    return;
                window.performance.mark(Qs),
                window.performance.measure(Ys, ur, Qs);
                const t = window.performance.getEntriesByName(Ys).pop()
                  , n = t ? t.duration : null;
                !n || (Js && pe({
                    requestUrl: Js,
                    pjaxDuration: Math.round(n)
                }),
                Ld())
            }
            Gs(Sd, "trackPjaxTiming");
            function Ld() {
                window.performance.clearMarks(ur),
                window.performance.clearMarks(Qs),
                window.performance.clearMeasures(Ys)
            }
            Gs(Ld, "clearPjaxMarks"),
            "getEntriesByName"in window.performance && (document.addEventListener("pjax:start", Ed),
            document.addEventListener("pjax:end", Sd)),
            document.addEventListener("pjax:click", function(e) {
                if (window.onbeforeunload)
                    return e.preventDefault()
            });
            var Mb = Object.defineProperty
              , $b = (e,t)=>Mb(e, "name", {
                value: t,
                configurable: !0
            });
            function _d(e) {
                const t = e.createElement("textarea");
                return t.style.position = "fixed",
                t.style.top = "0",
                t.style.left = "0",
                t.style.opacity = "0",
                e.body.appendChild(t),
                t.focus(),
                ()=>(t.blur(),
                t.remove(),
                t.value)
            }
            $b(_d, "captureKeypresses");
            let dr = null;
            d("pjax:click", ".js-pjax-capture-input", function() {
                dr = _d(document)
            }),
            d("pjax:end", "#js-repo-pjax-container", function() {
                if (dr) {
                    const e = dr()
                      , t = document.querySelector(".js-pjax-restore-captured-input");
                    t instanceof HTMLInputElement && e && Le(t, e),
                    dr = null
                }
            });
            var qb = Object.defineProperty
              , Ib = (e,t)=>qb(e, "name", {
                value: t,
                configurable: !0
            });
            function kd(e, t) {
                const n = e.split("/", 3).join("/")
                  , r = t.split("/", 3).join("/");
                return n === r
            }
            Ib(kd, "isSameRepo"),
            d("pjax:click", "#js-repo-pjax-container a[href]", function(e) {
                const t = e.currentTarget.pathname;
                kd(t, location.pathname) || e.preventDefault()
            }),
            d("pjax:click", ".js-comment-body", function(e) {
                const t = e.target;
                t instanceof HTMLAnchorElement && t.pathname.split("/")[3] === "files" && e.preventDefault()
            }),
            d("pjax:click", ".js-pjax-history-navigate", function(e) {
                e.currentTarget instanceof HTMLAnchorElement && (e.currentTarget.href === za() ? (history.back(),
                e.detail.relatedEvent.preventDefault(),
                e.preventDefault()) : e.currentTarget.href === Va() && (history.forward(),
                e.detail.relatedEvent.preventDefault(),
                e.preventDefault()))
            });
            var Ob = Object.defineProperty
              , Td = (e,t)=>Ob(e, "name", {
                value: t,
                configurable: !0
            });
            function Zs(e) {
                return e.getAttribute("data-pjax-preserve-scroll") != null ? !1 : 0
            }
            Td(Zs, "preserveScrollTo");
            function cn(e) {
                let t = e;
                for (; t; ) {
                    const n = t.getAttribute("data-pjax");
                    if (n && n !== "true")
                        return document.querySelector(n);
                    t = t.parentElement && t.parentElement.closest("[data-pjax]")
                }
                return e.closest("[data-pjax-container]")
            }
            Td(cn, "detectContainer");
            var Fb = Object.defineProperty
              , Cd = (e,t)=>Fb(e, "name", {
                value: t,
                configurable: !0
            });
            function Ad(e) {
                if (e.id)
                    return `#${e.id}`;
                throw new Error("pjax container has no id")
            }
            Cd(Ad, "getContainerSelector");
            function Pd(e, t) {
                const n = cn(e)
                  , r = Ad(n)
                  , o = new URL(e.href,window.location.origin)
                  , s = new URLSearchParams(o.search.slice(1));
                return o.search = s.toString(),
                fetch(o.href, {
                    headers: Object.assign({
                        Accept: "text/html",
                        "X-PJAX": "true",
                        "X-PJAX-Container": r,
                        "X-Requested-With": "XMLHttpRequest"
                    }, t && t.headers)
                })
            }
            Cd(Pd, "pjaxFetch"),
            m("[data-pjax-container] link[rel=pjax-prefetch]", {
                constructor: HTMLLinkElement,
                initialize(e) {
                    Pd(e, {
                        headers: {
                            Purpose: "prefetch"
                        }
                    })
                }
            });
            var xd = Object.defineProperty
              , Md = Object.getOwnPropertySymbols
              , Rb = Object.prototype.hasOwnProperty
              , Db = Object.prototype.propertyIsEnumerable
              , $d = (e,t,n)=>t in e ? xd(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
              , Hb = (e,t)=>{
                for (var n in t || (t = {}))
                    Rb.call(t, n) && $d(e, n, t[n]);
                if (Md)
                    for (var n of Md(t))
                        Db.call(t, n) && $d(e, n, t[n]);
                return e
            }
              , qd = (e,t)=>xd(e, "name", {
                value: t,
                configurable: !0
            });
            d("click", "[data-pjax] a, a[data-pjax]", function(e) {
                const t = e.currentTarget;
                if (t instanceof HTMLAnchorElement) {
                    if (t.getAttribute("data-skip-pjax") != null || t.getAttribute("data-remote") != null)
                        return;
                    const n = cn(t);
                    n && Id(e, {
                        container: n,
                        scrollTo: Zs(t)
                    })
                }
            }),
            d("change", "select[data-pjax]", function(e) {
                const t = e.currentTarget
                  , n = cn(t);
                n && Pn({
                    url: t.value,
                    container: n
                })
            });
            function Id(e, t) {
                const n = e.currentTarget;
                if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || location.protocol !== n.protocol || location.hostname !== n.hostname || n.href.indexOf("#") > -1 && ei(n) === ei(location) || e.defaultPrevented)
                    return;
                const r = Hb({
                    url: n.href,
                    target: n
                }, t)
                  , o = new CustomEvent("pjax:click",{
                    bubbles: !0,
                    cancelable: !0,
                    detail: {
                        options: r,
                        relatedEvent: e
                    }
                });
                n.dispatchEvent(o) && (Pn(r),
                e.preventDefault(),
                n.dispatchEvent(new CustomEvent("pjax:clicked",{
                    bubbles: !0,
                    cancelable: !0,
                    detail: {
                        options: r
                    }
                })))
            }
            qd(Id, "click");
            function ei(e) {
                return e.href.replace(/#.*/, "")
            }
            qd(ei, "stripHash");
            var Nb = Object.defineProperty
              , Bb = (e,t)=>Nb(e, "name", {
                value: t,
                configurable: !0
            });
            d("submit", "form[data-pjax]", function(e) {
                const t = e.currentTarget
                  , n = cn(t);
                if (!n)
                    return;
                const r = Zs(t)
                  , o = {
                    type: (t.method || "GET").toUpperCase(),
                    url: t.action,
                    target: t,
                    scrollTo: r,
                    container: n
                };
                if (o.type === "GET") {
                    if (t.querySelector("input[type=file]"))
                        return;
                    const s = Od(o.url);
                    s.search += (s.search ? "&" : "") + to(t),
                    o.url = s.toString()
                } else
                    o.data = new FormData(t);
                Pn(o),
                e.preventDefault()
            });
            function Od(e) {
                const t = document.createElement("a");
                return t.href = e,
                t
            }
            Bb(Od, "parseURL"),
            m("body.js-print-popup", ()=>{
                window.print(),
                setTimeout(window.close, 1e3)
            }
            ),
            m("poll-include-fragment[data-redirect-url]", function(e) {
                const t = e.getAttribute("data-redirect-url");
                e.addEventListener("load", function() {
                    window.location.href = t
                })
            }),
            m("poll-include-fragment[data-reload]", function(e) {
                e.addEventListener("load", function() {
                    window.location.reload()
                })
            });
            var Ub = Object.defineProperty
              , Wb = (e,t)=>Ub(e, "name", {
                value: t,
                configurable: !0
            });
            function Fd() {
                return typeof Blob == "function" && typeof PerformanceObserver == "function" && typeof Intl != "undefined" && typeof MutationObserver != "undefined" && typeof URLSearchParams != "undefined" && typeof WebSocket != "undefined" && typeof IntersectionObserver != "undefined" && typeof AbortController != "undefined" && typeof queueMicrotask != "undefined" && typeof TextEncoder != "undefined" && typeof TextDecoder != "undefined" && typeof customElements != "undefined" && typeof HTMLDetailsElement != "undefined" && "fromEntries"in Object && "entries"in FormData.prototype && "toggleAttribute"in Element.prototype && "flatMap"in Array.prototype && "replaceChildren"in Element.prototype
            }
            Wb(Fd, "capableBrowser");
            var zb = Object.defineProperty
              , se = (e,t)=>zb(e, "name", {
                value: t,
                configurable: !0
            });
            let Rd = !1
              , Dd = 0;
            const Vb = Date.now();
            function Kb(e) {
                e.error && fr(pr(mr(e.error)))
            }
            se(Kb, "reportEvent");
            async function Xb(e) {
                if (!!e.promise)
                    try {
                        await e.promise
                    } catch (t) {
                        t && t.name !== "AbortError" && !(t.response instanceof Response) && fr(pr(mr(t)))
                    }
            }
            se(Xb, "reportPromiseRejectionEvent");
            function ti(e, t={}) {
                fr(pr(mr(e), t))
            }
            se(ti, "reportError");
            async function fr(e) {
                var t, n;
                if (!zd())
                    return;
                const r = (n = (t = document.head) == null ? void 0 : t.querySelector('meta[name="browser-errors-url"]')) == null ? void 0 : n.content;
                if (!!r) {
                    if (Ud(e.error.stacktrace)) {
                        Rd = !0;
                        return
                    }
                    Dd++;
                    try {
                        await fetch(r, {
                            method: "post",
                            body: JSON.stringify(e)
                        })
                    } catch (o) {}
                }
            }
            se(fr, "report");
            function mr(e) {
                return {
                    type: e.name,
                    value: e.message,
                    stacktrace: Hd(e)
                }
            }
            se(mr, "formatError");
            function pr(e, t={}) {
                return Object.assign({
                    error: e,
                    sanitizedUrl: Ka() || window.location.href,
                    readyState: document.readyState,
                    referrer: document.referrer,
                    timeSinceLoad: Math.round(Date.now() - Vb),
                    user: Wd() || void 0
                }, t)
            }
            se(pr, "errorContext");
            function Hd(e) {
                var t;
                const n = Nd(e)
                  , r = (t = e.framesToPop) != null ? t : 0;
                return r === 0 ? n : n.slice(r)
            }
            se(Hd, "stacktrace");
            function Nd(e) {
                return ha(e.stack || "").map(t=>({
                    filename: t.file || "",
                    function: String(t.methodName),
                    lineno: (t.lineNumber || 0).toString(),
                    colno: (t.column || 0).toString()
                }))
            }
            se(Nd, "parseStackTrace");
            const Bd = /(chrome|moz|safari)-extension:\/\//;
            function Ud(e) {
                return e.some(t=>Bd.test(t.filename) || Bd.test(t.function))
            }
            se(Ud, "isExtensionError");
            function Wd() {
                var e, t;
                const n = (t = (e = document.head) == null ? void 0 : e.querySelector('meta[name="user-login"]')) == null ? void 0 : t.content;
                return n || `anonymous-${Xa()}`
            }
            se(Wd, "pageUser");
            let ni = !1;
            window.addEventListener("pageshow", ()=>ni = !1),
            window.addEventListener("pagehide", ()=>ni = !0);
            function zd() {
                return !ni && !Rd && Dd < 10 && Fd() && !co(document)
            }
            se(zd, "reportable"),
            typeof BroadcastChannel == "function" && new BroadcastChannel("shared-worker-error").addEventListener("message", t=>{
                ti(t.data.error)
            }
            );
            const Gb = "$__"
              , Vd = document.querySelector("meta[name=js-proxy-site-detection-payload]")
              , Kd = document.querySelector("meta[name=expected-hostname]");
            if (Vd instanceof HTMLMetaElement && Kd instanceof HTMLMetaElement && co(document)) {
                const e = {
                    url: window.location.href,
                    expectedHostname: Kd.content,
                    documentHostname: document.location.hostname,
                    proxyPayload: Vd.content
                }
                  , t = new Error
                  , n = {};
                n[`${Gb}`] = btoa(JSON.stringify(e)),
                ti(t, n)
            }
            var Jb = Object.defineProperty
              , Yb = (e,t)=>Jb(e, "name", {
                value: t,
                configurable: !0
            });
            U("keydown", ".js-quick-submit", function(e) {
                Xd(e)
            });
            function Xd(e) {
                const t = e.target;
                if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                    const n = t.form
                      , r = n.querySelector("input[type=submit], button[type=submit]");
                    if (e.shiftKey) {
                        const o = n.querySelector(".js-quick-submit-alternative");
                        (o instanceof HTMLInputElement || o instanceof HTMLButtonElement) && !o.disabled && N(n, o)
                    } else
                        (r instanceof HTMLInputElement || r instanceof HTMLButtonElement) && r.disabled || N(n);
                    e.preventDefault()
                }
            }
            Yb(Xd, "quickSubmit");
            var Qb = Object.defineProperty
              , ri = (e,t)=>Qb(e, "name", {
                value: t,
                configurable: !0
            });
            let hr;
            m(".js-comment-quote-reply", function(e) {
                var t;
                e.hidden = ((t = e.closest(".js-quote-selection-container")) == null ? void 0 : t.querySelector(".js-inline-comment-form-container, .js-new-comment-form")) == null
            });
            function oi(e) {
                return e.nodeName === "DIV" && e.classList.contains("highlight")
            }
            ri(oi, "isHighlightContainer");
            function Gd(e) {
                return e.nodeName === "IMG" || e.firstChild != null
            }
            ri(Gd, "hasContent");
            const Jd = {
                PRE(e) {
                    const t = e.parentElement;
                    if (t && oi(t)) {
                        const n = t.className.match(/highlight-source-(\S+)/)
                          , r = n ? n[1] : ""
                          , o = (e.textContent || "").replace(/\n+$/, "");
                        e.textContent = `\`\`\`${r}
${o}
\`\`\``,
                        e.append(`

`)
                    }
                    return e
                },
                A(e) {
                    const t = e.textContent || "";
                    return e.classList.contains("user-mention") || e.classList.contains("team-mention") || e.classList.contains("issue-link") && /^#\d+$/.test(t) ? t : e
                },
                IMG(e) {
                    const t = e.getAttribute("alt");
                    return t && e.classList.contains("emoji") ? t : e
                },
                DIV(e) {
                    if (e.classList.contains("js-suggested-changes-blob"))
                        e.remove();
                    else if (e.classList.contains("blob-wrapper-embedded")) {
                        const t = e.parentElement
                          , n = t.querySelector("a[href]")
                          , r = document.createElement("p");
                        r.textContent = n.href,
                        t.replaceWith(r)
                    }
                    return e
                }
            };
            function Yd(e) {
                const t = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, {
                    acceptNode(o) {
                        return o.nodeName in Jd && Gd(o) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                    }
                })
                  , n = [];
                let r = t.nextNode();
                for (; r; )
                    r instanceof HTMLElement && n.push(r),
                    r = t.nextNode();
                n.reverse();
                for (const o of n)
                    o.replaceWith(Jd[o.nodeName](o))
            }
            ri(Yd, "insertMarkdownSyntax"),
            d("click", ".js-comment-quote-reply", function({isTrusted: e, currentTarget: t}) {
                const n = t.closest(".js-comment")
                  , r = n.querySelector(".js-comment-body")
                  , o = n.querySelector(".js-comment-body").cloneNode(!0)
                  , s = n.closest(".js-quote-selection-container")
                  , i = r.querySelectorAll("button.js-convert-to-issue-button, span.js-clear");
                for (const c of i)
                    c.remove();
                let a = new ga;
                if (!(!e && a.range.collapsed) && (s.hasAttribute("data-quote-markdown") && (a = new ba(s.getAttribute("data-quote-markdown") || "",c=>{
                    const l = a.range.startContainer.parentElement
                      , f = l && l.closest("pre");
                    if (f instanceof HTMLElement) {
                        const p = f.parentElement;
                        if (p && oi(p)) {
                            const h = document.createElement("div");
                            h.className = p.className,
                            h.appendChild(c),
                            c.appendChild(h)
                        }
                    }
                    Yd(c)
                }
                )),
                hr && r.contains(hr.anchorNode) ? a.range = hr.range : a.range.collapsed && a.select(r),
                a.closest(".js-quote-selection-container") === s)) {
                    s.dispatchEvent(new CustomEvent("quote-selection",{
                        bubbles: !0,
                        detail: a
                    }));
                    for (const c of s.querySelectorAll("textarea"))
                        if (It(c)) {
                            a.insert(c);
                            break
                        }
                    n.querySelector(".js-comment-body").replaceWith(o)
                }
            });
            let si;
            document.addEventListener("selectionchange", Ie(function() {
                const e = window.getSelection();
                let t;
                try {
                    t = e.getRangeAt(0)
                } catch (n) {
                    si = null;
                    return
                }
                si = {
                    anchorNode: e.anchorNode,
                    range: t
                }
            }, 100)),
            document.addEventListener("toggle", ()=>{
                hr = si
            }
            , {
                capture: !0
            });
            var Zb = Object.defineProperty
              , Qd = (e,t)=>Zb(e, "name", {
                value: t,
                configurable: !0
            });
            A(".js-pick-reaction", async function(e, t) {
                const n = await t.json()
                  , r = e.closest(".js-comment")
                  , o = r.querySelector(".js-reactions-container")
                  , s = r.querySelector(".js-comment-header-reaction-button")
                  , i = me(document, n.json.reactions_container.trim())
                  , a = me(document, n.json.comment_header_reaction_button.trim());
                o.replaceWith(i),
                s.replaceWith(a)
            });
            function ii(e) {
                const t = e.target
                  , n = t.getAttribute("data-reaction-label")
                  , o = t.closest(".js-add-reaction-popover").querySelector(".js-reaction-description");
                o.hasAttribute("data-default-text") || o.setAttribute("data-default-text", o.textContent || ""),
                o.textContent = n
            }
            Qd(ii, "showReactionContent");
            function ai(e) {
                const n = e.target.closest(".js-add-reaction-popover").querySelector(".js-reaction-description")
                  , r = n.getAttribute("data-default-text");
                r && (n.textContent = r)
            }
            Qd(ai, "hideReactionContent"),
            d("toggle", ".js-reaction-popover-container", function(e) {
                const t = e.currentTarget.hasAttribute("open");
                for (const n of e.target.querySelectorAll(".js-reaction-option-item"))
                    t ? (n.addEventListener("mouseenter", ii),
                    n.addEventListener("mouseleave", ai)) : (n.removeEventListener("mouseenter", ii),
                    n.removeEventListener("mouseleave", ai))
            }, {
                capture: !0
            });
            var ey = Object.defineProperty
              , ty = (e,t)=>ey(e, "name", {
                value: t,
                configurable: !0
            });
            function Zd(e, t, n) {
                e.getAttribute("data-type") === "json" && n.headers.set("Accept", "application/json"),
                v(e, "deprecatedAjaxSend", {
                    request: n
                }),
                t.text().catch(o=>{
                    if (o.response)
                        return o.response;
                    throw o
                }
                ).then(o=>{
                    o.status < 300 ? v(e, "deprecatedAjaxSuccess") : v(e, "deprecatedAjaxError", {
                        error: o.statusText,
                        status: o.status,
                        text: o.text
                    })
                }
                , o=>{
                    v(e, "deprecatedAjaxError", {
                        error: o.message,
                        status: 0,
                        text: null
                    })
                }
                ).then(()=>{
                    v(e, "deprecatedAjaxComplete")
                }
                )
            }
            ty(Zd, "submitWithLegacyEvents"),
            d("click", ["form button:not([type])", "form button[type=submit]", "form input[type=submit]"].join(", "), function(e) {
                const t = e.currentTarget;
                t.form && !e.defaultPrevented && Ga(t)
            }),
            A("form[data-remote]", Zd),
            d("deprecatedAjaxComplete", "form", function({currentTarget: e}) {
                const t = lo(e);
                t && t.remove()
            }),
            Qr(e=>{
                const t = lo(e);
                t && t.remove()
            }
            ),
            ya(An);
            var ef = Object.defineProperty
              , ny = Object.getOwnPropertyDescriptor
              , ry = (e,t)=>ef(e, "name", {
                value: t,
                configurable: !0
            })
              , ln = (e,t,n,r)=>{
                for (var o = r > 1 ? void 0 : r ? ny(t, n) : t, s = e.length - 1, i; s >= 0; s--)
                    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                return r && o && ef(t, n, o),
                o
            }
            ;
            let Qe = class extends HTMLElement {
                constructor() {
                    super(...arguments);
                    this.loaderWasFocused = !1
                }
                connectedCallback() {
                    this.setPaginationUrl(this.list)
                }
                get hasNextPage() {
                    return !this.form.hidden
                }
                loadNextPage() {
                    !this.hasNextPage || N(this.form)
                }
                get disabled() {
                    return this.submitButton.hasAttribute("aria-disabled")
                }
                set disabled(e) {
                    e ? this.submitButton.setAttribute("aria-disabled", "true") : this.submitButton.removeAttribute("aria-disabled"),
                    this.submitButton.classList.toggle("disabled", e)
                }
                loadstart(e) {
                    e.target.addEventListener("focus", ()=>{
                        this.loaderWasFocused = !0
                    }
                    , {
                        once: !0
                    }),
                    e.target.addEventListener("include-fragment-replaced", ()=>{
                        var t;
                        this.setPaginationUrl(this.list),
                        this.loaderWasFocused && ((t = this.focusMarkers.pop()) == null || t.focus()),
                        this.loaderWasFocused = !1
                    }
                    , {
                        once: !0
                    })
                }
                async submit(e) {
                    var t;
                    if (e.preventDefault(),
                    this.disabled)
                        return;
                    this.disabled = !0;
                    let n;
                    try {
                        const o = await fetch(this.form.action);
                        if (!o.ok)
                            return;
                        n = await o.text()
                    } catch (o) {
                        return
                    }
                    const r = me(document, n);
                    this.setPaginationUrl(r),
                    this.list.append(r),
                    (t = this.focusMarkers.pop()) == null || t.focus(),
                    this.disabled = !1,
                    this.dispatchEvent(new CustomEvent("remote-pagination-load"))
                }
                setPaginationUrl(e) {
                    const t = e.querySelector("[data-pagination-src]");
                    if (!t)
                        return;
                    const n = t.getAttribute("data-pagination-src");
                    n ? (this.form.action = n,
                    this.form.hidden = !1) : this.form.hidden = !0
                }
            }
            ;
            ry(Qe, "RemotePaginationElement"),
            ln([y], Qe.prototype, "form", 2),
            ln([y], Qe.prototype, "list", 2),
            ln([te], Qe.prototype, "focusMarkers", 2),
            ln([y], Qe.prototype, "submitButton", 2),
            Qe = ln([q], Qe),
            m(".has-removed-contents", function() {
                let e;
                return {
                    add(t) {
                        e = Array.from(t.childNodes);
                        for (const r of e)
                            t.removeChild(r);
                        const n = t.closest("form");
                        n && v(n, "change")
                    },
                    remove(t) {
                        for (const r of e)
                            t.appendChild(r);
                        const n = t.closest("form");
                        n && v(n, "change")
                    }
                }
            });
            var oy = Object.defineProperty
              , un = (e,t)=>oy(e, "name", {
                value: t,
                configurable: !0
            });
            const gr = ["is-render-pending", "is-render-ready", "is-render-loading", "is-render-loaded"]
              , sy = ["is-render-ready", "is-render-loading", "is-render-loaded", "is-render-failed", "is-render-failed-fatally"]
              , gt = new WeakMap;
            function ci(e) {
                const t = gt.get(e);
                t != null && (t.load = t.hello = null,
                t.helloTimer && (clearTimeout(t.helloTimer),
                t.helloTimer = null),
                t.loadTimer && (clearTimeout(t.loadTimer),
                t.loadTimer = null))
            }
            un(ci, "resetTiming");
            function dn(e) {
                e.classList.remove(...gr),
                e.classList.add("is-render-failed"),
                ci(e)
            }
            un(dn, "renderFailed");
            function li(e, t=!1) {
                var n;
                !It(e) || e.classList.contains("is-render-ready") || e.classList.contains("is-render-failed") || e.classList.contains("is-render-failed-fatally") || t && !((n = gt.get(e)) == null ? void 0 : n.hello) || dn(e)
            }
            un(li, "timeoutWatchdog"),
            m(".js-render-target", function(e) {
                var t;
                const n = e;
                n.classList.remove(...sy),
                n.style.height = "auto",
                !((t = gt.get(e)) == null ? void 0 : t.load) && (ci(e),
                !gt.get(e) && (gt.set(e, {
                    load: Date.now(),
                    hello: null,
                    helloTimer: window.setTimeout(li, 1e4, e, !0),
                    loadTimer: window.setTimeout(li, 45e3, e)
                }),
                e.classList.add("is-render-automatic", "is-render-requested")))
            });
            function br(e, t) {
                e && e.postMessage && e.postMessage(JSON.stringify(t), "*")
            }
            un(br, "postAsJson"),
            window.addEventListener("message", function(e) {
                var t;
                let n = e.data;
                if (!n)
                    return;
                if (typeof n == "string")
                    try {
                        n = JSON.parse(n)
                    } catch (l) {
                        return
                    }
                if (typeof n.type != "string" && n.type !== "render")
                    return;
                const r = n.type;
                if (typeof n.identity != "string")
                    return;
                const o = n.identity;
                if (typeof n.body != "string")
                    return;
                const s = n.body;
                let i;
                for (const l of document.querySelectorAll(".js-render-target"))
                    if (!o || l.getAttribute("data-identity") === o) {
                        i = l;
                        break
                    }
                if (!i || e.origin !== i.getAttribute("data-host"))
                    return;
                const a = n.payload != null ? n.payload : void 0
                  , c = (t = i.querySelector("iframe")) == null ? void 0 : t.contentWindow;
                switch (s) {
                case "hello":
                    {
                        const l = gt.get(i) || {
                            untimed: !0
                        };
                        l.hello = Date.now();
                        const f = {
                            type: "render:cmd",
                            body: {
                                cmd: "ack",
                                ack: !0
                            }
                        }
                          , p = {
                            type: "render:cmd",
                            body: {
                                cmd: "branding",
                                branding: !1
                            }
                        };
                        if (!c)
                            return;
                        if (br(c, f),
                        br(c, p),
                        i.classList.contains("is-local")) {
                            const h = i.closest(".js-code-editor")
                              , g = h instanceof HTMLElement ? Dt(h) : null;
                            if (g) {
                                let w = null;
                                const S = un((P,j)=>{
                                    if (j && j.origin === "setValue")
                                        return;
                                    const C = g.code();
                                    C !== w && (w = C,
                                    br(c, {
                                        type: "render:data",
                                        body: C
                                    }))
                                }
                                , "sendEditorData");
                                g.editor.on("change", S),
                                S()
                            }
                        }
                    }
                    break;
                case "error":
                    dn(i);
                    break;
                case "error:fatal":
                    dn(i),
                    i.classList.add("is-render-failed-fatal");
                    break;
                case "error:invalid":
                    dn(i),
                    i.classList.add("is-render-failed-invalid");
                    break;
                case "loading":
                    i.classList.remove(...gr),
                    i.classList.add("is-render-loading");
                    break;
                case "loaded":
                    i.classList.remove(...gr),
                    i.classList.add("is-render-loaded");
                    break;
                case "ready":
                    i.classList.remove(...gr),
                    i.classList.add("is-render-ready"),
                    a && typeof a.height == "number" && (i.style.height = `${a.height}px`),
                    v(i, "render:hook:afterready", {
                        container: i,
                        payload: a
                    });
                    break;
                case "resize":
                    a && typeof a.height == "number" && (i.style.height = `${a.height}px`);
                    break;
                case "data":
                    v(i, "edit:visual", a);
                    break;
                default:
                    v(i, "render:hook:message", {
                        type: r,
                        body: s,
                        payload: a
                    });
                    break
                }
            }),
            A("form[data-replace-remote-form]", async function(e, t) {
                e.classList.remove("is-error"),
                e.classList.add("is-loading");
                try {
                    let n = e;
                    const r = await t.html()
                      , o = e.closest("[data-replace-remote-form-target]");
                    if (o) {
                        const s = o.getAttribute("data-replace-remote-form-target");
                        n = s ? document.getElementById(s) : o
                    }
                    n.replaceWith(r.html)
                } catch (n) {
                    e.classList.remove("is-loading"),
                    e.classList.add("is-error")
                }
            }),
            PerformanceObserver && (PerformanceObserver.supportedEntryTypes || []).includes("longtask") && new PerformanceObserver(function(t) {
                const n = t.getEntries().map(({name: r, duration: o})=>({
                    name: r,
                    duration: o,
                    url: window.location.href
                }));
                pe({
                    longTasks: n
                })
            }
            ).observe({
                entryTypes: ["longtask"]
            });
            var iy = Object.defineProperty
              , ay = (e,t)=>iy(e, "name", {
                value: t,
                configurable: !0
            });
            const tf = new WeakMap;
            function nf(e) {
                return e.closest("markdown-toolbar").field
            }
            ay(nf, "getTextarea"),
            d("click", ".js-markdown-link-button", async function({currentTarget: e}) {
                const n = document.querySelector(".js-markdown-link-dialog").content.cloneNode(!0);
                if (!(n instanceof DocumentFragment))
                    return;
                const r = await _e({
                    content: n
                });
                e instanceof HTMLElement && tf.set(r, nf(e).selectionEnd)
            }),
            d("click", ".js-markdown-link-insert", ({currentTarget: e})=>{
                const t = e.closest("details-dialog")
                  , n = document.querySelector(`#${e.getAttribute("data-for-textarea")}`)
                  , r = tf.get(t) || 0
                  , o = t.querySelector("#js-dialog-link-href").value
                  , i = `[${t.querySelector("#js-dialog-link-text").value}](${o}) `
                  , a = n.value.slice(0, r)
                  , c = n.value.slice(r);
                n.value = a + i + c,
                n.focus(),
                n.selectionStart = n.selectionEnd = r + i.length
            }
            ),
            d("details-menu-select", ".js-saved-reply-menu", function(e) {
                if (!(e.target instanceof Element))
                    return;
                const t = e.detail.relatedTarget.querySelector(".js-saved-reply-body");
                if (!t)
                    return;
                const n = (t.textContent || "").trim()
                  , o = e.target.closest(".js-previewable-comment-form").querySelector("textarea.js-comment-field");
                so(o, n),
                setTimeout(()=>o.focus(), 0)
            }, {
                capture: !0
            }),
            U("keydown", ".js-saved-reply-shortcut-comment-field", function(e) {
                Ln(e) === "Control+." && (e.target.closest(".js-previewable-comment-form").querySelector(".js-saved-reply-container").setAttribute("open", ""),
                e.preventDefault())
            }),
            U("keydown", ".js-saved-reply-filter-input", function(e) {
                if (/^Control\+[1-9]$/.test(Ln(e))) {
                    const n = e.target.closest(".js-saved-reply-container").querySelectorAll('[role="menuitem"]')
                      , r = Number(e.key)
                      , o = n[r - 1];
                    o instanceof HTMLElement && (o.click(),
                    e.preventDefault())
                }
            });
            var cy = Object.defineProperty
              , ui = (e,t)=>cy(e, "name", {
                value: t,
                configurable: !0
            });
            function rf(e, t) {
                return e.querySelector(`#LC${t}`)
            }
            ui(rf, "queryLineElement");
            function of(e, t) {
                const n = no(e, r=>rf(t, r));
                if (n) {
                    const r = document.createElement("span")
                      , o = "color-bg-attention-emphasis";
                    r.classList.add(o),
                    ro(n, r)
                }
            }
            ui(of, "highlightColumns");
            function sf(e) {
                const t = parseInt(e.getAttribute("data-start-line"))
                  , n = parseInt(e.getAttribute("data-end-line"))
                  , r = parseInt(e.getAttribute("data-start-column"))
                  , o = parseInt(e.getAttribute("data-end-column"));
                return t !== n || t === n && r === o ? null : {
                    start: {
                        line: t,
                        column: r
                    },
                    end: {
                        line: n,
                        column: o !== 0 ? o : null
                    }
                }
            }
            ui(sf, "parseColumnHighlightRange"),
            m(".js-highlight-code-snippet-columns", function(e) {
                const t = sf(e);
                t !== null && of(t, e)
            }),
            d("click", ".js-segmented-nav-button", function(e) {
                e.preventDefault();
                const t = e.currentTarget
                  , n = t.getAttribute("data-selected-tab")
                  , r = t.closest(".js-segmented-nav")
                  , o = r.parentElement;
                for (const s of r.querySelectorAll(".js-segmented-nav-button"))
                    s.classList.remove("selected");
                t.classList.add("selected");
                for (const s of o.querySelectorAll(".js-selected-nav-tab"))
                    s.parentElement === o && s.classList.remove("active");
                document.querySelector(`.${n}`).classList.add("active")
            });
            var ly = Object.defineProperty
              , uy = (e,t)=>ly(e, "name", {
                value: t,
                configurable: !0
            });
            function we(e) {
                const t = e || window.location
                  , n = document.head && document.head.querySelector("meta[name=session-resume-id]");
                return n instanceof HTMLMetaElement && n.content || t.pathname
            }
            uy(we, "getPageID");
            const dy = Ie(function() {
                At(we())
            }, 50);
            window.addEventListener("submit", va, {
                capture: !0
            }),
            window.addEventListener("pageshow", function() {
                At(we())
            }),
            window.addEventListener("pjax:end", function() {
                At(we())
            }),
            m(".js-session-resumable", function() {
                dy()
            }),
            window.addEventListener("pagehide", function() {
                Pt(we(), {
                    selector: ".js-session-resumable"
                })
            }),
            window.addEventListener("pjax:beforeReplace", function(e) {
                const t = e.detail.previousState
                  , n = t ? t.url : null;
                if (n)
                    Pt(we(new URL(n,window.location.origin)), {
                        selector: ".js-session-resumable"
                    });
                else {
                    const r = new Error("pjax:beforeReplace event.detail.previousState.url is undefined");
                    setTimeout(function() {
                        throw r
                    })
                }
            }),
            document.addEventListener("pjax:end", function() {
                const e = document.querySelector('meta[name="selected-link"]')
                  , t = e && e.getAttribute("value");
                if (!!t)
                    for (const n of document.querySelectorAll(".js-sidenav-container-pjax .js-selected-navigation-item")) {
                        const r = (n.getAttribute("data-selected-links") || "").split(" ").indexOf(t) >= 0;
                        r ? n.setAttribute("aria-current", "page") : n.removeAttribute("aria-current"),
                        n.classList.toggle("selected", r)
                    }
            });
            var fy = Object.defineProperty
              , fn = (e,t)=>fy(e, "name", {
                value: t,
                configurable: !0
            });
            const di = ["notification_referrer_id", "notifications_before", "notifications_after", "notifications_query"]
              , yr = "notification_shelf";
            function af(e, t=null) {
                return e.has("notification_referrer_id") ? (lf(e, t),
                uf(e)) : null
            }
            fn(af, "storeAndStripShelfParams");
            function cf(e=null) {
                const t = fi(e);
                if (!t)
                    return uo(yr),
                    null;
                try {
                    const n = Ja(yr);
                    if (!n)
                        return null;
                    const r = JSON.parse(n);
                    if (!r || !r.pathname)
                        throw new Error("Must have a pathname");
                    if (r.pathname !== t)
                        throw new Error("Stored pathname does not match current pathname.");
                    const o = {};
                    for (const s of di)
                        o[s] = r[s];
                    return o
                } catch (n) {
                    return uo(yr),
                    null
                }
            }
            fn(cf, "getStoredShelfParamsForCurrentPage");
            function lf(e, t) {
                const n = fi(t);
                if (!n)
                    return;
                const r = {
                    pathname: n
                };
                for (const o of di) {
                    const s = e.get(o);
                    s && (r[o] = s)
                }
                Ya(yr, JSON.stringify(r))
            }
            fn(lf, "storeShelfParams");
            function uf(e) {
                for (const t of di)
                    e.delete(t);
                return e
            }
            fn(uf, "deleteShelfParams");
            function fi(e) {
                e = e || window.location.pathname;
                const t = /^(\/[^/]+\/[^/]+\/pull\/[^/]+)/
                  , n = e.match(t);
                return n ? n[0] : null
            }
            fn(fi, "getCurrentPullRequestPathname");
            var my = Object.defineProperty
              , vr = (e,t)=>my(e, "name", {
                value: t,
                configurable: !0
            });
            async function df() {
                return A(".js-notification-shelf .js-notification-action form", async function(e, t) {
                    if (e.hasAttribute("data-redirect-to-inbox-on-submit")) {
                        await mi(t);
                        const r = document.querySelector(".js-notifications-back-to-inbox");
                        r && r.click();
                        return
                    }
                    Qa(e, e),
                    await mi(t)
                })
            }
            vr(df, "remoteShelfActionForm");
            function ff() {
                const e = new URLSearchParams(window.location.search)
                  , t = af(e);
                if (t) {
                    const n = new URL(window.location.href,window.location.origin);
                    return n.search = t.toString(),
                    n.toString()
                }
            }
            vr(ff, "urlWithoutNotificationParameters");
            function mf(e) {
                if (!(e instanceof Gr))
                    return;
                const t = cf();
                if (!t)
                    return;
                const n = e.getAttribute("data-base-src");
                if (!n)
                    return;
                const r = new URL(n,window.location.origin)
                  , o = new URLSearchParams(r.search);
                for (const [s,i] of Object.entries(t))
                    typeof i == "string" && o.set(s, i);
                r.search = o.toString(),
                e.setAttribute("src", r.toString())
            }
            vr(mf, "loadShelfFromStoredParams");
            async function mi(e) {
                try {
                    await e.text()
                } catch (t) {}
            }
            vr(mi, "performRequest");
            var py = Object.defineProperty
              , pf = (e,t)=>py(e, "name", {
                value: t,
                configurable: !0
            });
            df();
            function hf() {
                const e = ff();
                e && He(null, "", e)
            }
            pf(hf, "removeNotificationParams"),
            hf(),
            m(".js-notification-shelf-include-fragment", mf),
            d("submit", ".js-mark-notification-form", async function(e) {
                const t = e.currentTarget;
                e.preventDefault();
                try {
                    await fetch(t.action, {
                        method: t.method,
                        body: new FormData(t),
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })
                } catch (n) {}
            });
            async function gf() {
                await Ft;
                const e = document.querySelector(".js-mark-notification-form");
                e instanceof HTMLFormElement && N(e)
            }
            pf(gf, "markNotificationAsRead"),
            gf();
            var hy = Object.defineProperty
              , pi = (e,t)=>hy(e, "name", {
                value: t,
                configurable: !0
            });
            function bf(e) {
                return !!e.closest(".js-jump-to-field")
            }
            pi(bf, "isJumpToAvailable");
            function wr(e, t) {
                if (bf(e))
                    return;
                const n = document.querySelector(".js-site-search-form");
                document.querySelector(".js-site-search").classList.toggle("scoped-search", t);
                let r, o;
                t ? (r = n.getAttribute("data-scoped-search-url"),
                o = e.getAttribute("data-scoped-placeholder")) : (r = n.getAttribute("data-unscoped-search-url"),
                o = e.getAttribute("data-unscoped-placeholder")),
                n.setAttribute("action", r),
                e.setAttribute("placeholder", o)
            }
            pi(wr, "toggleSearchScope"),
            U("keyup", ".js-site-search-field", function(e) {
                const t = e.target
                  , n = t.value.length === 0;
                n && e.key === "Backspace" && t.classList.contains("is-clearable") && wr(t, !1),
                n && e.key === "Escape" && wr(t, !0),
                t.classList.toggle("is-clearable", n)
            }),
            qt(".js-site-search-focus", function(e) {
                const t = e.closest(".js-chromeless-input-container");
                t.classList.add("focus");
                function n() {
                    t.classList.remove("focus"),
                    e.value.length === 0 && e.classList.contains("js-site-search-field") && wr(e, !0),
                    e.removeEventListener("blur", n)
                }
                pi(n, "blurHandler"),
                e.addEventListener("blur", n)
            }),
            d("submit", ".js-site-search-form", function(e) {
                if (!(e.target instanceof Element))
                    return;
                const t = e.target.querySelector(".js-site-search-type-field");
                t.value = new URLSearchParams(window.location.search).get("type") || ""
            }),
            m("textarea.js-size-to-fit", {
                constructor: HTMLTextAreaElement,
                subscribe: wa
            }),
            d("click", ".js-smoothscroll-anchor", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLAnchorElement))
                    return;
                const n = Za(document, t.hash);
                !n || (n.scrollIntoView({
                    behavior: "smooth"
                }),
                e.preventDefault())
            });
            var gy = Object.defineProperty
              , by = (e,t)=>gy(e, "name", {
                value: t,
                configurable: !0
            });
            const yy = 1e3
              , yf = new WeakMap
              , vf = document.querySelector("#snippet-clipboard-copy-button");
            async function wf(e, t) {
                const n = e.getAttribute("data-snippet-clipboard-copy-content");
                if (n === null || (e.removeAttribute("data-snippet-clipboard-copy-content"),
                !(vf instanceof HTMLTemplateElement)))
                    return;
                const o = vf.content.cloneNode(!0).children[0];
                if (!(o instanceof HTMLElement))
                    return;
                const s = o.children[0];
                if (!(s instanceof HTMLElement))
                    return;
                s.setAttribute("value", n),
                document.addEventListener("selectionchange", ()=>{
                    const a = document.getSelection();
                    if (a && e.contains(a.anchorNode)) {
                        const c = a == null ? void 0 : a.toString();
                        s.style.display = c.trim() === "" ? "inherit" : "none"
                    }
                }
                , {
                    signal: t
                });
                const i = e.querySelector("pre");
                if (i !== null) {
                    let a;
                    i.addEventListener("scroll", ()=>{
                        a && clearTimeout(a),
                        s.style.display = "none",
                        a = setTimeout(()=>{
                            s.style.display = "inherit"
                        }
                        , yy)
                    }
                    , {
                        signal: t
                    })
                }
                e.appendChild(o)
            }
            by(wf, "insertSnippetClipboardCopyButton"),
            m("[data-snippet-clipboard-copy-content]", {
                constructor: HTMLElement,
                add(e) {
                    const t = new AbortController;
                    yf.set(e, t),
                    wf(e, t.signal)
                }
            }),
            m(".snippet-clipboard-content clipboard-copy", {
                constructor: HTMLElement,
                remove(e) {
                    const t = yf.get(e);
                    t && t.abort()
                }
            });
            var vy = Object.defineProperty
              , wy = (e,t)=>vy(e, "name", {
                value: t,
                configurable: !0
            });
            A(".js-social-form", async function(e, t) {
                let n;
                try {
                    n = await t.json()
                } catch (o) {
                    Fe();
                    const s = e.closest(".js-toggler-container");
                    s && s.classList.toggle("on");
                    return
                }
                const r = e.closest(".js-social-container");
                r && hi(r, n.json.count)
            });
            function hi(e, t) {
                for (const n of e.querySelectorAll(".js-social-count")) {
                    n.textContent = t;
                    const r = n.getAttribute("data-singular-suffix")
                      , o = n.getAttribute("data-plural-suffix")
                      , s = t === "1" ? r : o;
                    s && n.setAttribute("aria-label", `${t} ${s}`)
                }
            }
            wy(hi, "updateSocialCounts");
            var jf = Object.defineProperty
              , jy = Object.defineProperties
              , Ey = Object.getOwnPropertyDescriptors
              , Ef = Object.getOwnPropertySymbols
              , Sy = Object.prototype.hasOwnProperty
              , Ly = Object.prototype.propertyIsEnumerable
              , Sf = (e,t,n)=>t in e ? jf(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
              , _y = (e,t)=>{
                for (var n in t || (t = {}))
                    Sy.call(t, n) && Sf(e, n, t[n]);
                if (Ef)
                    for (var n of Ef(t))
                        Ly.call(t, n) && Sf(e, n, t[n]);
                return e
            }
              , ky = (e,t)=>jy(e, Ey(t))
              , gi = (e,t)=>jf(e, "name", {
                value: t,
                configurable: !0
            });
            const bt = "_i";
            function Lf(e) {
                return ky(_y({}, e), {
                    isLocal: !0
                })
            }
            gi(Lf, "markMetadataAsLocal");
            class _f {
                constructor() {
                    this.subscriberMetadata = new Map
                }
                setMetadata(t, n) {
                    this.subscriberMetadata.set(t, n)
                }
                removeSubscribers(t) {
                    let n = !1;
                    for (const r of t)
                        n = this.subscriberMetadata.delete(r) || n;
                    return n
                }
                getMetadata(t) {
                    if (!t) {
                        const s = [];
                        let i;
                        for (const a of this.subscriberMetadata.values())
                            for (const c of a)
                                if (bt in c) {
                                    const l = Boolean(c[bt]);
                                    i = i === void 0 ? l : l && i
                                } else
                                    s.push(c);
                        return i !== void 0 && s.push({
                            [bt]: i ? 1 : 0
                        }),
                        s
                    }
                    const n = []
                      , {subscriber: r, markAllAsLocal: o} = t;
                    for (const [s,i] of this.subscriberMetadata) {
                        const c = o || s === r ? i.map(Lf) : i;
                        n.push(...c)
                    }
                    return n
                }
                hasSubscribers() {
                    return this.subscriberMetadata.size > 0
                }
            }
            gi(_f, "PresenceMetadataForChannel");
            class bi {
                constructor() {
                    this.metadataByChannel = new Map
                }
                setMetadata({subscriber: t, channelName: n, metadata: r}) {
                    let o = this.metadataByChannel.get(n);
                    o || (o = new _f,
                    this.metadataByChannel.set(n, o)),
                    o.setMetadata(t, r)
                }
                removeSubscribers(t) {
                    const n = new Set;
                    for (const [r,o] of this.metadataByChannel)
                        o.removeSubscribers(t) && n.add(r),
                        o.hasSubscribers() || this.metadataByChannel.delete(r);
                    return n
                }
                getChannelMetadata(t, n) {
                    const r = this.metadataByChannel.get(t);
                    return (r == null ? void 0 : r.getMetadata(n)) || []
                }
            }
            gi(bi, "PresenceMetadataSet");
            var Ty = Object.defineProperty
              , kf = (e,t)=>Ty(e, "name", {
                value: t,
                configurable: !0
            });
            class yi {
                constructor() {
                    this.subscriptions = new ja,
                    this.signatures = new Map
                }
                add(...t) {
                    const n = [];
                    for (const {subscriber: r, topic: o} of t)
                        this.subscriptions.has(o.name) || (n.push(o),
                        this.signatures.set(o.name, o)),
                        this.subscriptions.set(o.name, r);
                    return n
                }
                delete(...t) {
                    const n = [];
                    for (const {subscriber: r, topic: o} of t)
                        this.subscriptions.delete(o.name, r) && !this.subscriptions.has(o.name) && (n.push(o),
                        this.signatures.delete(o.name));
                    return n
                }
                drain(...t) {
                    const n = [];
                    for (const r of t)
                        for (const o of this.subscriptions.drain(r)) {
                            const s = this.signatures.get(o);
                            this.signatures.delete(o),
                            n.push(s)
                        }
                    return n
                }
                topics() {
                    return this.signatures.values()
                }
                topic(t) {
                    return this.signatures.get(t) || null
                }
                subscribers(t) {
                    return this.subscriptions.get(t).values()
                }
            }
            kf(yi, "SubscriptionSet");
            class jr {
                static parse(t) {
                    const [n,r] = t.split("--");
                    if (!n || !r)
                        return null;
                    const o = JSON.parse(atob(n));
                    return !o.c || !o.t ? null : new jr(o.c,t)
                }
                constructor(t, n) {
                    this.name = t,
                    this.signed = n,
                    this.offset = ""
                }
            }
            kf(jr, "Topic");
            var Cy = Object.defineProperty
              , mn = (e,t)=>Cy(e, "name", {
                value: t,
                configurable: !0
            });
            function vi(e, t) {
                return `${e}:${t}`
            }
            mn(vi, "getPresenceKey");
            function Er(e) {
                const [t,n] = e.p.split(".");
                return {
                    userId: e.u,
                    presenceKey: vi(e.u, t),
                    connectionCount: Number(n),
                    metadata: e.m || []
                }
            }
            mn(Er, "decompressItem");
            const Ay = "presence-";
            function yt(e) {
                return e.startsWith(Ay)
            }
            mn(yt, "isPresenceChannel");
            class Tf {
                constructor() {
                    this.presenceItems = new Map
                }
                shouldUsePresenceItem(t) {
                    const n = this.presenceItems.get(t.presenceKey);
                    return !n || n.connectionCount <= t.connectionCount
                }
                addPresenceItem(t) {
                    !this.shouldUsePresenceItem(t) || this.presenceItems.set(t.presenceKey, t)
                }
                removePresenceItem(t) {
                    !this.shouldUsePresenceItem(t) || this.presenceItems.delete(t.presenceKey)
                }
                replacePresenceItems(t) {
                    this.presenceItems.clear();
                    for (const n of t)
                        this.addPresenceItem(n)
                }
                getPresenceItems() {
                    return Array.from(this.presenceItems.values())
                }
            }
            mn(Tf, "PresenceChannel");
            class Cf {
                constructor() {
                    this.presenceChannels = new Map
                }
                getPresenceChannel(t) {
                    const n = this.presenceChannels.get(t) || new Tf;
                    return this.presenceChannels.set(t, n),
                    n
                }
                handleMessage(t, n) {
                    const r = this.getPresenceChannel(t);
                    switch (n.e) {
                    case "pf":
                        r.replacePresenceItems(n.d.map(Er));
                        break;
                    case "pa":
                        r.addPresenceItem(Er(n.d));
                        break;
                    case "pr":
                        r.removePresenceItem(Er(n.d));
                        break
                    }
                    return this.getChannelItems(t)
                }
                getChannelItems(t) {
                    return this.getPresenceChannel(t).getPresenceItems()
                }
                clearChannel(t) {
                    this.presenceChannels.delete(t)
                }
            }
            mn(Cf, "AlivePresence");
            var Py = Object.defineProperty, Ze = (e,t)=>Py(e, "name", {
                value: t,
                configurable: !0
            }), Sr;
            (function(e) {
                e.Deploy = "Alive Redeploy",
                e.Reconnect = "Alive Reconnect"
            }
            )(Sr || (Sr = {}));
            function Af() {
                return `${Math.round(Math.random() * (Math.pow(2, 31) - 1))}_${Math.round(Date.now() / 1e3)}`
            }
            Ze(Af, "generatePresenceId");
            function Pf(e) {
                const t = e.match(/\/u\/(\d+)\/ws/);
                return t ? +t[1] : 0
            }
            Ze(Pf, "getUserIdFromSocketUrl");
            class xf {
                constructor(t, n, r, o) {
                    this.url = t,
                    this.subscriptions = new yi,
                    this.state = "online",
                    this.retrying = null,
                    this.connectionCount = 0,
                    this.presence = new Cf,
                    this.presenceMetadata = new bi,
                    this.intentionallyDisconnected = !1,
                    this.lastCameOnline = 0,
                    this.userId = Pf(t),
                    this.presenceId = Af(),
                    this.presenceKey = vi(this.userId, this.presenceId),
                    this.refreshUrl = n,
                    this.notify = o,
                    this.shared = r,
                    this.socket = this.connect()
                }
                subscribe(t) {
                    const n = this.subscriptions.add(...t);
                    this.sendSubscribe(n);
                    for (const r of t) {
                        const o = r.topic.name;
                        !yt(o) || this.notifyCachedPresence(r.subscriber, o)
                    }
                }
                unsubscribe(t) {
                    const n = this.subscriptions.delete(...t);
                    this.sendUnsubscribe(n)
                }
                unsubscribeAll(...t) {
                    const n = this.subscriptions.drain(...t);
                    this.sendUnsubscribe(n);
                    const r = this.presenceMetadata.removeSubscribers(t);
                    this.sendPresenceMetadataUpdate(r)
                }
                requestPresence(t, n) {
                    for (const r of n)
                        this.notifyCachedPresence(t, r)
                }
                notifyCachedPresence(t, n) {
                    const r = this.presence.getChannelItems(n);
                    r.length !== 0 && this.notifyPresenceChannel(n, r)
                }
                updatePresenceMetadata(t) {
                    const n = new Set;
                    for (const r of t)
                        this.presenceMetadata.setMetadata(r),
                        n.add(r.channelName);
                    this.sendPresenceMetadataUpdate(n)
                }
                sendPresenceMetadataUpdate(t) {
                    if (!t.size)
                        return;
                    const n = [];
                    for (const r of t) {
                        const o = this.subscriptions.topic(r);
                        o && n.push(o)
                    }
                    this.sendSubscribe(n)
                }
                online() {
                    var t;
                    this.lastCameOnline = Date.now(),
                    this.state = "online",
                    (t = this.retrying) == null || t.abort(),
                    this.socket.open()
                }
                offline() {
                    var t;
                    this.state = "offline",
                    (t = this.retrying) == null || t.abort(),
                    this.socket.close()
                }
                shutdown() {
                    this.shared && self.close()
                }
                get reconnectWindow() {
                    const t = Date.now() - this.lastCameOnline < 60 * 1e3;
                    return this.connectionCount === 0 || this.intentionallyDisconnected || t ? 0 : 10 * 1e3
                }
                socketDidOpen() {
                    this.intentionallyDisconnected = !1,
                    this.connectionCount++,
                    this.socket.url = this.getUrlWithPresenceId(),
                    this.sendSubscribe(this.subscriptions.topics())
                }
                socketDidClose(t, n, r) {
                    if (this.redeployEarlyReconnectTimeout !== void 0 && clearTimeout(this.redeployEarlyReconnectTimeout),
                    r === Sr.Reconnect)
                        this.intentionallyDisconnected = !0;
                    else if (r === Sr.Deploy) {
                        this.intentionallyDisconnected = !0;
                        const s = (3 + Math.random() * 22) * 60 * 1e3;
                        this.redeployEarlyReconnectTimeout = setTimeout(()=>{
                            this.intentionallyDisconnected = !0,
                            this.socket.close(1e3, "Alive Redeploy Early Client Reconnect")
                        }
                        , s)
                    }
                }
                socketDidFinish() {
                    this.state !== "offline" && this.reconnect()
                }
                socketDidReceiveMessage(t, n) {
                    const r = JSON.parse(n);
                    switch (r.e) {
                    case "ack":
                        {
                            this.handleAck(r);
                            break
                        }
                    case "msg":
                        {
                            this.handleMessage(r);
                            break
                        }
                    }
                }
                handleAck(t) {
                    for (const n of this.subscriptions.topics())
                        n.offset = t.off
                }
                handleMessage(t) {
                    const n = t.ch
                      , r = this.subscriptions.topic(n);
                    if (!!r) {
                        if (r.offset = t.off,
                        "e"in t.data) {
                            const o = this.presence.handleMessage(n, t.data);
                            this.notifyPresenceChannel(n, o);
                            return
                        }
                        t.data.wait || (t.data.wait = 0),
                        this.notify(this.subscriptions.subscribers(n), {
                            channel: n,
                            type: "message",
                            data: t.data
                        })
                    }
                }
                notifyPresenceChannel(t, n) {
                    var r, o;
                    const s = new Map;
                    for (const i of n) {
                        const {userId: a, metadata: c, presenceKey: l} = i
                          , f = s.get(a) || {
                            userId: a,
                            isOwnUser: a === this.userId,
                            metadata: []
                        };
                        if (l !== this.presenceKey) {
                            for (const p of c) {
                                if (bt in p) {
                                    f.isIdle !== !1 && (f.isIdle = Boolean(p[bt]));
                                    continue
                                }
                                f.metadata.push(p)
                            }
                            s.set(a, f)
                        }
                    }
                    for (const i of this.subscriptions.subscribers(t)) {
                        const a = this.userId
                          , c = Array.from(s.values()).filter(p=>p.userId !== a)
                          , l = (o = (r = s.get(this.userId)) == null ? void 0 : r.metadata) != null ? o : []
                          , f = this.presenceMetadata.getChannelMetadata(t, {
                            subscriber: i,
                            markAllAsLocal: !this.shared
                        });
                        this.notify([i], {
                            channel: t,
                            type: "presence",
                            data: [{
                                userId: a,
                                isOwnUser: !0,
                                metadata: [...l, ...f]
                            }, ...c]
                        })
                    }
                }
                async reconnect() {
                    if (!this.retrying)
                        try {
                            this.retrying = new AbortController;
                            const n = await ec(Ze(()=>Mf(this.refreshUrl), "fn"), 1 / 0, 6e4, this.retrying.signal);
                            n ? (this.url = n,
                            this.socket = this.connect()) : this.shutdown()
                        } catch (t) {
                            if (t.name !== "AbortError")
                                throw t
                        } finally {
                            this.retrying = null
                        }
                }
                getUrlWithPresenceId() {
                    const t = new URL(this.url,self.location.origin);
                    return t.searchParams.set("shared", this.shared.toString()),
                    t.searchParams.set("p", `${this.presenceId}.${this.connectionCount}`),
                    t.toString()
                }
                connect() {
                    const t = new Ea(this.getUrlWithPresenceId(),this,{
                        timeout: 4e3,
                        attempts: 7
                    });
                    return t.open(),
                    t
                }
                sendSubscribe(t) {
                    const n = Array.from(t);
                    for (const r of fo(n, 25)) {
                        const o = {};
                        for (const s of r)
                            yt(s.name) ? o[s.signed] = JSON.stringify(this.presenceMetadata.getChannelMetadata(s.name)) : o[s.signed] = s.offset;
                        this.socket.send(JSON.stringify({
                            subscribe: o
                        }))
                    }
                }
                sendUnsubscribe(t) {
                    const n = Array.from(t, r=>r.signed);
                    for (const r of fo(n, 25))
                        this.socket.send(JSON.stringify({
                            unsubscribe: r
                        }));
                    for (const r of t)
                        yt(r.name) && this.presence.clearChannel(r.name)
                }
            }
            Ze(xf, "AliveSession");
            async function Mf(e) {
                const t = await $f(e);
                return t && t.url && t.token ? qf(t.url, t.token) : null
            }
            Ze(Mf, "fetchRefreshUrl");
            async function $f(e) {
                const t = await fetch(e, {
                    headers: {
                        Accept: "application/json"
                    }
                });
                if (t.ok)
                    return t.json();
                if (t.status === 404)
                    return null;
                throw new Error("fetch error")
            }
            Ze($f, "fetchJSON");
            async function qf(e, t) {
                const n = await fetch(e, {
                    method: "POST",
                    mode: "same-origin",
                    headers: {
                        "Scoped-CSRF-Token": t
                    }
                });
                if (n.ok)
                    return n.text();
                throw new Error("fetch error")
            }
            Ze(qf, "post");
            var xy = Object.defineProperty
              , My = (e,t)=>xy(e, "name", {
                value: t,
                configurable: !0
            });
            const Lr = []
              , $y = 3e4
              , qy = 0;
            let _r = document.hidden, kr;
            function If(e) {
                return e(_r),
                Lr.push(e),
                new tc(()=>{
                    const t = Lr.indexOf(e);
                    t !== -1 && Lr.splice(t, 1)
                }
                )
            }
            My(If, "addIdleStateListener"),
            (()=>{
                document.addEventListener("visibilitychange", ()=>{
                    const e = document.hidden;
                    kr !== void 0 && clearTimeout(kr),
                    kr = setTimeout(()=>{
                        if (e !== _r) {
                            _r = e,
                            kr = void 0;
                            for (const n of Lr)
                                n(_r)
                        }
                    }
                    , e ? $y : qy)
                }
                )
            }
            )();
            var Iy = Object.defineProperty
              , J = (e,t)=>Iy(e, "name", {
                value: t,
                configurable: !0
            });
            function Of() {
                return "SharedWorker"in window && nc("localStorage").getItem("bypassSharedWorker") !== "true"
            }
            J(Of, "isSharedWorkerSupported");
            function Ff() {
                var e, t;
                return (t = (e = document.head.querySelector("link[rel=shared-web-socket-src]")) == null ? void 0 : e.href) != null ? t : null
            }
            J(Ff, "workerSrc");
            function Rf() {
                var e, t;
                return (t = (e = document.head.querySelector("link[rel=shared-web-socket]")) == null ? void 0 : e.href) != null ? t : null
            }
            J(Rf, "socketUrl");
            function Df() {
                var e, t;
                return (t = (e = document.head.querySelector("link[rel=shared-web-socket]")) == null ? void 0 : e.getAttribute("data-refresh-url")) != null ? t : null
            }
            J(Df, "socketRefreshUrl");
            function Hf() {
                var e, t;
                return (t = (e = document.head.querySelector("link[rel=shared-web-socket]")) == null ? void 0 : e.getAttribute("data-session-id")) != null ? t : null
            }
            J(Hf, "sessionIdentifier");
            function Nf(e) {
                return wi(e).map(t=>({
                    subscriber: e,
                    topic: t
                }))
            }
            J(Nf, "subscriptions");
            function wi(e) {
                return (e.getAttribute("data-channel") || "").trim().split(/\s+/).map(jr.parse).filter(Bf)
            }
            J(wi, "channels");
            function Bf(e) {
                return e != null
            }
            J(Bf, "isPresent");
            function ji(e, {channel: t, type: n, data: r}) {
                for (const o of e)
                    o.dispatchEvent(new CustomEvent(`socket:${n}`,{
                        bubbles: !1,
                        cancelable: !1,
                        detail: {
                            name: t,
                            data: r
                        }
                    }))
            }
            J(ji, "notify");
            class Uf {
                constructor(t, n, r, o, s) {
                    this.subscriptions = new yi,
                    this.presenceMetadata = new bi,
                    this.notifyPresenceDebouncedByChannel = new Map,
                    this.notify = s,
                    this.worker = new SharedWorker(t,`github-socket-worker-v2-${o}`),
                    this.worker.port.onmessage = ({data: i})=>this.receive(i),
                    this.worker.port.postMessage({
                        connect: {
                            url: n,
                            refreshUrl: r
                        }
                    })
                }
                subscribe(t) {
                    const n = this.subscriptions.add(...t);
                    n.length && this.worker.port.postMessage({
                        subscribe: n
                    });
                    const r = new Set(n.map(s=>s.name))
                      , o = t.reduce((s,i)=>{
                        const a = i.topic.name;
                        return yt(a) && !r.has(a) && s.add(a),
                        s
                    }
                    , new Set);
                    o.size && this.worker.port.postMessage({
                        requestPresence: Array.from(o)
                    })
                }
                unsubscribeAll(...t) {
                    const n = this.subscriptions.drain(...t);
                    n.length && this.worker.port.postMessage({
                        unsubscribe: n
                    });
                    const r = this.presenceMetadata.removeSubscribers(t);
                    this.sendPresenceMetadataUpdate(r)
                }
                updatePresenceMetadata(t) {
                    const n = new Set;
                    for (const r of t)
                        this.presenceMetadata.setMetadata(r),
                        n.add(r.channelName);
                    this.sendPresenceMetadataUpdate(n)
                }
                sendPresenceMetadataUpdate(t) {
                    if (!t.size)
                        return;
                    const n = [];
                    for (const r of t)
                        n.push({
                            channelName: r,
                            metadata: this.presenceMetadata.getChannelMetadata(r)
                        });
                    this.worker.port.postMessage({
                        updatePresenceMetadata: n
                    })
                }
                online() {
                    this.worker.port.postMessage({
                        online: !0
                    })
                }
                offline() {
                    this.worker.port.postMessage({
                        online: !1
                    })
                }
                hangup() {
                    this.worker.port.postMessage({
                        hangup: !0
                    })
                }
                receive(t) {
                    const {channel: n} = t;
                    if (t.type === "presence") {
                        let r = this.notifyPresenceDebouncedByChannel.get(n);
                        r || (r = Ie((o,s)=>{
                            this.notify(o, s),
                            this.notifyPresenceDebouncedByChannel.delete(n)
                        }
                        , 100),
                        this.notifyPresenceDebouncedByChannel.set(n, r)),
                        r(this.subscriptions.subscribers(n), t);
                        return
                    }
                    this.notify(this.subscriptions.subscribers(n), t)
                }
            }
            J(Uf, "AliveSessionProxy");
            function Wf() {
                const e = Ff();
                if (!e)
                    return;
                const t = Rf();
                if (!t)
                    return;
                const n = Df();
                if (!n)
                    return;
                const r = Hf();
                if (!r)
                    return;
                const s = J(()=>{
                    if (Of())
                        try {
                            return new Uf(e,t,n,r,ji)
                        } catch (l) {}
                    return new xf(t,n,!1,ji)
                }
                , "createSession")()
                  , i = xn(l=>s.subscribe(l.flat()))
                  , a = xn(l=>s.unsubscribeAll(...l))
                  , c = xn(l=>s.updatePresenceMetadata(l));
                m(".js-socket-channel[data-channel]", {
                    subscribe: l=>{
                        const f = Nf(l)
                          , p = f.map(g=>g.topic.name).filter(g=>yt(g));
                        let h = {
                            unsubscribe() {}
                        };
                        if (p.length) {
                            let g, w;
                            const S = J(()=>{
                                const P = [];
                                g && P.push(g),
                                w !== void 0 && P.push({
                                    [bt]: w ? 1 : 0
                                });
                                for (const j of p)
                                    c({
                                        subscriber: l,
                                        channelName: j,
                                        metadata: P
                                    })
                            }
                            , "queueMetadataOrIdleChange");
                            h = re(E(l, "socket:set-presence-metadata", P=>{
                                const {detail: j} = P;
                                g = j,
                                S()
                            }
                            ), If(P=>{
                                !Rt("PRESENCE_IDLE") || (w = P,
                                S())
                            }
                            ))
                        }
                        return i(f),
                        h
                    }
                    ,
                    remove: l=>a(l)
                }),
                window.addEventListener("online", ()=>s.online()),
                window.addEventListener("offline", ()=>s.offline()),
                window.addEventListener("unload", ()=>{
                    "hangup"in s && s.hangup()
                }
                )
            }
            J(Wf, "connect"),
            (async()=>{
                await Nt,
                Wf()
            }
            )();
            var zf = Object.defineProperty
              , Vf = Object.getOwnPropertySymbols
              , Oy = Object.prototype.hasOwnProperty
              , Fy = Object.prototype.propertyIsEnumerable
              , Kf = (e,t,n)=>t in e ? zf(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
              , Ry = (e,t)=>{
                for (var n in t || (t = {}))
                    Oy.call(t, n) && Kf(e, n, t[n]);
                if (Vf)
                    for (var n of Vf(t))
                        Fy.call(t, n) && Kf(e, n, t[n]);
                return e
            }
              , Ei = (e,t)=>zf(e, "name", {
                value: t,
                configurable: !0
            });
            const Xf = new Map;
            function Gf(e, t) {
                const n = [];
                for (const r of e) {
                    const o = Xf.get(r.name);
                    o && o.arrived > t && n.push(o)
                }
                return n
            }
            Ei(Gf, "stale");
            function Jf(e, t) {
                for (const n of e.querySelectorAll(".js-socket-channel[data-channel]"))
                    for (const r of Gf(wi(n), t))
                        n.dispatchEvent(new CustomEvent("socket:message",{
                            bubbles: !1,
                            cancelable: !1,
                            detail: {
                                name: r.name,
                                data: r.data,
                                cached: !0
                            }
                        }))
            }
            Ei(Jf, "dispatch");
            function Yf(e) {
                const {name: t, data: n, cached: r} = e.detail;
                if (r)
                    return;
                const o = {
                    name: t,
                    data: Ry({}, n),
                    arrived: Date.now()
                };
                o.data.wait = 0,
                Xf.set(t, o)
            }
            Ei(Yf, "store"),
            document.addEventListener("socket:message", Yf, {
                capture: !0
            }),
            document.addEventListener("pjax:popstate", function(e) {
                const t = e.target
                  , n = e.detail.cachedAt;
                n && setTimeout(()=>Jf(t, n))
            }),
            m("form.js-auto-replay-enforced-sso-request", {
                constructor: HTMLFormElement,
                initialize(e) {
                    N(e)
                }
            });
            var Dy = Object.defineProperty
              , Hy = (e,t)=>Dy(e, "name", {
                value: t,
                configurable: !0
            });
            function Si(e) {
                const t = document.querySelector(".js-stale-session-flash")
                  , n = t.querySelector(".js-stale-session-flash-signed-in")
                  , r = t.querySelector(".js-stale-session-flash-signed-out");
                t.hidden = !1,
                n.hidden = e === "false",
                r.hidden = e === "true",
                window.addEventListener("popstate", function(o) {
                    o.state && o.state.container != null && location.reload()
                }),
                document.addEventListener("submit", function(o) {
                    o.preventDefault()
                })
            }
            Hy(Si, "sessionChanged");
            let pn;
            if (typeof BroadcastChannel == "function")
                try {
                    pn = new BroadcastChannel("stale-session"),
                    pn.onmessage = e=>{
                        typeof e.data == "string" && Si(e.data)
                    }
                } catch (e) {}
            if (!pn) {
                let e = !1;
                pn = {
                    postMessage(t) {
                        e = !0;
                        try {
                            window.localStorage.setItem("logged-in", t)
                        } finally {
                            e = !1
                        }
                    }
                },
                window.addEventListener("storage", function(t) {
                    if (!e && t.storageArea === window.localStorage && t.key === "logged-in")
                        try {
                            (t.newValue === "true" || t.newValue === "false") && Si(t.newValue)
                        } finally {
                            window.localStorage.removeItem(t.key)
                        }
                })
            }
            const Qf = document.querySelector(".js-stale-session-flash[data-signedin]");
            if (Qf) {
                const e = Qf.getAttribute("data-signedin") || "";
                pn.postMessage(e)
            }
            var Ny = Object.defineProperty
              , vt = (e,t)=>Ny(e, "name", {
                value: t,
                configurable: !0
            });
            function Li(e, t, n) {
                const r = e.getBoundingClientRect().height
                  , o = t.getBoundingClientRect()
                  , s = n.getBoundingClientRect();
                let i = s.top;
                i + o.height + 10 >= r && (i = Math.max(r - o.height - 10, 0));
                let a = s.right;
                n.closest(".js-build-status-to-the-left") != null && (a = Math.max(s.left - o.width - 10, 0)),
                t.style.top = `${i}px`,
                t.style.left = `${a}px`,
                t.style.right = "auto"
            }
            vt(Li, "updateStatusPosition"),
            d("toggle", ".js-build-status .js-dropdown-details", function(e) {
                const t = e.currentTarget
                  , n = t.querySelector(".js-status-dropdown-menu");
                if (!n)
                    return;
                function r() {
                    t.hasAttribute("open") || s()
                }
                vt(r, "closeOnToggle");
                function o(i) {
                    n.contains(i.target) || s()
                }
                vt(o, "closeOnScroll");
                function s() {
                    t.removeAttribute("open"),
                    n.classList.add("d-none"),
                    t.appendChild(n),
                    t.removeEventListener("toggle", r),
                    window.removeEventListener("scroll", o)
                }
                vt(s, "closeStatusPopover"),
                t.addEventListener("toggle", r),
                n.classList.contains("js-close-menu-on-scroll") && window.addEventListener("scroll", o, {
                    capture: !0
                }),
                n.classList.remove("d-none"),
                n.querySelector(".js-details-container").classList.add("open"),
                n.classList.contains("js-append-menu-to-body") && (document.body.appendChild(n),
                Li(document.body, n, t))
            }, {
                capture: !0
            });
            async function _i(e) {
                const t = e.querySelector(".js-dropdown-details")
                  , n = e.querySelector(".js-status-dropdown-menu") || e.closest(".js-status-dropdown-menu");
                if (!(n instanceof HTMLElement))
                    return;
                const r = n.querySelector(".js-status-loader");
                if (!r)
                    return;
                const o = n.querySelector(".js-status-loading")
                  , s = n.querySelector(".js-status-error")
                  , i = r.getAttribute("data-contents-url");
                o.classList.remove("d-none"),
                s.classList.add("d-none");
                let a;
                try {
                    await An(),
                    a = await H(document, i)
                } catch (c) {
                    o.classList.add("d-none"),
                    s.classList.remove("d-none")
                }
                a && (r.replaceWith(a),
                n.querySelector(".js-details-container").classList.add("open"),
                t && n.classList.contains("js-append-menu-to-body") && Li(document.body, n, t))
            }
            vt(_i, "loadStatus"),
            d("click", ".js-status-retry", ({currentTarget: e})=>{
                _i(e)
            }
            );
            function ki(e) {
                const t = e.currentTarget;
                _i(t)
            }
            vt(ki, "onMouseEnter"),
            m(".js-build-status", {
                add(e) {
                    e.addEventListener("mouseenter", ki, {
                        once: !0
                    })
                },
                remove(e) {
                    e.removeEventListener("mouseenter", ki)
                }
            });
            var By = Object.defineProperty
              , Uy = (e,t)=>By(e, "name", {
                value: t,
                configurable: !0
            });
            d("click", "button[data-sudo-required], summary[data-sudo-required]", Ti),
            m("form[data-sudo-required]", {
                constructor: HTMLFormElement,
                subscribe: e=>E(e, "submit", Ti)
            });
            async function Ti(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLElement))
                    return;
                e.stopPropagation(),
                e.preventDefault(),
                await rc() && (t.removeAttribute("data-sudo-required"),
                t instanceof HTMLFormElement ? N(t) : t.click())
            }
            Uy(Ti, "checkSudo");
            var Wy = Object.defineProperty
              , Pe = (e,t)=>Wy(e, "name", {
                value: t,
                configurable: !0
            });
            const Zf = {
                "actor:": "ul.js-user-suggestions",
                "user:": "ul.js-user-suggestions",
                "operation:": "ul.js-operation-suggestions",
                "org:": "ul.js-org-suggestions",
                "action:": "ul.js-action-suggestions",
                "repo:": "ul.js-repo-suggestions",
                "country:": "ul.js-country-suggestions"
            };
            m("text-expander[data-audit-url]", {
                subscribe: e=>re(E(e, "text-expander-change", tm), E(e, "text-expander-value", em))
            });
            function em(e) {
                const t = e.detail;
                if (!Ci(t.key))
                    return;
                const n = t.item.getAttribute("data-value");
                t.value = `${t.key}${n}`
            }
            Pe(em, "onvalue");
            function tm(e) {
                const {key: t, provide: n, text: r} = e.detail;
                if (!Ci(t))
                    return;
                const s = e.target.getAttribute("data-audit-url");
                n(rm(s, t, r))
            }
            Pe(tm, "onchange");
            function nm(e, t) {
                const n = t.toLowerCase();
                return n ? Be(e, Pe(o=>{
                    const s = o.textContent.toLowerCase().trim()
                      , i = Ht(s, n);
                    return i > 0 ? {
                        score: i,
                        text: s
                    } : null
                }
                , "key"), Ue) : e
            }
            Pe(nm, "search");
            const zy = le(e=>[...e.children], {
                hash: e=>e.className
            });
            async function rm(e, t, n) {
                const o = (await Vy(e)).querySelector(om(t));
                if (!o)
                    return {
                        matched: !1
                    };
                const s = nm(zy(o), n).slice(0, 5)
                  , i = o.cloneNode(!1);
                i.innerHTML = "";
                for (const a of s)
                    i.append(a);
                return {
                    fragment: i,
                    matched: s.length > 0
                }
            }
            Pe(rm, "auditMenu");
            function Ci(e) {
                return Object.getOwnPropertyNames(Zf).includes(e)
            }
            Pe(Ci, "isActivationKey");
            function om(e) {
                const t = Zf[e];
                if (!t)
                    throw new Error(`Unknown audit log expander key: ${e}`);
                return t
            }
            Pe(om, "selector");
            async function sm(e) {
                const t = await H(document, e)
                  , n = document.createElement("div");
                return n.append(t),
                n
            }
            Pe(sm, "fetchMenu");
            const Vy = le(sm);
            var Ky = Object.defineProperty
              , je = (e,t)=>Ky(e, "name", {
                value: t,
                configurable: !0
            });
            function im(e) {
                if (e.hasAttribute("data-use-colon-emoji"))
                    return e.getAttribute("data-value");
                const t = e.firstElementChild;
                return t && t.tagName === "G-EMOJI" && !t.firstElementChild ? t.textContent : e.getAttribute("data-value")
            }
            je(im, "getValue");
            function am(e, t) {
                const n = ` ${t.toLowerCase().replace(/_/g, " ")}`;
                return Be(e, je(o=>{
                    const s = o.getAttribute("data-emoji-name")
                      , i = lm(cm(o), n);
                    return i > 0 ? {
                        score: i,
                        text: s
                    } : null
                }
                , "key"), Ue)
            }
            je(am, "search");
            function cm(e) {
                return ` ${e.getAttribute("data-text").trim().toLowerCase().replace(/_/g, " ")}`
            }
            je(cm, "emojiText");
            function lm(e, t) {
                const n = e.indexOf(t);
                return n > -1 ? 1e3 - n : 0
            }
            je(lm, "emojiScore"),
            m("text-expander[data-emoji-url]", {
                subscribe: e=>re(E(e, "text-expander-change", dm), E(e, "text-expander-value", um))
            });
            function um(e) {
                const t = e.detail;
                t.key === ":" && (t.value = im(t.item))
            }
            je(um, "onvalue");
            function dm(e) {
                const {key: t, provide: n, text: r} = e.detail;
                if (t !== ":")
                    return;
                const s = e.target.getAttribute("data-emoji-url");
                n(fm(s, r))
            }
            je(dm, "onchange");
            async function fm(e, t) {
                const [n,r] = await Xy(e)
                  , o = am(r, t).slice(0, 5);
                n.innerHTML = "";
                for (const s of o)
                    n.append(s);
                return {
                    fragment: n,
                    matched: o.length > 0
                }
            }
            je(fm, "emojiMenu");
            async function mm(e) {
                const n = (await H(document, e)).firstElementChild;
                return [n, [...n.children]]
            }
            je(mm, "fetchEmoji");
            const Xy = le(mm);
            var Gy = Object.defineProperty
              , G = (e,t)=>Gy(e, "name", {
                value: t,
                configurable: !0
            });
            function pm(e) {
                return `${e.number} ${e.title.trim().toLowerCase()}`
            }
            G(pm, "asText");
            function hm(e, t) {
                if (!t)
                    return e;
                const n = new RegExp(`\\b${gm(t)}`)
                  , r = /^\d+$/.test(t) ? s=>bm(s, n) : s=>Ht(s, t);
                return Be(e, G(s=>{
                    const i = pm(s)
                      , a = r(i);
                    return a > 0 ? {
                        score: a,
                        text: i
                    } : null
                }
                , "key"), Ue)
            }
            G(hm, "search");
            function gm(e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }
            G(gm, "escapeRegExp");
            function bm(e, t) {
                const n = e.search(t);
                return n > -1 ? 1e3 - n : 0
            }
            G(bm, "issueNumberScore");
            function ym(e, t, n) {
                const r = G(s=>xt`
    <ul role="listbox" class="suggester-container suggester suggestions list-style-none position-absolute">
      ${s.map(o)}
    </ul>
  `, "itemsTemplate")
                  , o = G(s=>{
                    const i = s.type in n ? me(document, n[s.type]) : "";
                    return xt`
      <li class="markdown-title" role="option" id="suggester-issue-${s.id}" data-value="${s.number}">
        <span class="d-inline-block mr-1">${i}</span>
        <small>#${s.number}</small> ${Sa(s.title)}
      </li>
    `
                }
                , "itemTemplate");
                eo(r(e), t)
            }
            G(ym, "renderResults"),
            m("text-expander[data-issue-url]", {
                subscribe: e=>{
                    const t = [E(e, "text-expander-change", wm), E(e, "text-expander-value", vm), E(e, "keydown", Em), E(e, "click", jm)];
                    return re(...t)
                }
            });
            function vm(e) {
                const t = e.detail;
                if (t.key !== "#")
                    return;
                const n = t.item.getAttribute("data-value");
                t.value = `#${n}`
            }
            G(vm, "onvalue");
            function wm(e) {
                const {key: t, provide: n, text: r} = e.detail;
                if (t !== "#")
                    return;
                if (r === "#") {
                    Tr(e.target);
                    return
                }
                const s = e.target.getAttribute("data-issue-url");
                n(Sm(s, r))
            }
            G(wm, "onchange");
            function Tr(e) {
                if (!e)
                    return;
                const t = e.closest("text-expander");
                t && t.dismiss()
            }
            G(Tr, "hideSuggestions");
            function jm(e) {
                Tr(e.target)
            }
            G(jm, "onclick");
            function Em(e) {
                const t = ["ArrowRight", "ArrowLeft"]
                  , {key: n} = e;
                t.indexOf(n) < 0 || Tr(e.target)
            }
            G(Em, "onkeydown");
            async function Sm(e, t) {
                const n = await Jy(e)
                  , r = document.createElement("div")
                  , o = hm(n.suggestions, t).slice(0, 5);
                return ym(o, r, n.icons),
                {
                    fragment: r.firstElementChild,
                    matched: o.length > 0
                }
            }
            G(Sm, "issueMenu");
            const Jy = le(async function(e) {
                const t = await self.fetch(e, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        Accept: "application/json"
                    }
                });
                if (!t.ok) {
                    const n = new Error
                      , r = t.statusText ? ` ${t.statusText}` : "";
                    throw n.message = `HTTP ${t.status}${r}`,
                    n
                }
                return t.json()
            });
            var Yy = Object.defineProperty
              , Y = (e,t)=>Yy(e, "name", {
                value: t,
                configurable: !0
            });
            function Lm(e) {
                return e.description ? `${e.name} ${e.description}`.trim().toLowerCase() : `${e.login} ${e.name}`.trim().toLowerCase()
            }
            Y(Lm, "asText");
            function _m(e, t) {
                if (!t)
                    return e;
                const n = Tm(t);
                return Be(e, Y(o=>{
                    const s = Lm(o)
                      , i = n(s, o.participant);
                    return i > 0 ? {
                        score: i,
                        text: s
                    } : null
                }
                , "key"), Ue)
            }
            Y(_m, "search");
            function km(e, t) {
                const n = Y(o=>xt`
    <ul role="listbox" class="suggester-container suggester suggestions list-style-none position-absolute">
      ${o.map(r)}
    </ul>
  `, "itemsTemplate")
                  , r = Y(o=>{
                    const s = o.type === "user" ? o.login : o.name
                      , i = o.type === "user" ? o.name : o.description;
                    return xt`
      <li role="option" id="suggester-${o.id}-${o.type}-${s}" data-value="${s}">
        <span>${s}</span>
        <small>${i}</small>
      </li>
    `
                }
                , "itemTemplate");
                eo(n(e), t)
            }
            Y(km, "renderResults");
            function Tm(e) {
                if (!e)
                    return ()=>2;
                const t = e.toLowerCase().split("");
                return (n,r)=>{
                    if (!n)
                        return 0;
                    const o = Cm(n, t);
                    if (!o)
                        return 0;
                    const i = e.length / o[1] / (o[0] / 2 + 1);
                    return r ? i + 1 : i
                }
            }
            Y(Tm, "fuzzyScorer");
            function Cm(e, t) {
                let n, r, o, s;
                const i = Am(e, t[0]);
                if (i.length === 0)
                    return null;
                if (t.length === 1)
                    return [i[0], 1, []];
                for (s = null,
                r = 0,
                o = i.length; r < o; r++) {
                    const a = i[r];
                    if (!(n = Pm(e, t, a + 1)))
                        continue;
                    const c = n[n.length - 1] - a;
                    (!s || c < s[1]) && (s = [a, c, n])
                }
                return s
            }
            Y(Cm, "shortestMatch");
            function Am(e, t) {
                let n = 0;
                const r = [];
                for (; (n = e.indexOf(t, n)) > -1; )
                    r.push(n++);
                return r
            }
            Y(Am, "allIndexesOf");
            function Pm(e, t, n) {
                let r = n;
                const o = [];
                for (let s = 1; s < t.length; s += 1) {
                    if (r = e.indexOf(t[s], r),
                    r === -1)
                        return;
                    o.push(r++)
                }
                return o
            }
            Y(Pm, "indexesOfChars"),
            m("text-expander[data-mention-url]", {
                subscribe: e=>re(E(e, "text-expander-change", Mm), E(e, "text-expander-value", xm))
            });
            function xm(e) {
                const t = e.detail;
                if (t.key !== "@")
                    return;
                const n = t.item.getAttribute("data-value");
                t.value = `@${n}`
            }
            Y(xm, "onvalue");
            function Mm(e) {
                const {key: t, provide: n, text: r} = e.detail;
                if (t !== "@" || (r == null ? void 0 : r.split(" ").length) > 1)
                    return;
                const s = e.target.getAttribute("data-mention-url");
                n($m(s, r))
            }
            Y(Mm, "onchange");
            async function $m(e, t) {
                const n = await Qy(e)
                  , r = document.createElement("div")
                  , o = _m(n, t).slice(0, 5);
                return km(o, r),
                {
                    fragment: r.firstElementChild,
                    matched: o.length > 0
                }
            }
            Y($m, "mentionMenu");
            const Qy = le(async function(e) {
                const t = await self.fetch(e, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        Accept: "application/json"
                    }
                });
                if (!t.ok) {
                    const n = new Error
                      , r = t.statusText ? ` ${t.statusText}` : "";
                    throw n.message = `HTTP ${t.status}${r}`,
                    n
                }
                return t.json()
            });
            var Zy = Object.defineProperty
              , $ = (e,t)=>Zy(e, "name", {
                value: t,
                configurable: !0
            });
            const Ai = "/";
            function qm(e, t) {
                const n = t.toLowerCase().trim()
                  , r = $(o=>{
                    const s = (o.getAttribute("data-text") || "").trim().toLowerCase()
                      , i = Ht(s, n);
                    return i > 0 ? {
                        score: i,
                        text: s
                    } : null
                }
                , "key");
                return n ? Be(e, r, Ue) : e
            }
            $(qm, "search"),
            m("slash-command-expander[data-slash-command-url]", {
                subscribe: e=>re(E(e, "text-expander-change", Bm), E(e, "text-expander-value", Im))
            }),
            d("click", ".js-slash-command-toolbar-button", async e=>{
                if (!(e.target instanceof Element))
                    return;
                const t = e.target.closest(".js-previewable-comment-form");
                if (!t)
                    return;
                const n = t.querySelector("textarea.js-comment-field");
                if (!n)
                    return;
                const r = Ai
                  , o = n.selectionEnd || 0
                  , s = n.value.substring(0, o)
                  , i = n.value.substring(o)
                  , a = n.value === "" || s.match(/\s$/) ? "" : " "
                  , c = o + r.length + 1;
                n.value = s + a + r + i,
                n.selectionStart = c,
                n.selectionEnd = c,
                n.focus(),
                v(n, "input")
            }
            );
            async function Im(e) {
                const t = e.detail
                  , {key: n, item: r} = t;
                if (n !== Ai)
                    return;
                const o = r.getAttribute("data-url");
                if (!o)
                    return;
                const s = e.currentTarget
                  , i = r.querySelector(".js-slash-command-suggestion-form");
                if (!i)
                    return;
                const a = i.querySelector(".js-data-url-csrf");
                if (!a)
                    return;
                const c = new FormData(i);
                s.isLoading();
                try {
                    const l = await H(document, o, {
                        method: "PATCH",
                        body: c,
                        headers: {
                            Accept: "text/html",
                            "Scoped-CSRF-Token": a.value
                        }
                    });
                    if (!l)
                        return;
                    Pi(s, l)
                } catch (l) {
                    s.showError()
                }
            }
            $(Im, "onValue");
            function Pi(e, t) {
                var n;
                const r = t.firstElementChild;
                if (!r)
                    return;
                t.children.length > 1 && Nm(t.lastElementChild, e),
                r.hasAttribute("data-reload-suggestions") && (Wm = le(Mi));
                const o = r.getAttribute("data-component-type");
                o === "fill" ? /<\/?[a-z][\s\S]*>/i.test(r.innerHTML) ? e.setValue(r.innerHTML.trim()) : e.setValue(((n = r.textContent) == null ? void 0 : n.trim()) || "") : o === "menu" || o === "error" ? e.setMenu(r.querySelector(".js-slash-command-menu")) : o === "action" ? e.closeMenu() : o === "embedded_form" ? Hm(e, r) : o === "dialog_form" ? Rm(e, r) : o === "modal_form" && Dm(e, r),
                At(we())
            }
            $(Pi, "handleResponse");
            function Om(e) {
                if (!(e.metaKey && e.key === "Enter"))
                    return;
                e.preventDefault(),
                e.stopPropagation();
                const t = e.target
                  , n = t == null ? void 0 : t.form;
                if (!!n)
                    if (n.requestSubmit)
                        n.requestSubmit();
                    else {
                        const r = n.querySelector("[type='submit']");
                        r == null || r.click()
                    }
            }
            $(Om, "submitOnCommandEnter");
            function xi(e) {
                const t = new FormData(e);
                let n = "";
                for (const r of t)
                    n = n + r[0],
                    n = n + r[1].toString();
                return n
            }
            $(xi, "getFormContents");
            function Cr(e) {
                let t = !1;
                for (const n of e.querySelectorAll("select,input,textarea")) {
                    const r = n;
                    r.type !== "hidden" && (t || (r.focus(),
                    t = !0),
                    r.addEventListener("keydown", Om))
                }
            }
            $(Cr, "focusFirstFormInput");
            function Ar(e, t) {
                const n = e.querySelectorAll("[data-close-dialog]");
                for (const r of n)
                    r.addEventListener("click", o=>{
                        o.preventDefault(),
                        Pt(we(), {
                            selector: ".js-session-resumable"
                        }),
                        t()
                    }
                    )
            }
            $(Ar, "hookUpCancelActionListeners");
            function Pr(e, t, n, r) {
                const o = xi(e);
                t.addEventListener("keydown", s=>{
                    if (s.key === "Escape") {
                        const i = "Are you sure you want to dismiss the form?"
                          , a = xi(e);
                        (o === a || confirm(i)) && (Pt(we(), {
                            selector: ".js-session-resumable"
                        }),
                        r(),
                        n && n.focus())
                    }
                }
                )
            }
            $(Pr, "addDismissAlertListener");
            function xr(e, t, n) {
                e.addEventListener("submit", async r=>{
                    r.preventDefault();
                    const o = r.target
                      , s = o.querySelector(".js-data-url-csrf");
                    if (!s)
                        return;
                    const i = o.getAttribute("action");
                    if (!i)
                        return;
                    Fm(t);
                    const a = new FormData(o)
                      , c = await H(document, i, {
                        method: "PATCH",
                        body: a,
                        headers: {
                            Accept: "text/html",
                            "Scoped-CSRF-Token": s.value
                        }
                    });
                    n(),
                    !!c && Pi(t, c)
                }
                )
            }
            $(xr, "addSubmitButtonListener");
            function Fm(e) {
                const t = e.closest(".js-slash-command-surface")
                  , n = e.closest("form")
                  , r = t || n;
                if (r)
                    for (const o of r.querySelectorAll("[data-disable-with][disabled]"))
                        o.disabled = !1
            }
            $(Fm, "reenableParentFormButtons");
            function Rm(e, t) {
                const n = t.querySelector(".js-slash-command-menu");
                e.setMenu(n, !0);
                const r = n.querySelector("form")
                  , o = document.activeElement;
                Cr(r);
                const s = $(()=>{
                    e.closeMenu()
                }
                , "closeForm");
                Pr(r, r, o, s),
                Ar(r, s),
                xr(r, e, s)
            }
            $(Rm, "handleDialogForm");
            function Dm(e, t) {
                const n = e.closest("form");
                if (!n)
                    return;
                const r = t.querySelector('[data-component="form"]');
                n.insertAdjacentElement("afterend", r);
                const o = document.activeElement;
                Cr(r);
                const s = $(()=>{
                    n.hidden = !1,
                    r.remove()
                }
                , "closeForm");
                Ar(r, s);
                const i = r.getElementsByTagName("form")[0];
                Pr(i, r, o, s),
                xr(r, e, s)
            }
            $(Dm, "handleModalForm");
            function Hm(e, t) {
                const n = e.closest(".js-slash-command-surface")
                  , r = e.closest("form")
                  , o = n || r;
                if (!o)
                    return;
                o.hidden = !0;
                const s = t.querySelector('[data-component="form"]');
                o.insertAdjacentElement("afterend", s);
                const i = document.activeElement;
                Cr(s);
                const a = $(()=>{
                    o.hidden = !1,
                    s.remove()
                }
                , "closeForm");
                Ar(s, a);
                const c = s.getElementsByTagName("form")[0];
                Pr(c, s, i, a),
                xr(s, e, a)
            }
            $(Hm, "handleEmbeddedForm");
            const ev = 5e3;
            function Nm(e, t) {
                var n, r;
                const o = (n = t.parentElement) == null ? void 0 : n.parentElement;
                if (!o)
                    return;
                const s = o.querySelector(".drag-and-drop .default");
                let i = !1;
                s && (i = s.hidden,
                s.hidden = !0),
                (r = s == null ? void 0 : s.parentElement) == null || r.prepend(e),
                setTimeout(()=>{
                    s && (s.hidden = i),
                    e.remove()
                }
                , ev)
            }
            $(Nm, "showFooter");
            function Bm(e) {
                const {key: t, provide: n, text: r} = e.detail;
                if (t !== Ai)
                    return;
                const o = e.target;
                o.isLoading();
                const s = o.getAttribute("data-slash-command-url");
                n(Um(s, r, o))
            }
            $(Bm, "onChange");
            async function Um(e, t, n) {
                try {
                    const [r,o] = await Wm(e)
                      , s = r.querySelector(".js-slash-command-menu-items")
                      , i = qm(o, t);
                    if (s) {
                        s.innerHTML = "";
                        for (const a of o)
                            if (a.classList.contains("js-group-divider")) {
                                const c = a.getAttribute("data-group-id");
                                i.filter(f=>f.getAttribute("data-group-id") === c).length > 0 && s.append(a)
                            } else
                                i.includes(a) && s.append(a)
                    }
                    return {
                        fragment: r,
                        matched: i.length > 0
                    }
                } catch (r) {
                    throw n.showError(),
                    new Error(r)
                }
            }
            $(Um, "slashCommandMenu");
            async function Mi(e) {
                const n = (await H(document, e)).firstElementChild
                  , r = n.querySelectorAll(".js-slash-command-menu-items li");
                return [n, [...r]]
            }
            $(Mi, "fetchSlashCommands");
            let Wm = le(Mi);
            var tv = Object.defineProperty
              , nv = (e,t)=>tv(e, "name", {
                value: t,
                configurable: !0
            });
            function zm(e, t) {
                const n = e.closest(".js-survey-question-form")
                  , r = n.querySelector("input.js-survey-other-text")
                  , o = t && !n.classList.contains("is-other-selected");
                n.classList.toggle("is-other-selected", o),
                r.hidden = !t,
                o ? (r.required = !0,
                r.focus()) : r.required = !1,
                v(r, "change")
            }
            nv(zm, "handleOther"),
            d("change", "input.js-survey-radio", function({currentTarget: e}) {
                zm(e, e.classList.contains("js-survey-radio-other"))
            }),
            d("change", "input.js-survey-checkbox-enable-submit", function({currentTarget: e}) {
                var t;
                const n = e.checked
                  , r = (t = e.closest("form")) == null ? void 0 : t.querySelector("button[type=submit]");
                r.disabled = !n
            }),
            d("change", "input.js-survey-contact-checkbox", function(e) {
                const t = e.currentTarget
                  , r = t.closest(".js-survey-question-form").querySelector(".js-survey-contact-checkbox-hidden");
                t.checked ? r.setAttribute("disabled", "true") : r.removeAttribute("disabled")
            }),
            d("details-menu-selected", ".js-sync-select-menu-text", function(e) {
                const t = document.querySelector(".js-sync-select-menu-button")
                  , n = e.detail.relatedTarget.querySelector("span[data-menu-button-text]").textContent;
                t.textContent = n,
                t.focus()
            }, {
                capture: !0
            }),
            d("click", 'tab-container [role="tab"]', function(e) {
                const {currentTarget: t} = e
                  , r = t.closest("tab-container").querySelector(".js-filterable-field, [data-filter-placeholder-input]");
                if (r instanceof HTMLInputElement) {
                    const o = t.getAttribute("data-filter-placeholder");
                    o && r.setAttribute("placeholder", o),
                    r.focus()
                }
            }),
            d("tab-container-changed", "tab-container", function(e) {
                const t = e.detail.relatedTarget
                  , n = t.getAttribute("data-fragment-url")
                  , r = t.querySelector("include-fragment");
                n && r && !r.hasAttribute("src") && (r.src = n)
            }),
            document.addEventListener("keydown", e=>{
                if (e.key !== "Escape" || e.target !== document.body)
                    return;
                const t = document.querySelector(".js-targetable-element:target");
                !t || mo(t, ()=>{
                    window.location.hash = "",
                    window.history.replaceState(null, "", window.location.pathname + window.location.search)
                }
                )
            }
            ),
            document.addEventListener("click", e=>{
                const t = document.querySelector(".js-targetable-element:target");
                !t || e.target instanceof HTMLAnchorElement || e.target instanceof HTMLElement && (t.contains(e.target) || mo(t, ()=>{
                    window.location.hash = "",
                    window.history.replaceState(null, "", window.location.pathname + window.location.search)
                }
                ))
            }
            );
            var rv = Object.defineProperty
              , Mr = (e,t)=>rv(e, "name", {
                value: t,
                configurable: !0
            });
            async function Vm(e) {
                const t = e.currentTarget;
                if (Xm(t)) {
                    t.classList.remove("tooltipped");
                    return
                }
                const n = t.getAttribute("data-url");
                if (!n)
                    return;
                const r = await fetch(n, {
                    headers: {
                        Accept: "application/json"
                    }
                });
                if (!r.ok)
                    return;
                const o = await r.json()
                  , s = t.getAttribute("data-id")
                  , i = document.querySelectorAll(`.js-team-mention[data-id='${s}']`);
                for (const a of i)
                    a.removeAttribute("data-url");
                try {
                    o.total === 0 ? o.members.push("This team has no members") : o.total > o.members.length && o.members.push(`${o.total - o.members.length} more`),
                    $i(i, Km(o.members))
                } catch (a) {
                    const c = a.response ? a.response.status : 500
                      , l = t.getAttribute(c === 404 ? "data-permission-text" : "data-error-text");
                    $i(i, l)
                }
            }
            Mr(Vm, "members");
            function $i(e, t) {
                for (const n of e)
                    n instanceof HTMLElement && (n.setAttribute("aria-label", t),
                    n.classList.add("tooltipped", "tooltipped-s", "tooltipped-multiline"))
            }
            Mr($i, "tip");
            function Km(e) {
                if ("ListFormat"in Intl)
                    return new Intl.ListFormat().format(e);
                if (e.length === 0)
                    return "";
                if (e.length === 1)
                    return e[0];
                if (e.length === 2)
                    return e.join(" and ");
                {
                    const t = e[e.length - 1];
                    return e.slice(0, -1).concat(`and ${t}`).join(", ")
                }
            }
            Mr(Km, "sentence");
            function Xm(e) {
                return !!e.getAttribute("data-hovercard-url") && !!e.closest("[data-team-hovercards-enabled]")
            }
            Mr(Xm, "teamHovercardEnabled"),
            m(".js-team-mention", function(e) {
                e.addEventListener("mouseenter", Vm)
            });
            var Gm = Object.defineProperty
              , ov = Object.getOwnPropertyDescriptor
              , sv = (e,t)=>Gm(e, "name", {
                value: t,
                configurable: !0
            })
              , $r = (e,t,n,r)=>{
                for (var o = r > 1 ? void 0 : r ? ov(t, n) : t, s = e.length - 1, i; s >= 0; s--)
                    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                return r && o && Gm(t, n, o),
                o
            }
            ;
            let wt = class extends HTMLElement {
                acceptSuggestion() {
                    var e;
                    ((e = this.suggestion) == null ? void 0 : e.textContent) && (this.input.value = this.suggestion.textContent,
                    this.input.dispatchEvent(new Event("input")),
                    this.suggestionContainer && (this.suggestionContainer.hidden = !0),
                    this.input.focus())
                }
            }
            ;
            sv(wt, "TextSuggesterElement"),
            $r([y], wt.prototype, "input", 2),
            $r([y], wt.prototype, "suggestionContainer", 2),
            $r([y], wt.prototype, "suggestion", 2),
            wt = $r([q], wt);
            var iv = Object.defineProperty
              , qr = (e,t)=>iv(e, "name", {
                value: t,
                configurable: !0
            });
            function Jm() {
                const e = document.querySelector(".js-timeline-marker");
                return e != null ? e.getAttribute("data-last-modified") : null
            }
            qr(Jm, "getTimelineLastModified");
            function qi(e) {
                if (Qm(e) || Ym(e))
                    return;
                const t = Jm();
                t && e.headers.set("X-Timeline-Last-Modified", t)
            }
            qr(qi, "addTimelineLastModifiedHeader");
            function Ym(e) {
                return e.headers.get("X-PJAX") === "true"
            }
            qr(Ym, "isPjax");
            function Qm(e) {
                let t;
                try {
                    t = new URL(e.url)
                } catch (n) {
                    return !0
                }
                return t.host !== window.location.host
            }
            qr(Qm, "isCrossDomain"),
            A(".js-needs-timeline-marker-header", function(e, t, n) {
                qi(n)
            }),
            d("deprecatedAjaxSend", "[data-remote]", function(e) {
                const {request: t} = e.detail;
                qi(t)
            });
            var av = Object.defineProperty
              , Ee = (e,t)=>av(e, "name", {
                value: t,
                configurable: !0
            });
            const Zm = 5e3
              , cv = ".js-comment-body img"
              , lv = ".js-comment-body video";
            Ot(function({target: e}) {
                const t = Or();
                if (t && !e) {
                    const n = document.querySelector("#js-timeline-progressive-loader");
                    n && Ii(t, n)
                }
            }),
            m(".js-timeline-progressive-focus-container", function(e) {
                const t = Or();
                if (!t)
                    return;
                const n = document.getElementById(t);
                n && e.contains(n) && Ir(n)
            }),
            m("#js-discussions-timeline-anchor-loader", {
                constructor: HTMLElement,
                add: e=>{
                    if (document.querySelector("#js-timeline-progressive-loader"))
                        return;
                    const n = Or();
                    if (!n)
                        return;
                    document.getElementById(n) || Ii(n, e)
                }
            });
            async function ep() {
                const e = document.querySelectorAll(lv)
                  , t = Array.from(e).map(n=>new Promise(r=>{
                    if (n.readyState >= n.HAVE_METADATA)
                        r(n);
                    else {
                        const o = setTimeout(()=>r(n), Zm)
                          , s = Ee(()=>{
                            clearTimeout(o),
                            r(n)
                        }
                        , "done");
                        n.addEventListener("loadeddata", ()=>{
                            n.readyState >= n.HAVE_METADATA && s()
                        }
                        ),
                        n.addEventListener("error", ()=>s())
                    }
                }
                ));
                return Promise.all(t)
            }
            Ee(ep, "videosReady");
            async function tp() {
                const e = document.querySelectorAll(cv)
                  , t = Array.from(e).map(n=>{
                    new Promise(r=>{
                        if (n.complete)
                            r(n);
                        else {
                            const o = setTimeout(()=>r(n), Zm)
                              , s = Ee(()=>{
                                clearTimeout(o),
                                r(n)
                            }
                            , "done");
                            n.addEventListener("load", ()=>s()),
                            n.addEventListener("error", ()=>s())
                        }
                    }
                    )
                }
                );
                return Promise.all(t)
            }
            Ee(tp, "imagesReady");
            async function np() {
                return Promise.all([ep(), tp()])
            }
            Ee(np, "mediaLoaded");
            async function Ir(e) {
                await np(),
                rp(e);
                const t = e.querySelector(`[href='#${e.id}']`);
                t && t.click()
            }
            Ee(Ir, "focusElement");
            async function Ii(e, t) {
                if (!t)
                    return;
                const n = t.getAttribute("data-timeline-item-src");
                if (!n)
                    return;
                const r = new URL(n,window.location.origin)
                  , o = new URLSearchParams(r.search.slice(1));
                o.append("anchor", e),
                r.search = o.toString();
                let s;
                try {
                    s = await H(document, r.toString())
                } catch (l) {
                    return
                }
                const i = s.querySelector(".js-timeline-item");
                if (!i)
                    return;
                const a = i.getAttribute("data-gid");
                if (!a)
                    return;
                const c = document.querySelector(`.js-timeline-item[data-gid='${a}']`);
                if (c) {
                    c.replaceWith(i);
                    const l = document.getElementById(e);
                    l && await Ir(l)
                } else {
                    const l = document.getElementById("js-progressive-timeline-item-container");
                    l && l.replaceWith(s);
                    const f = document.getElementById(e);
                    f && await Ir(f)
                }
            }
            Ee(Ii, "loadElement");
            function rp(e) {
                const t = e.closest("details, .js-details-container");
                !t || (t.nodeName === "DETAILS" ? t.setAttribute("open", "open") : oc(t) || po(t))
            }
            Ee(rp, "expandDetailsIfPresent");
            function Or() {
                return window.location.hash.slice(1)
            }
            Ee(Or, "urlAnchor");
            var uv = Object.defineProperty
              , op = (e,t)=>uv(e, "name", {
                value: t,
                configurable: !0
            });
            m(".js-discussion", sp);
            function sp() {
                let e = new WeakSet;
                t(),
                document.addEventListener("pjax:end", t),
                m(".js-timeline-item", n=>{
                    n instanceof HTMLElement && (e.has(n) || De(n))
                }
                );
                function t() {
                    e = new WeakSet(document.querySelectorAll(".js-timeline-item"))
                }
                op(t, "setExistingTimelineItems")
            }
            op(sp, "announceTimelineEvents");
            var dv = Object.defineProperty
              , Oi = (e,t)=>dv(e, "name", {
                value: t,
                configurable: !0
            });
            function jt(e) {
                const {name: t, value: n} = e
                  , r = {
                    name: window.location.href
                };
                switch (t) {
                case "CLS":
                    r.cls = n;
                    break;
                case "FCP":
                    r.fcp = n;
                    break;
                case "FID":
                    r.fid = n;
                    break;
                case "LCP":
                    r.lcp = n;
                    break;
                case "TTFB":
                    r.ttfb = n;
                    break
                }
                pe({
                    webVitalTimings: [r]
                })
            }
            Oi(jt, "sendVitals");
            function ip() {
                return !!(window.performance && window.performance.timing && window.performance.getEntriesByType)
            }
            Oi(ip, "isTimingSuppported");
            async function ap() {
                if (!ip())
                    return;
                await Ft,
                await new Promise(n=>setTimeout(n));
                const e = window.performance.getEntriesByType("resource");
                e.length && pe({
                    resourceTimings: e
                });
                const t = window.performance.getEntriesByType("navigation");
                t.length && pe({
                    navigationTimings: t
                })
            }
            Oi(ap, "sendTimingResults"),
            ap(),
            La(jt),
            _a(jt),
            ka(jt),
            Ta(jt),
            Ca(jt),
            d("click", ".js-toggler-container .js-toggler-target", function(e) {
                if (e.button !== 0)
                    return;
                const t = e.currentTarget.closest(".js-toggler-container");
                t && t.classList.toggle("on")
            }),
            A(".js-toggler-container", async(e,t)=>{
                e.classList.remove("success", "error"),
                e.classList.add("loading");
                try {
                    await t.text(),
                    e.classList.add("success")
                } catch (n) {
                    e.classList.add("error")
                } finally {
                    e.classList.remove("loading")
                }
            }
            );
            var cp = Object.defineProperty
              , fv = Object.defineProperties
              , mv = Object.getOwnPropertyDescriptors
              , lp = Object.getOwnPropertySymbols
              , pv = Object.prototype.hasOwnProperty
              , hv = Object.prototype.propertyIsEnumerable
              , up = (e,t,n)=>t in e ? cp(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
              , gv = (e,t)=>{
                for (var n in t || (t = {}))
                    pv.call(t, n) && up(e, n, t[n]);
                if (lp)
                    for (var n of lp(t))
                        hv.call(t, n) && up(e, n, t[n]);
                return e
            }
              , bv = (e,t)=>fv(e, mv(t))
              , et = (e,t)=>cp(e, "name", {
                value: t,
                configurable: !0
            });
            const yv = {
                "outside-top": ["outside-bottom", "outside-right", "outside-left", "outside-bottom"],
                "outside-bottom": ["outside-top", "outside-right", "outside-left", "outside-bottom"],
                "outside-left": ["outside-right", "outside-bottom", "outside-top", "outside-bottom"],
                "outside-right": ["outside-left", "outside-bottom", "outside-top", "outside-bottom"]
            };
            function dp(e, t, n={}) {
                const r = fp(e)
                  , o = mp(r)
                  , s = getComputedStyle(r)
                  , i = r.getBoundingClientRect()
                  , [a,c] = [s.borderTopWidth, s.borderLeftWidth].map(f=>parseInt(f, 10) || 0)
                  , l = {
                    top: i.top + a,
                    left: i.left + c
                };
                return hp(o, l, e.getBoundingClientRect(), t instanceof Element ? t.getBoundingClientRect() : t, pp(n))
            }
            et(dp, "getAnchoredPosition");
            function fp(e) {
                let t = e.parentNode;
                for (; t !== null; ) {
                    if (t instanceof HTMLElement && getComputedStyle(t).position !== "static")
                        return t;
                    t = t.parentNode
                }
                return document.body
            }
            et(fp, "getPositionedParent");
            function mp(e) {
                let t = e;
                for (; t !== null && !(t === document.body || getComputedStyle(t).overflow !== "visible"); )
                    t = t.parentNode;
                const n = t === document.body || !(t instanceof HTMLElement) ? document.body : t
                  , r = n.getBoundingClientRect()
                  , o = getComputedStyle(n)
                  , [s,i,a,c] = [o.borderTopWidth, o.borderLeftWidth, o.borderRightWidth, o.borderBottomWidth].map(l=>parseInt(l, 10) || 0);
                return {
                    top: r.top + s,
                    left: r.left + i,
                    width: r.width - a - i,
                    height: Math.max(r.height - s - c, n === document.body ? window.innerHeight : -1 / 0)
                }
            }
            et(mp, "getClippingRect");
            const hn = {
                side: "outside-bottom",
                align: "start",
                anchorOffset: 4,
                alignmentOffset: 4,
                allowOutOfBounds: !1
            };
            function pp(e={}) {
                var t, n, r, o, s;
                const i = (t = e.side) != null ? t : hn.side
                  , a = (n = e.align) != null ? n : hn.align;
                return {
                    side: i,
                    align: a,
                    anchorOffset: (r = e.anchorOffset) != null ? r : i === "inside-center" ? 0 : hn.anchorOffset,
                    alignmentOffset: (o = e.alignmentOffset) != null ? o : a !== "center" && i.startsWith("inside") ? hn.alignmentOffset : 0,
                    allowOutOfBounds: (s = e.allowOutOfBounds) != null ? s : hn.allowOutOfBounds
                }
            }
            et(pp, "getDefaultSettings");
            function hp(e, t, n, r, {side: o, align: s, allowOutOfBounds: i, anchorOffset: a, alignmentOffset: c}) {
                const l = {
                    top: e.top - t.top,
                    left: e.left - t.left,
                    width: e.width,
                    height: e.height
                };
                let f = Fi(n, r, o, s, a, c)
                  , p = o;
                if (f.top -= t.top,
                f.left -= t.left,
                !i) {
                    const h = yv[o];
                    let g = 0;
                    if (h) {
                        let w = o;
                        for (; g < h.length && gp(w, f, l, n); ) {
                            const S = h[g++];
                            w = S,
                            f = Fi(n, r, S, s, a, c),
                            f.top -= t.top,
                            f.left -= t.left,
                            p = S
                        }
                    }
                    f.top < l.top && (f.top = l.top),
                    f.left < l.left && (f.left = l.left),
                    f.left + n.width > e.width + l.left && (f.left = e.width + l.left - n.width),
                    h && g < h.length && f.top + n.height > e.height + l.top && (f.top = e.height + l.top - n.height)
                }
                return bv(gv({}, f), {
                    anchorSide: p
                })
            }
            et(hp, "pureCalculateAnchoredPosition");
            function Fi(e, t, n, r, o, s) {
                const i = t.left + t.width
                  , a = t.top + t.height;
                let c = -1
                  , l = -1;
                return n === "outside-top" ? c = t.top - o - e.height : n === "outside-bottom" ? c = a + o : n === "outside-left" ? l = t.left - o - e.width : n === "outside-right" && (l = i + o),
                (n === "outside-top" || n === "outside-bottom") && (r === "start" ? l = t.left + s : r === "center" ? l = t.left - (e.width - t.width) / 2 + s : l = i - e.width - s),
                (n === "outside-left" || n === "outside-right") && (r === "start" ? c = t.top + s : r === "center" ? c = t.top - (e.height - t.height) / 2 + s : c = a - e.height - s),
                n === "inside-top" ? c = t.top + o : n === "inside-bottom" ? c = a - o - e.height : n === "inside-left" ? l = t.left + o : n === "inside-right" ? l = i - o - e.width : n === "inside-center" && (l = (i + t.left) / 2 - e.width / 2 + o),
                n === "inside-top" || n === "inside-bottom" ? r === "start" ? l = t.left + s : r === "center" ? l = t.left - (e.width - t.width) / 2 + s : l = i - e.width - s : (n === "inside-left" || n === "inside-right" || n === "inside-center") && (r === "start" ? c = t.top + s : r === "center" ? c = t.top - (e.height - t.height) / 2 + s : c = a - e.height - s),
                {
                    top: c,
                    left: l
                }
            }
            et(Fi, "calculatePosition");
            function gp(e, t, n, r) {
                return e === "outside-top" || e === "outside-bottom" ? t.top < n.top || t.top + r.height > n.height + n.top : t.left < n.left || t.left + r.width > n.width + n.left
            }
            et(gp, "shouldRecalculatePosition");
            var vv = Object.defineProperty
              , ee = (e,t)=>vv(e, "name", {
                value: t,
                configurable: !0
            });
            const Ri = "hx_tooltip-open"
              , Fr = "hx_tooltip"
              , Rr = 6
              , wv = {
                n: "hx_tooltip-n",
                s: "hx_tooltip-s",
                e: "hx_tooltip-e",
                w: "hx_tooltip-w",
                ne: "hx_tooltip-ne",
                se: "hx_tooltip-se",
                nw: "hx_tooltip-nw",
                sw: "hx_tooltip-sw"
            };
            function bp(e) {
                const t = e.getAttribute("data-tooltip-description")
                  , n = e.getAttribute("data-tooltip-label");
                if (!(t || n))
                    return;
                const r = document.createElement("p");
                r.setAttribute("role", "tooltip"),
                r.className = Fr,
                r.hidden = !0;
                const o = vp();
                if (r.setAttribute("id", o),
                t) {
                    let s = e.getAttribute("aria-describedby");
                    s ? s = `${s} ${o}` : s = o,
                    e.setAttribute("aria-describedby", s),
                    r.textContent = t
                } else
                    n && (e.setAttribute("aria-labelledby", o),
                    r.textContent = n);
                e.after(r),
                e.addEventListener("mouseenter", ()=>{
                    r.classList.contains(Ri) || Di(e, r)
                }
                ),
                r.addEventListener("mouseleave", s=>{
                    s.relatedTarget !== e && gn(r)
                }
                ),
                e.addEventListener("mouseleave", s=>{
                    s.relatedTarget !== r && gn(r)
                }
                ),
                e.addEventListener("focus", ()=>{
                    Di(e, r)
                }
                ),
                e.addEventListener("blur", ()=>{
                    gn(r)
                }
                ),
                document.addEventListener("keydown", s=>{
                    yp(s, r)
                }
                )
            }
            ee(bp, "install");
            function yp(e, t) {
                (e.key === "Escape" || e.key === "Esc") && t.classList.contains(Ri) && gn(t)
            }
            ee(yp, "globalEscape");
            function vp() {
                return `tooltip-${new Date().getTime().toString()}-${(Math.random() * 1e4).toFixed(0)}`
            }
            ee(vp, "generateTooltipId");
            function gn(e) {
                e.className = Fr,
                e.hidden = !0
            }
            ee(gn, "closeTooltip");
            function Di(e, t) {
                for (const n of document.querySelectorAll("[role=tooltip]"))
                    n.hidden = !0,
                    n.className = Fr;
                t.hidden = !1,
                _p(t, e),
                t.classList.add(Ri)
            }
            ee(Di, "showTooltip");
            function wp(e) {
                return e === "ne" || e === "se" ? "start" : e === "nw" || e === "sw" ? "end" : "center"
            }
            ee(wp, "getAlign");
            function jp(e) {
                return e === "ne" || e === "n" || e === "nw" ? "outside-top" : e === "sw" || e === "s" || e === "se" ? "outside-bottom" : e === "e" ? "outside-right" : "outside-left"
            }
            ee(jp, "getAnchorSide");
            function Ep(e, t) {
                const n = e.getBoundingClientRect()
                  , r = t.getBoundingClientRect()
                  , o = n.width
                  , s = n.left + o / 2
                  , i = r.x + r.width / 2
                  , a = Math.abs(s - i)
                  , c = Math.abs(n.left - r.x)
                  , l = Math.abs(n.left + o - r.right)
                  , f = Math.min(a, c, l);
                return f === a ? "center" : f === l ? "end" : "start"
            }
            ee(Ep, "getNewAlign");
            function Sp(e, t) {
                return t === "outside-top" ? e === "center" ? "n" : e === "start" ? "ne" : "nw" : t === "outside-bottom" ? e === "center" ? "s" : e === "start" ? "se" : "sw" : t === "outside-left" ? "w" : "e"
            }
            ee(Sp, "getDirection");
            function Lp(e, t, n, r) {
                r === "s" || r === "sw" || r === "se" ? (e.style.top = `${t + Rr}px`,
                e.style.left = `${n}px`) : r === "n" || r === "nw" || r === "ne" ? (e.style.top = `${t - Rr}px`,
                e.style.left = `${n}px`) : r === "w" ? (e.style.top = `${t}px`,
                e.style.left = `${n - Rr}px`) : (e.style.top = `${t}px`,
                e.style.left = `${n + Rr}px`),
                e.classList.add(wv[r])
            }
            ee(Lp, "setTooltipPosition");
            function _p(e, t) {
                e.classList.add(Fr);
                const n = t.getAttribute("data-tooltip-direction") || "s"
                  , r = wp(n)
                  , o = {
                    side: jp(n),
                    align: r
                }
                  , {top: s, left: i, anchorSide: a} = dp(e, t, o);
                e.style.top = `${s}px`,
                e.style.left = `${i}px`;
                const c = Ep(e, t)
                  , l = Sp(c, a);
                Lp(e, s, i, l)
            }
            ee(_p, "positionTooltip");
            function kp(e) {
                const t = /^button$|^a$|^input$|^summary$|^md-/.test(e.tagName.toLowerCase())
                  , n = e.getAttribute("role") === "button";
                return t || n
            }
            ee(kp, "isAllowedTooltip"),
            m("[data-tooltip-description], [data-tooltip-label]", {
                constructor: HTMLElement,
                add(e) {
                    kp(e) && bp(e)
                }
            }),
            window.requestIdleCallback(()=>{
                const e = sc();
                e && hc("tz", encodeURIComponent(e))
            }
            );
            var Tp = Object.defineProperty, jv = Object.getOwnPropertyDescriptor, Hi = (e,t)=>Tp(e, "name", {
                value: t,
                configurable: !0
            }), B = (e,t,n,r)=>{
                for (var o = r > 1 ? void 0 : r ? jv(t, n) : t, s = e.length - 1, i; s >= 0; s--)
                    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                return r && o && Tp(t, n, o),
                o
            }
            , z;
            (function(e) {
                e.Initializing = "initializing",
                e.Unsupported = "unsupported",
                e.Ready = "ready",
                e.Waiting = "waiting",
                e.Error = "error",
                e.Submitting = "submitting"
            }
            )(z || (z = {}));
            let fe = class extends HTMLElement {
                constructor() {
                    super(...arguments);
                    this.state = z.Initializing,
                    this.json = "",
                    this.autofocusWhenReady = !1,
                    this.hasErrored = !1
                }
                connectedCallback() {
                    this.originalButtonText = this.button.textContent,
                    this.setState(ic() ? z.Ready : z.Unsupported)
                }
                setState(e) {
                    this.button.textContent = this.hasErrored ? this.button.getAttribute("data-retry-message") : this.originalButtonText,
                    this.button.disabled = !1,
                    this.button.hidden = !1;
                    for (const t of this.messages)
                        t.hidden = !0;
                    switch (e) {
                    case z.Initializing:
                        this.button.disabled = !0;
                        break;
                    case z.Unsupported:
                        this.button.disabled = !0,
                        this.unsupportedMessage.hidden = !1;
                        break;
                    case z.Ready:
                        this.autofocusWhenReady && this.button.focus();
                        break;
                    case z.Waiting:
                        this.waitingMessage.hidden = !1,
                        this.button.hidden = !0;
                        break;
                    case z.Error:
                        this.errorMessage.hidden = !1;
                        break;
                    case z.Submitting:
                        this.button.textContent = "Verifying\u2026",
                        this.button.disabled = !0;
                        break;
                    default:
                        throw new Error("invalid state")
                    }
                    this.state = e
                }
                async prompt(e) {
                    e.preventDefault(),
                    this.dispatchEvent(new CustomEvent("webauthn-get-prompt"));
                    try {
                        this.setState(z.Waiting);
                        const t = JSON.parse(this.json)
                          , n = await ac(t);
                        this.setState(z.Submitting);
                        const r = this.closest(".js-webauthn-form")
                          , o = r.querySelector(".js-webauthn-response");
                        o.value = JSON.stringify(n),
                        N(r)
                    } catch (t) {
                        throw this.hasErrored = !0,
                        this.setState(z.Error),
                        t
                    }
                }
            }
            ;
            Hi(fe, "WebauthnGetElement"),
            B([y], fe.prototype, "button", 2),
            B([te], fe.prototype, "messages", 2),
            B([y], fe.prototype, "unsupportedMessage", 2),
            B([y], fe.prototype, "waitingMessage", 2),
            B([y], fe.prototype, "errorMessage", 2),
            B([ne], fe.prototype, "json", 2),
            B([ne], fe.prototype, "autofocusWhenReady", 2),
            fe = B([q], fe);
            var xe;
            (function(e) {
                e.Initializing = "initializing",
                e.ShowingForm = "showing-form",
                e.ShowingRevealer = "showing-revealer"
            }
            )(xe || (xe = {}));
            let tt = class extends HTMLElement {
                constructor() {
                    super(...arguments);
                    this.state = xe.ShowingForm
                }
                connectedCallback() {
                    this.setState(this.state)
                }
                setState(e) {
                    switch (this.revealer.hidden = !0,
                    this.form.hidden = !1,
                    e) {
                    case xe.Initializing:
                        break;
                    case xe.ShowingForm:
                        this.passwordField.focus(),
                        this.dispatchEvent(new CustomEvent("sudo-password-showing-form"));
                        break;
                    case xe.ShowingRevealer:
                        this.revealer.hidden = !1,
                        this.form.hidden = !0;
                        break;
                    default:
                        throw new Error("invalid state")
                    }
                    this.state = e
                }
                reveal() {
                    this.setState(xe.ShowingForm)
                }
            }
            ;
            Hi(tt, "SudoPasswordElement"),
            B([ne], tt.prototype, "state", 2),
            B([y], tt.prototype, "revealer", 2),
            B([y], tt.prototype, "form", 2),
            B([y], tt.prototype, "passwordField", 2),
            tt = B([q], tt);
            let bn = class extends HTMLElement {
                connectedCallback() {
                    var e;
                    (e = this.webauthnGet) == null || e.addEventListener("webauthn-get-prompt", ()=>{
                        this.sudoPassword.setState(xe.ShowingRevealer)
                    }
                    ),
                    this.sudoPassword.addEventListener("sudo-password-showing-form", ()=>{
                        var t;
                        (t = this.webauthnGet) == null || t.setState(z.Ready)
                    }
                    )
                }
            }
            ;
            Hi(bn, "SudoAuthElement"),
            B([y], bn.prototype, "webauthnGet", 2),
            B([y], bn.prototype, "sudoPassword", 2),
            bn = B([q], bn);
            var Ev = Object.defineProperty
              , Cp = (e,t)=>Ev(e, "name", {
                value: t,
                configurable: !0
            });
            let Ni = 0;
            function Ap() {
                if (!document.hasFocus())
                    return;
                const e = document.querySelector(".js-timeline-marker-form");
                e && e instanceof HTMLFormElement && N(e)
            }
            Cp(Ap, "markThreadAsRead");
            const Dr = "IntersectionObserver"in window ? new IntersectionObserver(function(e) {
                for (const t of e)
                    t.isIntersecting && Bi(t.target)
            }
            ,{
                root: null,
                rootMargin: "0px",
                threshold: 1
            }) : null;
            m(".js-unread-item", {
                constructor: HTMLElement,
                add(e) {
                    Ni++,
                    Dr && Dr.observe(e)
                },
                remove(e) {
                    Ni--,
                    Dr && Dr.unobserve(e),
                    Ni === 0 && Ap()
                }
            });
            function Bi(e) {
                e.classList.remove("js-unread-item", "unread-item")
            }
            Cp(Bi, "clearUnread"),
            m(".js-discussion[data-channel-target]", {
                subscribe: e=>E(e, "socket:message", function(t) {
                    const n = t.target
                      , r = t.detail.data;
                    if (n.getAttribute("data-channel-target") === r.gid)
                        for (const o of document.querySelectorAll(".js-unread-item"))
                            Bi(o)
                })
            });
            var Sv = Object.defineProperty
              , Lv = (e,t)=>Sv(e, "name", {
                value: t,
                configurable: !0
            });
            let Hr = 0;
            const Pp = /^\(\d+\)\s+/;
            function Ui() {
                const e = Hr ? `(${Hr}) ` : "";
                document.title.match(Pp) ? document.title = document.title.replace(Pp, e) : document.title = `${e}${document.title}`
            }
            Lv(Ui, "updateTitle"),
            m(".js-unread-item", {
                add() {
                    Hr++,
                    Ui()
                },
                remove() {
                    Hr--,
                    Ui()
                }
            });
            var _v = Object.defineProperty
              , kv = (e,t)=>_v(e, "name", {
                value: t,
                configurable: !0
            });
            m(".js-socket-channel.js-updatable-content", {
                subscribe: e=>E(e, "socket:message", function(t) {
                    const {gid: n, wait: r} = t.detail.data
                      , o = t.target
                      , s = n ? xp(o, n) : o;
                    s && setTimeout(Mn, r || 0, s)
                })
            });
            function xp(e, t) {
                if (e.getAttribute("data-gid") === t)
                    return e;
                for (const n of e.querySelectorAll("[data-url][data-gid]"))
                    if (n.getAttribute("data-gid") === t)
                        return n;
                return null
            }
            kv(xp, "findByGid");
            var Tv = Object.defineProperty
              , Cv = (e,t)=>Tv(e, "name", {
                value: t,
                configurable: !0
            });
            async function Mp() {
                if (!(!history.state || !history.state.staleRecords)) {
                    await Nt;
                    for (const e in history.state.staleRecords)
                        for (const t of document.querySelectorAll(`.js-updatable-content [data-url='${e}'], .js-updatable-content[data-url='${e}']`)) {
                            const n = history.state.staleRecords[e];
                            t instanceof HTMLElement && Tn(t, n, !0)
                        }
                    He(null, "", location.href)
                }
            }
            Cv(Mp, "reapplyPreviouslyUpdatedContent"),
            window.addEventListener("beforeunload", function() {
                if (Object.keys(ho).length > 0) {
                    const e = history.state || {};
                    e.staleRecords = ho,
                    He(e, "", location.href)
                }
            });
            try {
                Mp()
            } catch (e) {}
            d("upload:setup", ".js-upload-avatar-image", function(e) {
                const {form: t} = e.detail
                  , n = e.currentTarget.getAttribute("data-alambic-organization")
                  , r = e.currentTarget.getAttribute("data-alambic-owner-type")
                  , o = e.currentTarget.getAttribute("data-alambic-owner-id");
                n && t.append("organization_id", n),
                r && t.append("owner_type", r),
                o && t.append("owner_id", o)
            }),
            d("upload:complete", ".js-upload-avatar-image", function(e) {
                const {attachment: t} = e.detail
                  , n = `/settings/avatars/${t.id}`;
                _e({
                    content: H(document, n)
                })
            });
            var Av = Object.defineProperty
              , Pv = (e,t)=>Av(e, "name", {
                value: t,
                configurable: !0
            });
            function yn() {
                if (document.querySelector(":target"))
                    return;
                const e = cc(location.hash).toLowerCase()
                  , t = lc(document, `user-content-${e}`);
                t && uc(t)
            }
            Pv(yn, "hashchange"),
            window.addEventListener("hashchange", yn),
            document.addEventListener("pjax:success", yn),
            async function() {
                await Nt,
                yn()
            }(),
            d("click", "a[href]", function(e) {
                const {currentTarget: t} = e;
                t instanceof HTMLAnchorElement && t.href === location.href && location.hash.length > 1 && setTimeout(function() {
                    e.defaultPrevented || yn()
                })
            });
            var xv = Object.defineProperty
              , Mv = (e,t)=>xv(e, "name", {
                value: t,
                configurable: !0
            });
            async function $p(e) {
                const t = e.currentTarget
                  , {init: n} = await _.import("./chunk-user-status-submit.js");
                n(t)
            }
            Mv($p, "load"),
            m(".js-user-status-container", {
                subscribe: e=>E(e, "click", $p, {
                    once: !0
                })
            });
            var $v = Object.defineProperty
              , Nr = (e,t)=>$v(e, "name", {
                value: t,
                configurable: !0
            });
            function qp(e, t) {
                const n = e.querySelector(".js-user-list-base");
                n && (n.textContent = t || n.getAttribute("data-generic-message"),
                n.hidden = !1)
            }
            Nr(qp, "setFlashError");
            function Wi(e, t) {
                const r = (t || e).querySelectorAll(".js-user-list-error");
                for (const i of r)
                    i.hidden = !0;
                const o = t ? [t] : e.querySelectorAll(".errored.js-user-list-input-container");
                for (const i of o)
                    i.classList.remove("errored");
                const s = e.querySelector(".js-user-list-base");
                s && (s.hidden = !0)
            }
            Nr(Wi, "resetValidation"),
            A(".js-user-list-form", async function(e, t) {
                var n;
                Wi(e);
                const r = e.querySelector("[data-submitting-message]")
                  , o = r == null ? void 0 : r.textContent;
                r && (r.textContent = r.getAttribute("data-submitting-message"),
                r.disabled = !0);
                for (const s of e.querySelectorAll(".js-user-list-input"))
                    s.disabled = !0;
                try {
                    const s = await t.html();
                    v(e, "user-list-form:success", s.html)
                } catch (s) {
                    if (((n = s.response) == null ? void 0 : n.status) === 422)
                        e.replaceWith(s.response.html);
                    else {
                        qp(e),
                        r && (o && (r.textContent = o),
                        r.disabled = !1);
                        for (const i of e.querySelectorAll(".js-user-list-input"))
                            i.disabled = !1
                    }
                }
            }),
            d("user-list-form:success", ".js-follow-list", e=>{
                const t = e.detail
                  , n = t instanceof HTMLElement ? t.querySelector(".js-target-url") : null;
                (n == null ? void 0 : n.textContent) ? location.href = n.textContent : location.reload()
            }
            );
            function zi(e) {
                if (!(e.currentTarget instanceof HTMLElement))
                    return;
                const t = e.currentTarget.closest(".js-user-list-form")
                  , n = e.currentTarget.closest(".js-user-list-input-container");
                t && n && Wi(t, n)
            }
            Nr(zi, "clearErrorsFromInput"),
            ce(".js-user-list-form input", zi),
            ce(".js-user-list-form textarea", zi),
            d("auto-check-error", ".js-user-list-form input", function(e) {
                const t = e.currentTarget.closest(".js-user-list-input-container")
                  , n = t == null ? void 0 : t.querySelector(".js-user-list-error");
                n && (n.hidden = !1)
            });
            function Ip(e) {
                const t = e.target;
                if (!(t instanceof HTMLDetailsElement) || t.hasAttribute("open"))
                    return;
                const n = t.querySelector(".js-user-list-menu-form");
                n && N(n)
            }
            Nr(Ip, "submitUserListFormOnToggle"),
            d("toggle", ".js-user-list-menu", Ip, {
                capture: !0
            }),
            d("click", ".js-user-list-menu .js-submit-before-navigate", async e=>{
                const t = e.target;
                if (!(t instanceof HTMLElement))
                    return;
                const n = t.closest(".js-user-list-menu-content-root");
                if (!n)
                    return;
                n.removeAttribute("data-update-after-submit");
                const r = n.querySelector(".js-user-list-menu-form");
                if (r) {
                    const o = new Promise(s=>{
                        r.addEventListener("user-list-menu-form:success", ()=>s()),
                        r.addEventListener("user-list-menu-form:error", ()=>{
                            Fe(),
                            e.preventDefault(),
                            s()
                        }
                        )
                    }
                    );
                    N(r),
                    await o
                }
            }
            ),
            A(".js-user-list-menu-form", async function(e, t) {
                let n;
                try {
                    n = await t.json()
                } catch (o) {
                    Fe(),
                    v(e, "user-list-menu-form:error", o);
                    return
                }
                if (n.json.didStar) {
                    const o = e.closest(".js-toggler-container");
                    o && o.classList.add("on");
                    const s = n.json.starCount;
                    if (s) {
                        const i = e.closest(".js-social-container");
                        i && hi(i, s)
                    }
                }
                const r = e.closest(".js-user-list-menu-content-root[data-update-after-submit]");
                if (r) {
                    for (const o of e.querySelectorAll(".js-user-list-menu-item"))
                        o.checked = o.defaultChecked;
                    await Mn(r)
                }
                v(e, "user-list-menu-form:success")
            }),
            d("click", ".js-user-list-delete-confirmation-trigger", e=>{
                const {currentTarget: t} = e
                  , n = t.getAttribute("data-template-id");
                if (!n)
                    return;
                const r = document.getElementById(n);
                if (!r || !(r instanceof HTMLTemplateElement))
                    return;
                const o = t.closest(".js-edit-user-list-dialog");
                o && (o.open = !1),
                _e({
                    content: r.content.cloneNode(!0)
                })
            }
            ),
            d("click", ".js-user-lists-create-trigger", async function(e) {
                const {currentTarget: t} = e
                  , n = document.getElementById("user-list-create-dialog-template")
                  , r = e.currentTarget.getAttribute("data-repository-id")
                  , o = t.closest(".js-user-list-menu-content-root")
                  , s = o == null ? void 0 : o.parentElement;
                if (!n || !(n instanceof HTMLTemplateElement) || !r) {
                    t instanceof HTMLButtonElement && (t.disabled = !0);
                    return
                }
                if (o && $n(o)) {
                    const c = o.querySelector(".js-user-list-menu-form");
                    c && N(c)
                }
                const i = new Oe(n,{
                    repositoryId: r
                })
                  , a = await _e({
                    content: i
                });
                a.addEventListener("user-list-form:success", async()=>{
                    const c = s == null ? void 0 : s.querySelector(".js-user-list-menu-content-root");
                    c && await Mn(c);
                    const l = a.closest("details");
                    l && (l.open = !1)
                }
                )
            });
            var Op = Object.defineProperty
              , qv = Object.getOwnPropertyDescriptor
              , Iv = (e,t)=>Op(e, "name", {
                value: t,
                configurable: !0
            })
              , Br = (e,t,n,r)=>{
                for (var o = r > 1 ? void 0 : r ? qv(t, n) : t, s = e.length - 1, i; s >= 0; s--)
                    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                return r && o && Op(t, n, o),
                o
            }
            ;
            let Et = class extends HTMLElement {
                show() {
                    this.input.type = "text",
                    this.input.focus(),
                    this.showButton.hidden = !0,
                    this.hideButton.hidden = !1
                }
                hide() {
                    this.input.type = "password",
                    this.input.focus(),
                    this.hideButton.hidden = !0,
                    this.showButton.hidden = !1
                }
            }
            ;
            Iv(Et, "VisiblePasswordElement"),
            Br([y], Et.prototype, "input", 2),
            Br([y], Et.prototype, "showButton", 2),
            Br([y], Et.prototype, "hideButton", 2),
            Et = Br([q], Et);
            var Ov = Object.defineProperty
              , vn = (e,t)=>Ov(e, "name", {
                value: t,
                configurable: !0
            });
            m("[data-warn-unsaved-changes]", {
                add(e) {
                    e.addEventListener("input", wn),
                    e.addEventListener("change", wn),
                    e.addEventListener("submit", St);
                    const t = e.closest("details-dialog");
                    t && (t.closest("details").addEventListener("toggle", Vi),
                    t.addEventListener("details-dialog-close", Ki))
                },
                remove(e) {
                    e.removeEventListener("input", wn),
                    e.removeEventListener("change", wn),
                    e.removeEventListener("submit", St);
                    const t = e.closest("details-dialog");
                    t && (t.closest("details").removeEventListener("toggle", Vi),
                    t.removeEventListener("details-dialog-close", Ki),
                    St())
                }
            });
            function wn(e) {
                const t = e.currentTarget;
                $n(t) ? Fp(t) : St()
            }
            vn(wn, "prepareUnsavedChangesWarning");
            function Fp(e) {
                const t = e.getAttribute("data-warn-unsaved-changes") || "Changes you made may not be saved.";
                window.onbeforeunload = function(n) {
                    return n.returnValue = t,
                    t
                }
            }
            vn(Fp, "enableSaveChangesReminder");
            function St() {
                window.onbeforeunload = null
            }
            vn(St, "disableSaveChangesReminder");
            function Vi({currentTarget: e}) {
                e.hasAttribute("open") || St()
            }
            vn(Vi, "disableSaveChangesReminderOnClosedDialogs");
            function Ki(e) {
                const t = e.currentTarget;
                if (!t.closest("details[open]"))
                    return;
                let r = !0;
                const o = t.querySelectorAll("form[data-warn-unsaved-changes]");
                for (const s of o)
                    if ($n(s)) {
                        const i = s.getAttribute("data-warn-unsaved-changes");
                        r = confirm(i);
                        break
                    }
                r || e.preventDefault()
            }
            vn(Ki, "promptOnDialogClosing");
            var Fv = Object.defineProperty
              , Rv = (e,t)=>Fv(e, "name", {
                value: t,
                configurable: !0
            });
            m(".will-transition-once", {
                constructor: HTMLElement,
                subscribe: e=>E(e, "transitionend", Rp)
            });
            function Rp(e) {
                e.target.classList.remove("will-transition-once")
            }
            Rv(Rp, "onTransitionEnd");
            var Dv = Object.defineProperty
              , Hv = (e,t)=>Dv(e, "name", {
                value: t,
                configurable: !0
            });
            function Dp(e, t=0) {
                const n = e.getBoundingClientRect()
                  , r = n.top - t
                  , o = n.bottom - window.innerHeight + t;
                r < 0 ? window.scrollBy(0, r) : o > 0 && window.scrollBy(0, o)
            }
            Hv(Dp, "adjustViewport"),
            d("click", ".js-video-play, .js-video-close", function(e) {
                const n = e.currentTarget.closest(".js-video-container")
                  , r = n.querySelector(".js-video-iframe");
                n.tagName.toLowerCase() === "details" && n.addEventListener("details-dialog-close", function() {
                    r.removeAttribute("src"),
                    window.setTimeout(function() {
                        n.classList.remove("is-expanded")
                    }, 10)
                }),
                n.classList.contains("is-expanded") ? (r.removeAttribute("src"),
                n.classList.remove("is-expanded")) : (r.src = r.getAttribute("data-src") || "",
                n.classList.add("is-expanded")),
                Dp(r, 20)
            });
            var Nv = Object.defineProperty
              , Xi = (e,t)=>Nv(e, "name", {
                value: t,
                configurable: !0
            });
            async function Hp(e) {
                const t = e.currentTarget
                  , n = t.getAttribute("data-url");
                if (!n || Np(t))
                    return;
                const r = t.getAttribute("data-id") || ""
                  , o = t.textContent
                  , s = document.querySelectorAll(`.js-issue-link[data-id='${r}']`);
                for (const i of s)
                    i.removeAttribute("data-url");
                try {
                    const i = await fetch(n, {
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            Accept: "application/json"
                        }
                    });
                    if (!i.ok) {
                        const c = new Error
                          , l = i.statusText ? ` ${i.statusText}` : "";
                        throw c.message = `HTTP ${i.status}${l}`,
                        c
                    }
                    const a = await i.json();
                    Gi(s, `${o}, ${a.title}`)
                } catch (i) {
                    const a = (i.response != null ? i.response.status : void 0) || 500
                      , c = (()=>{
                        switch (a) {
                        case 404:
                            return t.getAttribute("data-permission-text");
                        default:
                            return t.getAttribute("data-error-text")
                        }
                    }
                    )();
                    Gi(s, c || "")
                }
            }
            Xi(Hp, "issueLabel");
            function Gi(e, t) {
                for (const n of e)
                    n instanceof HTMLElement && (n.classList.add("tooltipped", "tooltipped-ne"),
                    n.setAttribute("aria-label", t))
            }
            Xi(Gi, "setLabel");
            function Np(e) {
                switch (e.getAttribute("data-hovercard-type")) {
                case "issue":
                case "pull_request":
                    return !!e.closest("[data-issue-and-pr-hovercards-enabled]");
                case "discussion":
                    return !!e.closest("[data-discussion-hovercards-enabled]");
                default:
                    return !1
                }
            }
            Xi(Np, "isHovercardEnabled"),
            m(".js-issue-link", {
                subscribe: e=>E(e, "mouseenter", Hp)
            }),
            _.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            };
            var Bv = Object.freeze({
                __proto__: null
            })
              , jn = Aa(Bv);
            const Bp = {};
            for (const e of Object.keys(jn))
                Bp[jn[e]] = e;
            const b = {
                rgb: {
                    channels: 3,
                    labels: "rgb"
                },
                hsl: {
                    channels: 3,
                    labels: "hsl"
                },
                hsv: {
                    channels: 3,
                    labels: "hsv"
                },
                hwb: {
                    channels: 3,
                    labels: "hwb"
                },
                cmyk: {
                    channels: 4,
                    labels: "cmyk"
                },
                xyz: {
                    channels: 3,
                    labels: "xyz"
                },
                lab: {
                    channels: 3,
                    labels: "lab"
                },
                lch: {
                    channels: 3,
                    labels: "lch"
                },
                hex: {
                    channels: 1,
                    labels: ["hex"]
                },
                keyword: {
                    channels: 1,
                    labels: ["keyword"]
                },
                ansi16: {
                    channels: 1,
                    labels: ["ansi16"]
                },
                ansi256: {
                    channels: 1,
                    labels: ["ansi256"]
                },
                hcg: {
                    channels: 3,
                    labels: ["h", "c", "g"]
                },
                apple: {
                    channels: 3,
                    labels: ["r16", "g16", "b16"]
                },
                gray: {
                    channels: 1,
                    labels: ["gray"]
                }
            };
            var nt = b;
            for (const e of Object.keys(b)) {
                if (!("channels"in b[e]))
                    throw new Error("missing channels property: " + e);
                if (!("labels"in b[e]))
                    throw new Error("missing channel labels property: " + e);
                if (b[e].labels.length !== b[e].channels)
                    throw new Error("channel and label counts mismatch: " + e);
                const {channels: t, labels: n} = b[e];
                delete b[e].channels,
                delete b[e].labels,
                Object.defineProperty(b[e], "channels", {
                    value: t
                }),
                Object.defineProperty(b[e], "labels", {
                    value: n
                })
            }
            b.rgb.hsl = function(e) {
                const t = e[0] / 255
                  , n = e[1] / 255
                  , r = e[2] / 255
                  , o = Math.min(t, n, r)
                  , s = Math.max(t, n, r)
                  , i = s - o;
                let a, c;
                s === o ? a = 0 : t === s ? a = (n - r) / i : n === s ? a = 2 + (r - t) / i : r === s && (a = 4 + (t - n) / i),
                a = Math.min(a * 60, 360),
                a < 0 && (a += 360);
                const l = (o + s) / 2;
                return s === o ? c = 0 : l <= .5 ? c = i / (s + o) : c = i / (2 - s - o),
                [a, c * 100, l * 100]
            }
            ,
            b.rgb.hsv = function(e) {
                let t, n, r, o, s;
                const i = e[0] / 255
                  , a = e[1] / 255
                  , c = e[2] / 255
                  , l = Math.max(i, a, c)
                  , f = l - Math.min(i, a, c)
                  , p = function(h) {
                    return (l - h) / 6 / f + 1 / 2
                };
                return f === 0 ? (o = 0,
                s = 0) : (s = f / l,
                t = p(i),
                n = p(a),
                r = p(c),
                i === l ? o = r - n : a === l ? o = 1 / 3 + t - r : c === l && (o = 2 / 3 + n - t),
                o < 0 ? o += 1 : o > 1 && (o -= 1)),
                [o * 360, s * 100, l * 100]
            }
            ,
            b.rgb.hwb = function(e) {
                const t = e[0]
                  , n = e[1];
                let r = e[2];
                const o = b.rgb.hsl(e)[0]
                  , s = 1 / 255 * Math.min(t, Math.min(n, r));
                return r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)),
                [o, s * 100, r * 100]
            }
            ,
            b.rgb.cmyk = function(e) {
                const t = e[0] / 255
                  , n = e[1] / 255
                  , r = e[2] / 255
                  , o = Math.min(1 - t, 1 - n, 1 - r)
                  , s = (1 - t - o) / (1 - o) || 0
                  , i = (1 - n - o) / (1 - o) || 0
                  , a = (1 - r - o) / (1 - o) || 0;
                return [s * 100, i * 100, a * 100, o * 100]
            }
            ;
            function Uv(e, t) {
                return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2
            }
            b.rgb.keyword = function(e) {
                const t = Bp[e];
                if (t)
                    return t;
                let n = 1 / 0, r;
                for (const o of Object.keys(jn)) {
                    const s = jn[o]
                      , i = Uv(e, s);
                    i < n && (n = i,
                    r = o)
                }
                return r
            }
            ,
            b.keyword.rgb = function(e) {
                return jn[e]
            }
            ,
            b.rgb.xyz = function(e) {
                let t = e[0] / 255
                  , n = e[1] / 255
                  , r = e[2] / 255;
                t = t > .04045 ? ((t + .055) / 1.055) ** 2.4 : t / 12.92,
                n = n > .04045 ? ((n + .055) / 1.055) ** 2.4 : n / 12.92,
                r = r > .04045 ? ((r + .055) / 1.055) ** 2.4 : r / 12.92;
                const o = t * .4124 + n * .3576 + r * .1805
                  , s = t * .2126 + n * .7152 + r * .0722
                  , i = t * .0193 + n * .1192 + r * .9505;
                return [o * 100, s * 100, i * 100]
            }
            ,
            b.rgb.lab = function(e) {
                const t = b.rgb.xyz(e);
                let n = t[0]
                  , r = t[1]
                  , o = t[2];
                n /= 95.047,
                r /= 100,
                o /= 108.883,
                n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116,
                r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116,
                o = o > .008856 ? o ** (1 / 3) : 7.787 * o + 16 / 116;
                const s = 116 * r - 16
                  , i = 500 * (n - r)
                  , a = 200 * (r - o);
                return [s, i, a]
            }
            ,
            b.hsl.rgb = function(e) {
                const t = e[0] / 360
                  , n = e[1] / 100
                  , r = e[2] / 100;
                let o, s, i;
                if (n === 0)
                    return i = r * 255,
                    [i, i, i];
                r < .5 ? o = r * (1 + n) : o = r + n - r * n;
                const a = 2 * r - o
                  , c = [0, 0, 0];
                for (let l = 0; l < 3; l++)
                    s = t + 1 / 3 * -(l - 1),
                    s < 0 && s++,
                    s > 1 && s--,
                    6 * s < 1 ? i = a + (o - a) * 6 * s : 2 * s < 1 ? i = o : 3 * s < 2 ? i = a + (o - a) * (2 / 3 - s) * 6 : i = a,
                    c[l] = i * 255;
                return c
            }
            ,
            b.hsl.hsv = function(e) {
                const t = e[0];
                let n = e[1] / 100
                  , r = e[2] / 100
                  , o = n;
                const s = Math.max(r, .01);
                r *= 2,
                n *= r <= 1 ? r : 2 - r,
                o *= s <= 1 ? s : 2 - s;
                const i = (r + n) / 2
                  , a = r === 0 ? 2 * o / (s + o) : 2 * n / (r + n);
                return [t, a * 100, i * 100]
            }
            ,
            b.hsv.rgb = function(e) {
                const t = e[0] / 60
                  , n = e[1] / 100;
                let r = e[2] / 100;
                const o = Math.floor(t) % 6
                  , s = t - Math.floor(t)
                  , i = 255 * r * (1 - n)
                  , a = 255 * r * (1 - n * s)
                  , c = 255 * r * (1 - n * (1 - s));
                switch (r *= 255,
                o) {
                case 0:
                    return [r, c, i];
                case 1:
                    return [a, r, i];
                case 2:
                    return [i, r, c];
                case 3:
                    return [i, a, r];
                case 4:
                    return [c, i, r];
                case 5:
                    return [r, i, a]
                }
            }
            ,
            b.hsv.hsl = function(e) {
                const t = e[0]
                  , n = e[1] / 100
                  , r = e[2] / 100
                  , o = Math.max(r, .01);
                let s, i;
                i = (2 - n) * r;
                const a = (2 - n) * o;
                return s = n * o,
                s /= a <= 1 ? a : 2 - a,
                s = s || 0,
                i /= 2,
                [t, s * 100, i * 100]
            }
            ,
            b.hwb.rgb = function(e) {
                const t = e[0] / 360;
                let n = e[1] / 100
                  , r = e[2] / 100;
                const o = n + r;
                let s;
                o > 1 && (n /= o,
                r /= o);
                const i = Math.floor(6 * t)
                  , a = 1 - r;
                s = 6 * t - i,
                (i & 1) != 0 && (s = 1 - s);
                const c = n + s * (a - n);
                let l, f, p;
                switch (i) {
                default:
                case 6:
                case 0:
                    l = a,
                    f = c,
                    p = n;
                    break;
                case 1:
                    l = c,
                    f = a,
                    p = n;
                    break;
                case 2:
                    l = n,
                    f = a,
                    p = c;
                    break;
                case 3:
                    l = n,
                    f = c,
                    p = a;
                    break;
                case 4:
                    l = c,
                    f = n,
                    p = a;
                    break;
                case 5:
                    l = a,
                    f = n,
                    p = c;
                    break
                }
                return [l * 255, f * 255, p * 255]
            }
            ,
            b.cmyk.rgb = function(e) {
                const t = e[0] / 100
                  , n = e[1] / 100
                  , r = e[2] / 100
                  , o = e[3] / 100
                  , s = 1 - Math.min(1, t * (1 - o) + o)
                  , i = 1 - Math.min(1, n * (1 - o) + o)
                  , a = 1 - Math.min(1, r * (1 - o) + o);
                return [s * 255, i * 255, a * 255]
            }
            ,
            b.xyz.rgb = function(e) {
                const t = e[0] / 100
                  , n = e[1] / 100
                  , r = e[2] / 100;
                let o, s, i;
                return o = t * 3.2406 + n * -1.5372 + r * -.4986,
                s = t * -.9689 + n * 1.8758 + r * .0415,
                i = t * .0557 + n * -.204 + r * 1.057,
                o = o > .0031308 ? 1.055 * o ** (1 / 2.4) - .055 : o * 12.92,
                s = s > .0031308 ? 1.055 * s ** (1 / 2.4) - .055 : s * 12.92,
                i = i > .0031308 ? 1.055 * i ** (1 / 2.4) - .055 : i * 12.92,
                o = Math.min(Math.max(0, o), 1),
                s = Math.min(Math.max(0, s), 1),
                i = Math.min(Math.max(0, i), 1),
                [o * 255, s * 255, i * 255]
            }
            ,
            b.xyz.lab = function(e) {
                let t = e[0]
                  , n = e[1]
                  , r = e[2];
                t /= 95.047,
                n /= 100,
                r /= 108.883,
                t = t > .008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116,
                n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116,
                r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116;
                const o = 116 * n - 16
                  , s = 500 * (t - n)
                  , i = 200 * (n - r);
                return [o, s, i]
            }
            ,
            b.lab.xyz = function(e) {
                const t = e[0]
                  , n = e[1]
                  , r = e[2];
                let o, s, i;
                s = (t + 16) / 116,
                o = n / 500 + s,
                i = s - r / 200;
                const a = s ** 3
                  , c = o ** 3
                  , l = i ** 3;
                return s = a > .008856 ? a : (s - 16 / 116) / 7.787,
                o = c > .008856 ? c : (o - 16 / 116) / 7.787,
                i = l > .008856 ? l : (i - 16 / 116) / 7.787,
                o *= 95.047,
                s *= 100,
                i *= 108.883,
                [o, s, i]
            }
            ,
            b.lab.lch = function(e) {
                const t = e[0]
                  , n = e[1]
                  , r = e[2];
                let o;
                o = Math.atan2(r, n) * 360 / 2 / Math.PI,
                o < 0 && (o += 360);
                const i = Math.sqrt(n * n + r * r);
                return [t, i, o]
            }
            ,
            b.lch.lab = function(e) {
                const t = e[0]
                  , n = e[1]
                  , o = e[2] / 360 * 2 * Math.PI
                  , s = n * Math.cos(o)
                  , i = n * Math.sin(o);
                return [t, s, i]
            }
            ,
            b.rgb.ansi16 = function(e, t=null) {
                const [n,r,o] = e;
                let s = t === null ? b.rgb.hsv(e)[2] : t;
                if (s = Math.round(s / 50),
                s === 0)
                    return 30;
                let i = 30 + (Math.round(o / 255) << 2 | Math.round(r / 255) << 1 | Math.round(n / 255));
                return s === 2 && (i += 60),
                i
            }
            ,
            b.hsv.ansi16 = function(e) {
                return b.rgb.ansi16(b.hsv.rgb(e), e[2])
            }
            ,
            b.rgb.ansi256 = function(e) {
                const t = e[0]
                  , n = e[1]
                  , r = e[2];
                return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5)
            }
            ,
            b.ansi16.rgb = function(e) {
                let t = e % 10;
                if (t === 0 || t === 7)
                    return e > 50 && (t += 3.5),
                    t = t / 10.5 * 255,
                    [t, t, t];
                const n = (~~(e > 50) + 1) * .5
                  , r = (t & 1) * n * 255
                  , o = (t >> 1 & 1) * n * 255
                  , s = (t >> 2 & 1) * n * 255;
                return [r, o, s]
            }
            ,
            b.ansi256.rgb = function(e) {
                if (e >= 232) {
                    const s = (e - 232) * 10 + 8;
                    return [s, s, s]
                }
                e -= 16;
                let t;
                const n = Math.floor(e / 36) / 5 * 255
                  , r = Math.floor((t = e % 36) / 6) / 5 * 255
                  , o = t % 6 / 5 * 255;
                return [n, r, o]
            }
            ,
            b.rgb.hex = function(e) {
                const n = (((Math.round(e[0]) & 255) << 16) + ((Math.round(e[1]) & 255) << 8) + (Math.round(e[2]) & 255)).toString(16).toUpperCase();
                return "000000".substring(n.length) + n
            }
            ,
            b.hex.rgb = function(e) {
                const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                if (!t)
                    return [0, 0, 0];
                let n = t[0];
                t[0].length === 3 && (n = n.split("").map(a=>a + a).join(""));
                const r = parseInt(n, 16)
                  , o = r >> 16 & 255
                  , s = r >> 8 & 255
                  , i = r & 255;
                return [o, s, i]
            }
            ,
            b.rgb.hcg = function(e) {
                const t = e[0] / 255
                  , n = e[1] / 255
                  , r = e[2] / 255
                  , o = Math.max(Math.max(t, n), r)
                  , s = Math.min(Math.min(t, n), r)
                  , i = o - s;
                let a, c;
                return i < 1 ? a = s / (1 - i) : a = 0,
                i <= 0 ? c = 0 : o === t ? c = (n - r) / i % 6 : o === n ? c = 2 + (r - t) / i : c = 4 + (t - n) / i,
                c /= 6,
                c %= 1,
                [c * 360, i * 100, a * 100]
            }
            ,
            b.hsl.hcg = function(e) {
                const t = e[1] / 100
                  , n = e[2] / 100
                  , r = n < .5 ? 2 * t * n : 2 * t * (1 - n);
                let o = 0;
                return r < 1 && (o = (n - .5 * r) / (1 - r)),
                [e[0], r * 100, o * 100]
            }
            ,
            b.hsv.hcg = function(e) {
                const t = e[1] / 100
                  , n = e[2] / 100
                  , r = t * n;
                let o = 0;
                return r < 1 && (o = (n - r) / (1 - r)),
                [e[0], r * 100, o * 100]
            }
            ,
            b.hcg.rgb = function(e) {
                const t = e[0] / 360
                  , n = e[1] / 100
                  , r = e[2] / 100;
                if (n === 0)
                    return [r * 255, r * 255, r * 255];
                const o = [0, 0, 0]
                  , s = t % 1 * 6
                  , i = s % 1
                  , a = 1 - i;
                let c = 0;
                switch (Math.floor(s)) {
                case 0:
                    o[0] = 1,
                    o[1] = i,
                    o[2] = 0;
                    break;
                case 1:
                    o[0] = a,
                    o[1] = 1,
                    o[2] = 0;
                    break;
                case 2:
                    o[0] = 0,
                    o[1] = 1,
                    o[2] = i;
                    break;
                case 3:
                    o[0] = 0,
                    o[1] = a,
                    o[2] = 1;
                    break;
                case 4:
                    o[0] = i,
                    o[1] = 0,
                    o[2] = 1;
                    break;
                default:
                    o[0] = 1,
                    o[1] = 0,
                    o[2] = a
                }
                return c = (1 - n) * r,
                [(n * o[0] + c) * 255, (n * o[1] + c) * 255, (n * o[2] + c) * 255]
            }
            ,
            b.hcg.hsv = function(e) {
                const t = e[1] / 100
                  , n = e[2] / 100
                  , r = t + n * (1 - t);
                let o = 0;
                return r > 0 && (o = t / r),
                [e[0], o * 100, r * 100]
            }
            ,
            b.hcg.hsl = function(e) {
                const t = e[1] / 100
                  , r = e[2] / 100 * (1 - t) + .5 * t;
                let o = 0;
                return r > 0 && r < .5 ? o = t / (2 * r) : r >= .5 && r < 1 && (o = t / (2 * (1 - r))),
                [e[0], o * 100, r * 100]
            }
            ,
            b.hcg.hwb = function(e) {
                const t = e[1] / 100
                  , n = e[2] / 100
                  , r = t + n * (1 - t);
                return [e[0], (r - t) * 100, (1 - r) * 100]
            }
            ,
            b.hwb.hcg = function(e) {
                const t = e[1] / 100
                  , n = e[2] / 100
                  , r = 1 - n
                  , o = r - t;
                let s = 0;
                return o < 1 && (s = (r - o) / (1 - o)),
                [e[0], o * 100, s * 100]
            }
            ,
            b.apple.rgb = function(e) {
                return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255]
            }
            ,
            b.rgb.apple = function(e) {
                return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535]
            }
            ,
            b.gray.rgb = function(e) {
                return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255]
            }
            ,
            b.gray.hsl = function(e) {
                return [0, 0, e[0]]
            }
            ,
            b.gray.hsv = b.gray.hsl,
            b.gray.hwb = function(e) {
                return [0, 100, e[0]]
            }
            ,
            b.gray.cmyk = function(e) {
                return [0, 0, 0, e[0]]
            }
            ,
            b.gray.lab = function(e) {
                return [e[0], 0, 0]
            }
            ,
            b.gray.hex = function(e) {
                const t = Math.round(e[0] / 100 * 255) & 255
                  , r = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
                return "000000".substring(r.length) + r
            }
            ,
            b.rgb.gray = function(e) {
                return [(e[0] + e[1] + e[2]) / 3 / 255 * 100]
            }
            ;
            function Wv() {
                const e = {}
                  , t = Object.keys(nt);
                for (let n = t.length, r = 0; r < n; r++)
                    e[t[r]] = {
                        distance: -1,
                        parent: null
                    };
                return e
            }
            function zv(e) {
                const t = Wv()
                  , n = [e];
                for (t[e].distance = 0; n.length; ) {
                    const r = n.pop()
                      , o = Object.keys(nt[r]);
                    for (let s = o.length, i = 0; i < s; i++) {
                        const a = o[i]
                          , c = t[a];
                        c.distance === -1 && (c.distance = t[r].distance + 1,
                        c.parent = r,
                        n.unshift(a))
                    }
                }
                return t
            }
            function Vv(e, t) {
                return function(n) {
                    return t(e(n))
                }
            }
            function Kv(e, t) {
                const n = [t[e].parent, e];
                let r = nt[t[e].parent][e]
                  , o = t[e].parent;
                for (; t[o].parent; )
                    n.unshift(t[o].parent),
                    r = Vv(nt[t[o].parent][o], r),
                    o = t[o].parent;
                return r.conversion = n,
                r
            }
            var Xv = function(e) {
                const t = zv(e)
                  , n = {}
                  , r = Object.keys(t);
                for (let o = r.length, s = 0; s < o; s++) {
                    const i = r[s];
                    t[i].parent !== null && (n[i] = Kv(i, t))
                }
                return n
            };
            const Lt = {}
              , Gv = Object.keys(nt);
            function Jv(e) {
                const t = function(...n) {
                    const r = n[0];
                    return r == null ? r : (r.length > 1 && (n = r),
                    e(n))
                };
                return "conversion"in e && (t.conversion = e.conversion),
                t
            }
            function Yv(e) {
                const t = function(...n) {
                    const r = n[0];
                    if (r == null)
                        return r;
                    r.length > 1 && (n = r);
                    const o = e(n);
                    if (typeof o == "object")
                        for (let s = o.length, i = 0; i < s; i++)
                            o[i] = Math.round(o[i]);
                    return o
                };
                return "conversion"in e && (t.conversion = e.conversion),
                t
            }
            Gv.forEach(e=>{
                Lt[e] = {},
                Object.defineProperty(Lt[e], "channels", {
                    value: nt[e].channels
                }),
                Object.defineProperty(Lt[e], "labels", {
                    value: nt[e].labels
                });
                const t = Xv(e);
                Object.keys(t).forEach(r=>{
                    const o = t[r];
                    Lt[e][r] = Yv(o),
                    Lt[e][r].raw = Jv(o)
                }
                )
            }
            );
            var rt = Lt
              , Qv = Object.defineProperty
              , D = (e,t)=>Qv(e, "name", {
                value: t,
                configurable: !0
            });
            function Ur() {
                return [Math.floor(Math.random() * (255 - 0) + 0), Math.floor(Math.random() * (255 - 0) + 0), Math.floor(Math.random() * (255 - 0) + 0)]
            }
            D(Ur, "randomRGBColor");
            function _t(e, t) {
                const n = rt.rgb.hsl(t);
                e.style.setProperty("--label-r", t[0].toString()),
                e.style.setProperty("--label-g", t[1].toString()),
                e.style.setProperty("--label-b", t[2].toString()),
                e.style.setProperty("--label-h", n[0].toString()),
                e.style.setProperty("--label-s", n[1].toString()),
                e.style.setProperty("--label-l", n[2].toString())
            }
            D(_t, "setColorSwatch");
            function Wr(e, t) {
                e.blur();
                const n = e.closest("form")
                  , r = n.querySelector(".js-new-label-color-input");
                Le(r, `#${rt.rgb.hex(t)}`);
                const o = n.querySelector(".js-new-label-color");
                _t(o, t)
            }
            D(Wr, "setInputColorFromButton");
            function Up(e, t) {
                e.closest(".js-label-error-container").classList.add("errored"),
                e.textContent = t,
                e.hidden = !1
            }
            D(Up, "addErrorToField");
            function Wp(e) {
                e.closest(".js-label-error-container").classList.remove("errored"),
                e.hidden = !0
            }
            D(Wp, "removeErrorFromField");
            function ot(e, t, n) {
                const r = t.querySelector(e);
                !r || (n ? Up(r, n[0]) : Wp(r))
            }
            D(ot, "showOrHideLabelError");
            function zr(e, t) {
                ot(".js-label-name-error", e, t.name),
                ot(".js-label-description-error", e, t.description),
                ot(".js-label-color-error", e, t.color)
            }
            D(zr, "showLabelErrors");
            function Me(e) {
                ot(".js-label-name-error", e, null),
                ot(".js-label-description-error", e, null),
                ot(".js-label-color-error", e, null)
            }
            D(Me, "hideLabelErrors");
            function zp(e, t, n, r, o) {
                const s = new URL(`${e}${encodeURIComponent(t)}`,window.location.origin)
                  , i = new URLSearchParams(s.search.slice(1));
                return i.append("color", n),
                r && i.append("description", r),
                o && i.append("id", o),
                s.search = i.toString(),
                s.toString()
            }
            D(zp, "labelPreviewUrl");
            function Vp(e) {
                let t = null;
                const n = e.querySelector(".js-new-label-description-input");
                return n instanceof HTMLInputElement && n.value.trim().length > 0 && (t = n.value.trim()),
                t
            }
            D(Vp, "labelDescriptionFrom");
            function Kp(e) {
                const t = e.querySelector(".js-new-label-color-input");
                return t.checkValidity() ? t.value.trim().replace(/^#/, "") : "ededed"
            }
            D(Kp, "labelColorFrom");
            function Xp(e, t) {
                let r = e.querySelector(".js-new-label-name-input").value.trim();
                return r.length < 1 && (r = t.getAttribute("data-default-name")),
                r
            }
            D(Xp, "labelNameFrom");
            async function st(e) {
                const t = e.closest(".js-label-preview-container");
                if (!t)
                    return;
                const n = e.closest(".js-label-form")
                  , r = n.querySelector(".js-new-label-error")
                  , o = n.getAttribute("data-label-id")
                  , s = t.querySelector(".js-label-preview")
                  , i = Xp(n, s);
                if (!n.checkValidity() && i !== "Label preview")
                    return;
                const a = Kp(n)
                  , c = Vp(n)
                  , l = s.getAttribute("data-url-template")
                  , f = zp(l, i, a, c, o);
                if (t.hasAttribute("data-last-preview-url")) {
                    const h = t.getAttribute("data-last-preview-url");
                    if (f === h)
                        return
                }
                let p;
                try {
                    p = await H(document, f)
                } catch (h) {
                    const g = await h.response.json();
                    zr(n, g),
                    r && (r.textContent = g.message,
                    r.hidden = !1);
                    return
                }
                r && (r.textContent = "",
                r.hidden = !0),
                Me(n),
                s.innerHTML = "",
                s.appendChild(p),
                t.setAttribute("data-last-preview-url", f)
            }
            D(st, "updateLabelPreview");
            function Gp(e) {
                st(e.target)
            }
            D(Gp, "onLabelFormInputChange");
            function Ji(e, t) {
                e.closest(".js-details-container").classList.toggle("is-empty", t)
            }
            D(Ji, "toggleBlankSlate");
            function Yi(e) {
                const t = document.querySelector(".js-labels-count")
                  , r = Number(t.textContent) + e;
                t.textContent = r.toString();
                const o = document.querySelector(".js-labels-label");
                return o.textContent = o.getAttribute(r === 1 ? "data-singular-string" : "data-plural-string"),
                r
            }
            D(Yi, "updateCount"),
            ce(".js-label-filter-field", function(e) {
                const t = e.target
                  , r = t.closest("details-menu").querySelector(".js-new-label-name");
                if (!r)
                    return;
                const o = t.value.trim();
                r.textContent = o
            }),
            d("filterable:change", ".js-filterable-issue-labels", function(e) {
                const t = e.currentTarget.closest("details-menu")
                  , n = t.querySelector(".js-add-label-button");
                if (!n)
                    return;
                const o = e.detail.inputField.value.trim().toLowerCase();
                let s = !1;
                for (const i of t.querySelectorAll("input[data-label-name]"))
                    if ((i.getAttribute("data-label-name") || "").toLowerCase() === o) {
                        s = !0;
                        break
                    }
                n.hidden = o.length === 0 || s
            }),
            qt(".js-new-label-color-input", function(e) {
                const n = e.closest("form").querySelector(".js-new-label-swatches");
                n.hidden = !1,
                e.addEventListener("blur", function() {
                    n.hidden = !0
                }, {
                    once: !0
                })
            }),
            ce(".js-new-label-color-input", function(e) {
                const t = e.target;
                let n = t.value.trim();
                if (!(n.length < 1))
                    if (n.indexOf("#") !== 0 && (n = `#${n}`,
                    t.value = n),
                    t.checkValidity()) {
                        t.classList.remove("color-fg-danger");
                        const o = t.closest("form").querySelector(".js-new-label-color");
                        _t(o, rt.hex.rgb(n))
                    } else
                        t.classList.add("color-fg-danger")
            }),
            U("keyup", ".js-new-label-color-input", function(e) {
                const t = e.target;
                let n = t.value.trim();
                if (n.indexOf("#") !== 0 && (n = `#${n}`,
                t.value = n),
                t.checkValidity()) {
                    const s = t.closest("form").querySelector(".js-new-label-color");
                    _t(s, rt.hex.rgb(n))
                }
                v(t, "change", !1);
                const r = t.closest("form");
                Me(r)
            }),
            U("keyup", ".js-new-label-description-input", function(e) {
                const n = e.target.form;
                Me(n)
            }),
            U("keyup", ".js-new-label-color-input", function(e) {
                const n = e.target.form;
                Me(n)
            }),
            d("click", ".js-new-label-color", async function(e) {
                const t = e.currentTarget
                  , n = Ur();
                Wr(t, n),
                st(t)
            }),
            d("mousedown", ".js-new-label-color-swatch", function(e) {
                const t = e.currentTarget
                  , n = t.getAttribute("data-color");
                Wr(t, rt.hex.rgb(n)),
                st(t);
                const r = t.closest(".js-new-label-swatches");
                r.hidden = !0
            }),
            d("toggle", ".js-new-label-modal", function(e) {
                e.target.hasAttribute("open") && Qi(e.target)
            }, {
                capture: !0
            });
            async function Qi(e) {
                const t = e.querySelector(".js-new-label-name-input");
                if (!t)
                    return;
                const n = e.querySelector(".js-new-label-color-input")
                  , r = Ur()
                  , o = `#${rt.rgb.hex(r)}`;
                n.value = o;
                const s = e.querySelector(".js-new-label-color");
                _t(s, r);
                const a = document.querySelector(".js-new-label-name").textContent;
                Le(t, a),
                dc(t),
                st(s)
            }
            D(Qi, "initLabelModal"),
            A(".js-new-label-modal-form", async function(e, t) {
                const n = e.querySelector(".js-new-label-error");
                let r;
                try {
                    r = await t.html()
                } catch (a) {
                    const c = a.response.json;
                    n.textContent = c.message,
                    n.hidden = !1
                }
                if (!r)
                    return;
                n.hidden = !0,
                document.querySelector(".js-new-label-modal").removeAttribute("open");
                const o = document.querySelector(".js-filterable-issue-labels")
                  , s = r.html.querySelector("input");
                o.prepend(r.html),
                s && s.dispatchEvent(new Event("change",{
                    bubbles: !0
                }));
                const i = document.querySelector(".js-label-filter-field");
                i.value = i.defaultValue,
                i.focus()
            }),
            d("click", ".js-edit-label-cancel", function(e) {
                const t = e.target.closest("form");
                Me(t),
                t.reset();
                const n = t.querySelector(".js-new-label-color-input")
                  , r = n.value
                  , o = t.querySelector(".js-new-label-color");
                _t(o, rt.hex.rgb(r)),
                go(t),
                st(n);
                const s = e.currentTarget.closest(".js-labels-list-item");
                if (s) {
                    s.querySelector(".js-update-label").classList.add("d-none");
                    const a = s.querySelector(".js-label-preview");
                    a && (a.classList.add("d-none"),
                    s.querySelector(".js-label-link").classList.remove("d-none"));
                    const c = s.querySelectorAll(".js-hide-on-label-edit");
                    for (const l of c)
                        l.hidden = !l.hidden
                }
            }),
            A(".js-update-label", async function(e, t) {
                let n;
                try {
                    n = await t.html()
                } catch (o) {
                    const s = o.response.json;
                    zr(e, s);
                    return
                }
                Me(e),
                e.closest(".js-labels-list-item").replaceWith(n.html)
            }),
            A(".js-create-label", async function(e, t) {
                let n;
                try {
                    n = await t.html()
                } catch (i) {
                    const a = i.response.json;
                    zr(e, a);
                    return
                }
                e.reset(),
                Me(e),
                document.querySelector(".js-label-list").prepend(n.html),
                Yi(1),
                Ji(e, !1);
                const r = e.querySelector(".js-new-label-color")
                  , o = Ur();
                Wr(r, o),
                st(e.querySelector(".js-new-label-name-input")),
                go(e);
                const s = e.closest(".js-details-container");
                s instanceof HTMLElement && po(s)
            }),
            d("click", ".js-details-target-new-label", function() {
                document.querySelector(".js-create-label").querySelector(".js-new-label-name-input").focus()
            }),
            d("click", ".js-edit-label", function(e) {
                const t = e.currentTarget.closest(".js-labels-list-item")
                  , n = t.querySelector(".js-update-label");
                n.classList.remove("d-none"),
                n.querySelector(".js-new-label-name-input").focus();
                const o = t.querySelector(".js-label-preview");
                o && (o.classList.remove("d-none"),
                t.querySelector(".js-label-link").classList.add("d-none"));
                const s = t.querySelectorAll(".js-hide-on-label-edit");
                for (const i of s)
                    i.hidden = !i.hidden
            }),
            A(".js-delete-label", async function(e, t) {
                const n = e.closest(".js-labels-list-item");
                n.querySelector(".js-label-delete-spinner").hidden = !1,
                await t.text();
                const r = Yi(-1);
                Ji(e, r === 0),
                n.remove()
            });
            const Vr = Ie(Gp, 500);
            d("suggester:complete", ".js-new-label-name-input", Vr),
            ce(".js-new-label-name-input", Vr),
            ce(".js-new-label-description-input", Vr),
            ce(".js-new-label-color-input", Vr),
            U("keypress", ".js-new-label-name-input", function(e) {
                const t = e.target
                  , n = parseInt(t.getAttribute("data-maxlength"));
                fc(t.value) >= n && e.preventDefault()
            }),
            d("click", ".js-issues-label-select-menu-item", function(e) {
                !e.altKey && !e.shiftKey || (e.preventDefault(),
                e.stopPropagation(),
                e.altKey && (window.location.href = e.currentTarget.getAttribute("data-excluded-url")),
                e.shiftKey && (window.location.href = e.currentTarget.getAttribute("data-included-url")))
            }),
            U("keydown", ".js-issues-label-select-menu-item", function(e) {
                if (e.key !== "Enter" || !e.altKey && !e.shiftKey)
                    return;
                const t = e.currentTarget;
                e.preventDefault(),
                e.stopPropagation(),
                t instanceof HTMLAnchorElement && (e.altKey && (window.location.href = t.getAttribute("data-excluded-url")),
                e.shiftKey && (window.location.href = t.getAttribute("data-included-url")))
            }),
            d("click", ".js-open-label-creation-modal", async function(e) {
                e.stopImmediatePropagation();
                const t = await _e({
                    content: document.querySelector(".js-label-creation-template").content.cloneNode(!0),
                    detailsClass: "js-new-label-modal"
                });
                Qi(t)
            }, {
                capture: !0
            });
            var Zv = Object.defineProperty
              , ew = (e,t)=>Zv(e, "name", {
                value: t,
                configurable: !0
            });
            d("change", ".js-thread-notification-setting", Kr),
            d("change", ".js-custom-thread-notification-option", Kr),
            d("reset", ".js-custom-thread-settings-form", Kr);
            function Kr() {
                const e = document.querySelector(".js-reveal-custom-thread-settings").checked
                  , t = !document.querySelector(".js-custom-thread-notification-option:checked")
                  , n = document.querySelector(".js-custom-thread-settings")
                  , r = document.querySelector("[data-custom-option-required-text]")
                  , o = e && t ? r.getAttribute("data-custom-option-required-text") : "";
                r.setCustomValidity(o),
                n.hidden = !e
            }
            ew(Kr, "toggleEventSettings");
            var Jp = Object.defineProperty
              , tw = Object.getOwnPropertyDescriptor
              , nw = (e,t)=>Jp(e, "name", {
                value: t,
                configurable: !0
            })
              , Yp = (e,t,n,r)=>{
                for (var o = r > 1 ? void 0 : r ? tw(t, n) : t, s = e.length - 1, i; s >= 0; s--)
                    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                return r && o && Jp(t, n, o),
                o
            }
            ;
            let Xr = class extends HTMLElement {
                get activeClass() {
                    return this.getAttribute("active-class") || "collapsible-sidebar-widget-active"
                }
                get loadingClass() {
                    return this.getAttribute("loading-class") || "collapsible-sidebar-widget-loading"
                }
                get url() {
                    return this.getAttribute("url") || ""
                }
                get isOpen() {
                    return this.hasAttribute("open")
                }
                set isOpen(e) {
                    e ? this.setAttribute("open", "") : this.removeAttribute("open")
                }
                onKeyDown(e) {
                    if (e.code === "Enter" || e.code === "Space")
                        return e.preventDefault(),
                        this.load()
                }
                onMouseDown(e) {
                    return e.preventDefault(),
                    this.load()
                }
                load() {
                    return this.pendingRequest ? this.pendingRequest.abort() : this.collapsible.hasAttribute("loaded") ? this.isOpen ? this.setClose() : this.setOpen() : (this.setLoading(),
                    this.updateCollapsible())
                }
                setLoading() {
                    this.classList.add(this.loadingClass),
                    this.classList.remove(this.activeClass)
                }
                setOpen() {
                    this.classList.add(this.activeClass),
                    this.classList.remove(this.loadingClass),
                    this.isOpen = !0
                }
                setClose() {
                    this.classList.remove(this.activeClass),
                    this.classList.remove(this.loadingClass),
                    this.isOpen = !1
                }
                handleAbort() {
                    this.pendingRequest = null,
                    this.setClose()
                }
                async updateCollapsible() {
                    var e;
                    try {
                        this.pendingRequest = new AbortController,
                        this.pendingRequest.signal.addEventListener("abort", ()=>this.handleAbort());
                        const t = await fetch(this.url, {
                            signal: (e = this.pendingRequest) == null ? void 0 : e.signal,
                            headers: {
                                Accept: "text/html",
                                "X-Requested-With": "XMLHttpRequest"
                            }
                        });
                        if (this.pendingRequest = null,
                        !t.ok)
                            return this.setClose();
                        const n = await t.text();
                        this.collapsible.innerHTML = n,
                        this.collapsible.setAttribute("loaded", ""),
                        this.setOpen()
                    } catch (t) {
                        return this.pendingRequest = null,
                        this.setClose()
                    }
                }
            }
            ;
            nw(Xr, "CollapsibleSidebarWidgetElement"),
            Yp([y], Xr.prototype, "collapsible", 2),
            Xr = Yp([q], Xr);
            var Qp = Object.defineProperty
              , rw = Object.getOwnPropertyDescriptor
              , ow = (e,t)=>Qp(e, "name", {
                value: t,
                configurable: !0
            })
              , Se = (e,t,n,r)=>{
                for (var o = r > 1 ? void 0 : r ? rw(t, n) : t, s = e.length - 1, i; s >= 0; s--)
                    (i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                return r && o && Qp(t, n, o),
                o
            }
            ;
            let ie = class extends HTMLElement {
                constructor() {
                    super(...arguments);
                    this.url = "",
                    this.csrf = "",
                    this.instrument = "",
                    this.column = 1
                }
                get isDisabled() {
                    var e;
                    return (e = this.read) == null ? void 0 : e.hasAttribute("disabled")
                }
                set hasErrored(e) {
                    e ? this.setAttribute("errored", "") : this.removeAttribute("errored")
                }
                set disabled(e) {
                    e ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                }
                get hasExpanded() {
                    return this.read.getAttribute("aria-expanded") === "true"
                }
                connectedCallback() {
                    var e, t;
                    this.disabled = (t = (e = this.read) == null ? void 0 : e.disabled) != null ? t : !0,
                    this.querySelector("details") !== null && this.classList.toggle("no-pointer")
                }
                handleDetailsSelect(e) {
                    var t;
                    const n = e
                      , r = e.target
                      , o = (t = n.detail) == null ? void 0 : t.relatedTarget
                      , s = r.closest("details")
                      , i = s == null ? void 0 : s.querySelector("[data-menu-button]");
                    if (o.getAttribute("aria-checked") === "true") {
                        o.setAttribute("aria-checked", "false"),
                        e.preventDefault();
                        for (const a of this.inputs)
                            if (o.contains(a)) {
                                this.updateCell(a.name, ""),
                                (i == null ? void 0 : i.innerHTML) && (i.innerHTML = a.placeholder);
                                break
                            }
                        s == null || s.removeAttribute("open")
                    }
                }
                handleDetailsSelected(e) {
                    var t;
                    const r = (t = e.detail) == null ? void 0 : t.relatedTarget;
                    for (const o of this.inputs)
                        if (r.contains(o)) {
                            this.updateCell(o.name, o.value);
                            break
                        }
                }
                mouseDownFocus(e) {
                    !this.isDisabled || this.onFocus(e)
                }
                keyDownFocus(e) {
                    (e.code === "Enter" || e.code === "Space") && this.read !== document.activeElement && this.onFocus(e)
                }
                onChange(e) {
                    var t, n;
                    e.target.getAttribute("type") !== "date" && this.updateCell((t = this.read) == null ? void 0 : t.name, (n = this.read) == null ? void 0 : n.value)
                }
                onFocus(e) {
                    e.preventDefault(),
                    this.disabled = !1,
                    this.read.disabled = !1,
                    this.read.focus()
                }
                onBlur(e) {
                    var t, n;
                    if (this.hasExpanded) {
                        e.preventDefault();
                        return
                    }
                    e.target.getAttribute("type") === "date" && this.updateCell((t = this.read) == null ? void 0 : t.name, (n = this.read) == null ? void 0 : n.value),
                    this.read.disabled = !0,
                    this.disabled = !0
                }
                onKeyDown(e) {
                    if (e.code === "Enter" || e.code === "Tab") {
                        if (e.preventDefault(),
                        e.stopPropagation(),
                        this.hasExpanded)
                            return;
                        this.read.blur()
                    }
                }
                async updateCell(e="", t="") {
                    const n = new FormData;
                    n.set(e, t),
                    n.set("ui", this.instrument);
                    for (const o of this.parameters)
                        n.set(o.name, o.value);
                    const r = Intl.DateTimeFormat("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        timeZone: "UTC"
                    });
                    try {
                        if (this.write) {
                            const f = this.read.value
                              , p = this.read.type === "date" && f ? r.format(Date.parse(f)) : f;
                            this.write.innerHTML = f ? p : this.read.placeholder
                        }
                        const o = await fetch(this.url, {
                            method: "PUT",
                            body: n,
                            headers: {
                                Accept: "application/json",
                                "X-Requested-With": "XMLHttpRequest",
                                "Scoped-CSRF-Token": `${this.csrf}`
                            }
                        });
                        if (!o.ok)
                            throw new Error("connection error");
                        if (!this.write)
                            return;
                        const a = (await o.json()).memexProjectItem.memexProjectColumnValues.find(f=>f.memexProjectColumnId === Number(this.column)).value
                          , c = this.read.type === "date" ? Date.parse(a.value) : a.html
                          , l = this.read.type === "date" && c ? r.format(c) : c;
                        this.write.innerHTML = t ? l : this.read.placeholder
                    } catch (o) {
                        this.hasErrored = !0
                    }
                }
            }
            ;
            ow(ie, "SidebarMemexInputElement"),
            Se([ne], ie.prototype, "url", 2),
            Se([ne], ie.prototype, "csrf", 2),
            Se([ne], ie.prototype, "instrument", 2),
            Se([ne], ie.prototype, "column", 2),
            Se([te], ie.prototype, "inputs", 2),
            Se([y], ie.prototype, "read", 2),
            Se([y], ie.prototype, "write", 2),
            Se([te], ie.prototype, "parameters", 2),
            ie = Se([q], ie);
            var sw = Object.defineProperty
              , ae = (e,t)=>sw(e, "name", {
                value: t,
                configurable: !0
            });
            function kt(e, t=!1) {
                (t || !eh(e)) && (e instanceof HTMLFormElement ? N(e) : En(e))
            }
            ae(kt, "submitForm");
            function Zi(e) {
                const t = e.currentTarget
                  , n = t.closest(".js-issue-sidebar-form") || t.querySelector(".js-issue-sidebar-form");
                kt(n)
            }
            ae(Zi, "submitOnMenuClose"),
            d("details-menu-selected", ".js-discussion-sidebar-menu", function(e) {
                const t = e.detail.relatedTarget
                  , n = e.currentTarget
                  , r = t.closest(".js-issue-sidebar-form")
                  , o = n.hasAttribute("data-multiple");
                if (t.hasAttribute("data-clear-assignees")) {
                    const s = n.querySelectorAll('input[name="issue[user_assignee_ids][]"]:checked');
                    for (const i of s)
                        i.disabled = !1,
                        i.checked = !1;
                    kt(r)
                } else
                    o ? n.closest("details").addEventListener("toggle", Zi, {
                        once: !0
                    }) : kt(r)
            }, {
                capture: !0
            });
            function Zp(e, t) {
                e.replaceWith(me(document, t))
            }
            ae(Zp, "updateSidebar"),
            A(".js-issue-sidebar-form", async function(e, t) {
                const n = await t.html();
                e.closest(".js-discussion-sidebar-item").replaceWith(n.html)
            }),
            d("click", "div.js-issue-sidebar-form .js-suggested-reviewer", function(e) {
                const t = e.currentTarget
                  , n = t.closest(".js-issue-sidebar-form");
                En(n, "post", {
                    name: t.name,
                    value: t.value
                }),
                e.preventDefault()
            }),
            d("click", "div.js-issue-sidebar-form .js-issue-assign-self", function(e) {
                var t;
                const n = e.currentTarget
                  , r = n.closest(".js-issue-sidebar-form");
                En(r, "post", {
                    name: n.name,
                    value: n.value
                }),
                n.remove(),
                (t = document.querySelector("form#new_issue .is-submit-button-value")) == null || t.remove(),
                e.preventDefault()
            }),
            d("click", ".js-issue-unassign-self", function(e) {
                const t = e.currentTarget.closest(".js-issue-sidebar-form");
                En(t, "delete"),
                e.preventDefault()
            }),
            A(".js-pages-preview-toggle-form", async function(e, t) {
                const n = await t.json();
                e.querySelector("button.btn").textContent = n.json.new_button_value
            });
            async function En(e, t="post", n) {
                const r = ea(e);
                n && r.append(n.name, n.value);
                const o = e.getAttribute("data-url");
                if (!o)
                    return;
                const s = e.querySelector(".js-data-url-csrf")
                  , i = await fetch(o, {
                    method: t,
                    body: t === "delete" ? "" : r,
                    mode: "same-origin",
                    headers: {
                        "Scoped-CSRF-Token": s.value,
                        "X-Requested-With": "XMLHttpRequest"
                    }
                });
                if (!i.ok)
                    return;
                const a = await i.text();
                Zp(e.closest(".js-discussion-sidebar-item"), a)
            }
            ae(En, "previewSubmit");
            function eh(e) {
                const t = e.getAttribute("data-reviewers-team-size-check-url");
                if (!t)
                    return !1;
                const n = [...document.querySelectorAll(".js-reviewer-team")].map(a=>a.getAttribute("data-id"))
                  , r = e instanceof HTMLFormElement ? new FormData(e) : ea(e)
                  , s = new URLSearchParams(r).getAll("reviewer_team_ids[]").filter(a=>!n.includes(a));
                if (s.length === 0)
                    return !1;
                const i = new URLSearchParams(s.map(a=>["reviewer_team_ids[]", a]));
                return th(e, `${t}?${i}`),
                !0
            }
            ae(eh, "reviewerTeamsCheckRequired");
            async function th(e, t) {
                const n = await fetch(t);
                if (!n.ok)
                    return;
                const r = await n.text();
                if (r.match(/[^\w-]js-large-team[^\w-]/))
                    nh(e, r);
                else {
                    kt(e, !0);
                    return
                }
            }
            ae(th, "triggerTeamReviewerCheck");
            function nh(e, t) {
                const n = e.querySelector(".js-large-teams-check-warning-container");
                for (; n.firstChild; )
                    n.removeChild(n.firstChild);
                n.appendChild(me(document, t));
                const r = n.querySelector("details");
                function o(s) {
                    if (s.target instanceof Element) {
                        if (r.open = !1,
                        !s.target.classList.contains("js-large-teams-request-button")) {
                            const i = e.querySelectorAll("input[name='reviewer_team_ids[]']");
                            for (const a of i)
                                n.querySelector(`.js-large-team[data-id='${a.value}']`) && (a.checked = !1)
                        }
                        kt(e, !0),
                        s.preventDefault()
                    }
                }
                ae(o, "dialogAction"),
                n.querySelector(".js-large-teams-request-button").addEventListener("click", o, {
                    once: !0
                }),
                n.querySelector(".js-large-teams-do-not-request-button").addEventListener("click", o, {
                    once: !0
                }),
                r.addEventListener("details-dialog-close", o, {
                    once: !0
                }),
                r.open = !0
            }
            ae(nh, "showTeamReviewerConfirmationDialog"),
            d("change", ".js-project-menu-checkbox", function(e) {
                const t = e.currentTarget
                  , n = t.closest(".js-project-menu-container");
                for (const r of n.querySelectorAll(".js-project-menu-checkbox"))
                    if (r !== t && r.name === t.name) {
                        r.checked = t.checked;
                        const o = r.closest(".js-navigation-item");
                        o && o.classList.toggle("selected", t.checked);
                        const s = r.closest("label[aria-checked]");
                        s && s.setAttribute("aria-checked", t.checked.toString())
                    }
            }),
            d("click", "div.js-project-column-menu-container .js-project-column-menu-item button", async function(e) {
                const t = e.currentTarget;
                rh(t);
                const n = t.getAttribute("data-url")
                  , r = t.parentElement.querySelector(".js-data-url-csrf")
                  , o = t.getAttribute("data-card-id")
                  , s = new FormData;
                if (s.append("card_id", o),
                s.append("use_automation_prioritization", "true"),
                e.preventDefault(),
                !(await fetch(n, {
                    method: "PUT",
                    mode: "same-origin",
                    body: s,
                    headers: {
                        "Scoped-CSRF-Token": r.value,
                        "X-Requested-With": "XMLHttpRequest"
                    }
                })).ok)
                    return;
                const a = document.activeElement
                  , c = t.closest(".js-project-column-menu-dropdown");
                if (a && c.contains(a))
                    try {
                        a.blur()
                    } catch (l) {}
            });
            function rh(e) {
                const n = e.closest(".js-project-column-menu-dropdown").querySelector(".js-project-column-menu-summary")
                  , r = e.getAttribute("data-column-name");
                n.textContent = r
            }
            ae(rh, "updateProjectColumnMenuSummary"),
            d("click", ".js-prompt-dismiss", function(e) {
                e.currentTarget.closest(".js-prompt").remove()
            });
            function ea(e) {
                const t = e.closest("form")
                  , r = new FormData(t).entries()
                  , o = new FormData;
                for (const [s,i] of r)
                    t.contains(oh(t, s, i.toString())) && o.append(s, i);
                return o
            }
            ae(ea, "scopedFormData");
            function oh(e, t, n) {
                for (const r of e.elements)
                    if ((r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement || r instanceof HTMLButtonElement) && r.name === t && r.value === n)
                        return r;
                return null
            }
            ae(oh, "findParam"),
            d("click", ".js-convert-to-draft", function(e) {
                const t = e.currentTarget.getAttribute("data-url")
                  , n = e.currentTarget.parentElement.querySelector(".js-data-url-csrf");
                fetch(t, {
                    method: "POST",
                    mode: "same-origin",
                    headers: {
                        "Scoped-CSRF-Token": n.value,
                        "X-Requested-With": "XMLHttpRequest"
                    }
                })
            }),
            d("click", "div.js-restore-item", async function(e) {
                const t = e.currentTarget.getAttribute("data-url")
                  , n = e.currentTarget.getAttribute("data-column")
                  , r = e.currentTarget.querySelector(".js-data-url-csrf")
                  , o = new FormData;
                if (o.set("memexProjectItemIds[]", n),
                !(await fetch(t, {
                    method: "PUT",
                    mode: "same-origin",
                    body: o,
                    headers: {
                        "Scoped-CSRF-Token": r.value,
                        "X-Requested-With": "XMLHttpRequest"
                    }
                })).ok)
                    throw new Error("connection error");
                Zi(e)
            }),
            T("launch-code", ()=>_.import("./chunk-launch-code-element.js")),
            T("metric-selection", ()=>_.import("./chunk-metric-selection-element.js")),
            T("severity-calculator", ()=>_.import("./chunk-severity-calculator-element.js")),
            T("command-palette-page", ()=>_.import("./chunk-command-palette-page-element.js")),
            T("command-palette-page-stack", ()=>_.import("./chunk-command-palette-page-stack-element.js")),
            T("readme-toc", ()=>_.import("./chunk-readme-toc-element.js")),
            T("delayed-loading", ()=>_.import("./chunk-delayed-loading-element.js")),
            T("feature-callout", ()=>_.import("./chunk-feature-callout-element.js")),
            T("codespaces-policy-form", ()=>_.import("./chunk-codespaces-policy-form-element.js")),
            T("action-list", ()=>_.import("./chunk-action-list-element.js")),
            T("project-picker", ()=>_.import("./chunk-project-picker-element.js")),
            T("profile-pins", ()=>_.import("./chunk-profile-pins-element.js")),
            T("emoji-picker", ()=>_.import("./chunk-emoji-picker-element.js")),
            T("edit-hook-secret", ()=>_.import("./chunk-edit-hook-secret-element.js")),
            T("insights-query", ()=>_.import("./chunk-insights-query.js")),
            T("remote-clipboard-copy", ()=>_.import("./chunk-remote-clipboard-copy.js")),
            T("series-table", ()=>_.import("./chunk-series-table.js")),
            T("line-chart", ()=>_.import("./chunk-line-chart.js")),
            T("bar-chart", ()=>_.import("./chunk-bar-chart.js")),
            T("stacked-area-chart", ()=>_.import("./chunk-stacked-area-chart.js")),
            T("presence-avatars", ()=>_.import("./chunk-presence-avatars.js")),
            T("pulse-authors-graph", ()=>_.import("./chunk-pulse-authors-graph-element.js")),
            T("stacks-input-config-view", ()=>_.import("./chunk-stacks-input-config-view.js")),
            T("community-contributions-graph", ()=>_.import("./chunk-community-contributions.js")),
            T("discussion-page-views-graph", ()=>_.import("./chunk-discussion-page-views.js")),
            T("discussions-daily-contributors", ()=>_.import("./chunk-discussions-daily-contributors.js")),
            T("discussions-new-contributors", ()=>_.import("./chunk-discussions-new-contributors.js"))
        }
    }
});
//# sourceMappingURL=behaviors-50b6b3b8.js.map
