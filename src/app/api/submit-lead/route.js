export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      mobile,
      course,
      utm_medium,
      utm_campaign,
    } = body;

    let program = "Unknown";
    if (course === "MBA") program = "MBA";
    else if (course === "PGDM") program = "PGDM";

    const payload = {
      name,
      email,
      country_dial_code: "+91",
      source: "BrandShow",
      medium: utm_medium,
      mobile,
      campus: program,
      fieldmeetingid: "",
      fieldmeetingwith: "",
      campaign: utm_campaign,
    };

    const response = await fetch("https://api.nopaperforms.io/lead/v1/create", {
      method: "POST",
      headers: {
        "secret-key": "4787ca218349ed1ca1fe4ac7117fc5e3",
        "access-key": "7055d8cf3cbf40e989d3ebbfe60f9ded",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result?.message === "Lead has been created successfully.") {
      return new Response(JSON.stringify({ status: "success" }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: result?.message }), { status: 400 });
    }

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
