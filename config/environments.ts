export type Environment = 'mx' | 'ar';

interface EnvironmentConfig {
    baseUrl: string;
    country: string;
    auth: {
        basic: {
            username: string;
            password: string;
        };
        patient: {
            email: string;
            password: string;
        };
    };
}

export const environments: Record<Environment, EnvironmentConfig> = {
    mx: {
        baseUrl: 'https://staging.topdoctors.mx',
        country: 'México',
        auth: {
            basic: {
                username: 'qauser',
                password: 'QaTemporal2025#'
            },
            patient: {
                email: 'usuariopaciente@pruebaqa.com',
                password: '123456Aa'
            }
        }
    },
    ar: {
        baseUrl: 'https://staging.topdoctors.com.ar',
        country: 'Argentina',
        auth: {
            basic: {
                username: 'qauser',
                password: 'QaTemporal2025#'
            },
            patient: {
                email: 'usuariopaciente@pruebaqa.com',
                password: '123456Aa'
            }
        }
    }
};

export const getEnvironmentConfig = (env: Environment): EnvironmentConfig => {
    return environments[env];
};
