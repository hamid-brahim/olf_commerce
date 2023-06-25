import { AuthConfig } from "@spartacus/core";

export const olfAuthConfig: AuthConfig = {
  authentication: {
    client_id: 'olf-client',
    client_secret: '91da9ae6-9e5e-43ce-abc8-fe370ddc3cbc',
    tokenEndpoint: '/oauth/token',
    revokeEndpoint: '/oauth/revoke',
    loginUrl: '/oauth/authorize',

  }
}