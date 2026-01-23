"use client";

// ✅ Use this when you DO NOT redirect (your current form)
export function submitLeadConversion() {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
            send_to: "AW-17822921162/rENqCIfysNUbEMrj0LJC",
            value: 1.0,
            currency: "INR",
        });
    }
}

// ✅ Use this ONLY if you want redirect after conversion
export function gtagReportConversion(url) {
    if (typeof window === "undefined" || !window.gtag) return false;

    const callback = () => {
        if (url) window.location.href = url;
    };

    window.gtag("event", "conversion", {
        send_to: "AW-17822921162/rENqCIfysNUbEMrj0LJC",
        value: 1.0,
        currency: "INR",
        event_callback: callback,
    });

    return false;
}
