import React from 'react';
import ApartmentRounded from '@mui/icons-material/ApartmentRounded';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import EngineeringRounded from '@mui/icons-material/EngineeringRounded';
import FactCheckRounded from '@mui/icons-material/FactCheckRounded';
import PlaceRounded from '@mui/icons-material/PlaceRounded';
import PrecisionManufacturingRounded from '@mui/icons-material/PrecisionManufacturingRounded';
import ScienceRounded from '@mui/icons-material/ScienceRounded';
import CallRounded from '@mui/icons-material/CallRounded';
import EmailRounded from '@mui/icons-material/EmailRounded';
import WhatsApp from '@mui/icons-material/WhatsApp';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { SectionTitle } from './components/SectionTitle';
import { siteContent } from './content/siteContent';

const logoSrc = `${import.meta.env.BASE_URL}logo-jocaval.svg`;

const serviceIcons = [
  <EngineeringRounded fontSize="large" />,
  <ScienceRounded fontSize="large" />,
  <FactCheckRounded fontSize="large" />,
  <ApartmentRounded fontSize="large" />,
  <PrecisionManufacturingRounded fontSize="large" />,
  <PlaceRounded fontSize="large" />,
];

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

function App() {
  return (
    <Box>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(13, 59, 102, 0.08)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', gap: 2, py: 1 }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  width: { xs: 190, sm: 230, md: 270 },
                  height: { xs: 54, md: 66 },
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box
                  component="img"
                  src={logoSrc}
                  alt={`Logo ${siteContent.shortName}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.1 }}>
                  {siteContent.companyName}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {siteContent.companyType}
                </Typography>
              </Box>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  underline="none"
                  color="text.primary"
                  sx={{ fontWeight: 600 }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>

            <Button variant="contained" color="primary" href="#contacto">
              Contáctanos
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        id="inicio"
        sx={{
          background:
            'radial-gradient(circle at top left, rgba(244,162,97,0.22), transparent 28%), linear-gradient(135deg, #07243e 0%, #0d3b66 55%, #1b5f99 100%)',
          color: 'white',
          pt: { xs: 10, md: 14 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={3}>
                <Chip
                  label={siteContent.tagLine}
                  sx={{
                    alignSelf: 'flex-start',
                    bgcolor: 'rgba(255,255,255,0.12)',
                    color: 'white',
                    borderRadius: 999,
                  }}
                />
                <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4.8rem' } }}>
                  {siteContent.heroTitle}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.12rem', maxWidth: 680 }}
                >
                  {siteContent.heroDescription}
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    href={siteContent.heroPrimaryAction.href}
                    endIcon={<ArrowForwardRounded />}
                  >
                    {siteContent.heroPrimaryAction.label}
                  </Button>
                  <Button
                    variant="outlined"
                    href={siteContent.heroSecondaryAction.href}
                    sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.34)' }}
                  >
                    {siteContent.heroSecondaryAction.label}
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card
                sx={{
                  bgcolor: 'rgba(255,255,255,0.08)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: 'none',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h3" sx={{ mb: 2 }}>
                    Datos corporativos clave
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.76)', mb: 3 }}>
                    La pagina esta pensada para mostrar de forma rapida el nombre comercial, el RUC,
                    la fecha de inicio y la ubicacion del negocio.
                  </Typography>
                  <Stack spacing={2.5}>
                    {siteContent.heroStats.map((stat) => (
                      <Box key={stat.label}>
                        <Typography variant="h4" sx={{ fontFamily: '"Barlow", sans-serif' }}>
                          {stat.value}
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.72)' }}>
                          {stat.label}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack spacing={{ xs: 8, md: 12 }}>
          <Box id="nosotros">
            <Grid container spacing={4} alignItems="stretch">
              <Grid item xs={12} md={6}>
                <SectionTitle
                  eyebrow="NOSOTROS"
                  title={`Presentacion corporativa de ${siteContent.shortName}`}
                  description={siteContent.overview}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                      {siteContent.about}
                    </Typography>
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      {siteContent.missionVision.map((item) => (
                        <Grid item xs={12} sm={6} key={item.title}>
                          <Box
                            sx={{
                              height: '100%',
                              p: 2.5,
                              borderRadius: 3,
                              bgcolor: 'rgba(13,59,102,0.05)',
                              border: '1px solid rgba(13,59,102,0.08)',
                            }}
                          >
                            <Typography variant="h6" sx={{ mb: 1 }}>
                              {item.title}
                            </Typography>
                            <Typography color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                              {item.description}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                    <Stack spacing={1.5}>
                      {siteContent.highlights.map((item) => (
                        <Chip
                          key={item}
                          label={item}
                          sx={{
                            justifyContent: 'flex-start',
                            bgcolor: 'rgba(13,59,102,0.06)',
                            color: 'text.primary',
                            fontWeight: 600,
                            px: 1,
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          <Box>
            <SectionTitle
              eyebrow="POLÍTICAS"
              title="Gestion, cumplimiento y datos institucionales"
              description="Jocaval presenta informacion corporativa clave junto a sistemas de gestion relevantes para seguridad, salud e integridad empresarial."
              align="center"
            />
            <Grid container spacing={3} sx={{ mt: 1 }}>
              {siteContent.institutionalCards.map((card) => (
                <Grid item key={card.title} xs={12} sm={6} md={3}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 3.5 }}>
                      <Typography variant="h6" sx={{ mb: 1.5 }}>
                        {card.title}
                      </Typography>
                      <Typography color="text.secondary">{card.description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box id="servicios">
            <SectionTitle
              eyebrow="SERVICIOS"
              title="Servicios y enfoque comercial"
              description="La estructura mantiene una presentacion sencilla del mismo rubro y deja el contenido listo para seguir personalizandolo."
            />
            <Grid container spacing={3} sx={{ mt: 1 }}>
              {siteContent.services.map((service, index) => (
                <Grid item key={service.title} xs={12} md={6}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 4 }}>
                      <Stack direction="row" spacing={2} alignItems="flex-start">
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: '18px',
                            bgcolor: 'rgba(13,59,102,0.08)',
                            color: 'primary.main',
                            display: 'grid',
                            placeItems: 'center',
                            flexShrink: 0,
                          }}
                        >
                          {serviceIcons[index]}
                        </Box>
                        <Box>
                          <Typography variant="h5" sx={{ mb: 1 }}>
                            {service.title}
                          </Typography>
                          <Typography color="text.secondary">{service.description}</Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box>
            <SectionTitle
              eyebrow="CLIENTES"
              title="Espacio para tipos de clientes o aliados"
              description="Si luego tienes logos reales, esta grilla se puede reemplazar facilmente sin tocar la estructura general."
              align="center"
            />
            <Grid container spacing={2.5} sx={{ mt: 1 }}>
              {siteContent.clients.map((client) => (
                <Grid item key={client} xs={6} md={4}>
                  <Card>
                    <CardContent
                      sx={{
                        minHeight: 110,
                        display: 'grid',
                        placeItems: 'center',
                        textAlign: 'center',
                        p: 3,
                      }}
                    >
                      <Typography variant="h6">{client}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>

      <Box
        id="contacto"
        sx={{
          py: { xs: 8, md: 10 },
          background:
            'linear-gradient(180deg, rgba(13,59,102,0.02) 0%, rgba(13,59,102,0.08) 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Card>
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={7}>
                  <SectionTitle
                    eyebrow="CONTACTO"
                    title="Contacto e informacion legal"
                    description="Ya reemplace el nombre, RUC y direccion. Los telefonos y correos siguen listos para que me pases los datos reales cuando quieras."
                  />
                  <Stack spacing={2.2} sx={{ mt: 3 }}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <CallRounded color="primary" />
                      <Typography>{siteContent.contact.phones.join(' - ')}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <EmailRounded color="primary" />
                      <Typography>{siteContent.contact.emails.join(' / ')}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <PlaceRounded color="primary" />
                      <Typography>{siteContent.contact.address}</Typography>
                    </Stack>
                    <Typography color="text.secondary">RUC: {siteContent.contact.ruc}</Typography>
                    <Typography color="text.secondary">Razon social: {siteContent.legalName}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Card
                    sx={{
                      height: '100%',
                      bgcolor: 'primary.main',
                      color: 'white',
                      boxShadow: 'none',
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: 280,
                      }}
                    >
                      <Box>
                        <Typography variant="h4" sx={{ mb: 1.5 }}>
                          Presentacion lista para seguir afinando
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.76)' }}>
                          Cuando me pases telefonos, correos, logo o fotos, te la dejo mucho mas
                          cercana a una pagina final de empresa.
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<WhatsApp />}
                        href="https://wa.me/51978360036"
                      >
                        Escribir por WhatsApp
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Divider />
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          spacing={2}
          sx={{ py: 3.5 }}
        >
          <Typography color="text.secondary">
            © 2026 {siteContent.companyName}. {siteContent.footerText}
          </Typography>
          <Typography color="text.secondary">
            Textos editables en <code>src/content/siteContent.js</code>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
