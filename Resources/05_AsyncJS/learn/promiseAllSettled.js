async function allSettledDemo() {
    const GITHUB_BASE_URL = "http://api.github.com";

    let elieP = fetch(`${GITHUB_BASE_URL}/users/elie`);

    let joelP = fetch(`${GITHUB_BASE_URL}/users/joelburton`);

    let badUrl = fetch("http://definitelynotarealsite.com");

    let coltP = fetch(`${GITHUB_BASE_URL}/users/colt`);

    let anotherBadUrl = fetch("http://definitelynotarealsite.com");

    let results = await Promise.allSettled([
        elieP,
        joelP,
        badUrl,
        coltP,
        another

    ]);

    console.log(results)
    const fulfilled = results.filter(r => results.status === 'fulfilled');
    const rejected = resutls.filter((r) => r.status === 'rejected');
    console.log(fulfilled);
    console.log(rejected);
}

allSettledDemo();