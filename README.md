# Quickly deploy Whereby to your domain
## Summary
We've put together a simple tool to make deploying Whereby's Pre-built experience on your site even easier. It's recommended that you use a dedicated domain or subdomain. You'll then be able to use the unique roomName's that are returned from our API.
Example API response:
```json
{
    "startDate": "2024-11-15T16:11:33.568Z",
    "endDate": "2024-11-29T16:11:33.044Z",
    "roomName": "/your-url-c4jx6g",
    "roomUrl": "https://your-account.whereby.com/your-url-c4jx6g",
    "meetingId": "93259794"
}
```
You can then use the roomName from above as a path on the domain you've deployed our webapp to:
```https://video.yoursite.com/your-url-c4jx6g```

## Deploy the tool
1. Go to our webapp repo and fork for your own customizations and website: ​https://github.com/whereby/embed-wrapper​

1. Deploy the app to your favourite hosting provider (e.g. [Netlify](www.netlify.com) or [Vercel](www.vercel.com))

1. In `assets/index.js` the roomUrl variable to include your Whereby subdomain
```typescript
const roomUrl = new URL("https://your-account.whereby.com")
```

In the same file, you can choose to manage the room features available as attributes by using the setAttribute method
```typescript
whereby.setAttribute("minimal", true)
whereby.setAttribute("screenshare", false)
whereby.setAttribute("background", false)
```
