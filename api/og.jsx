import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(request) {
  try {
    const { searchParams } = new URL(request.url);

    // Dynamic query parameters (fallback to defaults)
    const name = searchParams.get('name') || 'Govada Kanshi';
    const role = searchParams.get('role') || 'Full-Stack Software Engineer';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#090a0f',
            padding: '70px 80px',
            fontFamily: 'sans-serif',
            color: 'white',
            border: '8px solid #18181b',
          }}
        >
          {/* Top Header Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '9999px',
                backgroundColor: '#10b981',
              }}
            />
            <span
              style={{
                fontSize: 22,
                color: '#a1a1aa',
                letterSpacing: '3px',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              GK.dev • Systems & Architecture
            </span>
          </div>

          {/* Main Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span
              style={{
                fontSize: 72,
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '-2px',
              }}
            >
              {name}
            </span>
            <span
              style={{
                fontSize: 34,
                fontWeight: 600,
                color: '#38bdf8',
              }}
            >
              {role}
            </span>
            <span
              style={{
                fontSize: 22,
                color: '#71717a',
                maxWidth: '900px',
              }}
            >
              Event-Driven Telemetry Dashboards • Algorithmic Triage Routing • Scalable Cloud APIs
            </span>
          </div>

          {/* Bottom Tech Pills */}
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            {['React', 'Node.js', 'Python', 'PostgreSQL', 'Supabase'].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '8px 22px',
                  backgroundColor: '#18181b',
                  borderRadius: '12px',
                  border: '1px solid #27272a',
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#e4e4e7',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    return new Response(`Failed to generate the image: ${error.message}`, {
      status: 500,
    });
  }
}