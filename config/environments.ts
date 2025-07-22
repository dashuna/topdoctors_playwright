type Environment = 'mx' | 'ar';

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

const environments: Record<Environment, EnvironmentConfig> = {
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

// Obtenemos el entorno de la variable de entorno o usamos 'mx' por defecto
const ENV = (process.env.COUNTRY_ENV || 'mx') as Environment;
const environment = environments[ENV];

if (!environment) {
    throw new Error(`Environment "${ENV}" is not supported. Available environments: ${Object.keys(environments).join(', ')}`);
}

export default environment;