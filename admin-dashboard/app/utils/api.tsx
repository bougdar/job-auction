export async function fetchWithAuth(url: string, options: any = {}) {
  let accessToken = localStorage.getItem("accessToken");

  const res = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  if (res.status === 403) {

    const refreshRes = await fetch("http://localhost:5000/api/auth/refresh", {
      method: "POST",
      credentials: "include",
    });

    if (refreshRes.ok) {
      const data = await refreshRes.json();
      localStorage.setItem("accessToken", data.accessToken);

      return fetchWithAuth(url, options);
    } else {
      localStorage.removeItem("accessToken");
      window.location.href = "/login";
    }
  }

  return res;
}
