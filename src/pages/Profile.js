import React, {Fragment, useContext, useEffect} from 'react'
import {GithubContext} from '../context/github/githubContext'
import {Link} from 'react-router-dom'
import {Loader} from '../components/Loader'
import {Repos} from '../components/Repos'

export const Profile = ({match}) => {

    const {getUser, getRepos, user, loading, repos} = useContext(GithubContext)

    const userName = match.params.name

    useEffect(() => {
        getUser(userName)
        getRepos(userName)
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <Loader/>
    }

    const {
        name, company, bio, blog, location, login, public_repos,
        avatar_url, html_url, followers, following, public_gists
    } = user

    return (
        <Fragment>
            <Link to="/" className="btn btn-link">Go to Main</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img src={avatar_url} alt={login} style={{width: '150px'}}/>
                            <h1>{name}</h1>
                            {location && <p>Location: {location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <Fragment>
                                    <h3>Bio</h3>
                                    <p>{bio}</p>
                                </Fragment>
                            }
                            <a href={html_url}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="btn btn-primary">Open github profile</a>
                            <ul>
                                {login && <li><strong>Username: </strong>{login}</li>}
                                {company && <li><strong>Company: </strong>{company}</li>}
                                {blog && <li><strong>Website: </strong>{blog}</li>}
                            </ul>
                            <div className="badge badge-primary">Following: {following}</div>
                            <div className="badge badge-dark">Followers: {followers}</div>
                            <div className="badge badge-success">Repos: {public_repos}</div>
                            <div className="badge badge-info">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos}/>
        </Fragment>
    )
}