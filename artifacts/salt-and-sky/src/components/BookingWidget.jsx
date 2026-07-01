import { useEffect } from "react";

export default function BookingWidget() {
  useEffect(() => {
    if (typeof window !== "undefined" && "Widget" in window) {
      // @ts-expect-error Hostfully widget loaded via external script
      new window.Widget("leadWidget", "130d92d2-903a-4296-acf5-aad48274f284", {
        maximun_availability: "2029-06-30T05:11:34.606Z",
        type: "agency",
        fields: [],
        showAvailability: true,
        lang: "US",
        minStay: true,
        price: true,
        hidePriceWithoutDates: true,
        cc: false,
        emailClient: true,
        saveCookie: true,
        showDynamicMinStay: true,
        backgroundColor: "#FFFFFF",
        buttonSubmit: { backgroundColor: "#6498a3" },
        showPriceDetailsLink: true,
        showGetQuoteLink: false,
        labelColor: "#6997ab",
        showTotalWithoutSD: true,
        redirectURL: false,
        showDiscount: true,
        includeReferrerToRequest: true,
        customDomainName: null,
        source: null,
        aid: "ORB-49587220416635719",
        clickID: null,
        valuesByDefaults: {
          checkIn: { value: "" },
          checkOut: { value: "" },
          guests: { value: "" },
          discountCode: { value: "" },
        },
        pathRoot: "https://platform.hostfully.com/",
      });
    }
  }, []);

  return <div id="leadWidget" />;
}
