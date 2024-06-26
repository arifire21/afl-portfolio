import Link from 'next/link';
// import AspectRatio from '@mui/joy/AspectRatio';
import { Button, Card, CardContent, CardActions, Typography, Chip } from '@mui/joy';
import { HiOutlineExternalLink } from "react-icons/hi";

type variantOptions = 'solid' | 'outlined'
type linkOptions = 'github' | 'site' | 'figma' | 'details'

interface ButtonInterface {
  text:string,
  variant: variantOptions,
  link:string,
  linkTo: linkOptions, //kind of like an id, to be part of key
}

interface WorkProps {
    // logo: StaticImageData;
    position: string;
    company: string;
    jobType: string;
    duration: string;
    blurb: string;
    // link: string;
    tools: string[];
    buttons?: ButtonInterface[];
}

interface ProjectProps {
  blurb: string;
  // link: string;
  projectTitle: string;
  subtitle?: string;
  date: string;
  tools: string[];
  buttons?: ButtonInterface[];
}

export function WorkCard({position, company, jobType, duration, blurb, tools, buttons} : WorkProps) {
  return (
    <Card sx={{ width: 350, overflow: 'auto' }} size='lg' invertedColors>
      {/* <AspectRatio minHeight="120px" maxHeight="200px">
        <Image src={logo} alt='card-img' fill={true} style={{objectFit:'contain'}}/>
      </AspectRatio> */}
      <CardContent>
        <Typography level="title-lg">{position}</Typography>
        <Typography level='body-md'>{company}</Typography>
        <Typography level="body-sm">{jobType} | {duration}</Typography>
        <Typography>{blurb}</Typography>

        <div className='chip-container'>
        {tools.map((tool) => (
          <Chip variant='outlined' color='primary' key={`${company}-${tool}`}>{tool}</Chip>
        ))}
        </div>

        <CardActions buttonFlex="0 1 130px">
        {buttons?.map((button) => (
          <Link href={button.link} target='_blank' key={`${company}-${button.linkTo}`}>
            <Button 
              endDecorator={<HiOutlineExternalLink/>}
              variant={button.variant}
              size="md"
              color="primary"
              aria-label={`${company}-${button.linkTo} button`}
              sx={{ fontWeight: 500, width:'max-content', padding:'0.375rem 0.5rem' }}
            >
              {button.text}
            </Button>
          </Link>
        ))}
        </CardActions>
      </CardContent>
    </Card>
  );
}

export function ProjectCard({projectTitle, subtitle, date, blurb, tools, buttons} : ProjectProps) {
  return (
    <Card sx={{ width: 350, overflow: 'auto' }} size='lg' invertedColors>
      <CardContent>
        <Typography level="title-lg">{projectTitle}</Typography>
        <Typography level='body-md'>{subtitle}</Typography>
        <Typography level="body-sm">{date}</Typography>
        <Typography>{blurb}</Typography>

        <div className='chip-container'>
        {tools.map((tool) => (
          <Chip variant='outlined' color='primary' key={`${projectTitle}-${tool}`}>{tool}</Chip>
        ))}
        </div>

        <CardActions buttonFlex="0 1 120px">
        {buttons?.map((button) => (
          <Link href={button.link} target='_blank' key={`${projectTitle}-${button.linkTo}`}>
            <Button
              endDecorator={<HiOutlineExternalLink/>}
              variant={button.variant}
              size="md"
              color="primary"
              aria-label={`${projectTitle}-${button.linkTo} button`}
              sx={{ fontWeight: 500, width:'max-content', padding:'0.375rem 0.5rem' }}
            >
              {button.text}
            </Button>
          </Link>
        ))}
        </CardActions>

      </CardContent>
    </Card>
  );
}