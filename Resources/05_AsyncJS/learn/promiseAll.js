async function allSettledDemo() {
    const GITHUB_BASE_URL = "http://api.github.com";

    let elieP = fetch(`${GITHUB_BASE_URL}/users/elie`);

    let joelP = fetch(`${GITHUB_BASE_URL}/users/joelburton`);

    let badUrl = fetch("http://definitelynotarealsite.com");

    let coltP = fetch(`${GITHUB_BASE_URL}/users/colt`);

    let anotherBadUrl = fetch("http://definitelynotarealsite.com");

    let resutls = await Promise.allSettled([
        elieP,
        joelP,
        badUrl,
        coltP,
        another

    ]);

    console.log(resutls);
}

