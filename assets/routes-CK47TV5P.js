import{a as e,i as t,n,r,t as i}from"./index-Dosgw5rC.js";var a=e(t(),1),o=r();function s({count:e=26,className:t=``}){let n=(0,a.useMemo)(()=>Array.from({length:e},(t,n)=>({left:(n+.5)/e*100+n%3*.6,delay:n%7*1.1+n%3*.4,duration:7+n%5*1.6,height:22+n%4*12,opacity:.25+n%4*.18})),[e]);return(0,o.jsx)(`div`,{"aria-hidden":!0,className:`pointer-events-none absolute inset-0 overflow-hidden ${t}`,children:n.map((e,t)=>(0,o.jsx)(`span`,{className:`absolute top-0 w-px`,style:{left:`${e.left}%`,height:`${e.height}%`,opacity:e.opacity,background:`linear-gradient(180deg, transparent, #ffffff 30%, #f6e3ab 60%, transparent)`,animation:`rain-light ${e.duration}s linear ${e.delay}s infinite`}},t))})}function c(e=.18){let t=(0,a.useRef)(null),[n,r]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let i=t.current;if(!i||n)return;let a=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(r(!0),a.disconnect())},{threshold:e,rootMargin:`0px 0px -8% 0px`});return a.observe(i),()=>a.disconnect()},[n,e]),{ref:t,shown:n}}function l(){let[e,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`);t(e.matches);let n=()=>t(e.matches);return e.addEventListener(`change`,n),()=>e.removeEventListener(`change`,n)},[]),e}function u(e=.2){let t=(0,a.useRef)(null),n=l();return(0,a.useEffect)(()=>{if(n)return;let r=0,i=()=>{r||=requestAnimationFrame(()=>{r=0;let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),a=(i.top+i.height/2-window.innerHeight/2)*-e;n.style.transform=`translate3d(0, ${a.toFixed(2)}px, 0)`})};return i(),window.addEventListener(`scroll`,i,{passive:!0}),()=>{window.removeEventListener(`scroll`,i),r&&cancelAnimationFrame(r)}},[n,e]),t}function d({children:e,delay:t=0,className:n=``,as:r=`div`}){let{ref:i,shown:a}=c();return(0,o.jsx)(r,{ref:i,className:`reveal ${a?`reveal-on`:``} ${n}`,style:{transitionDelay:`${t}ms`},children:e})}function f(e){let t=Math.max(0,e-Date.now());return{days:Math.floor(t/864e5),hours:Math.floor(t/36e5)%24,minutes:Math.floor(t/6e4)%60,seconds:Math.floor(t/1e3)%60}}function p({countdownTarget:e,dateLabel:t}){let r=new Date(e).getTime(),[i,s]=(0,a.useState)(()=>f(r));(0,a.useEffect)(()=>{let e=()=>s(f(r));e();let t=window.setInterval(e,1e3);return()=>window.clearInterval(t)},[r]);let c=[[i.days,`days`],[i.hours,`hours`],[i.minutes,`minutes`],[i.seconds,`seconds`]];return(0,o.jsx)(`section`,{className:`story-editorial`,"aria-labelledby":`story-and-countdown-title`,children:(0,o.jsxs)(`div`,{className:`story-editorial__copy`,children:[(0,o.jsxs)(d,{children:[(0,o.jsx)(`p`,{className:`section-kicker`,children:n.storyKicker||`Bismillah hir-Rahman nir-Rahim`}),(0,o.jsx)(`h2`,{id:`story-and-countdown-title`,children:n.storyTitle||`A Sacred Celebration of Blessings`})]}),(0,o.jsx)(d,{delay:120,children:(0,o.jsxs)(`div`,{className:`story-editorial__prose`,children:[(0,o.jsx)(`p`,{children:n.story[0]}),(0,o.jsx)(`p`,{children:n.story[1]})]})}),(0,o.jsxs)(d,{delay:220,children:[(0,o.jsx)(`p`,{className:`countdown-label`,children:n.countdownLabel||`Until the Darees`}),(0,o.jsx)(`div`,{className:`editorial-countdown`,"aria-label":`Countdown to the Darees`,children:c.map(([e,t])=>(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`span`,{children:String(e).padStart(2,`0`)}),(0,o.jsx)(`small`,{children:t})]},t))}),(0,o.jsx)(`p`,{className:`story-date`,children:t})]})]})})}function m(){let[e,t]=(0,a.useState)(0),r=n.events[e]||n.events[0];return(0,o.jsxs)(`section`,{className:`celebrations-editorial`,"aria-labelledby":`celebrations-title`,children:[(0,o.jsxs)(d,{className:`celebrations-editorial__heading`,children:[(0,o.jsx)(`p`,{className:`section-kicker`,children:n.eventsKicker||`Auspicious Gathering`}),(0,o.jsx)(`h2`,{id:`celebrations-title`,children:n.eventsTitle||`Darees Mubarak`}),(0,o.jsx)(`p`,{children:n.eventsSubtitle||`An evening of prayers, Salawaat, and Khushi nu Jaman celebrations.`})]}),(0,o.jsxs)(`div`,{className:`celebration-stage`,children:[(0,o.jsx)(`div`,{className:`celebration-stage__wash`,"aria-hidden":!0}),(0,o.jsxs)(`div`,{className:`celebration-stage__content`,children:[(0,o.jsxs)(`span`,{className:`event-number`,children:[`0`,e+1]}),(0,o.jsxs)(`p`,{children:[r.date,` · `,r.time]}),(0,o.jsx)(`h3`,{children:r.name}),(0,o.jsx)(`p`,{className:`event-note`,children:r.note}),(0,o.jsx)(`p`,{className:`event-venue`,children:r.venue})]},r.name)]}),(0,o.jsx)(`div`,{className:`celebration-selector`,role:`tablist`,"aria-label":`Darees celebration`,children:n.events.map((n,r)=>(0,o.jsxs)(`button`,{type:`button`,role:`tab`,"aria-selected":e===r,className:e===r?`is-active`:``,onClick:()=>t(r),children:[(0,o.jsxs)(`span`,{children:[`0`,r+1]}),n.name]},n.name))})]})}var _wm=(typeof n<"u"&&n.media)||(typeof window<"u"&&window.WEDDING_DATA&&window.WEDDING_DATA.media)||{};var h=_wm.petals||`editable/assets/petals.png`,g=[{id:`story`,label:`Blessings`},{id:`celebrations`,label:`Darees`},{id:`venue`,label:`Venue`},{id:`rsvp`,label:`RSVP`}];function _(){let[e,t]=(0,a.useState)(0),[n,r]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=()=>{let e=document.documentElement.scrollHeight-window.innerHeight;r(e>0?window.scrollY/e:0);let n=window.innerHeight*.42,i=g.reduce((e,t,r)=>{let i=document.getElementById(t.id);return i&&i.getBoundingClientRect().top<=n?r:e},0);t(i)};return e(),window.addEventListener(`scroll`,e,{passive:!0}),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`scroll`,e),window.removeEventListener(`resize`,e)}},[]),(0,o.jsxs)(`nav`,{className:`experience-rail`,"aria-label":`Invitation sections`,children:[(0,o.jsx)(`span`,{className:`experience-rail__track`,"aria-hidden":!0,children:(0,o.jsx)(`span`,{style:{transform:`scaleY(${n})`}})}),g.map((t,n)=>(0,o.jsxs)(`button`,{type:`button`,className:e===n?`is-active`:``,onClick:()=>document.getElementById(t.id)?.scrollIntoView({behavior:`smooth`}),"aria-label":`Go to ${t.label}`,"aria-current":e===n?`location`:void 0,children:[(0,o.jsx)(`span`,{children:t.label}),(0,o.jsx)(`i`,{})]},t.id))]})}function v(){let e=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let t=e.current;if(!t||window.matchMedia(`(pointer: coarse)`).matches)return;let n=e=>{t.animate({transform:`translate3d(${e.clientX-230}px, ${e.clientY-230}px, 0)`},{duration:900,fill:`forwards`,easing:`cubic-bezier(.2,.8,.2,1)`})};return window.addEventListener(`pointermove`,n,{passive:!0}),()=>window.removeEventListener(`pointermove`,n)},[]),(0,o.jsx)(`div`,{ref:e,className:`cursor-aura`,"aria-hidden":!0})}function y(){return(0,o.jsx)(`div`,{className:`petal-veil`,"aria-hidden":!0,children:(0,o.jsx)(`img`,{src:h,alt:``})})}var b=_wm.hall||`editable/assets/hall.png`,x=_wm.cover||`editable/assets/cover.png`,S=_wm.introVideo||`editable/assets/intro.mp4`,C=_wm.coupleVideo||`editable/assets/couple.mp4`,w=_wm.divider||`editable/assets/divider.png`,T=_wm.floral||`editable/assets/floral.png`,U_AUDIO=_wm.audio||`editable/assets/mast-magan-instrumental.mp3`;function E({className:e=``,width:t=260}){return(0,o.jsx)(`img`,{src:w,alt:``,"aria-hidden":!0,loading:`lazy`,width:1200,height:512,className:`mx-auto h-auto opacity-80 ${e}`,style:{width:t}})}function D({open:e,onOpen:t}){return(0,o.jsxs)(`div`,{onClick:t,className:`fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-hidden bg-black select-none transition-opacity duration-700 ${e?`pointer-events-none opacity-0`:`opacity-100`}`,"aria-hidden":e,children:[(0,o.jsx)(`img`,{src:x,alt:`Royal Wedding Invitation Cover`,className:`absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 scale-100 hover:scale-[1.02]`,fetchPriority:`high`}),(0,o.jsx)(`div`,{className:`pointer-events-none absolute inset-0`,style:{background:`radial-gradient(ellipse at center, rgba(140,98,24,0.3) 0%, rgba(85,55,12,0.75) 80%, rgba(40,24,5,0.92) 100%)`}}),(0,o.jsx)(s,{count:16}),(0,o.jsx)(`div`,{className:`relative z-10 flex flex-col items-center gap-4 px-6 text-center`,children:(0,o.jsxs)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),t()},className:`press group relative flex items-center gap-3 rounded-full border border-white/70 bg-[#3a250a]/90 px-8 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.8),0_0_24px_rgba(255,235,175,0.5)] backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-[#503410]/95 cursor-pointer`,children:[(0,o.jsx)(`span`,{className:`flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white shadow-[0_0_12px_rgba(255,255,255,0.7)]`,children:(0,o.jsx)(`svg`,{viewBox:`0 0 24 24`,className:`h-3.5 w-3.5 fill-current ml-0.5`,children:(0,o.jsx)(`path`,{d:`M8 5v14l11-7z`})})}),(0,o.jsx)(`span`,{className:`font-title text-[0.72rem] uppercase tracking-[0.38em] text-white`,children:`Tap To Open`})]})})]})}
function W_RSVP(){
  let [guestName,setGuestName]=(0,a.useState)(""),
      [attendance,setAttendance]=(0,a.useState)("yes"),
      [guestCount,setGuestCount]=(0,a.useState)(1),
      [phone,setPhone]=(0,a.useState)(""),
      [wishes,setWishes]=(0,a.useState)(""),
      [statusMsg,setStatusMsg]=(0,a.useState)(""),
      [totalSaved,setTotalSaved]=(0,a.useState)(()=>{
        try {
          return JSON.parse(localStorage.getItem("darees_rsvp_responses")||"[]").length;
        } catch {
          return 0;
        }
      });

  let data = (typeof window !== "undefined" && window.WEDDING_DATA) || n || {};
  let rsvpCfg = data.rsvp || {};
  let targetEmail = rsvpCfg.email || "pookkanvazhi@gmail.com";
  let coupleName = (data.groom || "Mohammed") + " & " + (data.bride || "Tasneem");

  let saveEntry = (method) => {
    try {
      let list = JSON.parse(localStorage.getItem("darees_rsvp_responses")||"[]");
      let entry = {
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleString(),
        name: guestName.trim(),
        attendance: attendance === "yes" ? "Joyfully Accepts" : "Regretfully Declines",
        guests: attendance === "yes" ? (Number(guestCount)||1) : 0,
        contact: phone.trim() || "-",
        wishes: wishes.trim() || "-",
        method: method
      };
      list.push(entry);
      localStorage.setItem("darees_rsvp_responses", JSON.stringify(list));
      setTotalSaved(list.length);
      return entry;
    } catch(err) {
      console.error(err);
      return null;
    }
  };

  let onWhatsApp = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!guestName.trim()) {
      setStatusMsg("Please enter your full name before sending RSVP.");
      return;
    }
    saveEntry("WhatsApp");
    let isYes = attendance === "yes";
    let lines = [
      "🌙 *Darees Mubarak RSVP — " + coupleName + "* 🌙",
      "",
      "*Guest Name:* " + guestName.trim(),
      "*Response:* " + (isYes ? "Joyfully Accepts (With Barakah) ✨" : "Regretfully Declines"),
    ];
    if (isYes) lines.push("*Number of Guests:* " + guestCount);
    if (phone.trim()) lines.push("*Contact:* " + phone.trim());
    if (wishes.trim()) lines.push("*Dua & Wishes:* " + wishes.trim());
    lines.push("");
    lines.push("Eagerly awaiting the auspicious Darees celebrations!");

    let waText = lines.join("\n");
    let waPhone = String(rsvpCfg.whatsapp || "").replace(/\D/g, "");
    let waUrl = waPhone ? ("https://api.whatsapp.com/send?phone=" + waPhone + "&text=" + encodeURIComponent(waText)) : ("https://api.whatsapp.com/send?text=" + encodeURIComponent(waText));
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setStatusMsg("WhatsApp opened with your RSVP details. Please tap send to complete!");
  };

  let onEmail = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!guestName.trim()) {
      setStatusMsg("Please enter your full name before sending RSVP.");
      return;
    }
    saveEntry("Email");
    let isYes = attendance === "yes";
    let subject = "Darees Mubarak RSVP: " + guestName.trim() + " - " + (isYes ? "Joyfully Accepts" : "Regretfully Declines");
    let bodyLines = [
      "Darees Mubarak RSVP — " + coupleName,
      "Event: Darees Mubarak & Khushi nu Jaman",
      "Date: " + (data.dateLabel || "Saturday, September 25, 2027 at 7:00 PM"),
      "Venue: " + (data.venue ? data.venue.name : "Dawoodi Bohra Al Masjid Al Saifee Anjuman-e-Burhani (Toronto)"),
      "",
      "Guest Name: " + guestName.trim(),
      "Response: " + (isYes ? "Joyfully Accepts" : "Regretfully Declines")
    ];
    if (isYes) bodyLines.push("Number of Guests Attending: " + guestCount);
    if (phone.trim()) bodyLines.push("Contact: " + phone.trim());
    if (wishes.trim()) bodyLines.push("Dua & Wishes: " + wishes.trim());
    bodyLines.push("");
    bodyLines.push("Submitted on: " + new Date().toLocaleString());

    let mailtoUrl = "mailto:" + targetEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(bodyLines.join("\n"));
    window.location.href = mailtoUrl;
    setStatusMsg("Email opened to send RSVP directly to " + targetEmail + "!");
  };

  let onDownloadExcel = () => {
    try {
      let list = JSON.parse(localStorage.getItem("darees_rsvp_responses")||"[]");
      if (!list || list.length === 0) {
        list = [{
          date: new Date().toLocaleString(),
          name: guestName.trim() || "Tasneem & Mohammed Guest",
          attendance: attendance === "yes" ? "Joyfully Accepts" : "Regretfully Declines",
          guests: attendance === "yes" ? (Number(guestCount)||1) : 0,
          contact: phone.trim() || "pookkanvazhi@gmail.com",
          wishes: wishes.trim() || "Mubarak & Heartfelt Duas",
          method: "Direct / Sample"
        }];
      }
      let headers = ["Timestamp","Guest Name","Attendance","Guests Count","Contact Info","Dua & Wishes","RSVP Mode"];
      let rows = [headers.map(h => '"' + h.replace(/"/g, '""') + '"').join(",")];
      list.forEach(item => {
        let row = [
          item.date || "",
          item.name || "",
          item.attendance || "",
          String(item.guests ?? ""),
          item.contact || "",
          item.wishes || "",
          item.method || ""
        ];
        rows.push(row.map(val => '"' + String(val).replace(/"/g, '""') + '"').join(","));
      });
      let csvContent = "\uFEFF" + rows.join("\r\n");
      let blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      let url = URL.createObjectURL(blob);
      let link = document.createElement("a");
      link.href = url;
      link.download = "Tasneem-Mohammed-Darees-RSVP-Responses.csv";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setStatusMsg("RSVP Excel file (CSV format) downloaded successfully!");
    } catch(err) {
      console.error(err);
      setStatusMsg("Could not export RSVP list.");
    }
  };

  return (0,o.jsxs)("section", {
    id: "rsvp",
    className: "relative px-6 py-20 text-center",
    "aria-labelledby": "rsvp-title",
    children: [
      (0,o.jsx)(y, {}),
      (0,o.jsxs)("div", {
        className: "mx-auto max-w-[34rem]",
        children: [
          (0,o.jsx)(d, {
            children: (0,o.jsx)(E, { width: 180, className: "mb-6" })
          }),
          (0,o.jsx)(d, {
            delay: 100,
            children: (0,o.jsx)("p", {
              className: "font-title text-[0.66rem] uppercase tracking-[0.42em] text-white",
              children: "Kindly Respond"
            })
          }),
          (0,o.jsx)(d, {
            delay: 180,
            children: (0,o.jsx)("h2", {
              id: "rsvp-title",
              className: "mt-4 font-display text-[clamp(2.2rem,8.5vw,3rem)] font-light text-white",
              children: rsvpCfg.heading || "RSVP"
            })
          }),
          (0,o.jsx)(d, {
            delay: 240,
            children: (0,o.jsx)("p", {
              className: "mx-auto mt-3 max-w-[24rem] text-[0.94rem] font-light leading-relaxed text-white/90",
              children: rsvpCfg.subheading || "We would be honored by your gracious presence and heartfelt prayers at our Darees Mubarak."
            })
          }),
          (0,o.jsx)(d, {
            delay: 320,
            className: "mt-8",
            children: (0,o.jsxs)("div", {
              className: "rsvp-card-box text-left mx-auto max-w-md p-6 sm:p-8 rounded-xl border border-white/40 shadow-2xl backdrop-blur-md",
              style: { background: "linear-gradient(180deg, rgba(65, 42, 13, 0.9) 0%, rgba(42, 26, 7, 0.95) 100%)" },
              children: [
                (0,o.jsxs)("div", {
                  className: "mb-5",
                  children: [
                    (0,o.jsx)("label", {
                      htmlFor: "rsvp-name-input",
                      className: "block font-title text-[0.68rem] uppercase tracking-[0.24em] text-white mb-2",
                      children: "Your Full Name *"
                    }),
                    (0,o.jsx)("input", {
                      id: "rsvp-name-input",
                      type: "text",
                      required: !0,
                      value: guestName,
                      onChange: (e) => setGuestName(e.target.value),
                      placeholder: "First and Last Name",
                      className: "w-full rounded-md border border-white/50 bg-[#251707]/80 px-4 py-3 text-[0.95rem] text-white placeholder-white/40 outline-none focus:border-[#f6e3ab] focus:ring-1 focus:ring-[#f6e3ab]"
                    })
                  ]
                }),
                (0,o.jsxs)("div", {
                  className: "mb-5",
                  children: [
                    (0,o.jsx)("label", {
                      className: "block font-title text-[0.68rem] uppercase tracking-[0.24em] text-white mb-2",
                      children: "Will You Be Joining Us? *"
                    }),
                    (0,o.jsxs)("div", {
                      className: "grid grid-cols-2 gap-3",
                      children: [
                        (0,o.jsxs)("button", {
                          type: "button",
                          onClick: () => setAttendance("yes"),
                          className: "press flex items-center justify-center gap-2 rounded-md border py-3 px-3 text-[0.76rem] uppercase tracking-[0.16em] transition-all cursor-pointer " + (attendance === "yes" ? "border-[#ffd875] bg-[#755018] text-white font-semibold shadow-[0_0_15px_rgba(255,216,117,0.35)]" : "border-white/30 bg-[#2b1b0a]/70 text-white/80"),
                          children: [
                            (0,o.jsx)("span", { children: "✓" }),
                            (0,o.jsx)("span", { children: "Joyfully Accepts" })
                          ]
                        }),
                        (0,o.jsxs)("button", {
                          type: "button",
                          onClick: () => setAttendance("no"),
                          className: "press flex items-center justify-center gap-2 rounded-md border py-3 px-3 text-[0.76rem] uppercase tracking-[0.16em] transition-all cursor-pointer " + (attendance === "no" ? "border-[#ffd875] bg-[#755018] text-white font-semibold shadow-[0_0_15px_rgba(255,216,117,0.35)]" : "border-white/30 bg-[#2b1b0a]/70 text-white/80"),
                          children: [
                            (0,o.jsx)("span", { children: "✕" }),
                            (0,o.jsx)("span", { children: "Regretfully Declines" })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                attendance === "yes" && (0,o.jsxs)("div", {
                  className: "mb-5",
                  children: [
                    (0,o.jsx)("label", {
                      htmlFor: "rsvp-count-input",
                      className: "block font-title text-[0.68rem] uppercase tracking-[0.24em] text-white mb-2",
                      children: "Number of Guests (Including Yourself)"
                    }),
                    (0,o.jsx)("input", {
                      id: "rsvp-count-input",
                      type: "number",
                      min: 1,
                      max: 20,
                      value: guestCount,
                      onChange: (e) => setGuestCount(e.target.value),
                      className: "w-full rounded-md border border-white/50 bg-[#251707]/80 px-4 py-3 text-[0.95rem] text-white outline-none focus:border-[#f6e3ab] focus:ring-1 focus:ring-[#f6e3ab]"
                    })
                  ]
                }),
                (0,o.jsxs)("div", {
                  className: "mb-5",
                  children: [
                    (0,o.jsx)("label", {
                      htmlFor: "rsvp-phone-input",
                      className: "block font-title text-[0.68rem] uppercase tracking-[0.24em] text-white mb-2",
                      children: "WhatsApp / Contact Number (Optional)"
                    }),
                    (0,o.jsx)("input", {
                      id: "rsvp-phone-input",
                      type: "tel",
                      value: phone,
                      onChange: (e) => setPhone(e.target.value),
                      placeholder: "+1 (---) --- ----",
                      className: "w-full rounded-md border border-white/50 bg-[#251707]/80 px-4 py-3 text-[0.95rem] text-white placeholder-white/40 outline-none focus:border-[#f6e3ab] focus:ring-1 focus:ring-[#f6e3ab]"
                    })
                  ]
                }),
                (0,o.jsxs)("div", {
                  className: "mb-6",
                  children: [
                    (0,o.jsx)("label", {
                      htmlFor: "rsvp-wishes-input",
                      className: "block font-title text-[0.68rem] uppercase tracking-[0.24em] text-white mb-2",
                      children: "Heartfelt Dua & Wishes (Optional)"
                    }),
                    (0,o.jsx)("textarea", {
                      id: "rsvp-wishes-input",
                      rows: 3,
                      value: wishes,
                      onChange: (e) => setWishes(e.target.value),
                      placeholder: "Write your blessings for Tasneem & Mohammed...",
                      className: "w-full rounded-md border border-white/50 bg-[#251707]/80 px-4 py-3 text-[0.95rem] text-white placeholder-white/40 outline-none focus:border-[#f6e3ab] focus:ring-1 focus:ring-[#f6e3ab] resize-none"
                    })
                  ]
                }),
                (0,o.jsxs)("div", {
                  className: "flex flex-col gap-3",
                  children: [
                    (0,o.jsxs)("button", {
                      type: "button",
                      onClick: onWhatsApp,
                      className: "press flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-md border border-[#25D366]/80 bg-[#128C7E] px-6 font-body text-[0.72rem] uppercase tracking-[0.28em] text-white shadow-lg transition-all hover:bg-[#25D366] cursor-pointer",
                      children: [
                        (0,o.jsx)("svg", {
                          viewBox: "0 0 24 24",
                          className: "h-4 w-4 fill-current",
                          children: (0,o.jsx)("path", {
                            d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.39-4.19-1.14l-.3-.18-3.12.82.83-3.04-.2-.32a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.13-1.47-.73-1.7-.82-.23-.09-.39-.13-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.07-.25-.13-1.04-.39-1.99-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.28.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.76-1.85-.2-.48-.41-.42-.56-.43-.15 0-.31 0-.48 0-.17 0-.44.06-.66.31-.23.24-.85.82-.85 2.01s.87 2.32.99 2.48c.12.17 1.71 2.61 4.15 3.66.58.25 1.03.4 1.38.51.58.19 1.12.16 1.54.1.47-.07 1.45-.59 1.65-1.17.21-.57.21-1.06.15-1.17-.06-.1-.22-.16-.47-.29z"
                          })
                        }),
                        (0,o.jsx)("span", { children: "RSVP via WhatsApp" })
                      ]
                    }),
                    (0,o.jsxs)("button", {
                      type: "button",
                      onClick: onEmail,
                      className: "press flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-md border border-white/60 px-6 font-body text-[0.72rem] uppercase tracking-[0.28em] text-white shadow-lg transition-all cursor-pointer",
                      style: { background: "linear-gradient(135deg, #8f6720 0%, #b88628 50%, #7a5416 100%)" },
                      children: [
                        (0,o.jsx)("svg", {
                          viewBox: "0 0 24 24",
                          className: "h-4 w-4 fill-current",
                          children: (0,o.jsx)("path", {
                            d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                          })
                        }),
                        (0,o.jsx)("span", { children: "RSVP via Email (" + targetEmail + ")" })
                      ]
                    })
                  ]
                }),
                statusMsg && (0,o.jsx)("p", {
                  role: "status",
                  className: "mt-4 text-center font-body text-[0.82rem] text-[#ffd875] bg-[#422908]/90 p-2.5 rounded border border-[#ffd875]/40",
                  children: statusMsg
                }),
                (0,o.jsxs)("div", {
                  className: "mt-6 pt-5 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left",
                  children: [
                    (0,o.jsxs)("div", {
                      className: "text-[0.66rem] uppercase tracking-[0.2em] text-white/70",
                      children: [
                        (0,o.jsx)("span", { children: "Logged responses: " }),
                        (0,o.jsx)("strong", { className: "text-[#ffd875]", children: totalSaved })
                      ]
                    }),
                    (0,o.jsxs)("button", {
                      type: "button",
                      onClick: onDownloadExcel,
                      className: "press inline-flex items-center gap-1.5 rounded border border-white/40 bg-[#342008]/80 px-3.5 py-1.5 text-[0.62rem] uppercase tracking-[0.22em] text-white hover:border-[#ffd875] cursor-pointer",
                      title: "Download all RSVP entries as an Excel spreadsheet (.csv)",
                      children: [
                        (0,o.jsx)("svg", {
                          viewBox: "0 0 24 24",
                          className: "h-3.5 w-3.5 fill-current text-[#ffd875]",
                          children: (0,o.jsx)("path", {
                            d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
                          })
                        }),
                        (0,o.jsx)("span", { children: "Download as Excel File" })
                      ]
                    })
                  ]
                })
              ]
            })
          })
        ]
      })
    ]
  });
}

function O(){let[e,t]=(0,a.useState)(`cover`),[r,c]=(0,a.useState)(!1),[l,f]=(0,a.useState)(!1),[h,g]=(0,a.useState)(!1),[x,w]=(0,a.useState)(!1),[musicOn,setMusicOn]=(0,a.useState)(!1),O=(0,a.useRef)(null),k=(0,a.useRef)(null),audioRef=(0,a.useRef)(null),A=u(.16);let startMusic=(0,a.useCallback)(()=>{if(audioRef.current){audioRef.current.play().then(()=>{setMusicOn(!0)}).catch(()=>{})}},[]);let toggleMusic=(0,a.useCallback)(()=>{if(!audioRef.current)return;if(audioRef.current.paused){audioRef.current.play().then(()=>setMusicOn(!0)).catch(()=>{})}else{audioRef.current.pause();setMusicOn(!1)}},[]);let j=(0,a.useCallback)(()=>{t(`intro`),f(!0),audioRef.current&&(audioRef.current.load&&audioRef.current.load()),O.current&&(O.current.currentTime=0,O.current.play().catch(()=>{O.current&&(O.current.muted=!0,w(!0),O.current.play().catch(()=>{}))}))},[startMusic]),M=(0,a.useCallback)(()=>{c(!0)},[]),N=(0,a.useCallback)(()=>{t(`couple`),g(!0),k.current&&(k.current.currentTime=0,k.current.play().catch(()=>{k.current&&(k.current.muted=!0,w(!0),k.current.play().catch(()=>{}))})),setTimeout(()=>{startMusic()},1500)},[startMusic]),P=(0,a.useCallback)(()=>{f(!1)},[]),F=(0,a.useCallback)(()=>{t(`content`),g(!1);startMusic()},[startMusic]),I=(0,a.useCallback)(()=>{startMusic();e===`intro`?N():e===`couple`&&F()},[e,N,F,startMusic]),L=(0,a.useCallback)(()=>{w(e=>{let t=!e;return O.current&&(O.current.muted=t),k.current&&(k.current.muted=t),t})},[]);(0,a.useEffect)(()=>(document.body.style.overflow=r?``:`hidden`,()=>{document.body.style.overflow=``}),[r]);let R=(0,a.useCallback)(()=>{let e=new Blob([i()],{type:`text/calendar;charset=utf-8`}),t=URL.createObjectURL(e),r=document.createElement(`a`);r.href=t,r.download=`${(n.bride||'tasneem').toLowerCase()}-weds-${(n.groom||'mohammed').toLowerCase()}-darees.ics`,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(t),1e3)},[]),z=e===`content`,B=e===`couple`||e===`content`;return(0,o.jsxs)(`main`,{className:`relative min-h-screen overflow-x-hidden`,style:{background:`var(--grad-hall)`},children:[(0,o.jsx)(`audio`,{ref:audioRef,src:U_AUDIO,loop:!0,preload:`auto`}),(0,o.jsx)(v,{}),z&&(0,o.jsx)(_,{}),(0,o.jsx)(D,{open:r,onOpen:j}),(0,o.jsxs)(`button`,{type:`button`,onClick:toggleMusic,className:`floating-music-btn ${musicOn?`is-playing`:``}`,title:musicOn?`Pause music`:`Play music`,"aria-label":`Toggle background music`,children:[(0,o.jsx)(`span`,{className:`floating-music-icon`,children:musicOn?(0,o.jsx)(`svg`,{viewBox:`0 0 24 24`,className:`h-4 w-4 fill-current`,children:(0,o.jsx)(`path`,{d:`M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z`})}):(0,o.jsx)(`svg`,{viewBox:`0 0 24 24`,className:`h-4 w-4 fill-current`,children:(0,o.jsx)(`path`,{d:`M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 7h4V3h-6v2.18l2 2z`})})}),(0,o.jsxs)(`div`,{className:`floating-music-text`,children:[(0,o.jsx)(`span`,{className:`floating-music-title`,children:n.media?.songTitle||`Mast Magan (Instrumental)`}),(0,o.jsx)(`span`,{className:`floating-music-sub`,children:musicOn?`Playing`:`Play Music`})]})]}),(0,o.jsxs)(`section`,{className:`relative flex min-h-[100svh] flex-col justify-start overflow-hidden bg-[#150e04]`,children:[(0,o.jsx)(`img`,{src:b,alt:`Golden reception hall with illuminated arches and cascading light`,fetchPriority:`high`,className:`absolute inset-0 h-full w-full object-cover object-bottom`}),(0,o.jsx)(`video`,{ref:k,src:C,playsInline:!0,muted:!0,preload:`auto`,onPlaying:P,onEnded:F,className:`absolute inset-0 h-full w-full object-cover z-10 transition-opacity duration-700 ${h?`opacity-100`:`opacity-0 pointer-events-none`}`}),(0,o.jsx)(`video`,{ref:O,src:S,playsInline:!0,muted:!0,preload:`auto`,onPlaying:M,onEnded:N,className:`absolute inset-0 h-full w-full object-cover z-20 transition-opacity duration-700 ${l?`opacity-100`:`opacity-0 pointer-events-none`}`}),(0,o.jsx)(`div`,{className:`absolute inset-0 pointer-events-none z-15 transition-opacity duration-1000 ${B?`opacity-100`:`opacity-0`}`,style:{background:`linear-gradient(180deg, rgba(85,58,15,0.75) 0%, rgba(120,85,25,0.3) 45%, rgba(85,58,15,0.1) 65%, rgba(85,58,15,0.6) 100%)`}}),B&&(0,o.jsx)(s,{}),(e===`intro`||e===`couple`)&&(0,o.jsxs)(`div`,{className:`absolute top-4 right-4 z-30 flex items-center gap-2`,children:[(0,o.jsx)(`button`,{type:`button`,onClick:L,className:`press flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-[#422c0e]/85 text-white shadow-lg backdrop-blur-md cursor-pointer`,title:x?`Unmute sound`:`Mute sound`,children:x?(0,o.jsx)(`svg`,{viewBox:`0 0 24 24`,className:`h-4 w-4 fill-current`,children:(0,o.jsx)(`path`,{d:`M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z`})}):(0,o.jsx)(`svg`,{viewBox:`0 0 24 24`,className:`h-4 w-4 fill-current`,children:(0,o.jsx)(`path`,{d:`M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z`})})}),(0,o.jsxs)(`button`,{type:`button`,onClick:I,className:`press flex items-center gap-1.5 rounded-full border border-white/60 bg-[#422c0e]/85 px-3.5 py-1.5 text-[0.62rem] uppercase tracking-[0.24em] text-white shadow-lg backdrop-blur-md cursor-pointer hover:border-white`,children:[(0,o.jsx)(`span`,{children:`Skip`}),(0,o.jsx)(`span`,{className:`text-[0.7rem]`,children:`▶▶`})]})]}),(0,o.jsxs)(`div`,{className:`relative z-20 px-6 text-center transition-opacity duration-700 ${B?`opacity-100`:`opacity-0 pointer-events-none`}`,style:{paddingTop:`calc(env(safe-area-inset-top) + 10svh)`},children:[(0,o.jsx)(`p`,{className:`font-body text-[0.58rem] uppercase tracking-[0.42em] text-white reveal ${B?`reveal-on`:``}`,style:{transitionDelay:`300ms`},children:n.kicker||`Darees Mubarak`}),(0,o.jsxs)(`h1`,{className:`mt-5 font-display hero-names text-[clamp(3rem,17vw,5rem)] font-light leading-[0.95] gold-text reveal ${B?`reveal-on`:``}`,style:{transitionDelay:`900ms`},children:[n.groom||`Mohammed`,(0,o.jsx)(`span`,{className:`block font-title text-[0.32em] tracking-[0.3em] text-white my-3`,children:`&`}),n.bride||`Tasneem`]}),(0,o.jsxs)(`div`,{className:`reveal ${B?`reveal-on`:``}`,style:{transitionDelay:`1200ms`},children:[(0,o.jsx)(E,{className:`mt-6`,width:200}),(0,o.jsx)(`p`,{className:`mt-4 font-title text-[0.82rem] tracking-[0.36em] text-white`,children:n.shortDate})]}),(0,o.jsx)(`p`,{className:`mx-auto mt-5 max-w-[19rem] font-display text-[1.02rem] italic leading-relaxed text-white reveal ${B?`reveal-on`:``}`,style:{transitionDelay:`1500ms`},children:n.invitationLine})]}),(0,o.jsx)(`div`,{ref:A,"aria-hidden":!0,className:`pointer-events-none absolute -bottom-10 left-1/2 h-56 w-[130%] -translate-x-1/2 rounded-[50%]`,style:{background:`radial-gradient(ellipse at center, rgba(255,235,175,0.4), transparent 70%)`}})]}),(0,o.jsx)(`div`,{id:`story`,children:(0,o.jsx)(p,{countdownTarget:n.countdownTarget,dateLabel:n.dateLabel})}),(0,o.jsx)(`div`,{id:`celebrations`,children:(0,o.jsx)(m,{})}),(0,o.jsxs)(`section`,{id:`venue`,className:`relative px-6 py-20`,"aria-labelledby":`venue-title`,children:[(0,o.jsx)(y,{}),(0,o.jsxs)(`div`,{className:`mx-auto max-w-[34rem] text-center`,children:[(0,o.jsx)(d,{children:(0,o.jsx)(`h3`,{id:`venue-title`,className:`font-title text-[0.66rem] uppercase tracking-[0.42em] text-white`,children:`The Venue`})}),(0,o.jsxs)(d,{delay:120,children:[(0,o.jsx)(`p`,{className:`mt-5 font-display text-[clamp(1.5rem,6.4vw,1.9rem)] font-light text-white`,children:n.venue.name}),(0,o.jsx)(`p`,{className:`mx-auto mt-3 max-w-[22rem] text-[0.92rem] font-light leading-relaxed text-white`,children:n.venue.address}),(0,o.jsx)(`p`,{className:`mt-2 text-[0.72rem] uppercase tracking-[0.26em] text-white/90`,children:n.venue.hint})]}),(0,o.jsx)(d,{delay:220,className:`mt-8`,children:(0,o.jsx)(`div`,{className:`overflow-hidden rounded-[2px] border border-white/40 shadow-[var(--shadow-warm)]`,children:(0,o.jsx)(`iframe`,{title:`Map of ${n.venue.name}`,src:n.venue.mapEmbed,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`,className:`h-52 w-full contrast-[1.05]`})})}),(0,o.jsxs)(d,{delay:300,className:`mt-7 flex flex-col gap-3`,children:[(0,o.jsx)(`a`,{href:n.venue.mapsUrl,target:`_blank`,rel:`noreferrer`,className:`press inline-flex min-h-[48px] items-center justify-center rounded-[2px] border border-white/60 bg-[#6b4a17]/90 px-6 font-body text-[0.66rem] uppercase tracking-[0.32em] text-white`,children:`Open in Google Maps`}),(0,o.jsx)(`button`,{type:`button`,onClick:R,className:`press inline-flex min-h-[48px] items-center justify-center rounded-[2px] px-6 font-body text-[0.66rem] uppercase tracking-[0.32em] text-white border border-white/60`,style:{background:`linear-gradient(135deg, #8f6720 0%, #b88628 50%, #7a5416 100%)`},children:`Add to Calendar`})]})]})]}),(0,o.jsx)(W_RSVP,{}),(0,o.jsxs)(`footer`,{className:`relative overflow-hidden px-6 pb-16 pt-24 text-center`,style:{background:`linear-gradient(180deg, rgba(100,68,18,0.3) 0%, #704d13 35%, #4a3312 100%)`},children:[(0,o.jsx)(s,{count:14}),(0,o.jsx)(`img`,{src:T,alt:``,"aria-hidden":!0,loading:`lazy`,width:640,height:1280,className:`pointer-events-none absolute -right-14 bottom-0 w-32 opacity-25 mix-blend-screen sm:w-44`}),(0,o.jsxs)(`div`,{className:`relative`,children:[(0,o.jsxs)(d,{children:[(0,o.jsx)(E,{width:190}),(0,o.jsxs)(`p`,{className:`mt-8 font-display text-[clamp(2.3rem,12vw,3.2rem)] font-light leading-tight gold-text`,children:[n.groom||`Mohammed`,` & `,n.bride||`Tasneem`]}),(0,o.jsx)(`p`,{className:`mt-4 font-title text-[0.74rem] tracking-[0.34em] text-white`,children:n.shortDate}),(0,o.jsx)(`p`,{className:`mx-auto mt-6 max-w-[20rem] font-display text-[1.05rem] italic text-white`,children:n.closing}),(0,o.jsx)(`div`,{className:`rule-gold mx-auto mt-10 w-32`})]}),(0,o.jsx)(`a`,{href:`https://www.instagram.com/invitestory.in/`,target:`_blank`,rel:`noreferrer`,className:`mt-8 inline-block font-body text-[0.5rem] uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-white`,children:`Follow @invitestory.in on Instagram`})]})]})]})}export{O as component};