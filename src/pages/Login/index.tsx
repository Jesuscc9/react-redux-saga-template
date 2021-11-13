import { Avatar, Grid, TextField, Button } from "@mui/material";
import { useStyles } from "./styles";
import { useFormik } from "formik";

export const Login = () => {
  const styles = useStyles();

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Grid container mt={6} className={styles.mainContainer}>
      <Grid item xs={12}>
        <Avatar
          className={styles.image}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAADZCAMAAADyk+d8AAAAaVBMVEX///8yicgth8dZnNAqhscjhMYdgsX7/f73+/0agcXp8vkmh8elyOXg7Pbt9fqdw+LO4fA4jcrY5/NRmc+Put54rddHlM1rptWvzufA2Ow8j8uHttzI3u+YwOG61evj7vZwqdZiodOAsto023BIAAAPt0lEQVR4nO1dC7OiOgzW0vISEBAQQVH5/z9yQRtEDtAU2qM7c76Zu3d3RqBp07yapJvNH/7whz/84Q9/+MMfPgQ78MMq3yf17Xh/4piWFy8/xW5gfXpwqnANvfJ4KCJq0gaEkieavzPKGIkyI02qOPj0MNfBDr1jtmWMki3ZToBTHR3qyv/0eJfBDi8GNRmdpnFAMDXNKM2vnx63JNzqtjUpjsY3cpmTJaH96eFjEeT3Zk/KUtlRS82i/B+IDU63HVtMJhDbrGz83SI5TrJJpm3kDmMmM81WBjf/a/7eyuKJXzN6z79XHp/uZJTMhi6HZcc68apTGMex7/vNn+Ep35epUThOo2tGHiOsKL9SGlt5Zv4cL2lWrki903WSFy07ri73yHR+TlLDBbf4N2nAwPYiNhhpqyajo4cULtdTaezYD2qpeQ81D10KlhcN1rORoA2VsZwIDc5JRswBJ5MvotWqinc6m8Us0tMyeeJ7xnbAHcS5fcd+PRvmYGtGS8l8wvfu9J2NKS1dZeNdims6GJRp5KtHZcXJYDvQwvuwft1v36wExmpFwtKuDk6fVsIOnxTD8aG/pQjbXlQq+/D4ZlMSVn5qWa2L80Zn5Km2Vv2byfocU3xGCscHs0+nno3k3/pGNDGTD5j+Oe0NgUUXXUOIj/0dwozf3q32rce5hNU4B9oK/Mq7lOkDycU7+RgxfT705DAl+bqRSyLOXgtKTNw8+3lqRI07Q9kzkMQa0MKoK+EsWd6u/7n6FwVT1bPYKPXED1jn5LAzR1yWNqhCsotoqtxbb1mZ8WtmRPLaOcS5iz97vWQ/bfc3alm2F+inKnpJYRr9jgy2ji+ZS6l41zRqcejmjFDLHIGDZveWlZiVKmpmEBxek4vgo7PhIGMt1DnO05qTHivtlRE0Bb94DZwlItkQH0e882lazXTWafF7voRZKyRqdOhRN3IanQQ/thMiGTvbbfdzk2eXr4ljqUq6fiB8xamZIdIO50y8P4doDPlZaZO/ps48atQ2PULNVGQUJfJ0tqB0dguGUUcr1UdquOum3rkIfhsczHFKxMtqHucmMcg6iUjvKqnrIaavwYiUyzlaEd1m0axguneksqNC8l7wdy9uFMmi0zLO7WaSzm7WuiPVvKmjr4Pb7VEiNFFy+cOnAeh57v3Ja1XVS+Ag6wgtRFZqvm5FH9jN7o9LJwRMkcCQhXWHfUfmN9FGxYq2n9nOrur+xcCKvbgU3kx2IkJX7tEXZlnn0g1ontFlsQduIaaIdUMZ+28OZDs7p0k3pK3Cc/Rz91YmEkZuoYjQ5mPZrHFSw6DoQVlk59p9m4m8JevOJsa9APQ2+60bfEqdAD7AMpnC8MJFIaHbrTMrbWwDpKR4XDiU3dwlop+el5qA4yBsdqu6neYTSg8UTg5/Hb2LLGorU7ZJ+SeN2e+FoM9IocDYDzqPtBAeRSRKebcFm9eWeSeVFDjmR74ZCBNyyNWZHPFiRPPT+9pZIlNciG7W5qXDA8eV2TljoOX8Nw/wTTHHzcON4Is34W9DteLoCbKbtwtcsMjYSv5NuykTa+e7YnH0hGhRK5hftsoqPEm8JtbAuy2IwNCGxSBrTCUrA0IFE/v4opYlbb4t8MsCsD/Zihgw+EYCC/QBF5neKg0SCT4OjEfo4vOaQGYL7HXIoweERxPAvwipKXoDwoK2DpqWFBECdMG4cRYahTHwboTgili5efQCE6lKD0Y6bzxOAgwBlKeg1ol5h5B9O4YyF1lKIUjvDPFjy9DGvG2wXvR58KGWLSosqYOZJ1cjoQ2Eoh8CekvM37hTyJhfnzQyL8b99LlzsWRRb8D6qJP2RJOB9ATCJgA9YUrbhDH4uLhTHj02L4CI1ZwPLCh9VAOOH25JbXURwVFKEUKxU/6SOhUiDciDO1eDD96ndCt2PkGhY0z0PsABR7J9qJfSLUEEr2/PRSWCKMUQXBWTAy4SVWkVvTjDG3Sq3EENrJEgYNVhr5lSTP4RGC84tQhIJTlBr5JpZhxjkOZ8umXsfBvkGHZ317q5F+Nkg0uOHvXmte3mD+H7lGpeU4o6D66BE/Fh7qMsx2unFLVMobSdFIC5jD7Y+Q5KN/ywBBM5eAKY10THZXRTKoqacXAnGc++YFjh/YKvkEiN8Qt2ElK+2DzKh1Wmmy/RMpsX+wqPP58IpZm3C+RooxSZuXzhM44Jk2y6s0EZW0O3NYjNT4nBIccVN3KrCqfD3r+gCxgLv4XFXTCc7QvRU+y2fjyjd03x/gl3aHB65gzSReJAR7cnjt5I/OQNdxrFlZI49NjHUSul+LN90DOobCw+aLmTK52BbRljbVPwuUEIa0j6dKSqbxSn5wwgkYTDrR5xQlGz/ty630kFKdxIJ/tKOCdcs2NChPw0khhSGT6WzjCojMjg0RLMie9eRk73HvvkCVQPAU/GisQiCRhdMhXP10mphL6zDvwZoVUFcSfpTBB97Ct31M1tB7F7YoNokW2L4ek7/ZeadG7ki90ZlwukTDZlK9BlJpFMSjZyZ0PMCGCryyf36Io7mHLJN2es7gDDUb66yNdDKSrLoj8M/pwwKY5rXpmYKeCmhVRkCKkD30WEirYf2PcLCm58HU6q7JJubLBmRc/Vy9TpA6mGRZXcpQ2lB6TdDq7skpLzYKde/CJyUAfgvpgwYYcbAMsKi9Rn1C0o8gcjT/Ak5DDJnqHzpw3F/LskE7B8jkEUSoI8V7qsc1isonjvBWlx1CLBSRqrWGgMcqi1CVFJX0MApQJRZi01ewE3hT6NuUCpd4avSA9bUGGwlFJbXfaruBJpFFhK4TOLO/xdVVn6VNrJeGKPXdOV3KusAJVEC9OS0dy7mtLGSVBSPb20MxCWUh4vRR7hjEMFqctrorGyF/TpqjLH02pSl2bUbzpKhZnmYCOt6yoVrgv/UmF/gRnUOBups3tXlv5dDyv0KruvqcbjPorQYkaH1gSw08UczMo1Fe4QYxfG2UrcfkbAo4vMfRqtm+TOPxXtdIg5IHMi5hAbC5bVOa7szgAxB1O0A3hir4pq5I2VR5K7lRWrm87xillx8jMcQC2zOYcIamxnusf0OgoanEJNiPAIysefVaHg3xiyDwvdKWkxfebHisK0+gAS0pR1pPTLQnhZR3tZRaLmixDGFZ4V2kqMpHcE+Z3MENuQuT1WqnqnlOgwLqgjtf0or94xMn82B21bgrLitr4H+QuQpiEePzemloS25xGcvduBmubjYo7nJR3O7pB6odKLODqeFJuzHvasagmsID7n++SBfX721d92xc8Kt4WYTSALRZXw/WVA0TjirPDKI0nCc40RWJ+/ieCCFb2t3bhdKJICLxM2IpREfpCVyeCLYez2Gnt8/o5rsjXbpngKmb61sMxsL8MokLyACll48um9DZ0lv0FEYRv38Nm23JTpQM97v+AMHzAcJfpA2PttpyoJnW3Bi39n0rV5YhnakYNlQpUQBDxohi+5fm/US0xDQcPvU8beXonkFNimuOg/L4VHFPI+YNdDN5SweqUQ9o/O+zspzpIJoIQAF1mE2tMI9eu4GPFBKUtWWD5uOeLrmcIe0JuuMB9TmdsCklBQkUhv4hzc3Ik63E/BTdio/0534u0ElW3YFsbcdETkyFqlM+WiELZNFojhuN5N+bNE3NcVKn2wWRo8NkwK0Q+D2Y6RhO4knbHGvZuk88Eo9fzrurJibLi4Kw0SrImbiUInjYNdh0ilY5/rQhRiY8bsluAdaVH9Ux6AYyiBrL4KCX28hBb1SSiK3Sot5u626N52mCG1a1iA9zhLKFmdYxYffVDaOKWHuppkkLhKMza8kG7yXTPd9iokL/a/zbPF5rKS+tc6iNHeWEsP9T4PfTewHwhc/5xfGiIdxA0evTdNZyhBKQuaeTddLcZMnqQrRejzbeQRZ3B2T1DHMUcCLkJMMjDkRkp1fu1atU0JMRu1R/WA3sdXFQoVJWosX91Fplw3pQ2JpTHeLrIr/b9JECps7VF+ktCJ1vCSDVQAZ2jSMcrz+jruITGSktX1MpMMgHVpRWOSLkRqBH0Y6VUP/UGl83WhHnrkEF1bbYEEfvZL5+Evggh/jpMzor5UJswtxvB2JIh+LkirhzrLH3kAueZKaSQGmcrc/yIL0ougo+mwDcRVbWLrcryphQok6JITbmgPPhDpOlsoSqEfvIaEse18W/kJBFzCvtdj5J9WMC/0Qnqg9mQrLDnAuuobHYGuLr1L0GnOrncwWxap64r5egFxHYUii9HtKxiVbF+6DpBq/uoZEH4ToZ39AH0ZxHVPk4DLGSAP63Vz0Hfgua86e27FRR1g/YKWqr5HHD3x6CMCd+qsyreBorznTRkaO0wvRHtMBvG9dRc6XHd9/v26JW2cmnO3xVbmK3T1L06s/k4VBSAGGDhrM6he9VvRNy7pdtvp99W3mcXgi9LU+Bg1CMg1xBlF15LiWyz7USi5ykxvu2VFQNx+I0ag6qo5jWA3BYT2rrz6Wii58KqF+ousFGOnKl9Ga0sgBVhdCPKCwssSNWCxrzaGUENVvyosLFOdwhcFVQaQ74UjwOVLSSULa/dnUH8nqXIt9HA4fqGuIY7acoEnPntmOgqiUL/0YX8bqUTVDa8/EKhuNrIS2gjt35f7DdBIaEvq9zCwo5PQzfdIYD1S9w3pV+hVgkiBXY3LF3jmtFBYYDiN/OMRJYrJ31aBMPqsCDbTX6tEcz8pgomzvi+BBOrJrHTdoOvuI5ZH9bNbA9GCwTfM+axtHbgag6xc426ox/39LIioLwBGwLqQt2W9afAU7fztIJMdNHwDg/htWQm7n9SWCLuXtxIEwhS0e1gIa2/2l5WwQ65uLH4ZvSluln1oQflw7m8WEzGjRElcxzod6RuddKemBHIFqvciF0JNY3VvBv9SvIs7Yt5+ySqag7UndDCs3e20nFjXy4bFFh+TREME5XagXKmzSytXnt3seG84Aw+CsEy7g4aHXw8PktsWI/fLWYJa28/r7Ec7GmJmCqWcCvgl+VHfQxiL7mUVi60aN/TSjIx0K3FUSnNVcC8jfZ9Is7asOKT7KrzaP9fXDvxznhyzsZ4sbZWYoVhDq0Jj0ThjvmtDLm0Ub1QYx7Qsk0uLpKxv90MUEcoaC3rMXWAs/RI5NIq43k31B2qM9dZip/TRYaZZwxEDvrecmffrprwk7Oq+ZavKTJrJKMpfiZ6sxjU/oopJRxee7rLy/H1SaBLuqdUYckGYhkonuu/D/4jMJxr9mLbUoji5LdjcGYm4+PhbYV+ry72g5kP+jJO4bYtSo0fvq+/UKBKw3LBKUqMwnUdtrdn91/x7lx3r/QlhW/xXsOxrfK6qPPe8PM+rUxi7/92W/MMf/vCHP0jhHxns4ISVlI0LAAAAAElFTkSuQmCC"
        />
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          className={styles.form}
          rowSpacing={2}
          justifyContent="center"
          mt={2}
          p={2}
        >
          <Grid item xs={12}>
            <TextField
              value={values.username}
              onChange={handleChange}
              name="username"
              fullWidth
              label="Usuario"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={values.password}
              onChange={handleChange}
              name="password"
              fullWidth
              label="Contrasena"
              variant="outlined"
            />
          </Grid>
            <Button type="submit" variant="contained" className={styles.button}>
              Iniciar sesion
            </Button>
        </Grid>
      </form>
    </Grid>
  );
};
